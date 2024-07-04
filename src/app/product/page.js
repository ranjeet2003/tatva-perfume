import React from "react";
import Header from "@/components/header";
import Image from "next/image";
export default function Product() {
  return (
    <div>
      <Header />
      <div className="mt-2.5 px-10">
        <nav className="flex gap-1 text-xs" aria-label="breadcrumb">
          <span className="leading-[120%] text-neutral-400"> Home / </span>
          <span className="leading-[120%] text-neutral-400"> Footwear / </span>
          <span className="leading-[120%] text-neutral-400">
            {" "}
            Men Footwear /{" "}
          </span>
          <span className="font-medium text-neutral-900">
            {" "}
            Black Synthetic Leather{" "}
          </span>
        </nav>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2">
            <div className="bg-[#f6f6f6] flex justify-center m-2">
              <Image
                src="/Images/bottle-design-1.webp"
                height={50}
                width={100}
              />
            </div>
            <div className="bg-[#f6f6f6] flex justify-center m-2">
              <Image
                src="/Images/bottle-design-1.webp"
                height={50}
                width={100}
              />
            </div>
            <div className="bg-[#f6f6f6] flex justify-center m-2">
              <Image
                src="/Images/bottle-design-1.webp"
                height={50}
                width={100}
              />
            </div>
            <div className="bg-[#f6f6f6] flex justify-center m-2">
              <Image
                src="/Images/bottle-design-1.webp"
                height={50}
                width={100}
              />
            </div>
            {/* <div className="bg-[#f6f6f6] flex justify-center m-2">
              <Image
                src="/Images/bottle-design-1.webp"
                height={50}
                width={100}
              />
            </div>
            <div className="bg-[#f6f6f6] flex justify-center m-2">
              <Image
                src="/Images/bottle-design-1.webp"
                height={50}
                width={100}
              />
            </div> */}
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">
              Tatva Lauren Polo Blue Eau De Parfum
            </span>
            <span>Eau De Parfum</span>
            <div className="sRt inline-block text-lg relative">
              <div className="flsRt left-0 absolute " style={{ width: "82%" }}>
                <span>★★★★★</span>
              </div>
              <div className="emsRt">
                <span>★★★★★</span>
              </div>
            </div>
            <span>
              <span className="text-2xl">₹399 </span>
              <s className="opacity-60 text-2xl ml-2.5">₹1499</s>
              <span className="text-[#2B6461] ml-2.5">41% off</span>
            </span>
            <hr className="bg-[#dde2e8] my-2.5"></hr>
            <div>
              <span>
                <span className="font-bold">Select Your Perfume Color: </span>
                Blue
              </span>
              <div className="flex gap-x-1 mt-2.5">
                <div className="h-12 w-12 cursor-pointer  hover:border-black hover:rounded-sm rounded bg-[#22d3ee]"></div>
                <div className="h-12 w-12 cursor-pointer  hover:border-gray-400 hover:rounded-sm rounded bg-[#6ee7b7]"></div>
                <div className="h-12 w-12 cursor-pointer  hover:border-gray-400 hover:rounded-sm rounded bg-[#fdba74]"></div>
              </div>
              <span className="mt-2.5">Select Bottle Size: </span>
              <div className="flex">
                <span className="bg-slate-100 rounded-2xl border cursor-pointer border-slate-900 px-4">
                  50 ML
                </span>
                <span className="bg-slate-100 rounded-2xl border cursor-pointer border-slate-900 px-4 mx-4">
                  100 ML
                </span>
              </div>
              <div className="flex mt-2.5 gap-4">
                <div className="flex w-36 justify-center h-min cursor-pointer rounded bg-teal-800 items-center p-1 text-center text-white font-bold">
                  <span>Add To Cart</span>
                </div>
                <div className="flex w-36 cursor-pointer justify-center border-teal-800 border rounded bg-white items-center p-1 text-center text-teal-800 font-bold">
                  <span>Buy Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
