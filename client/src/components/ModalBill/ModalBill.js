import { Button, Card, Form, Input, Modal, Select } from "antd";
import React from "react";

const ModalBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <Modal
        title="Fatura oluştur"
        open={isModalOpen}
        footer={false}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form layout={"vertical"} onFinish={onFinish}>
          <Form.Item
            label="Müşteri Adı"
            name={"customerName"}
            rules={[
              { required: true, message: "Müşteri Adı Alanı Boş Geçilemez" },
            ]}
          >
            <Input placeholder="Bir Müşteri Adı Yazınız" />
          </Form.Item>
          <Form.Item
            label="Telefon Numarası"
            rules={[
              {
                required: true,
                message: "Telefon Numarası Alanı Boş Geçilemez",
              },
            ]}
            name={"phoneNumber"}
          >
            <Input placeholder="Bir Telefon Numarası Yazınız" />
          </Form.Item>
          <Form.Item
            label="Ödeme Yöntemi"
            name={"paymentMode"}
            rules={[
              { required: true, message: "Ödeme Yöntemi Alanı Boş Geçilemez" },
            ]}
          >
            <Select placeholder="Ödeme Yöntemi Seçiniz">
              <Select.Option value="Nakit"> Nakit </Select.Option>
              <Select.Option value="Kredi Kartı"> Kredi Kartı </Select.Option>
            </Select>
          </Form.Item>
          <Card>
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>549.00₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV Toplam %8</span>
              <span className="text-red-700">549.00₺</span>
            </div>{" "}
            <div className="flex justify-between font-bold">
              <span>Toplam</span>
              <span>549.00₺</span>
            </div>
            <div className="flex justify-end">
              <Button
                className="mt-4 "
                type="primary"
                onClick={() => setIsModalOpen(true)}
                htmlType="submit"
              >
                Sipariş Oluştur
              </Button>
            </div>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default ModalBill;
