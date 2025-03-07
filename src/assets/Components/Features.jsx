import { features } from "../../Constants/index";

export const Features = () => {
  return (
    <div className="min-h-[800px]  mt-10 lg:mt-20 ">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-700 text-sm rounded-full p-2 font-bold">
          FEATURES
        </span>
        <h2 className="text-4xl lg:text-6xl font-bold mt-10 lg:mt-20">
          Easily build{" "}
          <span className="text-4xl lg:text-6xl bg-gradient-to-r from-orange-700 to-orange-800 font-bold text-transparent bg-clip-text">
            YOUR CODE
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20 p-2 ">
        {features.map((e, i) => (
          <div key={i} className=" md:w-1/2 lg:w-1/3 mt-6">
            <div className="flex">
              <div className="flex bg-neutral-900 text-orange-700 rounded-full p-2 mx-6 w-10 h-10">
                {e.icon}
              </div>
              <div>
                <h5 className="font-semibold"> {e.text} </h5>
                <p className="text-sm text-neutral-500"> {e.description} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
