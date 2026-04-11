import { useState } from "react";
import { getUserById } from "../../api/adminApi";


const useUserId = () => {
    const [user, setUser] = useState({});
    // logic here
   return {user}
};

export default useUserId;