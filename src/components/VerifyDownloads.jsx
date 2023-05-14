import React, { useState } from "react";
import clickToCopyImg from "../assets/clickToCopy.png";
function VerifyDownloads() {
  const [stepOne, setStepOne] = useState([
    {
      id: 1,
      nameOfOS: "MacOS",
      description:
        "open terminal in the Downloads folder or wherever the ISO is and type shasum",
    },
    {
      id: 2,
      nameOfOS: "Windows",
      description:
        "open terminal in the Downloads folder or wherever the ISO is and type shasum",
    },
    {
      id: 3,
      nameOfOS: "Linux",
      description:
        "open terminal in the Downloads folder or wherever the ISO is and type shasum",
    },
  ]);
  return (
    <div className="bg-[#101828] p-4">
      <p className="font-title text-center text-[#FCFCFD] text-2xl md:text-4xl pt-2 pb-2">
        Verify Your Download
      </p>
      <div className="pt-4">
        <div className="bg-[#1D2939] w-fit m-4 p-2 rounded-2xl">
          <p className="text-[#FFFFFF]">Steps 1:</p>
        </div>
        <div className="flex mt-6">
          {stepOne.map((step) => (
            <div
              key={step.id}
              className="m-4 rounded-2xl bg-gradient-to-r from-teal-100 via-indigo-500 to-pink-300 opacity-100 mt-2 mb-2 backdrop-blur-xl"
            >
              <div className="p-4 bg-[#1D2939] rounded-t-xl">
                <p className="font-title text-[#FCFCFD] text-xl md:text-2xl pt-2 pb-2">
                  {step.nameOfOS}
                </p>
                <p className="text-[#E4E7EC]">{step.description}</p>
              </div>
              <div className="w-full relative mt-2 cursor-pointer">
                <div className="w-full flex justify-around align-middle p-2">
                  <p className="text-[#E4E7EC] flex-1">-a 256 iso-name.iso</p>
                  <img src={clickToCopyImg} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VerifyDownloads;
