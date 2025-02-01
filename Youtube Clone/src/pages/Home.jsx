import { useContext } from "react";
import { YoutubeCloneContext } from "../context/YoutubeCloneContext";
import SideBar from "../components/SideBar.jsx";

/**
 * Renders a section displaying a grid of YouTube video thumbnails and titles.
 * Uses the `YoutubeCloneContext` to access the list of videos.
 * If videos are available, displays each video with its thumbnail, title, channel name, and channel photo.
 * If no videos are available, shows a loading message.
 */

function getTimeAgo(publishedDate) {
  const publishedTime = new Date(publishedDate).getTime();
  const currentTime = Date.now();
  const difference = currentTime - publishedTime;

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
}

export default function Home() {
  const { isOpen, videos } = useContext(YoutubeCloneContext);

  return (
    <section className="flex flex-row mt-16 justify-between items-center">
      <SideBar />
      <div
        className={`grid grid-cols-1 ${
          isOpen ? "ml-[210px] w-10/12" : ""
        } sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 py-4 pl-20 pr-3`}
      >
        {videos ? (
          videos.map((video) => (
            <div
              key={video.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={video.snippet.thumbnails.high.url} // Use high-quality thumbnails
                alt={video.snippet.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-sm line-clamp-2">
                  {video.snippet.title}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src={video.channelPhoto} // Channel profile picture
                    alt={video.snippet.channelTitle}
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="text-xs text-gray-500">
                    {video.snippet.channelTitle}
                  </p>
                </div>
                <div className="flex flex-row justify-center items-start gap-3 mt-3">
                  <p>
                    {video.statistics.viewCount >= 1_000_000_000
                      ? `${(video.statistics.viewCount / 1_000_000_000).toFixed(
                          1
                        )}B views`
                      : video.statistics.viewCount >= 1_000_000
                      ? `${(video.statistics.viewCount / 1_000_000).toFixed(
                          1
                        )}M views`
                      : video.statistics.viewCount >= 1_000
                      ? `${(video.statistics.viewCount / 1_000).toFixed(
                          1
                        )}K views`
                      : `${video.statistics.viewCount} views`}
                  </p>

                  <p>|</p>

                  <p>
                    {video.snippet.publishedAt
                      ? `${getTimeAgo(video.snippet.publishedAt)}`
                      : "Unknown"}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg">
            Loading...
          </p>
        )}
      </div>
    </section>
  );
}
