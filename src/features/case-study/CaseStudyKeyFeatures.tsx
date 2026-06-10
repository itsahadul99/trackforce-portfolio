import Image from "next/image";

const CaseStudyKeyFeatures = () => {
  return (
    <div className=" py-6 md:py-24 bg-[#e8eefb] bg-[url('/10bestSft.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-full max-w-[1300] mx-auto px-4">
        <h1 className="text-[42px] text-[#2B2B2B] text-center font-semibold mb-2">
          Key {" "}
          <span className="font-playball font-normal">Features</span> {" "}
          Implemented
        </h1>
        <div className="w-full mt-5 lg:mt-12 flex justify-center">
          <Image
            src="/case-study.png"
            alt="Case Study - Key Features Implemented"
            width={800}
            height={500}
            className="w-full max-w-[1200] lg:h-[700] rounded-2xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyKeyFeatures;
