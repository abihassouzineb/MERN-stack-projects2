from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
# getting a surah : https://api.alquran.cloud/v1/surah/:surah_number


@app.get("/")
async def root():
    return {"message": "Hello World"}


# api's used : https://api.quran.com/api/v4/ -  http://api.alquran.cloud/v1/


# getting all the surahs : https://api.alquran.cloud/v1/surah
@app.get("/surahs")
async def get_surahs():
    response: requests.Response = requests.get("http://api.alquran.cloud/v1/surah")
    return response.json()


@app.get("/surah/{surah_number}")
async def get_surah(surah_number: int):
    try:
        response: requests.Response = requests.get(
            f"http://api.alquran.cloud/v1/surah/{surah_number}"
        )
        # getting only the text of each ayah
        ayahs: list = [ayah["text"] for ayah in response.json()["data"]["ayahs"]]
        # replacing \n with a number, that increments with each ayah
        for i, ayah in enumerate(ayahs):
            ayahs[i] = ayah.replace("\n", f" {i+1} ")

        # reversing the list and converting it to a string
        return {"name": response.json()["data"]["name"], "surah": " ".join(ayahs)}
    except Exception as e:
        return {"error": str(e)}


# getting surah in english : https://api.alquran.cloud/v1/surah/:surah_number/en.asad
@app.get("/surah/{surah_number}/en.asad")
async def get_surah_english(surah_number: int):
    try:
        response: requests.Response = requests.get(
            f"http://api.alquran.cloud/v1/surah/{surah_number}/en.asad"
        )

        # getting only the text of each ayah
        ayahs: list = [ayah["text"] for ayah in response.json()["data"]["ayahs"]]

        # reversing the list and converting it to a string
        return {
            "nameInEnglish": response.json()["data"]["englishName"],
            "surah": " ".join(ayahs),
        }
    except Exception as e:
        return {"error": str(e)}


# getting Tafsir of an Ayah : http://api.quran-tafseer.com/tafseer/
@app.get("/tafsir/{surah_number}/{ayah_number}")
async def get_tafsir(surah_number: int, ayah_number: int):
    try:
        response: requests.Response = requests.get(
            f"http://api.quran-tafseer.com/tafseer/1/{surah_number}/{ayah_number}"
        )
        return response.json()
    except Exception as e:
        return {"error": "Surah or Ayah does not exist"}


# get a hadith : https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-abudawud/1035.min.json
@app.get("/hadith/{book}/{hadith_number}")
async def get_hadith(book: str, hadith_number: int):
    try:
        response: requests.Response = requests.get(
            f"https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/{book}/{hadith_number}.min.json"
        )
        return {
            "book": response.json()["metadata"]["name"],
            "hadith": response.json()["hadiths"][0]["text"],
            "hadith_number": hadith_number,
        }
    except Exception as e:
        return {"error": str(e)}


# get all hadith books : https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/info.json
@app.get("/hadith/books")
async def get_hadith_books():
    try:
        response: requests.Response = requests.get(
            "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions.json"
        )

        data = response.json()

        return {"books": [book for book in data]}
    except Exception as e:
        return {"error": str(e)}


# get all the Quran : http://api.alquran.cloud/v1/quran/:edition
@app.get("/quran/{edition}")
async def get_quran(edition: str, page: int = 1, per_page: int = 10):
    """
    Paginate the Quran response and return only the Arabic text in the correct order.
    """
    try:
        response = requests.get(f"http://api.alquran.cloud/v1/quran/{edition}")
        response.raise_for_status()
        data: dict = response.json()

        # Extract all Surahs
        surahs = data["data"]["surahs"]

        # Apply pagination
        total_surahs = len(surahs)
        start = (page - 1) * per_page
        end = start + per_page
        paginated_surahs = surahs[start:end]

        # Extract only the Ayah text and format it
        quran_text = "\n\n".join(
            f"سورة {surah['name']} ({surah['englishName']})\n"
            + " ".join(ayah["text"] for ayah in surah["ayahs"])
            for surah in paginated_surahs
        )

        return {
            "total_surahs": total_surahs,
            "page": page,
            "per_page": per_page,
            "quran_text": quran_text,
        }
    except requests.RequestException as e:
        return {"error": str(e)}


# getting recitation of a Surah : https://quranapi.pages.dev/api/audio/{surah_number}.json
@app.get("/recitation/{surah_number}")
async def get_recitation(surah_number: int):
    try:
        response: requests.Response = requests.get(
            f"https://quranapi.pages.dev/api/audio/{surah_number}.json"
        )
        return response.json()
    except Exception as e:
        return {"error": str(e)}


# getting the recitation of an Ayah : http://api.alquran.cloud/v1/ayah/{surah_number}:{ayah_number}/ar.alafasy
@app.get("/recitation/{surah_number}/{ayah_number}")
async def get_recitation(surah_number: int, ayah_number: int):
    try:
        response: requests.Response = requests.get(
            f"http://api.alquran.cloud/v1/ayah/{surah_number}:{ayah_number}/ar.alafasy"
        )
        print(response)
        return {"audio": response.json()["data"]["audio"]}
    except Exception as e:
        return {"error": str(e)}


@app.get("/quran2/random")
async def get_random_ayah():
    """
    Return a random Ayah from the Quran.
    """
    try:
        url1 = "https://api.quran.com/api/v4/verses/random"
        headers = {"Accept": "application/json"}
        response1 = requests.get(url1, headers=headers)

        # Ensure the response is valid
        if response1.status_code != 200:
            return {"error": "Failed to fetch random Ayah"}

        verse_key = response1.json()["verse"]["verse_key"]
        if not verse_key:
            return {"error": "Verse key not found in response"}

        # Fetch the Ayah details
        url2 = f"https://api.alquran.cloud/v1/ayah/{verse_key}"
        response2 = requests.get(url2)

        if response2.status_code != 200:
            return {"error": "Failed to fetch Ayah details"}

        return response2.json()

    except Exception as e:
        return {"error": str(e)}


# getting a single ayah : http://api.alquran.cloud/v1/ayah/:verse_key/ar.alafasy / http://api.alquran.cloud/v1/ayah/:surah_number/en.asad
@app.get("/quran2/{verse_key}")
async def get_ayah(verse_key: str):
    try:
        response: requests.Response = requests.get(
            f"http://api.alquran.cloud/v1/ayah/{verse_key}/ar.alafasy"
        )
        return response.json()
    except Exception as e:
        return {"error": str(e)}


# getting a single ayah in english : http://api.alquran.cloud/v1/ayah/:verse_key/en.asad
@app.get("/quran2/{verse_key}/en.asad")
async def get_ayah(verse_key: str):
    try:
        response: requests.Response = requests.get(
            f"http://api.alquran.cloud/v1/ayah/{verse_key}/en.asad"
        )
        return response.json()
    except Exception as e:
        return {"error": str(e)}


# getting number of ayahs in a Surah
@app.get("/quran2/surah/{surah_number}")
async def get_number_of_verses(surah_number: int):
    try:
        response: requests.Response = requests.get(
            f"http://api.alquran.cloud/v1/surah/{surah_number}/ar.alafasy"
        )
        # getting number of ayahs in the surah
        return {"number_of_verses": response.json()["data"]["numberOfAyahs"]}
    except Exception as e:
        return {"error": str(e)}


import uvicorn

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=3000)
