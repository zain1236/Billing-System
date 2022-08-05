import React from "react";
import logo from "../../Assets/Honcho+Logo+-+Black.png";
import signature from "../../Assets/signature-logo-encapsulated-postscript-png-favpng-PuMqwT3aQ9YstVUNAPwJnGJw0.jpg";

const ShowInvoice = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-20 min-w-[1100px] min-h-[700px] border-2 border-slate-400 mb-10">
        <header className="p-4 w-full h-[60px] border-[3px] flex items-center justify-center ">
          {" "}
          <span className="text-2xl"> Header Goes Here</span>{" "}
        </header>

        <div className=" flex w-full p-3 min-h-[100px] border-[3px] items-end">
          <img
            src={logo}
            alt=""
            className="h-[100px] w-[100px] object-contain"
          />

          <div className="flex flex-col ml-3 items-start ">
            <span className="">{`Best Sky Tower India, Pakistan, Asia`}</span>
            <span className="">{`New Delhi Delhi 33013 India`}</span>
            <span className="">{`GSIN IUB89HS57SQ6P8`}</span>
            <span className="">{`PAN BHSA887J8556H`}</span>
          </div>

          <span className="text-3xl ml-auto">GST Invoice</span>
        </div>

        <div className="flex w-full min-h-[100px] border-[1px] ">
          <div className=" flex flex-col flex-1 border-r-[2px]">
            <div className="flex justify-between w-[300px] p-3">
              {" "}
              <span># :</span> <span className="font-semibold">NIA783</span>{" "}
            </div>
            <div className="flex justify-between w-[300px] p-3">
              <span>Invoice Date : </span>{" "}
              <span className="font-semibold">2022/12/3</span>
            </div>
          </div>
          <div className="flex-1 ">
            <div className="flex p-3 w-[300px] justify-between">
              <span> Place of Supply </span>
              <span className="font-semibold">{`: Delhi`}</span>
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
          <span className=" "> {`New Delhi`} </span>
          <span className=" "> {`110052 Delhi `} </span>
          <span className=" "> {`India `} </span>
        </div>

        {/* TABLE -------------------------------------------------------------------- */}

        <div className="overflow-x-auto  flex w-full">
          <table className="table w-full ">
            <thead className="bg-slate-100">
              <tr className="bg-slate-100">
                <th>#</th>
                <th>Item & Description</th>
                <th>HSN/SAC</th>
                <th>Foreign Rate</th>
                <th>Rate</th>
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
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Cleaning Matts</td>
                <td>99238</td>
                <td>1</td>
                <td>400.00</td>
                {/* CGST */}
                <td> 1</td>
                <td> 1</td>
                {/* SGST */}

                <td> 1</td>
                <td> 1</td>

                <td>800.00</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Cleaning SSD's</td>
                <td>99238</td>
                <td>1</td>
                <td>400.00</td>
                {/* CGST */}
                <td> 1</td>
                <td> 1</td>
                {/* SGST */}

                <td> 1</td>
                <td> 1</td>

                <td>800.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex w-full border-2 ">
          <div className="flex-1 p-10 flex flex-col items-start">
            <h1 className="">Total in Words</h1>
            <span className="italic font-semibold">
              Indian Rupee Eignt Hundred only
            </span>

            <span className="my-10 ">
              Billing Period: 1st Apr'22 to 30th Apr'22
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
                  Sub Total <span className="ml-auto">{`900.00`}</span>
                </div>
                <div className="flex w-full">
                  CGST9 (9%)
                  <span className="ml-auto">{`1000.00`}</span>{" "}
                </div>
                <div className="flex w-full">
                  SGST9 (9%)
                  <span className="ml-auto">{`1000.00`}</span>{" "}
                </div>

                <div className="flex w-full font-semibold">
                  Total
                  <span className="ml-auto">{`1200.00`}</span>{" "}
                </div>

                <div className="flex w-full font-semibold">
                  Balance Due
                  <span className="ml-auto">{`1200.00`}</span>{" "}
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
  );
};

export default ShowInvoice;
