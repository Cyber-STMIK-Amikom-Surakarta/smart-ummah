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
    <section className="flex flex-col gap-4 justify-center items-center">
      <h1 className="text-5xl font-bold text-[#5D5A88]">Blog</h1>
      <p className="text-[#6A6A6A] text-lg text-center w-[70%] font-semibold">membahas langkah-langkah praktis menuju kebaikan dan bagaimana Islam memberikan pedoman untuk mencapai ketenangan batin.</p>
      <div className="flex sm:flex-col md:flex-row gap-4 justify-center items-center">
        {Articles}
      </div>
    </section>
  );
}
