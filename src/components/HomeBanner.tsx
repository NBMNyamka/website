const HomeBanner = () => {
  return (
    <div
      className="w-full h-screen relative mb-8 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url("/image/stars.jpg")`,
      }}
    >
      <div className="w-3/4 h-screen flex flex-col items-center justify-center mx-auto text-center mb-8 md:mb-0 text-white">
        <h1 className="font-bold text-8xl m-4">OFF-ROAD TRIP MONGOLIA</h1>
        <h2 className="font-semi text-3xl ">
          Discover the land of nomads together with friends and go on a unique{" "}
          adventure
        </h2>
      </div>
    </div>
  );
};

export default HomeBanner;
