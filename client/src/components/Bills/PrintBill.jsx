import { Button, Modal } from "antd";
import React from "react";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <Modal
        title="Fatura Yazdır"
        open={isModalOpen}
        footer={false}
        onCancel={() => setIsModalOpen(false)}
        width={800}
      >
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto bg-white px-6">
            <article className="overflow-hidden">
              <div className="logo my-6">
                <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
              </div>
              <div className="bill-details">
                <div className="grid grid-cols-4 gap-12">
                  <div className="text-s text-slate-500">
                    <p className="font-bold text-slate-700">Fatura Detayı:</p>
                    <p>Unwrapped</p>
                    <p> Fake Street 123 </p>
                    <p> San Javier </p>
                    <p> CA 1234</p>
                  </div>
                  <div className="text-s text-slate-500">
                    <p className="font-bold text-slate-700">Fatura</p>
                    <p>The Boring Company</p>
                    <p> Tesla Street 007 </p>
                    <p> Lorem. </p>
                    <p> Lorem, ipsum.</p>
                  </div>
                  <div className="text-s text-slate-500">
                    <p className="font-bold text-slate-700">Fatura Numarası</p>
                    <p>Lorem.</p>
                    <p className="font-bold text-slate-700 mt-2">
                      {" "}
                      Verişi Tarihi{" "}
                    </p>
                    <p> Lorem, ipsum dolor. </p>
                  </div>
                  <div className="text-s text-slate-500">
                    <p className="font-bold text-slate-700">Şartlar</p>
                    <p>0 Days</p>
                    <p className="font-bold text-slate-700 mt-2"> Vade </p>
                    <p> 00:00:00 </p>
                  </div>
                </div>
              </div>
              <div className="bill-table-area mt-8">
                <table className="min-w-full divide-y divide-slate-600 overflow-hidden">
                  <thead>
                    <tr className="border-b  border-slate-200">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        Görsel
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        Başlık
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        Fiyat
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        Adet
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        Toplam
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b  border-slate-200">
                      <td className="py-4 ">
                        <img
                          src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                          alt=""
                          className="w-12 h-12 object-cover"
                        />
                      </td>
                      <td className="py-4 ">Şalgam</td>
                      <td className="py-4  text-center">5₺</td>
                      <td className="py-4  text-center">1</td>
                      <td className="py-4  text-end">5.00₺</td>
                    </tr>
                    <tr className="border-b  border-slate-200">
                      <td className="py-4 ">
                        <img
                          src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                          alt=""
                          className="w-12 h-12 object-cover"
                        />
                      </td>
                      <td className="py-4 ">Şalgam</td>
                      <td className="py-4  text-center">5₺</td>
                      <td className="py-4  text-center">1</td>
                      <td className="py-4  text-end">5.00₺</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className="text-end pt-4 " colSpan="4" scope="row">
                        <span className="font-normal text-slate-700">
                          Ara Toplam
                        </span>
                      </th>
                      <th className="text-end pt-4" scope="row">
                        <span className="font-normal text-slate-700">61 ₺</span>
                      </th>
                    </tr>
                    <tr>
                      <th className="text-end pt-4 " colSpan="4" scope="row">
                        <span className="font-normal text-slate-700">KDV</span>
                      </th>
                      <th className="text-end pt-4" scope="row">
                        <span className="font-normal  text-red-700">
                          +7.68₺
                        </span>
                      </th>
                    </tr>
                    <tr>
                      <th className="text-end pt-4 " colSpan="4" scope="row">
                        <span className="font-normal text-slate-700">
                          Genel Toplam
                        </span>
                      </th>
                      <th className="text-end pt-4" scope="row">
                        <span className="font-normal text-slate-700">61 ₺</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
                <div className="py-9">
                  <div className="border-t pt-9 border-slate-200">
                    <p className="text-sm font-light text-slate-700">
                      Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                      Ödenmesi Yasası 0000'e göre, serbest çalışanların bu
                      süreden sonra borçların ödenmemesi durumunda 00.00 gecikme
                      ücreti talep etme hakkına sahip olduklarını ve bu noktada
                      bu ücrete ek olarak yeni bir fatura sunulacağını lütfen
                      unutmayın. Revize faturanın 14 gün içinde ödenmemesi
                      durumunda, vadesi geçmiş hesaba ek faiz ve %8 yasal oran
                      artı %0,5 Bank of England tabanı olmak üzere toplam %8,5
                      uygulanacaktır. Taraflar Kanun hükümleri dışında sözleşme
                      yapamazlar.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <div className="flex justify-end mt-4">
          <Button type="primary" size="large">
            {" "}
            Yazdır
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default PrintBill;
