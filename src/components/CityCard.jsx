export const CityCard = ({ city_name, c_img, country, desc }) => {
  return (
    <>
      <div className="shadow-md shadow-gray-300 rounded-xl flex flex-col gap-2 sm:w-5/12 sm:flex-auto lg:flex-row lg:items-center lg:justify-between ">
        {/*div for image display */}
        <div id="city-image" className="rounded-xl lg:w-8/12 lg:h-full">
          <img
            src={c_img}
            alt="city"
            className="w-full rounded-lg rounded-b-none h-full lg:rounded-lg lg:rounded-r-none"
          />
        </div>
        {/*div for description of the city */}
        <div
          id="city-description"
          className="flex flex-col gap-2 p-3 pt-0 lg:p-3  lg:w-11/12"
        >
          <div id="city-country">
            <h3 className="text-cityNameColor text-lg font-extrabold xs:text-xl 2xl:text-2xl">
              {city_name}
            </h3>
            <h5 className="text-countryNameColor text-xs font-semibold xs:text-sm 2xl:text-base">
              {country}
            </h5>
          </div>
          <div id="city-description">
            <p className="font-semibold text-sm xs:text-base lg:text-base 2xl:text-xl">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
