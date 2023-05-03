import React, { useState } from "react";
import welcomeImage from "../assets/image 9.png";
import locationImage from "../assets/image 10.png";
import keyboardImage from "../assets/image 11.png";
import storageImage from "../assets/image 12.png";
function InstallationSteps() {
  const [image, setImage] = useState(welcomeImage);
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
        "Risus ornare fermentum egestas convallis quis. Donec ut pharetra placerat suspendisse.",
      image: locationImage,
    },
    {
      id: 3,
      header: "Select Your Keyboard",
      description:
        "Risus ornare fermentum egestas convallis quis. Donec ut pharetra placerat suspendisse.",
      image: keyboardImage,
    },
    {
      id: 4,
      header: "Storage Parition",
      description:
        "Risus ornare fermentum egestas convallis quis. Donec ut pharetra placerat suspendisse.",
      image: storageImage,
    },
  ];
  return (
    <div>
      <div className="bg-[#101828]">
        <div className=" p-12 w-full h-full flex flex-col xl:flex-row md:flex-row">
          <div className="w-full xl:w-1/2">
            <p className="text-[#6172F3] font-bold">INSTALLATION GUIDE</p>
            <p className="font-title text-[#FCFCFD] text-4xl pt-2 pb-2">
              TCET Linux Installation Steps
            </p>
            <div onMouseLeave={() => setImage(welcomeImage)}>
              {installationStepsFirstSet.map((step) => (
                <div
                  className="pt-6 cursor-pointer"
                  onMouseEnter={() => setImage(step.image)}
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
          <div className="relative w-full flex justify-center align-middle xl:w-1/2">
            <div className="absolute z-30 top-10 w-[600px] h-[450px] bg-[#98A2B3] opacity-30 blur-lg flex-none order-4 rounded-full"></div>
            <div className="z-50 flex align-middle rounded-xl">
              <img className="w-full object-contain rounded-lg" src={image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstallationSteps;
