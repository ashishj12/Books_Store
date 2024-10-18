import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BookCard from "../books/BookCard";

const Recommended = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("books.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => {
        console.error("Error fetching books:", error);
        setError("Could not load books. Please try again later.");
      });
  }, []);

  // Slicing the books array before mapping
  const slicedBooks = books.slice(8, 18);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Recommended for you</h2>
      {error && <p className="text-red-500">{error}</p>}
      <Swiper
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {slicedBooks.map((book, index) => (
          <SwiperSlide key={index}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommended;
