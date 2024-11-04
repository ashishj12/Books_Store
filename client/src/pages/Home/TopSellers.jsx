import React, { useState } from "react";
import BookCard from "../books/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSellers = () => {
  const { data: books = [], error } = useFetchAllBooksQuery();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredBooks = selectedCategory === "Choose a genre"
    ? books
    : books.filter(book =>
        book.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

      <div className="mb-6">
        <select
          onChange={handleCategoryChange}
          name="category"
          id="category"
          className="p-2 border rounded"
          value={selectedCategory}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {error && <div className="text-red-500 mb-4">{error.message || "An error occurred."}</div>}

      {filteredBooks.length > 0 ? (
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
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {filteredBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div>No books available in this category.</div>
      )}
    </div>
  );
};

export default TopSellers;
