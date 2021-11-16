import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto items-center ">
        {/* Left - Logo */}
        <div className="relative w-24 h-24 hidden lg:inline-grid cursor-pointer">
          <Image
            src="https:links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https:links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle - Search */}
        <div className="max-w-xs">
          <div className="mt-1 relative p-3  rounded-md flex ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="search"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-8 md:hidden cursor-pointer " />
          <div className="relative navBtn ">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs w-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.6435-9/135577720_3575704079192825_3495207061657085132_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHYFJw3zxi133xBsdapOh2o6mAGE_RXUpLqYAYT9FdSksNLUkRMkH6Uayw3pQUumZMYUBh7yPozIzWlk1CRTbap&_nc_ohc=WA1oez0aX34AX_ncsr8&_nc_ht=scontent.fbkk13-1.fna&oh=ebfaa46638c9d0319dc4a592c7e36621&oe=61B9058E"
            alt="profile-pic"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
