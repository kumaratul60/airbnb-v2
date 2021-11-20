import React, { useState } from "react";

import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import Image from "next/image";

function InfoCard({ img, location, title, description, star, price, total }) {
  const [heartColor, setHeartColor] = useState(true);

  return (
    // <div className="flex py-7 px-2  pr-4 mt-2 border rounded-2xl cursor-pointer hover:opacity-80 hover:shadow-lg  hover:from-red-200 hover:border-red-900  active:scale-105  transition duration-200 ease-out first:border-t-2 ">
    <div className="flex py-7 px-2 pr-4 border-b rounded-2xl cursor-pointer hover:shadow-lg hover:bg-gradient-to-t hover:from-red-200 hover:text-red-900   first:border-t-2">
      <div className="relative h-24 w-24 md:h-52 md:w-80 flex-shrink-0  ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>

          <HeartIcon
            fill={heartColor ? "transparent" : "#FF0000"}
            className="h-7 transform transition duration-300"
            onClick={() => setHeartColor(!heartColor)}
          />
        </div>

        <h4 className="title-xl ">{title}</h4>

        <div className="border-b w-10 pt-2  " />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className=" text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
