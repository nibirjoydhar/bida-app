const blogPosts = [
  {
    title: "Investment Trends 2025",
    date: "Jan 1, 2025",
    excerpt: "Explore the latest investment trends in Bangladesh and opportunities for growth.",
  },
  {
    title: "New Policies for Investors",
    date: "Feb 12, 2025",
    excerpt: "BIDA introduces new policies to simplify the investment process.",
  },
  {
    title: "Success Stories of Local Investors",
    date: "Mar 5, 2025",
    excerpt: "Read how local investors successfully expanded their businesses with BIDA support.",
  },
];

export default function Blog() {
  return (
    <>  
        <main className="min-h-screen bg-blue-50">
            <section className="max-w-7xl mx-auto px-6 py-16">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
                BIDA Blog
                </h1>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post, i) => (
                    <div
                    key={i}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                    >
                    <h2 className="text-xl font-semibold mb-2 text-blue-800">{post.title}</h2>
                    <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                    <p className="text-gray-700">{post.excerpt}</p>
                    </div>
                ))}
                </div>
            </section>
        </main>
    </>
  );
}
