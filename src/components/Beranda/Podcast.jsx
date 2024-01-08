import DownloadIcon from '../../assets/images/download.svg'
import LoveIcon from '../../assets/images/love.svg'
import MoreIcon from '../../assets/images/more.svg'
import PlayIcon from '../../assets/images/play.svg'

function PodcastCard({ img, title, author }) {
  return (
    <div className='flex flex-col gap-2 rounded md:w-[100%] lg:w-[calc(100%/5)] text-white backdrop-blur-[34px] bg-gradient-to-b from-green-700 via-green-600 via-70% to-green-200'>
      <img src={img} alt={title} className='h-[300px] w-[100%] object-cover rounded-t' />
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

export default function Podcast({ podcast }) {
  const PodcastList = podcast.map((podcast) =>
    <PodcastCard key={podcast.title} img={podcast.img} title={podcast.title} author={podcast.author} />
  )

  return (
    <div className='relative flex lg:flex-row md:flex-col flex-wrap gap-4 justify-center items-center'>
      {PodcastList}
    </div>
  )
}
