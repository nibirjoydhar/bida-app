export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-blue-50 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/videos/Investment.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome to BIDA
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow-md">
          Bangladesh Investment Development Authority – driving investment, growth, and prosperity.
        </p>
        <button className="bg-red-600 px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
          Get Started
        </button>
      </div>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
}
