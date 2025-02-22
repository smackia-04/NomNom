import { useSelector } from "react-redux";
import { Link } from "react-router";
import cooking_logo from "../assets/vecteezy_hand-drawn-kitchen-utensils-icon-set_14470641.jpg"
import { IMG_CDN_LINK } from "../utils.js/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faPlay } from "@fortawesome/free-solid-svg-icons";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (cartItems.length <= 0) ?
    (
        <div className="font-fontall flex flex-col gap-4 justify-center items-center ">
            <img className="w-[400px]" src= {cooking_logo} ></img>
            <h1 className="text-3xl text-gray-500 font-extrabold " > Your cart is empty! </h1>
            <Link to = "/"><button className="rounded-sm bg-amber-900 text-white text-3xl p-2 font-extrabold" >See restaurants near you</button></Link>
        </div>
    ) 
    :(
        <div className="m-20 bg-gray-200 font-fontall p-4">
            <div className="flex justify-start gap-2 pb-2 border-b border-gray-300">
                <img className="w-[130px]" src = {IMG_CDN_LINK + cartItems[0].resDetailsData.cloudinaryImageId}></img>
                <ul className="flex flex-col gap-[1px]" >
                    <li className="text-2xl">{cartItems[0].resDetailsData.name}</li>
                    <li className="text-lg ">{cartItems[0].resDetailsData.areaName}</li>
                    <li className="text-sm ">{cartItems[0].resDetailsData.slaString}</li>
                </ul>
            </div>
            <div>
            {cartItems?.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex w-full justify-between px-2 my-6 last:mb-0 items-center"
                    >
                      <div className="flex items-center w-[50%]">
                        {item?.isVeg ? (
                          <h5>
                            <FontAwesomeIcon
                              className="border border-solid border-[#e43b4f] text-[#e43b4f] max-h-4 max-w-4 p-[2px] text-[8px] -rotate-90"
                              icon={faPlay}
                            />
                          </h5>
                        ) : (
                          <h5>
                            <FontAwesomeIcon
                              className="border border-solid border-[#0f8a65] text-[#0f8a65] max-h-4 max-w-4 p-[2px] text-[8px]"
                              icon={faCircle}
                            />
                          </h5>
                        )}
                        <h1 className="ml-2 flex-1 text-left text-sm leading-4 overflow-clip">
                          {item.name}
                        </h1>
                      </div>
                      <div className="text-[#686b78] text-xs">
                        ₹
                        {(item.quantity * (item.price || item.defaultPrice)) /
                          100}
                      </div>
                    </div>
                  );
                })}

            </div>
        </div>
        
    );
};

export default Cart;