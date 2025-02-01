/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const YoutubeCloneContext = createContext();

export default function YoutubeCloneProvider({ children }) {
  // Sidebar state and toggle function
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  // State to hold video data
  const [videos, setVideos] = useState([]);
  const [detailedVideos, setDetailedVideos] = useState([]); // For detailed video data

  // Fetch suggested videos
  const fetchSuggestedVideos = async () => {
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/search",
      params: {
        relatedToVideoId: "WyZtV0uj1tE",
        part: "id,snippet",
        type: "video",
        maxResults: "50",
      },
      headers: {
        "x-rapidapi-key": "2d523ddc6cmsh6c0871f466a80c1p1b5c7cjsn93274b49ba8b",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setVideos(response.data.items);
      console.log("Fetched Suggested Videos:", response.data.items);
    } catch (error) {
      console.error("Error fetching suggested videos:", error);
    }
  };

  // Fetch detailed video data
  const fetchSuggestedVideosDetails = async (videoIds) => {
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/videos",
      params: {
        part: "contentDetails,snippet,statistics",
        id: videoIds,
      },
      headers: {
        "x-rapidapi-key": "2d523ddc6cmsh6c0871f466a80c1p1b5c7cjsn93274b49ba8b",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setDetailedVideos(response.data.items);
      console.log("Fetched Detailed Videos:", response.data.items);
    } catch (error) {
      console.error("Error fetching detailed videos:", error);
    }
  };

  // Fetch videos on component mount
  useEffect(() => {
    fetchSuggestedVideos();
  }, []);

  // Fetch detailed video data when `videos` state changes
  useEffect(() => {
    if (videos.length > 0) {
      const ids = videos.map((video) => video.id.videoId).join(",");
      fetchSuggestedVideosDetails(ids);
    }
  }, [videos]);

  // Context values
  const values = {
    isOpen,
    toggleSidebar,
    videos: detailedVideos, // Expose detailed videos in context
  };

  return (
    <YoutubeCloneContext.Provider value={values}>
      {children}
    </YoutubeCloneContext.Provider>
  );
}
