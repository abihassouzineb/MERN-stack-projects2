import { useState, useEffect } from "react";
import { FaLocationArrow, FaPray, FaClock } from "react-icons/fa";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { GiPrayer } from "react-icons/gi";

const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  // Icon mapping for prayer times
  const prayerIcons = {
    Fajr: <FaPray className="text-blue-400" />,
    Sunrise: <WiSunrise className="text-yellow-500 text-xl" />,
    Dhuhr: <FaClock className="text-yellow-600" />,
    Asr: <GiPrayer className="text-orange-500" />,
    Maghrib: <WiSunset className="text-red-500 text-xl" />,
    Isha: <FaPray className="text-indigo-500" />,
    Imsak: <GiPrayer className="text-blue-300" />,
    Midnight: <FaClock className="text-gray-400" />,
  };

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get user's location
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });

            const date = new Date();
            const formattedDate = `${date.getDate()}-${
              date.getMonth() + 1
            }-${date.getFullYear()}`;

            const response = await fetch(
              `https://api.aladhan.com/v1/timings/${formattedDate}?latitude=${latitude}&longitude=${longitude}&method=2`
            );

            if (!response.ok) {
              throw new Error("Failed to fetch prayer times");
            }

            const data = await response.json();
            setPrayerTimes(data.data.timings);
          },
          (error) => {
            console.error("Geolocation error:", error);
            setError(
              "Please enable location services to get accurate prayer times"
            );
          }
        );
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message || "Failed to fetch prayer times");
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  // Filter and order the prayer times we want to display
  const displayPrayers = prayerTimes
    ? [
        { name: "Fajr", time: prayerTimes.Fajr },
        { name: "Sunrise", time: prayerTimes.Sunrise },
        { name: "Dhuhr", time: prayerTimes.Dhuhr },
        { name: "Asr", time: prayerTimes.Asr },
        { name: "Maghrib", time: prayerTimes.Maghrib },
        { name: "Isha", time: prayerTimes.Isha },
      ]
    : [];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-green-500 border-opacity-30">
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-400 flex items-center gap-2">
              <GiPrayer className="text-2xl" />
              Prayer Times
            </h2>
            {location && (
              <div className="flex items-center text-sm text-gray-300">
                <FaLocationArrow className="mr-1" />
                {location.latitude.toFixed(2)}, {location.longitude.toFixed(2)}
              </div>
            )}
          </div>

          {error ? (
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 text-red-200">
              {error}
            </div>
          ) : loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {displayPrayers.map((prayer) => (
                <div
                  key={prayer.name}
                  className="bg-gray-800 bg-opacity-50 rounded-lg p-4 hover:bg-opacity-70 transition-all duration-200 border border-gray-700"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">
                        {prayerIcons[prayer.name] || <FaClock />}
                      </div>
                      <span className="font-semibold text-lg text-green-400">
                        {prayer.name}
                      </span>
                    </div>
                    <span className="font-mono text-lg">{prayer.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 text-sm text-gray-400">
            <p>Calculation Method: Umm Al-Qura University, Makkah</p>
            <p className="mt-1">Times are based on your current location</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimes;
