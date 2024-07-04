import React from "react";
import Header from "@/components/header";
import TopCategories from "@/components/topCategories";
import Banners from "@/components/banners";
import ProductListing from "@/components/productListing";
import Footer from "@/components/footer";
export default function page() {
  return (
    <>
      <Header />
      <div className="px-10">
        <TopCategories />
        <Banners />
        <ProductListing />
      </div>
      <Footer />
    </>
  );
}
