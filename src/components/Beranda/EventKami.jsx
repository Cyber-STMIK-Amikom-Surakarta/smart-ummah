import PrimaryButton from '../../shared/PrimaryButton'

function EventCard({ img, title, date, time, author }) {
  return (
    <div className='flex flex-col gap-4 w-[calc(100%/4)]'>
      <img src={img} alt={title} className='object-cover h-[250px] rounded-lg' />
      <div className="flex justify-between items-center text-[#9295A3]">
        <p>
          {date}
        </p>
        <p>
          {time}
        </p>
      </div>
      <p className='text-[#5D5A88] font-semibold'>
        {title}
      </p>
      <p className='text-[#9295A3]'>
        {author}
      </p>
    </div>
  )
}

export default function EventKami({ event }) {
  const EventsCard = event.map((event) =>
    <EventCard img={event.img} title={event.title} date={event.date} time={event.time} author={event.author} />
  )

  return (
    <>
      <div class="bg-[#F7F7F8] pb-8">  
  <div class=" w-full px-[90px] justify-around items-center pb-8 flex flex-row">
      <div>
        <h1 class= "font-bold text-[60px] text-[#5D5A88]">Event Islami</h1>
       <p class="font-light text-[18px] text-[#5D5A88]">Memperkuat ikatan komunitas, dan merayakan kebersamaan dalam cahaya kehidupan Islami. </p> 
      </div>
    <p class=" text-sm text-[#5D5A88] font-semibold font-poppins ">Lihat Semua</p>
  </div>

      <div className='relative flex lg:flex-row  md:flex-col flex-wrap gap-4 justify-center items-center'>
        {EventsCard}
      </div>

      <div className=' px-[90px]'>
      <div className=" flex flex-col justify-center items-center gap-4 p-8 m-4 bg-banner-podcast rounded-xl">
        <h1 className='text-white font-semibold text-3xl'>
          Daftarkan Acaramu
        </h1>
        <p className='max-w-[400px] text-center text-white'>
Terbuka kesempatan bagi Anda untuk mendaftarkan event Islami Anda bersama kami!
        </p>
        <PrimaryButton className='font-bold min-w-[300px]'>Buat Acara</PrimaryButton>
      </div>
      </div>
      </div>
    </>
  )
}
