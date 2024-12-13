from fastapi import FastAPI, Path
from fastapi.middleware.cors import CORSMiddleware
from newsapi import NewsApiClient
from pydantic import BaseModel

app = FastAPI()

class Article(BaseModel):
    title: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/news/{title}")
async def get_news(title: str = Path(..., min_length=1)):
    newsapi = NewsApiClient(api_key="37a5316155e14dc7b2c97f1aeac8cc56")
    news = newsapi.get_everything(q=title, language='en')
    return news

import uvicorn

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)


# example : http://127.0.0.1:8000/news/tesla