import React from "react";
import "../HeaderSection.css";

const TopBarSection = () => {
  return (
    <div className="flex justify-between top-bar">
      <div className="flex items-center">
        <div className="pr-2">
          <img src="/images/icons/Map-Pin.png" alt="" className="w-4 h-5" />
        </div>
        <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
      </div>
      <div className="">
        <div className="flex space-x-4 items-center">
          {/* Language Dropdown */}
          <div>
            <label htmlFor="language" className="sr-only">
              Language
            </label>
            <select
              id="language"
              className="rounded-md py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              {/* Add more language options as needed */}
            </select>
          </div>

          {/* Currency Dropdown */}
          <div>
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              className=" rounded-md py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
              {/* Add more currency options as needed */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarSection;
