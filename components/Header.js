import Image from "next/image";
import {
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";

import { useState } from "react"; // theme css file
import { useRouter } from "next/dist/client/router";

//  setState

function Header({ placeholder }) {
  const router = useRouter();

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);
  const [showSearch, setShowSearch] = useState(false);

  // console.log(searchInput);

  const selectionRanges = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    // router.push("/search");

    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest,
      },
    });
  };

  // const handleSearch = () => {
  //    setShowSearch(!showSearch);
  // };

  return (
    // pading in x-axis 5 -> py-5, pading-5 in all direction -> p-5
    // padding-left:5 -> pl-5

    <header className="sticky top-0 x-50 items-center md:grid md:grid-cols-3 flex bg-white shadow-md p-3 md:px-10 z-50">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto "
      >
        <Image
          // src="https://links.papareact.com/qd3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt=""
          // layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="hover:animate-bounce"
          width={100}
          height={80}
          // use either layout = "fill" or width,height
        />
      </div>

      {/* Middle Search  */}
      <div
        className="flex items-center md:border-2 rounded-full py-2
      md:shadow-sm"
      >
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className=" flex-grow pl-5 bg-transparent outline-none text-md text-gray-600 placeholder-gray-400 text-xs sm:text-sm lg:text-md xl:text-lg"
          type="text"
          placeholder={placeholder || "Start your search"}
        />

        <SearchIcon className="h-8 hidden hover:animate-spin md:inline-flex bg-red-400 text-white rounded-full p-2 cursor-poiter md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end  text-gray-500">
        <p className=" hover:bg-gray-100 py-2 px-3 rounded-full hidden md:inline cursor-pointer">
          Become a host
        </p>

        <GlobeAltIcon className="h-6 cursor-pointer hover:animate-spin bg-gray-50 " />

        <div className="items-center border-2 space-x-2 rounded-full p-2 cursor-pointer hover:shadow-md hidden md:flex">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-3">
          <DateRangePicker
            ranges={[selectionRanges]}
            minDate={new Date()}
            rangeColors={["#FD6064"]}
            onChange={handleSelect}
            className="bg-transparent"
          />

          <div className="flex items-center  mb-4">
            <h2 className="text-2xl pl-2 flex-grow font-mono font-semibold text-gray-600 ">
              Number of Guests
            </h2>
            <UsersIcon className="h-5 mr-4 text-gray-600" />
            <input
              value={noOfGuest}
              onChange={(e) => setNoOfGuest(e.target.value)}
              min={1}
              type="number"
              className="w-16 pl-2 text-lg outline-none text-[#FF385C] cursor-default border-2  rounded-md"
            />
          </div>

          <div className="flex border-t ">
            <button
              className="flex-grow py-2 text-gray-500 font-semibold hover:bg-[#ff385d54] transition duration-150"
              onClick={resetInput}
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow py-2 font-semibold text-[#FF385C] hover:bg-gray-200 transition duration-150"
            >
              <div onClick={resetInput}>Search</div>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
