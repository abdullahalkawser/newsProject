import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShare } from '@fortawesome/free-solid-svg-icons';

const NewsProtal = ({ news }) => {
  const { title, image_url, details, author } = news;

  return (
    <div >
      <div className="card w-full bg-base-100 shadow-xl mb-10">
        <div className="card-body space-y-5">
          <h2 className="card-title">{title}!</h2>
          <img src={image_url} alt="" />
          <p>{details.slice(0, 320)}</p>
        </div>

        

        {/* Rating System */}
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
      </div>

      {/* Author Info and Icons */}
      <div className=" ml-10 flex items-center gap-5">
        <div>
          <img className='w-10 rounded-full' src={author.img} alt="" />
        </div>
        <div>
          <p>{author.name}</p>
          <p>{author.published_date}</p>
        </div>
        
        {/* FontAwesome Icons */}
        <div className="flex  ml-40">
          <div>
            <FontAwesomeIcon className="text-3xl mr-10" icon={faBookmark} />
            <FontAwesomeIcon className="text-3xl" icon={faShare} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsProtal;
