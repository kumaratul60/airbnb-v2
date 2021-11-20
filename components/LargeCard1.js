import Image from "next/image";

function LargeCard1({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer hover:animate-wiggle">
      <div className="relative h-96 min-w-[300px ]">
        <Image
          src={img}
          layout="fill"
          objectfill="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-20">
        <h3 className=" text-5xl mb-3 w-64 text-white font-semibold mt-10">
          {title}
        </h3>
        <p className="text-m text-white">{description}</p>

        <button className="text-m font-semibold text-black bg-white px-4 py-2 rounded-lg mt-5 shadow-md active:scale-90 transition duration-150 ease-out">
          {buttonText}{" "}
          <a href="https://github.com/kumaratul60" className="font-bold">dev</a>
        </button>
      </div>
    </section>
  );
}

export default LargeCard1;
