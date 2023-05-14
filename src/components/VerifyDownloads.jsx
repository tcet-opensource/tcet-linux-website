import React, { useState } from "react";
import clickToCopyImg from "../assets/clickToCopy.png";
import infoIconImg from "../assets/infoIcon.png";
function VerifyDownloads() {
  const [stepOne, setStepOne] = useState([
    {
      id: 1,
      nameOfOS: "MacOS",
      description:
        "open terminal in the Downloads folder or wherever the ISO is and type shasum",
      downloadableFileName: "-a 256 iso-name.iso",
    },
    {
      id: 2,
      nameOfOS: "Windows",
      description:
        "open terminal in the Downloads folder or wherever the ISO is and type shasum",
      downloadableFileName: "-a 256 iso-name.iso",
    },
    {
      id: 3,
      nameOfOS: "Linux",
      description:
        "open terminal in the Downloads folder or wherever the ISO is and type shasum",
      downloadableFileName: "-a 256 iso-name.iso",
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
        <div className="flex mt-6 flex-col xl:flex-row md:flex-row ">
          {stepOne.map((step) => (
            <div
              key={step.id}
              className="m-4 rounded-2xl  mt-2 mb-2 bg-[#1D2939]"
            >
              <div className="p-4 rounded-t-xl">
                <p className="font-title text-[#FCFCFD] text-xl md:text-2xl pt-2 pb-2">
                  {step.nameOfOS}
                </p>
                <p className="text-[#E4E7EC]">{step.description}</p>
              </div>
              {/* bg-gradient-to-r from-teal-100 via-indigo-500 to-pink-300 opacity-100 rounded-b-xl */}
              <div
                className="w-full relative mt-2 cursor-pointer overflow-hidden"
                onClick={() => {
                  navigator.clipboard.writeText(step.downloadableFileName);
                }}
              >
                <div className="absolute top-0 left-0 verifyDownloadGradient h-20 w-full"></div>
                <button className="w-full h-fit flex justify-around align-middle p-3">
                  <p className="text-[#E4E7EC] flex-1 mt-1">
                    {step.downloadableFileName}
                  </p>
                  <img
                    src={clickToCopyImg}
                    className="w-8 h-8 object-contain"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-4">
        <div className="bg-[#1D2939] w-fit m-4 p-2 rounded-2xl">
          <p className="text-[#FFFFFF]">Steps 2:</p>
        </div>
        <div className="w-full mt-6 ">
          <p className="text-[#FFFFFF] ml-4 mb-4">
            In all the above cases, if the returned value matches with the
            sha256sum given below, your download is authentic.
          </p>
          <div className="m-4 rounded-2xl  mt-2 mb-2 bg-[#1D2939]">
            <div className="p-4 rounded-t-xl">
              <p className="font-title text-[#FCFCFD] text-xl md:text-2xl pt-2 pb-2">
                SHA256SUMS Below:
              </p>
              <p className="text-[#E4E7EC]">
                archlinux-gui-plasma-2022.07-x86_64.iso
              </p>
            </div>
            {/* bg-gradient-to-r from-teal-100 via-indigo-500 to-pink-300 opacity-100 rounded-b-xl */}
            <div
              className="w-full relative mt-2 cursor-pointer overflow-hidden rounded-b-xl"
              onClick={() => {
                navigator.clipboard.writeText(
                  "17099bf58c0e6294e356ead78d397fd61d1f06d201097fee44d1265936bc2b54"
                );
              }}
            >
              <div className="absolute top-0 left-0 bg-gradient-to-r from-teal-100 via-indigo-500 to-pink-300 rounded-b-xl h-72 w-full opacity-50 blur-lg"></div>
              <button
                type="button"
                className="z-20 w-full h-fit flex justify-around align-middle p-3"
              >
                <p className="text-[#E4E7EC] flex-1 mt-1 overflow-scroll md:overflow-hidden xl:overflow-hidden">
                  17099bf58c0e6294e356ead78d397fd61d1f06d201097fee44d1265936bc2b54
                </p>
                <img src={clickToCopyImg} className="w-8 h-8 object-contain" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="flex bg-[#1D2939] border-2 border-[#344054] rounded-xl m-4 p-4">
          <img src={infoIconImg} className="w-4 h-4 object-contain mt-1" />
          <p className="text-[#D0D5DD] ml-2">
            Please refer to the convention below. sha256sum is the long
            alphanumeric string, on the left. iso-name refer to the name of the
            ISO. It should contain the .iso extension. DOB stands for date of
            build. It has nothing to do with the verification process. It's just
            there for reference.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerifyDownloads;
