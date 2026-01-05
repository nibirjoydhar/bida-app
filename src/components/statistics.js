export default function Statistics() {
  const stats = [
    { label: "Total Investors", value: 1245 },
    { label: "Investment Projects", value: 352 },
    { label: "Jobs Created", value: 9821 },
    { label: "Visitor Count", value: 2725 },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          Key Statistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-lg shadow-md">
              <p className="text-4xl font-bold text-blue-800 mb-2">
                {stat.value.toLocaleString()}
              </p>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
