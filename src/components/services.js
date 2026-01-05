export default function Services() {
  const services = [
    {
      title: "One Stop Service (OSS)",
      description: "Submit investment proposals online and track approvals in one place.",
    },
    {
      title: "Investment Facilitation",
      description: "Guidance and support for local and foreign investors in Bangladesh.",
    },
    {
      title: "Policy Advisory",
      description: "Advice on investment policies and regulations for businesses.",
    },
    {
      title: "Aftercare Services",
      description: "Support investors after establishment to ensure smooth operations.",
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
