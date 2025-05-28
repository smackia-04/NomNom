import { Link } from "react-router";
import cooking_logo from "../assets/vecteezy_hand-drawn-kitchen-utensils-icon-set_14470641.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems} from "../utils.js/cartSlice";
import { IMG_CDN_LINK } from "../utils.js/constants";


const Cart = () => {
  const dispatch = useDispatch();
  const cartDetails = useSelector((store) => store.cart.cartItems);
  const deliveryFee = (
    cartDetails[0]?.resDetailsData?.deliveryFee / 100
  ).toFixed(0);
  const distance = cartDetails[0]?.resDetailsData?.lastMileTravelString;
  const [suggestionText, setSuggestionText] = useState("");
    const cartItems = useSelector((store) => store.cart.cartItems);
  const handleIncreaseQuantity = (x) => {
    dispatch(addItems(x));
  };
  const handleDecreaseQuantity = (x) => {
    dispatch(removeItems(x));
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
   const itemTotal = cartDetails.reduce((accumulator, currentItem) => {
    const itemPrice =
      ((currentItem.price || currentItem.defaultPrice) / 100) *
      currentItem.quantity;
    return accumulator + itemPrice;
  }, 0);

    return (cartItems.length <= 0) ?
    (
        <div className="font-fontall flex flex-col gap-4 justify-center items-center ">
            <img className="w-[400px]" src= {cooking_logo} ></img>
            <h1 className="text-3xl text-gray-500 font-extrabold " > Your cart is empty! </h1>
            <Link to = "/"><button className="rounded-sm bg-amber-900 text-white text-3xl p-2 font-extrabold" >See restaurants near you</button></Link>
        </div>
    ) 
    :(  
      <div className="flex-col ml-5 my-4 max-w-[100%]">
          <div className="flex-col pb-5 bg-white w-full h-fit">
            <Link
              to={`/restaurant/${cartDetails[0]?.resDetailsData?.id}`}
              className="flex mx-6 pt-6 pb-2"
            >
              <img
                className="w-14 h-14 mr-3 object-cover"
                src={
                  IMG_CDN_LINK +
                  cartDetails[0].resDetailsData?.cloudinaryImageId
                }
              />
              <div className="flex flex-col text-start justify-between w-full truncate">
                <div>
                  <h2 className="text-sm font-semibold text-[#282c3f]">
                    {cartDetails[0]?.resDetailsData?.name}
                  </h2>
                  <h3 className="text-xs min-h-fit truncate text-[#686b78]">
                    {cartDetails[0]?.resDetailsData?.areaName}
                  </h3>
                </div>
                <div className="h-[2px] w-10 bg-black"></div>
              </div>
            </Link>
            <div className="max-h-[67vh] overflow-y-auto">
              <div className="flex flex-col mx-6 pt-6">
                {cartDetails?.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex w-full justify-between px-2 mb-3 last:mb-0 items-center"
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
                      <div className="flex border-[1.11px] border-solid border-gray-300 p-1 text-sm items-center">
                        <div
                          className="px-2 font-bold flex-1 text-[#3e4152] cursor-pointer"
                          onClick={() => {
                            handleDecreaseQuantity(item);
                          }}
                        >
                          -
                        </div>
                        <div className="px-2 font-bold flex-1 text-[#60b246] text-xs">
                          {item.quantity}
                        </div>
                        <div
                          className="px-2 font-bold flex-1 text-[#60b246] cursor-pointer"
                          onClick={() => {
                            handleIncreaseQuantity(item);
                          }}
                        >
                          +
                        </div>
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
              <div className="flex bg-[#f9f9f9] items-center mx-6 rounded mt-6">
                <div className="px-4">
                  <svg
                    className="text-[#282c3f] h-[10px] w-[15px] items-center mx-2"
                    viewBox="0 0 32 32"
                  >
                    <path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z"></path>
                  </svg>
                </div>
                <input
                  className="focus:outline-none w-full py-5 bg-[#f9f9f9] tracking-tighter text-sm"
                  type="text"
                  placeholder="Any suggestions? We will pass it on..."
                  value={suggestionText}
                  onChange={(e) => {
                    setSuggestionText(e.target.value);
                  }}
                />
              </div>
              <div className="mx-4 px-2 py-4">
                <div className="text-[#282c3f] text-sm font-bold pt-4 ">
                  Bill Details
                </div>
                <div className="flex justify-between text-xs font-semibold pt-4 text-[#686b78]">
                  <h3>Item Total</h3>
                  <h3 className="text-nowrap">₹{Number(itemTotal)}</h3>
                </div>
                <div className="flex justify-between border-t border-solid text-[#686b78] text-xs font-semibold pb-4 pt-4 mt-4">
                  <div className="flex items-end">
                    Delivery Fee | {distance}
                    <div className="ml-2 rounded-full border-[#686b78] border px-[4px] text-[10px] leading-3 text-[#686b78] font-bold flex self-baseline">
                      i
                    </div>
                  </div>
                  <h3 className="text-nowrap">
                    ₹
                    {Number(deliveryFee) ||
                      (Number(distance.split(" ")[0]) * 6.8).toFixed(2)}
                  </h3>
                </div>
                <div className="flex justify-between text-[#686b78] text-xs font-semibold pb-4">
                  <div className="flex items-end">
                    GST and Restaurant Charges
                    <div className="ml-2 rounded-full border-[#686b78] border px-[4px] text-[10px] leading-3 text-[#686b78] font-bold flex self-baseline">
                      i
                    </div>
                  </div>
                  <h3 className="text-nowrap">
                    ₹{(Number(itemTotal) * 0.18).toFixed(2)}
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-[#282c3f] border-t-2 border-solid border-black text-md font-bold mx-6 px-2 pt-4 my-2">
              <h3>TO PAY</h3>
              <h3 className="text-nowrap">
                ₹
                {(
                  Number(itemTotal) +
                  Number(
                    Number(deliveryFee) ||
                      (Number(distance.split(" ")[0]) * 6.8).toFixed(2)
                  ) +
                  3 +
                  Number(0.18 * itemTotal)
                  ).toFixed(2)}
              </h3>
            </div>
          </div>
        </div>
    );
};

export default Cart;