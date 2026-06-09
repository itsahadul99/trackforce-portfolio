"use client";

type FeaturesList = {
  features: {
    icon: React.ReactNode;
    text: string;
  }[];
  title?: string;
};

const FeaturesList = ({ features, title }: FeaturesList) => {
  return (
    <div className=" text-white py-4">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <p className="text-gray-300 mb-8 text-lg">
          {title}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-4 group">

              {/* Icon */}
              <div className="text-xl text-gray-400 group-hover:text-white transition">
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-gray-300 group-hover:text-white transition">
                {item.text}
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FeaturesList;