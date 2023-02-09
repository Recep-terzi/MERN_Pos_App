import { Button, Card, Table } from "antd";
import React, { useState } from "react";
import PrintBill from "../components/Bills/PrintBill";
import Header from "../components/Header/Header";

const CustomerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <Header />
      <div className="w-[1440px] max-w-[96%] ml-auto mr-auto">
        <h1 className="text-4xl font-bold text-center mb-4"> Müşterilerim </h1>
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
      </div>
      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default CustomerPage;
