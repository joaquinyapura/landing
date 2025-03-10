import { Check } from "lucide-react";
import { features, pricingOptions } from "../../Constants";

export const Pricing = () => {
  return (
    <section className=" max-w-[1280px] flex flex-col items-center min-h-[600px] mx-auto mt-20">
      <h2 className="text-5xl font-bold">Pricing</h2>
      <div className="flex flex-col lg:flex-row gap-6 mt-10 ">
        {pricingOptions.map((e, i) => (
          <div
            key={i}
            className="border-2 border-gray-700 flex flex-col w-[350px] p-4 rounded-md"
          >
            <h5 className=" text-4xl font-bold">
              {e.title}
              {e.title == "Pro" && (
                <span className="text-lg text-orange-700">(most popular)</span>
              )}
            </h5>
            <h5 className="text-2xl"> {e.price} </h5>

            {e.features.map((f, ind) => (
              <div className="flex gap-4 mt-5">
                <span className="w-6 text-orange-700 ">
                  <Check />
                </span>
                <p> {f} </p>
              </div>
            ))}
            <button className="p-3 border-2 border-orange-700 mt-6 rounded-md">
              {" "}
              Suscribe
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
