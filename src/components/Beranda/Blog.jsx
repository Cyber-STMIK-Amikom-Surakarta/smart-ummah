function Article({ img, title, body, author, date }) {
  return (
    <div className="relative flex flex-col gap-1">
      <div className="relative flex flex-col gap-1 justify-center">
        <img className="object-cover object-top rounded sm:w-[95vw] h-[300px]" src={img} alt={title} />
        <h2 className="text-left text-xl text-[#242565]">{title}</h2>
        <p>{body}</p>
      </div>
      <span className="text-left text-[#5D5A88] font-bold">{date} - {author}</span>
    </div>
  )
}


export default function Blog({ articles }) {
  const Articles = articles.map(article =>
    (<Article key={article.title} img={article.img} title={article.title} body={article.body} author={article.author} date={article.date} />)
  )

  return (
    <div className="flex flex-col justify-center items-center w-full my-16 bg-[#F7F7F8] py-8">
      <div className="flex flex-col  items-center justify-center max-w-[1080px]">
        <p className="text-6xl text-[#5D5A88] font-semibold mb-4">
          Artikel
        </p>
        <p className="text-[#9295A3] text-2xl text-center h-[117px]">
        Membahas langkah-langkah praktis menuju kebaikan dan bagaimana Islam memberikan pedoman untuk mencapai ketenangan batin.
        </p>
      </div>
      <div className="flex sm:flex-col md:flex-row gap-4 justify-center items-center mx-[90px]">
        {Articles}
      </div>
    </div>
  );
}
