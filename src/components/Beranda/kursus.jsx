import gambar1 from "../../assets/images/e-learning/nama-besar-allah/2.jpg";
import gambar2 from "../../assets/images/e-learning/nama-besar-allah/1.jpg";

export default function Kursus() {
  return (

    <div class="bg-[#F7F7F8] py-8" id="e-learning">
      <div class=" w-full px-[90px] justify-around items-center pb-8 flex flex-row">
        <div>
          <h1 class="font-bold text-[60px] text-[#5D5A88]">Kursus Pembelajaran</h1>
          <p class="font-light text-[18px] text-[#5D5A88]">Jangan lewatkan kesempatan untuk berkembang dan memberdayakan diri Anda. </p>
        </div>
        <p class=" text-sm text-[#5D5A88] font-semibold font-poppins ">Lihat Semua</p>
      </div>

      <div class="w-full px-[90px] flex justify-around ">
        <div class="grid grid-cols-2  gap-4">

          <a class="p-8 max-w-lg  bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center"
            href="#">
            <img src={gambar1} class="shadow rounded-lg overflow-hidden border" />
            <div class=" p-4">
              <span class=" mr-2 text-sm text-[#5D5A88] font-semibold font-poppins ">5 Minggu</span>
              <span class=" mr-36 text-sm text-[#5D5A88] font-semibold font-poppins ">Pemula</span>
              <span class=" text-sm text-[#5D5A88] font-semibold font-poppins ">Ustadz Luqman</span>
            </div>
            <div class="mt-4">
              <h4 class="font-bold text-xl text-[#5D5A88]">Tatac cara Umrah dan Haji</h4>
              <p class="mt-2 text-[#3F3F3F]">Dirancang khusus untuk membantu Anda memahami dan menguasai kaidah kegiatan Umrah dan Haji dengan benar.
              </p>
              <div class="mt-4">
                <button class="bg-[#FFB534] text-white font-bold w-full py-2 border rounded-full">
                  Belajar</button>
              </div>
            </div>
          </a>

          <a class="p-8 max-w-lg  bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center"
            href="#">
            <img src={gambar2} class="shadow rounded-lg overflow-hidden border" />
            <div class=" p-4">
              <span class=" mr-2 text-sm text-[#5D5A88] font-semibold font-poppins "> 8 Minggu</span>
              <span class=" mr-36 text-sm text-[#5D5A88] font-semibold font-poppins ">Pemula</span>
              <span class=" text-sm text-[#5D5A88] font-semibold font-poppins ">Ustadz Luqman</span>
            </div>
            <div class="mt-4">
              <h4 class="font-bold text-xl text-[#5D5A88]">Tata Cara Sholat</h4>
              <p class="mt-2 text-[#3F3F3F]">Dirancang untuk memberikan pemahaman mendalam tentang setiap tahap dalam tata cara sholat, mulai dari niat hingga salam.
              </p>
              <div class="mt-4">
                <button class="bg-[#FFB534] text-white font-bold w-full py-2 border rounded-full">
                  Belajar</button>
              </div>
            </div>
          </a>


        </div>
      </div>
    </div>

  )
}

