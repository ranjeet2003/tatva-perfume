import React from "react";
import Image from "next/image";
export default function Header() {
  return (
    <header className="items-center flex h-14 bg-teal-800 px-10 justify-between">
      <div className="flex">
        <Image src="../Images/logo/logo.svg" height={21} width={100} />
        <span className="text-white ml-3">Fragrances</span>
      </div>
      <div className="">
        <form>
          <div className="flex">
            <input
              className="w-96 placeholder:italic pl-1 placeholder:text-slate-400 rounded-s focus:outline-none focus:border-teal-500"
              type="text"
              placeholder="What are looking for ?"
            />
            <span className="bg-teal-600 w-10 h-9 rounded-e cursor-pointer place-content-center">
              <Image
                src="../Images/logo/searchIcon.svg"
                height={16}
                width={16}
                className="ml-3"
              />
            </span>
          </div>
        </form>
      </div>
      <div className="flex w-80 justify-between items-center">
        <div className="flex w-36 justify-center h-min cursor-pointer border-white border-2 rounded bg-teal-800 items-center p-1 text-center text-white font-bold">
          <span>Cart</span>
          <Image
            src="../Images/logo/cartIcon.svg"
            height={17}
            width={19}
            className="ml-3"
          />
        </div>
        <div className="flex w-36 cursor-pointer justify-center border-white border-2 rounded bg-white items-center p-1 text-center text-teal-800 font-bold">
          <span>Sign In</span>
          <Image
            src="../Images/logo/userIcon.svg"
            height={15}
            width={15}
            className="ml-3"
          />
        </div>
      </div>
    </header>
  );
}
