import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const SingleBook = () => {
  const {
    _id,
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPdfURL,
  } = useLoaderData();
  return (
    <div className="mt-28 px-4 lg:px-24">
      <div className="flex p-20">
        <div className="w-[25%] flex justify-center items-center flex-col gap-8 p-10">
          <img src={imageURL} alt="" className="h-96 shadow-2xl rounded-r-xl" />
          
        </div>
        <div className="w-[75%] p-10 ">
          <h1 className="font-serif text-5xl uppercase ">{bookTitle}</h1>
          <h4 className="font-serif text-2xl ml-1 text-[#7c7e81] mt-2">
            {authorName}
          </h4>
          <div className="text-amber-500 flex gap-2 mt-5 ml-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="mt-10 ml-1">{bookDescription}</p>
          <p className="mt-6 ml-1 font-serif">Genres: {category}</p>
          <Link to={bookPdfURL}>
            <button className="py-3 mt-10 px-16 font-semibold rounded-full bg-green-500 text-white">
              Want to read
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
