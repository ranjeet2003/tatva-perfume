import React from "react";

export default function Footer() {
  return (
    <div className="h-80 bg-gray-300 grid grid-cols-5 gap-4 mt-2.5">
      <div className="flex flex-col justify-between px-4">
        <span className="font-bold">Quick Links</span>
        <a href="#">Contact Us</a>
        <a href="#">About Us</a>
        <a href="#">Connect With Us</a>
        <a href="#">FAQ's</a>
        <a href="#">Terms and Privacy Policy</a>
      </div>
      <div className="flex flex-col justify-between">
        <span className="font-bold">Categories</span>
        <a href="#">For Her</a>
        <a href="#">For Him</a>
        <a href="#">OUD Perfumes</a>
        <a href="#">SandalWood</a>
        <a href="#">Dupe Perfumes</a>
      </div>
      <div className="flex flex-col justify-between">
        <span className="font-bold">Our Best Seller</span>
        <a href="#">Tatva Mist</a>
        <a href="#">Tatva Frost</a>
        <a href="#">Tatva Dark</a>
        <a href="#">Tatva Cologne</a>
        <a href="#">Tatva Leather</a>
      </div>
      <div className="col-span-2 ">
        <span className="font-bold">Send Us Your Message</span>
        <div className="flex">
          <input type="text" placeholder="Your Email" />
          <div className="w-36 cursor-pointer border-white border-2 rounded bg-teal-800 items-center p-1 text-center text-white font-bold">
            <span>Submit</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Tatva Fragrances</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>
        </div>
      </div>
      <div className="col-span-5">
        <hr class="h-px my-8  w-full dark:bg-gray-700"></hr>
        <p className="flex justify-center">
          Copyright &copy; Tatva Fragrances 2024. All right reserved
        </p>
      </div>
    </div>
  );
}
