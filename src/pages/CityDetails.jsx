import { CityCard } from "../components";
import franceImage from "../assets/images/france.jpg";
import barcelona from "../assets/images/barcelona.jpg";
import london from "../assets/images/london.jpg";
import prague from "../assets/images/prague.jpg";
//data of the cities details
const cityDetails = [
  {
    country: "France",
    city: "Paris",
    img: franceImage,
    description:
      "Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, gastronomy and many areas.",
  },
  {
    country: "Spain",
    city: "Barcelona",
    img: barcelona,
    description:
      "Overlooking the Mediterranean Sea, and famous for Gaudí and other Art Nouveau architecture, Barcelona is one of Europe's trendiest cities.",
  },
  {
    country: "United Kingdom",
    city: "London",
    img: london,
    description:
      "When exploring London, you will come across lots of excitement by chance, so try to take everything in rather than just rushing around to all of the major tourist haunts.",
  },
  {
    country: "Czech Republic",
    city: "Prague",
    img: prague,
    description:
      "Old-world charm meets modern vibrancy in Europe's capital of stunning architecture, with the iconic Charles Bridge and a captivating cultural scene.",
  },
];
export const CityDetails = () => {
  return (
    <>
      <main
        id="cities-details-page"
        className="p-2 m-auto sm:max-w-max sm:min-w-min sm:p-5"
      >
        {/*title of the page */}
        <section id="card-title" className="m-auto pt-4 pl-4 pr-4 ">
          <h1 className="text-xl font-extrabold xs:text-2xl sm:text-3xl lg:text-4xl">
            CITIES TO VISIT IN EUROPE
          </h1>
        </section>
        {/*Card display of the city including details */}
        <section
          id="city-details"
          className="p-4 flex flex-col gap-4 sm:flex-row sm:mt-2 sm:flex-wrap sm:gap-4 sm:justify-center lg:gap-6"
        >
          {/*Calling card components with the respective data */}
          {cityDetails.map((city) => {
            return (
              <CityCard
                key={city.name}
                city_name={city.city.toUpperCase()}
                c_img={city.img}
                country={city.country}
                desc={city.description}
              />
            );
          })}
        </section>
      </main>
    </>
  );
};
