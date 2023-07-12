import React from "react";
import "./FooterComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-800 text-white main-footer">
      <div className="container mx-auto py-10 flex flex-col items-center">
        <img
          src="https://maltaa.simationtechnologies.com/wp-content/uploads/2023/01/Malta-logo-1024x237-1.png"
          alt="Logo"
          className="h-10"
        />

        <div
          className="my-4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="text-sm footer-main-text">
            Malta’s independent lifestyle guide. Honest restaurant reviews,
            unlocking hidden gems and feeding, your curiosity’ – will work on
            text later this is just to see
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            About Us
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Article
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            FAQ
          </a>
        </div>

        <div className="flex justify-center space-x-4 my-4">
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>

        <hr className="w-1/2 my-4" />

        <div className="grid grid-cols-2 md:flex md:flex-row md:space-x-4 gap-4 text-center footer-last">
          <div>
            <a href="mailto:editor@whatscookingmalta.com">
              editor@whatscookingmalta.com
            </a>
          </div>
          <div>
            <p>&copy; 2023 What'sCookingMaalta All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
