import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="min-w-[10px] max-w-[1500px] mx-auto ">
      <div className="flex  bg-gray-900 text-white h-[60px] p ">
        {/* //left */}
        <div className="flex items-center m-4">
          <img
            src={"../images/amazon.png"}
            className="m-2 h-[35px] w-[100px]"
          />
          <div className="pl-2 pr-3 ">
            <div className="text-xs xl:text-sm text-gray-200 ">Deliver To</div>
            <div className="font-semibold uppercase text-sm xl:text-base">
              {" "}
              India
            </div>
          </div>
        </div>

        <div className="flex">middle</div>

        <div className="flex items-center m-4">
          <div className="pl-3 pr-4 ">
            <div className="text-xs xl:text-sm  flex items-center ">
              Hello,sign in <IoPersonSharp className="ml-1" size={20} />
            </div>
            <div className="font-semibold uppercase text-sm xl:text-base">
              Accounts & Lists
            </div>
          </div>
          <div className="pl-3 pr-4 ">
            <div className="text-xs xl:text-sm text-gray-200 ">Returns</div>
            <div className="font-semibold uppercase text-sm xl:text-base">
              {" "}
              & Orders
            </div>
          </div>
          <div className="flex pr-3 pl-3">
          <RiShoppingCart2Line  size={45}/>
          <div className="text-xs xl:text-base mt-7 font-semibold">Cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
