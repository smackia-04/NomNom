import { useContext } from "react";
import UserContext from "../utils.js/UserContext";

const Footer = () => {
    const {user} = useContext(UserContext);
    return (
        <div className="bg-gray-200 border-t-[1px] border-gray-300 Circular pl-12 p-3 pr-5 bottom-0 left-0 right-0 font-fontall " >
            <h1 className="text-4xl font-medium " >- nomnom</h1>
            <h5 className="text-sm" >This site is developed by - {user.name} | {user.email}.</h5>
        </div>
    )
}
export default Footer