import LoveIcon from '../../assets/images/love-filled.svg'
import ShareIcon from '../../assets/images/share.svg'

import ProgressBar from '../../shared/ProgressBar'
import PrimaryButton from '../../shared/PrimaryButton'

function DonasiCard({ donasi }) {
  return (
    <div className="relative sm:w-[100%] lg:w-[calc(100%/3)] flex flex-col shadow-3d rounded-lg">
      <img src={donasi.img} alt={donasi.title} className='rounded-xl' />
      <div className="flex flex-col shadow-3d gap-4 bg-white -translate-y-8 mx-4 p-5 rounded-lg">
        <h3 className='text-green-600 font-semibold'>
          {donasi.type}
        </h3>
        <h4 className='text-lg font-bold'>
          {donasi.title}
        </h4>
        <ProgressBar max={donasi.goal} value={donasi.collected} className='bg-[#92CD00]' />
        <div className='flex justify-between items-center'>
          <PrimaryButton className='flex gap-2 justify-center items-center min-w-[200px] py-3 px-8'>
            Donasi
            <img src={LoveIcon} alt="Love" />
          </PrimaryButton>
          <img src={ShareIcon} alt="Share" />
        </div>
      </div>
    </div>
  )
}

export default function Donasi({ donasi }) {
  const DonasiCards = donasi.map((donasi) => 
    <DonasiCard donasi={donasi} />
  )

  return (
    <>
      <div class="bg-white py-8">  
      <div class=" w-full px-[90px] justify-around items-center pt-8 flex flex-row">
      <div>
        <h1 class= "font-bold text-[60px] text-[#5D5A88]">Donasi</h1>
       <p class="font-light text-[18px] text-[#5D5A88]">Setiap sumbangan Anda memiliki potensi besar untuk membuat perbedaan yang nyata. </p> 
      </div>
    <p class=" text-sm text-[#5D5A88] font-semibold font-poppins ">Lihat Semua</p>
  </div>
    <div className=" w-full px-[90px] py-8 relative flex sm:flex-col lg:flex-row items-center justify-center gap-4 ">
      {DonasiCards}
    </div>
    <div className='px-[90px]'>
      <div className='flex flex-col gap-4 p-8 m-4 bg-banner-podcast rounded-xl'>
        <h1 className='text-center text-white text-3xl'>
Ajukan Galang Dana
        </h1>
        <h2 className='text-center text-white text-lg'>
Terbuka kesempatan bagi Anda untuk mendaftarkan Galang Dana Anda bersama kami!
        </h2>
        <PrimaryButton className='w-[300px] py-2 px-8 self-center'>
          Ajukan
        </PrimaryButton>
      </div>
      </div>
      </div>
    </>
  )
}
