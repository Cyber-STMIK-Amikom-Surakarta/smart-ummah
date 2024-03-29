import DownloadIcon from '../../assets/images/download.svg'
import LoveIcon from '../../assets/images/love.svg'
import MoreIcon from '../../assets/images/more.svg'
import PlayIcon from '../../assets/images/play.svg'

function PodcastCard({ img, title, author }) {
  return (
    <div id="podcast" className='grid grid-rows-1 min-w-[100%] min-h-[100%] gap-2 rounded-xl text-white backdrop-blur-[34px] bg-gradient-to-b from-green-500 via-green-400 via-70% to-green-200'>
      <img src={img} alt={title} className='h-[300px] w-[100%] object-cover rounded-xl' />
      <h2 className='text-white text-xl mx-2'>
        {title}
      </h2>
      <p className='mx-2'>
        {author}
      </p>
      <div className="border-b-white border-b-[0.009px] mx-2"></div>
      <div className="flex gap-4 mx-4 mb-4">
        <button>
          <img src={DownloadIcon} alt="Download" />
        </button>
        <button>
          <img src={LoveIcon} alt="Love" />
        </button>
        <button>
          <img src={MoreIcon} alt="More" />
        </button>

        <button className='ml-auto'>
          <img src={PlayIcon} alt="Play" />
        </button>
      </div>
    </div>
  )
}

function SocialMediaIcon({ name }) {
  return (
    <span className='flex gap-1 text-white'>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className='pb-1'>
        <path d="M26.6673 8L12.0007 22.6667L5.33398 16" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <p>
        {name}
      </p>
    </span>
  )
}

export default function Podcast({ podcast }) {
  const PodcastList = podcast.map((podcast) =>
    <PodcastCard key={podcast.title} img={podcast.img} title={podcast.title} author={podcast.author} />
  )

  return (
    <>
      <div class="bg-white py-8">  
      <div class=" w-full px-[90px] justify-around items-center pb-8 flex flex-row">
      <div>
        <h1 class= "font-bold text-[60px] text-[#5D5A88]">Podcast Islami</h1>
       <p class="font-light text-[18px] text-[#5D5A88]">Podcast ini membawa pencerahan spiritual dengan membahas konsep-konsep Islami,</p> 
      </div>
    <p class=" text-sm text-[#5D5A88] font-semibold font-poppins ">Lihat Semua</p>
  </div>
  

      <div className='w-full px-[90px] relative grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center'>
        {PodcastList}
      </div>

<div className=' px-[90px]'>
      <div className='flex flex-col gap-4 p-8 mt-4 bg-banner-podcast rounded-xl '>
        <h1 className='text-center text-white text-3xl'>
          Suaraku untuk Kebesaran-Nya
        </h1>
        <h2 className='text-center text-white text-lg'>
          Podcast ini membawa pencerahan spiritual dengan membahas konsep-konsep Islami
        </h2>
        <div className="flex flex-row gap-8 items-center justify-center">
          <SocialMediaIcon name="Spotify" />
          <SocialMediaIcon name="Instagram" />
          <SocialMediaIcon name="Tiktok" />
          <SocialMediaIcon name="Noice" />
          <SocialMediaIcon name="Youtube" />
        </div>
      </div>
      </div>
      </div>
    </>
  )
}
