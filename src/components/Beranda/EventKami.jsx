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
      <div className='relative flex lg:flex-row md:flex-col flex-wrap gap-4 justify-center items-center'>
        {EventsCard}
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-8 m-4 bg-banner-podcast rounded-xl">
        <h1 className='text-white font-semibold text-3xl'>
          Daftarkan Acaramu
        </h1>
        <p className='max-w-[400px] text-center text-white'>
Terbuka kesempatan bagi Anda untuk mendaftarkan event Islami Anda bersama kami!
        </p>
        <PrimaryButton className='font-bold min-w-[300px]'>Buat Acara</PrimaryButton>
      </div>
    </>
  )
}
