import { FaStarOfLife } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Manager = () => {
  return (
    <div className="root ">
      <div className="flex justify-center lg:flex-none">
        {" "}
        <button className="flex justify-center  items-center mb-6 text-5xl">
          P<RiLockPasswordFill className="text-primary-color" />
          ss{" "}
          <span className="text-second-color flex justify-center items-center">
            St{" "}
            <span className="">
              <FaStarOfLife className="text-5xl text-primary-color" />
            </span>
            re
          </span>{" "}
        </button> 
        </div>
        <div>
          {" "}
          <h2 className="text-center text-xl">Store your password</h2>
        </div>
     
    </div>
  );
};

export default Manager;
