export default function Histogram() {
    const data = [
        { label: "Dhaka", value: 120, color: "bg-orange-400" },
        { label: "Chattogram", value: 80, color: "bg-green-600" },
        { label: "Khulna", value: 40, color: "bg-pink-600" },
        { label: "Rajshahi", value: 35, color: "bg-blue-500" },
        { label: "Barishal", value: 20, color: "bg-blue-900" },
        { label: "Sylhet", value: 25, color: "bg-red-600" },
        { label: "Rangpur", value: 18, color: "bg-purple-800" },
    ];



  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col justify-end">
      <div className="flex items-end justify-center gap-4 h-full">
        {data.map((d, i) => {
          const barHeight = (d.value / max) * 100;
          return (
            <div
              key={i}
              className="flex flex-col items-center h-full justify-end"
            >
              <div className="text-xs text-gray-500 mt-1">{d.value}M</div>
              <div
                className={`${d.color} w-12 rounded-t-md transition-all duration-500`}
                style={{ height: `${barHeight}%` }}
              ></div>
              <span className="mt-2 text-sm text-gray-700">{d.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
