import React, { useState } from "react";
import welcomeImage from "../assets/image 9.png";
import locationImage from "../assets/image 10.png";
import keyboardImage from "../assets/image 11.png";
import storageImage from "../assets/image 12.png";
import userImage from "../assets/image 13.png";
import summaryImage from "../assets/image 14.png";
import installationImage from "../assets/image 15.png";
import finishImage from "../assets/image 16.png";
function InstallationSteps() {
  const [imageFirst, setImageFirst] = useState(welcomeImage);
  const [imageSecond, setImageSecond] = useState(welcomeImage);
  const installationStepsFirstSet = [
    {
      id: 1,
      header: "Welcome Screen",
      description:
        "Risus ornare fermentum egestas convallis quis. Donec ut pharetra placerat suspendisse.",
      image: welcomeImage,
    },
    {
      id: 2,
      header: "Add Your Location",
      description:
        "Porttitor penatibus velit risus fermentum facilisis. Sit at phasellus dictumst ut in.",
      image: locationImage,
    },
    {
      id: 3,
      header: "Select Your Keyboard",
      description:
        "Tincidunt lobortis non quis egestas pulvinar maecenas. Molestie nulla vestibulum sodales facilisis vitae lacus aliquet.",
      image: keyboardImage,
    },
    {
      id: 4,
      header: "Storage Parition",
      description:
        "Elit dolor amet quam et. Egestas risus libero diam lorem commodo.",
      image: storageImage,
    },
  ];
  const installationStepsSecondSet = [
    {
      id: 5,
      header: "User details",
      description:
        "Risus ornare fermentum egestas convallis quis. Donec ut pharetra placerat suspendisse.",
      image: userImage,
    },
    {
      id: 6,
      header: "Summary",
      description:
        "Porttitor penatibus velit risus fermentum facilisis. Sit at phasellus dictumst ut in.",
      image: summaryImage,
    },
    {
      id: 7,
      header: "Installation",
      description:
        "Tincidunt lobortis non quis egestas pulvinar maecenas. Molestie nulla vestibulum sodales facilisis vitae lacus aliquet.",
      image: installationImage,
    },
    {
      id: 8,
      header: "Installation Done",
      description:
        "Elit dolor amet quam et. Egestas risus libero diam lorem commodo.",
      image: finishImage,
    },
  ];
  return (
    <div className="overflow-hidden bg-[#101828]">
      <div className="">
        <div className="p-12 w-full h-full flex flex-col-reverse xl:flex-row md:flex-row">
          <div className="w-full xl:w-1/2 relative">
            <p className="text-[#6172F3] font-bold">INSTALLATION GUIDE</p>
            <p className="font-title text-[#FCFCFD] text-4xl pt-2 pb-2">
              TCET Linux Installation Steps
            </p>
            <div className="absolute z-30 top-14 left-0 w-48 h-80  bg-gradient-to-r from-teal-100 via-indigo-500 to-pink-100 opacity-30 blur-2xl flex-none order-4 rounded-xl transform -rotate-45"></div>
            <div onMouseLeave={() => setImageFirst(welcomeImage)}>
              {installationStepsFirstSet.map((step) => (
                <div
                  className="pt-6 cursor-pointer"
                  onMouseEnter={() => setImageFirst(step.image)}
                  key={step.id}
                >
                  <p className="text-[#98A2B3] font-semibold">
                    {step.id}. {step.header}
                  </p>
                  <p className="text-[#F9FAFB] pt-2">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 hidden xl:block md:block">
              <button className="text-[#F9FAFB] border border-[#667085] rounded-lg p-3">
                {" "}
                Download
              </button>
            </div>
          </div>
          <div className="relative w-full flex justify-center align-middle xl:w-1/2">
            <div className="absolute z-30 top-5 w-48 h-52 xl:w-[600px] xl:h-[450px] bg-[#98A2B3] opacity-30 blur-2xl flex-none order-4 rounded-full"></div>
            <div className="z-50 flex align-middle rounded-xl m-2">
              <img className="w-full object-contain rounded-lg" src={imageFirst} />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="pl-12 pr-12 pb-12 xl:pt-12 md:pt-12 sm:pt-0 w-full h-full flex flex-col xl:flex-row md:flex-row">
          <div className="relative w-full flex justify-center align-middle xl:w-1/2">
            <div className="absolute z-30 top-5 w-48 h-52 xl:w-[600px] xl:h-[450px] bg-[#98A2B3] opacity-30 blur-2xl flex-none order-4 rounded-full"></div>
            <div className="z-50 flex align-middle rounded-xl m-2">
              <img className="w-full object-contain rounded-lg" src={imageSecond} />
            </div>
          </div>
          <div className="relative w-full xl:w-1/2 sm:pl-0 md:pl-6 xl:pl-6">
            <p className="text-[#6172F3] font-bold hidden xl:block md:block">INSTALLATION GUIDE</p>
            <p className="font-title text-[#FCFCFD] text-4xl pt-2 pb-2 hidden xl:block md:block">
              TCET Linux Installation Steps
            </p>
            <div className="absolute z-30 top-20 right-0 w-48 h-52 bg-gradient-to-r from-teal-100 via-indigo-500 to-pink-100 opacity-30 blur-2xl flex-none order-4 rounded-full transform rotate-45"></div>
            <div onMouseLeave={() => setImageSecond(welcomeImage)}>
              {installationStepsSecondSet.map((step) => (
                <div
                  className="pt-6 cursor-pointer"
                  onMouseEnter={() => setImageSecond(step.image)}
                  key={step.id}
                >
                  <p className="text-[#98A2B3] font-semibold">
                    {step.id}. {step.header}
                  </p>
                  <p className="text-[#F9FAFB] pt-2">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button className="text-[#F9FAFB] border border-[#667085] rounded-lg p-3">
                {" "}
                Download
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default InstallationSteps;
