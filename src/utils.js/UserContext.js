import { createContext } from "react";


const UserContext = createContext({
    user : {
        name : "Ansh Bhargava",
        email : "anshbhargava42@gmail.com",
    },

})

export default UserContext;