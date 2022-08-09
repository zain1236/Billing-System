import React, { useCallback, useEffect, useState } from "react";
import logo from "../../Assets/Honcho+Logo+-+Black.png";
import signature from "../../Assets/signature-logo-encapsulated-postscript-png-favpng-PuMqwT3aQ9YstVUNAPwJnGJw0.jpg";
import { ToWords } from "to-words";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowInvoice = () => {
  const toWords = new ToWords({
    localeCode: "en-IN",
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
    },
  });
  const params = useParams();

  const [invoiceData, setInvoiceData] = useState();
  const fetchInvoices = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}invoice/${params.id}`)
      .then((d) => {
        setInvoiceData(d.data.data);
        console.log(d.data.data);
      });
  }, [params]);

  const invoiceTax = invoiceData?.InvoiceTaxs?.filter(
    (d) => d.invoiceId === invoiceData?.invoice?.id
  );

  console.log("INVOICE TAX", invoiceTax);

  let calcTotalTax;
  if (invoiceTax) {
    calcTotalTax = invoiceData?.InvoiceServices?.map(
      (invSer, i) => (invSer?.rate / 100) * invoiceTax[0]?.tax_percentage
    );
  }

  console.log("Calc TAX", calcTotalTax);
  const TotalTax = calcTotalTax?.reduce((prev, curr) => prev + curr, 0);

  console.log("TOTAL TAX", TotalTax);
  // const { invoice, customer, company, InvoiceServices, Invoicetaxs } =
  //   invoiceData;

  const ifhasTax = invoiceTax?.length
    ? invoiceData?.invoice?.subtotal + TotalTax
    : invoiceData?.invoice?.subtotal;

  console.log("if has tax", ifhasTax);

  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  return (
    invoiceData?.length !== 0 && (
      <div className="flex justify-center">
        <div className="mt-20 min-w-[1100px] min-h-[700px] border-2 border-slate-400 mb-10 bg-white text-black">
          <header className="p-4 w-full h-[60px] border-[3px] flex items-center justify-center  ">
            {" "}
            <span className="text-2xl">
              {invoiceData?.invoice?.header}
            </span>{" "}
          </header>

          <div className=" flex w-full p-3 min-h-[100px] border-[3px] items-end">
            <img
              src={logo}
              alt=""
              className="h-[100px] w-[100px] object-contain"
            />

            <div className="flex flex-col ml-3 items-start ">
              <span className="text-2xl font-bold">Honcho Metrics</span>
              <span className="">{`Best Sky tower, 704, Netaji Subhash Place, Pitam Pura`}</span>
              <span className="">{`New Delhi Delhi 110034 India`}</span>
              <span className="uppercase">{`GSIN ${invoiceData?.customer?.GST_IN}`}</span>
              <span className="uppercase">{`PAN ${invoiceData?.customer?.pan}`}</span>
            </div>

            {invoiceTax?.length > 0 && (
              <span className="text-3xl ml-auto">GST Invoice</span>
            )}
          </div>

          <div className="flex w-full min-h-[100px] border-[1px] ">
            <div className=" flex flex-col flex-1 border-r-[2px]">
              <div className="flex justify-between w-[300px] p-3">
                {" "}
                <span># :</span>{" "}
                <span className="font-semibold uppercase">
                  {invoiceData?.invoice?.invoice_no
                    ? `${invoiceData?.invoice?.invoice_no}`
                    : invoiceData?.invoice?.id}
                </span>{" "}
              </div>
              <div className="flex justify-between w-[300px] p-3">
                <span>Invoice Date : </span>{" "}
                <span className="font-semibold">
                  {invoiceData?.invoice?.createdAt.slice(0, 10)}
                </span>
              </div>
            </div>
            <div className="flex-1 ">
              <div className="flex p-3 w-[300px] justify-between">
                <span> Place of Supply </span>
                <span className="font-semibold uppercase">{`${invoiceData?.customer?.city}`}</span>
              </div>
            </div>
          </div>

          <div className=" w-full bg-slate-200 flex border-2 border-[#ccc] ">
            <span className="text-sm">Bill to</span>
          </div>

          <div className="w-full flex flex-col items-start border-2 p-3 ">
            <span className="font-semibold">
              {" "}
              {`New Delhi Nursing Home Pvt. ltd.`}{" "}
            </span>
            <span className=" ">
              {" "}
              {`3, Community Center 2, Phase-2, Ashok Viahr`}{" "}
            </span>
            <span className=" capitalize ">
              {" "}
              {invoiceData?.customer?.placeofsupply}{" "}
            </span>
            <span className=" capitalize ">
              {" "}
              {`${invoiceData?.customer?.zipcode} ${invoiceData?.customer?.placeofsupply}`}{" "}
            </span>
            <span className=" capitalize">
              {" "}
              {invoiceData?.customer?.country}{" "}
            </span>
          </div>

          {/* TABLE -------------------------------------------------------------------- */}

          <div className="overflow-x-auto  flex w-full ">
            <table className="w-full ">
              <thead className="bg-slate-100">
                <tr className="bg-slate-100">
                  <th>#</th>
                  <th>Item & Description</th>
                  <th>HSN/SAC</th>
                  {invoiceData?.InvoiceServices[0]?.forignRate && (
                    <th>Foreign Rate</th>
                  )}
                  <th>Rate</th>

                  {invoiceTax && invoiceTax[0]?.name === "CGST" && (
                    <>
                      <th className="w-[100px]" colSpan={2}>
                        CGST
                        <div className="flex justify-around">
                          <th>%</th>
                          <th className="">Amt</th>
                        </div>
                      </th>
                      <th className="w-[100px]" colSpan={2}>
                        SGST
                        <div className="flex justify-around">
                          <th>%</th>
                          <th className="">Amt</th>
                        </div>
                      </th>
                    </>
                  )}
                  {invoiceTax && invoiceTax[0]?.name === "IGST" && (
                    <>
                      <th className="w-[100px]" colSpan={2}>
                        IGST
                        <div className="flex justify-around">
                          <th>%</th>
                          <th className="">Amt</th>
                        </div>
                      </th>
                    </>
                  )}
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData?.InvoiceServices?.map((serv, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td className="capitalize">{serv?.service.name}</td>
                    <td>99238</td>
                    {serv?.forignRate && <td>{serv?.forignRate}</td>}
                    <td> {serv?.rate}.00</td>

                    {invoiceTax.length && invoiceTax[0]?.name === "CGST" ? (
                      <>
                        <td> {invoiceTax[0].tax_percentage}</td>
                        <td>
                          {(+serv?.rate / 100) * +invoiceTax[0].tax_percentage}
                        </td>
                        <td> {invoiceTax[0].tax_percentage}</td>
                        <td>
                          {" "}
                          {(+serv?.rate / 100) * +invoiceTax[0].tax_percentage}
                        </td>
                      </>
                    ) : invoiceTax[0]?.name === "IGST" ? (
                      <>
                        <td> {invoiceTax[0].tax_percentage} </td>
                        <td>
                          {(+serv?.rate / 100) * +invoiceTax[0].tax_percentage}
                        </td>
                      </>
                    ) : (
                      ""
                    )}

                    <td> {serv?.rate}.00 </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex w-full border-2 ">
            <div className="flex-1 p-10 flex flex-col items-start">
              <h1 className="">Total in Words</h1>
              <span className="italic font-semibold">
                Indian Currency{" "}
                {toWords.convert(ifhasTax ? ifhasTax : 0, {
                  currency: true,
                })}
              </span>

              <span className="my-10 ">
                Billing Period: {invoiceData?.invoice?.billing_period}
              </span>

              <div className="flex flex-col items-start ">
                <div>
                  <span className="font-semibold">Name:-</span>{" "}
                  <span className="ml-2">Honcho Metrics</span>{" "}
                </div>
                <div>
                  <span className="font-semibold">Account No:-</span>{" "}
                  <span className="ml-2">{`97N9859B2349KS`}</span>{" "}
                </div>
                <div>
                  <span className="font-semibold">IFSC:-</span>{" "}
                  <span className="ml-2">{`BKI00002348`}</span>{" "}
                </div>
                <div>
                  <span className="font-semibold">Type:-</span>{" "}
                  <span className="ml-2">{`Current`}</span>{" "}
                </div>
                <div>
                  <span className="font-semibold">Bank:-</span>{" "}
                  <span className="ml-2"> {`Bank of India`} </span>{" "}
                </div>
                <div>
                  <span className="font-semibold">Swift:-</span>{" "}
                  <span className="ml-2">OSHD99723SJ0</span>{" "}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col border-l-2">
              <div className="flex-1 flex flex-col items-end p-10 ">
                <div className="w-[300px] flex flex-col ">
                  <div className="flex w-full">
                    Sub Total{" "}
                    <span className="ml-auto">
                      {invoiceData?.invoice?.subtotal}.00
                    </span>
                  </div>
                  {invoiceTax && invoiceTax[0]?.name === "CGST" ? (
                    <>
                      <div className="flex w-full">
                        CGST{invoiceTax[0]?.tax_percentage} (
                        {invoiceTax[0]?.tax_percentage}%)
                        <span className="ml-auto">{TotalTax}</span>{" "}
                      </div>
                      <div className="flex w-full">
                        SGST{invoiceTax[0]?.tax_percentage} (
                        {invoiceTax[0]?.tax_percentage}%)
                        <span className="ml-auto">{TotalTax}</span>{" "}
                      </div>
                    </>
                  ) : invoiceTax && invoiceTax[0]?.name === "IGST" ? (
                    <>
                      <div className="flex w-full">
                        IGST{invoiceTax[0]?.tax_percentage} (
                        {invoiceTax[0]?.tax_percentage}%)
                        <span className="ml-auto">{TotalTax}</span>{" "}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  <div className="flex w-full font-semibold">
                    Total
                    <span className="ml-auto">
                      {invoiceTax?.length
                        ? invoiceData?.invoice?.subtotal + TotalTax
                        : invoiceData?.invoice?.subtotal}
                    </span>{" "}
                  </div>

                  <div className="flex w-full font-semibold">
                    Balance Due
                    <span className="ml-auto">
                      {invoiceTax?.length
                        ? invoiceData?.invoice?.subtotal + TotalTax
                        : invoiceData?.invoice?.subtotal}
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="flex-1 border-t-2 flex flex-col p-4 ">
                <img src={signature} alt="" className="w-full h-[200px]" />
                <span className="mt-auto">Authorized Signature</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ShowInvoice;
