import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import StatisticCard from "../components/Statistic/StatisticCard";
import userImage from "../assets/user.png";
import moneyImage from "../assets/money.png";
import saleImage from "../assets/sale.png";
import productImage from "../assets/product.png";
import { Area } from "@ant-design/plots";

const StatisticPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    xField: "timePeriod",
    yField: "value",
    xAxis: {
      range: [0, 1],
    },
  };

  return (
    <>
      <Header />
      <div className="w-[1440px] max-w-[96%] ml-auto mr-auto">
        <h1 className="text-4xl font-bold text-center mb-4">İstatistiklerim</h1>
        <h2 className="text-xl">
          Hoşgeldin{" "}
          <span className="text-green-700 font-bold text-xl">admin.</span>
        </h2>
        <div className="statistic-cards grid grid-cols-4 my-10 gap-10">
          <StatisticCard
            title={"Toplam Müşteri"}
            amount={"6"}
            image={userImage}
          />
          <StatisticCard
            title={"Toplam Kazanç"}
            amount={"660.96₺"}
            image={moneyImage}
          />
          <StatisticCard
            title={"Toplam Satış"}
            amount={"6"}
            image={saleImage}
          />
          <StatisticCard
            title={"Toplam Ürün"}
            amount={"28"}
            image={productImage}
          />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default StatisticPage;
