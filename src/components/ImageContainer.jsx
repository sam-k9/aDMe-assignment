/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const ImageContainer = () => {
  const [imagesList, setImagesList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getImages = async () => {
    const resp = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=15`
    );
    setImagesList([...imagesList, ...resp.data]);
    setLoading(false);
  };

  const handleScroll = async () => {
    try {
      console.log("scroll event");
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImages();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="grid gap-2 p-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {imagesList.map((image) => {
          return (
            <div key={image.id}>
              <img
                src={image.download_url}
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
        {loading && (
          <h1 className="text-center text-xl font-bold text-gray-700">
            Loading...
          </h1>
        )}
      </div>
    </div>
  );
};

export default ImageContainer;
