import CartTotals from "./components/CartTotals/CartTotals";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <Header />
      <div className="home  w-[1440px] max-w-[96%] ml-auto mr-auto flex justify-between gap-10 ">
        <div className="categories  overflow-auto max-h-[calc(100vh-_-112px)] pb-64">
          <Categories />
        </div>
        <div className="products flex-[8]">
          <Products />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </>
  );
}

export default App;
