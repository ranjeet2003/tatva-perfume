import React from "react";
import Image from "next/image";
export default function Banners() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <Image src="/Images/banner-large.jpg" height="350" width="790" />
      </div>
      <div className="bg-slate-100">
        <Image src="/Images/side-banner.webp" height="435" width="385" />
      </div>
    </div>
  );
}
