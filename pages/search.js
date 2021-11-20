import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();

  console.log(searchResults);

  // ES6 Destructuring
  const { location, startDate, endDate, noOfGuest } = router.query;
  //  console.log(router.query);

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate}-${formattedEndDate}`;
  const formattedLocation =
    location.charAt(0).toUpperCase() + location.slice(1);

  return (
    <div className="h-screen">
      <Header
        placeholder={`${formattedLocation} | ${range} | ${noOfGuest} guests `}
      />
      <main className="flex ">
        <section className="flex-grow pt-14 px-6">
          {/* <p className="text-xs  ">
            300+ Stays | {range} | {noOfGuest} number of guests
          </p> */}
          200+ Stays -{" "}
          <span className="bg-red-400 text-white px-2 py-1 rounded-xl">
            {formattedStartDate}
          </span>{" "}
          -{" "}
          <span className="bg-red-400 text-white px-2 py-1 rounded-xl">
            {formattedEndDate}
          </span>{" "}
          - for {noOfGuest} guests
          <h1 className="text-3xl font-semibold mt-2 mb-5">
            Stays in {formattedLocation}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Types of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        {/* hidden xl:inline-flex */}
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

// await means fuction is async
export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
