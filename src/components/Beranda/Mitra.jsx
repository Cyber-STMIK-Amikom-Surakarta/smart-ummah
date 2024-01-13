import React from "react";

import Mitra1 from "../../assets/images/mitra/mitra-1.png";
import Mitra2 from "../../assets/images/mitra/mitra-2.png";
import Mitra3 from "../../assets/images/mitra/mitra-3.png";

export default function Mitra() {
  return (
    <div class="bg-[#F7F7F8] py-2">  
    <div className="flex justify-around items-center w-full h-[530px]">
      <div className="max-w-[430px]">
        <p className="text-[#5D5A88] font-poppins font-semibold text-[40px]">
          Didukung lebih dari 50+ perusahaan di Indonesia
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-around bg-[#e8e8e8] w-[728px] max-w-[728px] h-[308px] max-h-[308px] p-8 rounded-3xl">
        <img src={Mitra1} width="200" className="mr-2" />
        <img src={Mitra2} width="155" className="mr-2" />
        <img src={Mitra3} width="105" className="mr-2" />
        <img src={Mitra1} width="200" className="mr-2" />
        <img src={Mitra2} width="155" className="mr-2" />
        <img src={Mitra3} width="105" className="mr-2" />
      </div>
    </div>
    </div>
  );
}
