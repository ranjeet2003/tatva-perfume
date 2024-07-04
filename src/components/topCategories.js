import React from "react";
import Image from "next/image";
export default function TopCategories() {
  return (
    <div className="flex h-24 justify-between items-center">
      <div>
        <span>
          <Image
            src="/Images/bottle-2.png"
            height={40}
            width={40}
            className="ml-3"
          />
        </span>
        <span>For Him</span>
      </div>
      <div>
        <span>
          <Image
            src="/Images/bottle-4.png"
            height={40}
            width={40}
            className="ml-3"
          />
        </span>
        <span>For Her</span>
      </div>
      <div>
        <span>
          <Image
            src="/Images/bottle-design-1.webp"
            height={40}
            width={40}
            className="ml-3"
          />
        </span>
        <span>OUD</span>
      </div>
      <div>
        <span>
          <Image
            src="/Images/bottle-2.png"
            height={40}
            width={40}
            className="ml-3"
          />
        </span>
        <span>SandalWood</span>
      </div>
    </div>
  );
}
