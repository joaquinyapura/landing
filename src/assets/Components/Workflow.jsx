import { checklistItems } from "../../Constants";
import code from "../img/code.jpg";
import { Check } from "lucide-react";

export const Workflow = () => {
  return (
    <div className=" min-h-[800px] flex flex-col items-center mx-5 ">
      <div>
        <h2 className="text-3xl lg:text-6xl font-bold mt-10 lg:mt-20">
          Acelerate your
          <span className="text-3xl lg:text-6xl bg-gradient-to-r from-orange-700 to-orange-800 font-bold text-transparent bg-clip-text ml-3">
            coding workflow
          </span>
        </h2>
      </div>

      <div className="flex mt-10 items-center justify-center">
        <div className="hidden lg:block w-1/1 lg:w-1/2">
          <img src={code} alt="code-image" className="max-w-[600px]" />
        </div>

        <div className="w-1/1 lg:w-1/2 flex flex-col gap-5 mt-10">
          {checklistItems.map((e, i) => (
            <div className="flex gap-6">
              <div className="w-5 h-5 md:w-10 md:h-10 bg-neutral-900 text-green-600 rounded-full  flex justify-center items-center hover:bg-green-900 transition-all ease-out duration-500">
                <Check />
              </div>
              <div className="flex flex-col">
                <h5> {e.title} </h5>
                <p className="text-gray-600"> {e.description} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
