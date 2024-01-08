import LoveIcon from '../../assets/images/love-filled.svg'
import ShareIcon from '../../assets/images/share.svg'

import ProgressBar from '../../shared/ProgressBar'
import PrimaryButton from '../../shared/PrimaryButton'

function DonasiCard({ donasi }) {
  return (
    <div className="relative sm:w-[100%] lg:w-[calc(100%/3)] flex flex-col shadow-3d rounded-lg">
      <img src={donasi.img} alt={donasi.title} className='' />
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
    <div className="relative flex sm:flex-col lg:flex-row items-center justify-center gap-4">
      {DonasiCards}
    </div>
  )
}
