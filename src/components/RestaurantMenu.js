import { useParams } from "react-router";
import Overview from "./Overview";
import RestaurantMenuShimmering from "./MenuShimmer";
import useRestaurant from "../utils.js/useRestaurant";
import MenuCategory from "./MenuCategory";


const RestaurantMenu = () => {

    const { restaurantId } = useParams();
    const [resDetails, resMenu] = useRestaurant(restaurantId);
    const resDetailsData = {
        id: resDetails?.id,
        name: resDetails?.name,
        areaName: resDetails?.areaName,
        cloudinaryImageId: resDetails?.cloudinaryImageId,
        slaString: resDetails?.sla?.slaString,
        lastMileTravelString: resDetails?.sla?.lastMileTravelString,
        deliveryFee: resDetails?.feeDetails?.totalFee,
      };
    return !resDetails ? <RestaurantMenuShimmering /> : (
        <div className="">
            <Overview {...resDetails} key = {resDetails?.id} />
            <p className="py-4 text-center leading-loose">M E N U</p>
            <div >
            {resMenu && (
                <div className="ml-12 mr-8 p-3">
                  {resMenu?.map((category) => (
                    <MenuCategory
                      {...category}
                      title = {category.title}
                      key={category.categoryId}
                      resDetailsData={resDetailsData}
                    />
                  ))}
                </div>
            )}
          </div>
        </div>
    );
};

export default RestaurantMenu;