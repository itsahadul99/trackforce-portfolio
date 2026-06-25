import Image from "next/image";
import keyFeatures from "../../../public/casestudy/keyFeature.png";

type Props = { cms?: Record<string, string> }

const CaseStudyKeyFeatures = ({ cms = {} }: Props) => {
  return (
    <div
      className="py-6 md:py-24 bg-[#e8eefb] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/10bestSft.png')` }}
    >
      <div className="w-full max-w-[1300] mx-auto px-4">
        <h2 className="text-[42px] text-[#2B2B2B] text-center font-semibold mb-2">
          {cms.heading || <>Key{" "}<span className="font-playball font-normal">Features</span>{" "}Implemented</>}
        </h2>
        <div className="w-full mt-5 lg:mt-12 flex justify-center">
          <Image
            src={cms.image1 || keyFeatures}
            alt="Case Study - Key Features Implemented"
            width={1600}
            height={1000}
            quality={90}
            className="w-full max-w-[1200] lg:h-[700] rounded-2xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyKeyFeatures;
