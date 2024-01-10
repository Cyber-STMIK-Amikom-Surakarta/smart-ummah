import React from "react";
import Logo from "../../assets/images/Logo.svg";

export default function Navbar() {
  return (
    <div className="h-[122px] bg-[#fff] w-full px-[90px] flex justify-around items-center">
      <div className="flex justify-center items-center">
        <img src={Logo} className="mr-2" />
        <p className="text-[#8ADAB2] font-poppins text-[24px] font-extrabold">
          Smart Ummah
        </p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-[#9295A3] font-poppins text-base font-semibold text-center cursor-pointer  mr-12 cl">
          Beranda
        </p>
        <p className="text-[#9295A3] font-poppins text-base font-semibold text-center cursor-pointer  mr-12 cl">
          E-Learning
        </p>
        <p className="text-[#9295A3] font-poppins text-base font-semibold text-center cursor-pointer  mr-12 cl">
          Podcast
        </p>
        <p className="text-[#9295A3] font-poppins text-base font-semibold text-center cursor-pointer  mr-12 cl">
          Events
        </p>
        <p className="text-[#9295A3] font-poppins text-base font-semibold text-center cursor-pointer  ">
          Donasi
        </p>
        <p></p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center w-[160px] px-[20px] py-3 border text-[#8ADAB2] bg-[#fff] border-[#8ADAB2] rounded-[50px] mr-6 hover:border hover:bg-[#8ADAB2] hover:text-[#fff] cursor-pointer">
          <p className="font-poppins text-base font-semibold">Daftar</p>
        </div>

        <div className="flex justify-center items-center w-[160px] px-[20px] py-3 rounded-[50px] text-[#fff] bg-[#8ADAB2] hover:bg-[#fff] hover:text-[#8ADAB2] hover:border hover:border-[#8ADAB2] cursor-pointer">
          <p className="font-semibold">Masuk</p>
        </div>
      </div>
    </div>
  );
}
