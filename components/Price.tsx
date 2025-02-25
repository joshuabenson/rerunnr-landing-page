"use client";
import config from "@/config/general";

const Price = () => {
  const { earlyBirdTotal, earlyBirdRemaining, earlyBirdPrice, price } = config.contents.price;
  
  return (
    <div className="mb-24">
      <div className="bg-grayBackground rounded-md">
        <div className="w-11/12 xl:w-[1050px] mx-auto py-16">
          <p className="font-light text-2xl text-activeButton text-center">
            {config.contents.price.description}
          </p>
          <div className="text-center mt-4">
            <span className="inline-block bg-primary/20 rounded-full px-4 py-2 text-sm font-medium">
              🎉 Early Bird Offer: Only {earlyBirdRemaining} of {earlyBirdTotal} spots remaining!
            </span>
          </div>
          <div className="flex xl:flex-row flex-col w-fit mx-auto gap-12 items-center mt-12">
            <ul className="flex flex-col gap-1">
              {config.contents.price.advantages.map((advantage, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 pl-2 font-normal text-lg text-activeButton"
                >
                  <div className="w-[5px] h-[5px] bg-primary rounded" />
                  {advantage}
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-5">
              <div className="text-left">
                <div className="text-lg text-gray-600 mb-1">
                  <span className="line-through">{price}/month</span>
                </div>
                <span className="text-4xl font-bold text-activeButton">
                  {earlyBirdPrice}
                </span>
                <span className="text-lg text-activeButton">/month</span>
                <span className="text-lg text-activeButton"> for early adopters</span>
              </div>
              <button className="bg-primary rounded-md py-4 px-16 text-black uppercase font-medium text-base hover:bg-primary/90 transition-colors">
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
