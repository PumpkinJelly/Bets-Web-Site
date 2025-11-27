export default async function NewsPage() {
    const res = await fetch("http://localhost:3000/api/news", {
        cache: "no-store",
    });

    const news = await res.json();

    if (!Array.isArray(news)) return <p>No news found</p>;

    return (
        <div className="max-w-4xl mx-auto py-10 px-5">
            <h1 className="text-3xl font-bold mb-6 text-center">Football News</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {news.map((item: any, i: number) => (
                    <a
                        key={i}
                        href={item.link}
                        target="_blank"
                        className="border rounded-xl p-5 shadow-sm hover:bg-gray-50 transition"
                    >
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <p className="text-gray-500 text-sm mt-2">{item.pubDate}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}
