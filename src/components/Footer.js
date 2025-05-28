import { useContext } from "react";
import UserContext from "../utils.js/UserContext";
import logo from "../assets/Logo2.png";

const Footer = () => {
    const {user} = useContext(UserContext);
    return (
        <div className="border-t-[1px] border-gray-300 bg-gray-200  mt-20 font-fontall">
            <div className="font-extrabold text-gray-700 text-4xl h-[180px] p-3 pl-12 pr-8 flex items-center">
                <h1>Beat the hunger, Order now!</h1>
            </div>
            <div className="bg-black text-white p-3 pl-12 pr-8  " >
                <div className="flex">
                    <img  className="w-[180px] rounded-2xl border-[1.5px] border-black " src={logo} ></img>
                </div>
                    <h5 className="text-sm p-16 flex justify-center" >© 2025  Made with 💓 by  {user.name} | {user.email}</h5>
            </div>
        </div>
    )
}
export default Footer