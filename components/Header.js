import Image from "next/image";
import {
  GlobalAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

//  setState

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);
  const router = useRouter();

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

  return (
    // pading in x-axis 5 -> py-5, pading-5 in all direction -> p-5
    // padding-left:5 -> pl-5
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto "
      >
        <Image
          src="https://links.papareact.com/qd3"
          alt=""
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="hover:animate-bounce"
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
          className=" flex-grow pl-5 bg:transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="h-8 hidden md:inline-flex bg-red-400 text-white rounded-full p-2 cursor-poiter md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end  text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer hover:animate-spin" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full shadow-sm">
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
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl pl-2 flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuest}
              onChange={(e) => setNoOfGuest(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
