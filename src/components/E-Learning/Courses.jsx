import PrimaryButton from '../../shared/PrimaryButton';
import Tag from '../../shared/Tag';

function Course({ course }) {
  const images = course.imgs.map((img, index) => (
    <img  key={`${index}-${img}-${course.title}`} className={`rounded object-cover w-[33%] h-[300px]`}
      src={img} />
  ))

  const tags = course.tags.map((tag, index) => (
    <Tag key={`${index}-${tag}-${course.title}`}>{tag}</Tag>
  ))

  const kurikulums = course.kurikulum.map((kurikulum, index) => (
    <div key={`${index}-${kurikulum}-${course.title}`} className='flex flex-col gap-4 text-[#3F3F3F] font-vietnam-pro font-bold'>
      <h2 className='text-4xl'>{index + 1 < 10 ? `0${index + 1}` : index + 1}</h2>
      <p className='text-[#9295A3] font-vietnam-pro'>{kurikulum}</p>
    </div>
  ));

  return (
    <section className='flex flex-col gap-[24px]'>
      <header className='flex justify-between items-center'>
        <div>
          <h1 className='text-4xl'>
            {course.title}
          </h1>
          <p className='text-gray-500'>
            {course.description}
          </p>
        </div>
        <div>
          <PrimaryButton>Lihat Kursus</PrimaryButton>
        </div>
      </header>

      <div className='flex relative gap-4'>
        {images}
      </div>

      <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
          {tags}
        </div>
        <span className='text-[#3F3F3F] font-semibold'>
          {course.author}
        </span>
      </div>

      <div className='flex flex-col gap-4'>
        <h4 className='text-xl text-[#3F3F3F]'>Kurikulum</h4>
        <div className='flex justify-between items-center gap-4 mx-4'>
          {kurikulums}
        </div>
      </div>
    </section>
  )
}

export default function Courses({ courses }) {
  const Courses = courses.map(course => (
    <Course key={course.title} course={course} />
  ))

  return (
    <main className="flex flex-col gap-8">
      {Courses}
    </main>
  )
}
