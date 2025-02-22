

const RestaurantMenuShimmering = () => {
  return (
    <div className="flex justify-center pt-14 w-screen">
      <div className="container ">
        <div className="mx-3">
          <div className="mt-6 bg-gradient-to-b from-white to-[#dcdce3] p-4 rounded-xl animate-pulse">
            {/* Placeholder UI for restaurant details */}
            <div className="animate-pulse h-[200px] w-full bg-gray-200 rounded-lg"></div>
          </div>
        </div>

        {/* Placeholder UI for menu */}
        <div className="animate-pulse">
          <p className="py-4 text-center leading-loose animate-pulse">
            M E N U
          </p>
          <div className="animate-pulse flex flex-col gap-2">
            <div className="animate-pulse w-full h-[80px] bg-gray-200 rounded-lg"></div>
            <div className="animate-pulse w-full h-[80px] bg-gray-200 rounded-lg"></div>
            <div className="animate-pulse w-full h-[80px] bg-gray-200 rounded-lg"></div>
          </div>
          <div className="animate-pulse flex flex-col gap-2">
            <div className="animate-pulse w-full h-[80px] bg-gray-200 rounded-lg"></div>
            <div className="animate-pulse w-full h-[80px] bg-gray-200 rounded-lg"></div>
            <div className="animate-pulse w-full h-[80px] bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuShimmering;