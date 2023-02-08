import React from "react";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  BarChartOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Badge, Input } from "antd";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="border-b mb-6 w-[1440px] max-w-[96%] ml-auto mr-auto">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <a href="/">
            <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
          </a>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input
            size="large"
            placeholder="Ürün Ara..."
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px] "
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-7 md:static fixed z-10 bottom-0 md:w-auto w-screen bg-white md:bg-transparent left-0 md:border-t-0 border-t md:px-0 px-10 py-1">
          <a
            href="/"
            className="menu-link flex flex-col  hover:text-[#40a9ff] transition-all"
          >
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-[12px] text-[10px]">Anasayfa</span>
          </a>
          <Badge count={2} offset={[0, 6]} className="md:flex hidden">
            <Link
              to="/cart"
              className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
            >
              <ShoppingCartOutlined className="md:text-2xl text-xl" />
              <span className="md:text-[12px] text-[10px]">Sepet</span>
            </Link>
          </Badge>

          <Link
            to="/bills"
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-[12px] text-[10px]">Faturalar</span>
          </Link>
          <a
            href="/"
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <UserOutlined className="md:text-2xl text-xl" />
            <span className="md:text-[12px] text-[10px]">Müşteriler</span>
          </a>
          <a
            href="/"
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <BarChartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-[12px] text-[10px]">İstatistikler</span>
          </a>
          <a
            href="/"
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <LogoutOutlined className="md:text-2xl text-xl" />
            <span className="md:text-[12px] text-[10px]">Çıkış Yap</span>
          </a>
        </div>
        <Badge count={2} offset={[0, 6]} className="md:hidden flex">
          <a
            href="/"
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <ShoppingCartOutlined className="text-2xl" />
            <span className="md:text-[12px] text-[10px]">Sepet</span>
          </a>
        </Badge>
      </header>
    </div>
  );
};

export default Header;
