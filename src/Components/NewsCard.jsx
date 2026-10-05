import React from "react";
import {
  FaBookmark,
  FaRegBookmark,
  FaShareAlt,
  FaStar,
  FaEye,
} from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    image_url,
    details,
  } = news;

  const publishedDate = new Date(
    author.published_date
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 border border-gray-200 rounded-md shadow-sm">
      
      {/* Author Section */}
      <div className="flex items-center justify-between bg-base-200 px-4 py-3">

        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-700">
              {author.name}
            </h3>
            <p className="text-sm text-gray-500">
              {publishedDate}
            </p>
          </div>
        </div>

        {/* Bookmark + Share */}
        <div className="flex items-center gap-4 text-gray-500">
          <button className="hover:text-black transition">
            <FaRegBookmark size={18} />
          </button>

          <button className="hover:text-black transition">
            <FaShareAlt size={18} />
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        
        {/* Title */}
        <h2 className="text-xl font-bold leading-8 text-gray-700 mb-4">
          {title}
        </h2>

        {/* News Image */}
        <img
          src={image_url}
          alt={title}
          className="w-full h-52 object-cover rounded-md"
        />

        {/* Details */}
        <p className="text-gray-500 text-sm leading-6 mt-4 line-clamp-3">
          {details}
        </p>

        {/* Read More */}
        <button className="text-orange-500 font-semibold text-sm mt-1 hover:underline">
          Read More
        </button>

      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between px-4 pb-4">
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1 text-orange-400">
            {
              [...Array(5)].map((_, index) => (
                <FaStar key={index} size={17} />
              ))
            }
          </div>

          <span className="text-gray-500 text-sm">
            {rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye size={18} />

          <span className="text-sm">
            {total_view}
          </span>
        </div>

      </div>
    </div>
  );
};

export default NewsCard;