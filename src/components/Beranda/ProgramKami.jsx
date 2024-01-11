import React from "react";

import Kursus from "../../assets/images/program/kursus-pembelajaran.png";
import Podcast from "../../assets/images/program/podcast-islami.png";
import Event from "../../assets/images/program/event.png";
import Donasi from "../../assets/images/program/donasi.png";
import Artikel from "../../assets/images/program/artikel.png";
import Partnership from "../../assets/images/program/partnership.png";

export default function ProgramKami() {
  return (
    <div className="flex flex-col justify-center items-center w-full my-16">
      <div className="flex flex-col  items-center justify-center max-w-[1080px]">
        <p className="text-6xl text-[#5D5A88] font-semibold mb-4">
          Program Kami
        </p>
        <p className="text-[#9295A3] text-2xl text-center h-[117px]">
          Ayo bergabung sekarang dan raih peluang belajar yang tak terbatas di
          Smart Ummah. Cerdaskan diri Anda tanpa biaya tambahan!
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 max-w-[1262px] mx-[90px]">
        <div className="flex flex-col justify-center items-center w-[390px] h-[320px] rounded-3xl border border-[#D4D2E3] p-4">
          <img src={Kursus} alt="kursus" width="72" className="" />
          <p className="text-2xl text-[#5D5A88] font-poppins font-semibold my-6">
            Kursus Pembelajaran
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
            cons elementum tempus hac.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[390px] h-[320px] rounded-3xl border border-[#D4D2E3] p-4">
          <img src={Podcast} alt="Podcast Islami" width="72" className="" />
          <p className="text-2xl text-[#5D5A88] font-poppins font-semibold my-6">
            Podcast Islami
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
            cons elementum tempus hac.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[390px] h-[320px] rounded-3xl border border-[#D4D2E3] p-4">
          <img src={Event} alt="event" width="72" className="" />
          <p className="text-2xl text-[#5D5A88] font-poppins font-semibold my-6">
            Event
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
            cons elementum tempus hac.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[390px] h-[320px] rounded-3xl border border-[#D4D2E3] p-4">
          <img src={Donasi} alt="Donasi" width="72" className="" />
          <p className="text-2xl text-[#5D5A88] font-poppins font-semibold my-6">
            Donasi
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
            cons elementum tempus hac.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[390px] h-[320px] rounded-3xl border border-[#D4D2E3] p-4">
          <img src={Artikel} alt="Artikel" width="72" className="" />
          <p className="text-2xl text-[#5D5A88] font-poppins font-semibold my-6">
            Artikel
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
            cons elementum tempus hac.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[390px] h-[320px] rounded-3xl border border-[#D4D2E3] p-4">
          <img src={Partnership} alt="Parnertship" width="72" className="" />
          <p className="text-2xl text-[#5D5A88] font-poppins font-semibold my-6">
            Partnership
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
            cons elementum tempus hac.
          </p>
        </div>
      </div>
    </div>
  );
}
