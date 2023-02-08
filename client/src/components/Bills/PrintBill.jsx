import { Modal } from "antd";
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
                    <tr>
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
                    <tr>
                      <td className="py-4 pr-3">
                        <img
                          src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                          alt=""
                          className="w-12 h-12 object-cover"
                        />
                      </td>
                      <td className="py-4 pr-3">Şalgam</td>
                      <td className="py-4 pr-3 text-center">5₺</td>
                      <td className="py-4 pr-3 text-center">1</td>
                      <td className="py-4 pr-3 text-end">5.00₺</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className="text-end pt-6" colSpan="4" scope="row">
                        Ara Toplam
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </article>
          </div>
        </section>
      </Modal>
    </>
  );
};

export default PrintBill;
