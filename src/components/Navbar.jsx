import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="min-w-[100px] max-w-[1500px] mx-auto h-full w-full top-0 z-50">
      <div className="flex bg-gray-900 text-white h-[60px] justify-between items-center w-full">
        {/* Left section - Logo and Delivery */}
        <div className="flex items-center m-4">
          <img
            src={"../images/amazon.png"}
            className="m-2 h-[35px] w-[100px]"
            alt="Amazon Logo"
          />
          <div className="hidden sm:block pl-2 pr-3">
            <div className="text-xs xl:text-sm text-gray-200">Deliver To</div>
            <div className="font-semibold uppercase text-sm xl:text-base">
              India
            </div>
          </div>
        </div>

        {/* Middle section - Search */}
        <div className="flex grow relative max-w-[600px] mx-2">
          <Search />
        </div>

        {/* Right section - Account, Orders, Cart */}
        <div className="flex m-4 items-center">
          <div className="hidden md:block pl-3 pr-4">
            <div className="text-xs xl:text-sm flex items-center">
              Hello,sign in <IoPersonSharp className="ml-1" size={20} />
            </div>
            <div className="font-semibold uppercase text-sm xl:text-base">
              Accounts & Lists
            </div>
          </div>
          
          <div className="hidden sm:block pl-3 pr-4">
            <div className="text-xs xl:text-sm text-gray-200">Returns</div>
            <div className="font-semibold uppercase text-sm xl:text-base">
              & Orders
            </div>
          </div>
          
          <div className="flex pr-3 pl-3">
            <div className="relative">
              <RiShoppingCart2Line size={30} className="md:size-[45px]" />
              <div className="absolute -top-2 -right-1 bg-yellow-400 text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold md:hidden">
                0
              </div>
            </div>
            <div className="hidden xs:block text-xs xl:text-base mt-2 md:mt-7 font-semibold">
              Cart
            </div>
          </div>
        </div>
      </div>

      {/* Secondary navigation */}
      <div className="bg-[#3a3b3d] flex overflow-x-auto text-white pl-5 relative p-2 space-x-2.5 scrollbar-hide">
        <div className="whitespace-nowrap">Today's Deals</div>
        <div className="whitespace-nowrap">Customer Service</div>
        <div className="whitespace-nowrap">Registry</div>
        <div className="whitespace-nowrap">Gift Cards</div>
        <div className="whitespace-nowrap">Sell</div>
      </div>
    </div>
  );
};

export default Navbar;