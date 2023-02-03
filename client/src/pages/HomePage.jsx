import React from "react";
import CartTotals from "../components/CartTotals/CartTotals";
import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="home  w-[1440px] max-w-[96%] ml-auto mr-auto flex md:flex-row flex-col justify-between gap-10  md:pb-0 pb-20">
        <div className="categories  overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10">
          <Categories />
        </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10">
          <Products />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </>
  );
};

export default HomePage;
