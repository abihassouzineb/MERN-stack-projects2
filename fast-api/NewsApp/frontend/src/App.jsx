/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";

export default function App() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews("javascript");  // Fetch default category news on initial load
  }, []);

  const fetchNews = (title) => {
    fetch(`http://127.0.0.1:8000/news/${title}`)
      .then((response) => response.json())
      .then((data) => {
        // setting the news array from 0 to 10
        setNews(data.articles.slice(0, 20));
        console.log(data);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="bg-gray-800 h-full px-10 text-white">
      <NavBar onCategoryChange={fetchNews} />

      <div className="flex flex-col justify-center items-center mt-20 pt-5 gap-y-8">
        <h1 className="text-3xl font-bold border-b-4 border-red-500 pb-2">Top Headlines</h1>
        {error ? (
          <p className="text-red-600 font-semibold bg-red-100 p-4 rounded-md">{error}</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article) => (
              <li
                key={article.url}
                className="flex flex-col gap-y-2 p-4 border border-red-500 rounded-lg text-black shadow-md bg-white ring-1 ring-red-200"
              >
                <img src={article.urlToImage || "https://via.placeholder.com/150"} alt={article.title} />
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-gray-600">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
