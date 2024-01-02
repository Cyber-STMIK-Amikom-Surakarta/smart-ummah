function Article({ img, title, body, author, date }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-1 justify-center items-center">
        <img className="object-cover rounded sm:w-[95vw] md:w-[calc(100vw/3)] h-[300px]" src={img} alt={title} />
        <h2 className="text-xl text-[#242565]">{title}</h2>
        <p>{body}</p>
      </div>
      <span className="text-left text-[#A5A5A5]">{date} - {author}</span>
    </div>
  )
}


export default function Blog({ articles }) {
  const Articles = articles.map(article =>
    (<Article key={article.title} img={article.img} title={article.title} body={article.body} author={article.author} date={article.date} />)
  )

  return (
    <section className="flex flex-col gap-4 justify-center items-center">
      <h1 className="text-5xl text-[#5D5A88]">Blog</h1>
      <p className="text-[#6A6A6A]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <div className="flex sm:flex-col md:flex-row gap-4 justify-center items-center">
        {Articles}
      </div>
    </section>
  );
}
