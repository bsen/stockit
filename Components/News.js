import React, { useEffect, useState } from "react";
import axios from "axios";

const DummyNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://alagaby-dummynews-api.vercel.app/news"
        );
        const newsData = res.data.data;
        setNews(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h4 className="text-2xl font-bold text-black ml-24 max-sm:m-10">
        TOP NEWS INSIGHTS ↘
      </h4>
      {news.length === 0 ? (
        <p className="text-2xl font-thin text-white ml-24">Loading...</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 max-sm:px-6 px-24 py-8 justify-center items-center">
          {news
            .slice()
            .reverse()
            .map((data, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 bg-white border text-black border-neutral-200 p-4 rounded-md shadow-md h-full"
              >
                <div className="flex justify-center">
                  {data.image ? (
                    <img
                      className="h-40 w-40 max-sm:h-16 max-sm:w-16 object-cover rounded-md mb-4 border border-gray-100"
                      src={data.image}
                      alt=" :') "
                    />
                  ) : (
                    <img
                      className="h-40 w-40 max-sm:h-16 max-sm:w-16 object-cover rounded-md mb-4 border border-gray-100"
                      src="/newsLogo.png"
                      alt=" :') "
                    />
                  )}
                </div>

                <div className="flex flex-col justify-center flex-grow">
                  <h6 className="text-md text-black font-semibold mb-2">
                    {data.title}
                  </h6>
                  <p className="text-black">{data.description}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default DummyNews;
