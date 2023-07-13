import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const ArticleHero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex align-middle justify-center">
        <img
          src="https://maltaa.simationtechnologies.com/wp-content/uploads/2023/02/Delicious-Food-1.jpg"
          alt="Article Image"
          className="w-auto"
        />
      </div>
      <div className="flex justify-center space-x-4 my-4">
        <a href="#" className="text-black hover:text-gray-400">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="text-black hover:text-gray-400">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="text-black hover:text-gray-400">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="text-black hover:text-gray-400">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <h1 className="lg:text-3xl font-bold mt-4 text-center sm:text-sm ">
        WHERE TO EAT AN AUTHENTIC CARBONARA IN MALTA
      </h1>
    </div>
  );
};

export default ArticleHero;
