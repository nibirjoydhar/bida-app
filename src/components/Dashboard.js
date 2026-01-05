import Map from "./Map";
import Histogram from "./Histogram";

export default function Dashboard() {
  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
          Investment Dashboard  
        </h2>

        {/* Flex container: side-by-side on desktop */}
        <div className="flex flex-col md:flex-row md:gap-8 items-stretch">
          {/* Map */}
          <div className="md:flex-1 mb-8 md:mb-0 h-120">
            <Map />
          </div>

          {/* Histogram */}
          <div className="md:flex-1 h-120">
            <Histogram />
          </div>
        </div>
      </div>
    </section>
  );
}
