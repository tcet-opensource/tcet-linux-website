import React, { useState } from "react";
import welcomeImage from "../assets/image 9.png";
import locationImage from "../assets/image 10.png";
import keyboardImage from "../assets/image 11.png";
import storageImage from "../assets/image 12.png";
function InstallationSteps() {
    const [image, setImage] = useState(welcomeImage); 
  return (
    <div>
      <div className="bg-[#101828]">
        <div className=" p-12 w-full h-full flex flex-col xl:flex-row md:flex-row">
          <div className="w-1/2">
            <p className="text-[#6172F3] font-bold">INSTALLATION GUIDE</p>
            <p className="font-title text-[#FCFCFD] text-4xl pt-2 pb-2">
              TCET Linux Installation Steps
            </p>
            <div onMouseLeave={()=>setImage(welcomeImage)}>
              <div className="pt-6 cursor-pointer" onMouseEnter={()=>setImage(welcomeImage)}>
                <p className="text-[#98A2B3] font-semibold">
                  1. Welcome Screen
                </p>
                <p className="text-[#F9FAFB] pt-2" >
                  Risus ornare fermentum egestas convallis quis. Donec ut
                  pharetra placerat suspendisse.
                </p>
              </div>
              <div className="pt-6 cursor-pointer" onMouseEnter={()=>setImage(locationImage)}>
                <p className="text-[#98A2B3] font-semibold">
                  2. Add Your Location
                </p>
                <p className="text-[#F9FAFB] pt-2">
                  Porttitor penatibus velit risus fermentum facilisis. Sit at
                  phasellus dictumst ut in.
                </p>
              </div>
              <div className="pt-6 cursor-pointer" onMouseEnter={()=>setImage(keyboardImage)}>
                <p className="text-[#98A2B3] font-semibold">
                  3. Select Your Keyboard
                </p>
                <p className="text-[#F9FAFB] pt-2">
                  Tincidunt lobortis non quis egestas pulvinar maecenas.
                  Molestie nulla vestibulum sodales facilisis vitae lacus
                  aliquet.
                </p>
              </div>
              <div className="pt-6 cursor-pointer" onMouseEnter={()=>setImage(storageImage)}>
                <p className="text-[#98A2B3] font-semibold">
                  4. Storage Partitions
                </p>
                <p className="text-[#F9FAFB] pt-2">
                  Elit dolor amet quam et. Egestas risus libero diam lorem
                  commodo.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <button className="text-[#F9FAFB] border border-[#667085] rounded-lg p-3">
                {" "}
                Download
              </button>
            </div>
          </div>
          <div className="relative w-1/2 flex justify-center align-middle">
            <div className="absolute z-30 top-10 w-[600px] h-[450px] bg-[#98A2B3] opacity-30 blur-lg flex-none order-4 rounded-full"></div>
            <div className="z-50 flex align-middle rounded-xl">
              <img className="object-contain rounded-lg" src={image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstallationSteps;
