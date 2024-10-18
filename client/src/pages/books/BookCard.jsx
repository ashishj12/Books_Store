import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-between gap-4 p-4">
        <div className="flex-shrink-0 border rounded-md overflow-hidden">
          <Link to={`/book/${book._id}`}>
            <img
              src={getImgUrl(book.coverImage)}
              alt={book.title}
              className="w-full h-48 sm:h-72 object-cover transition-transform duration-200 hover:scale-105"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-between">
          <Link to={`/book/${book._id}`} className="mb-2">
            <h3 className="text-xl font-medium hover:text-blue-600">
              {book.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-3">
            {book.description.length > 80
              ? `${book.description.slice(0, 80)}...`
              : book.description}
          </p>
          <p className="font-medium mb-4">
            ${book.newPrice}{" "}
            {book.oldPrice && (
              <span className="line-through font-normal ml-2">
                ${book.oldPrice}
              </span>
            )}
          </p>
          <button 
          onClick={()=> handleAddToCart(book)}
          className="btn-primary flex items-center justify-center w-full px-4 py-2 space-x-1">
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
