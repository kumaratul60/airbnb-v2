import Image from "next/image";
import TypeWriter from "react-typewriter";

function Banner() {
  return (
    <div className="relative h-[300px] sm:j-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700pxl]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">
          <TypeWriter typing={0.5}>Not sure where to go? Perfect.</TypeWriter>
        </p>

        <button className="text-purple-500 bg-white hover:bg-red-400 hover:text-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 hover:animate-pulse">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
