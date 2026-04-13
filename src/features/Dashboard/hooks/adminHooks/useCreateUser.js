import { useState } from "react";
import { createUser } from "../../api/adminApi";


const useCreateUser = () => {
    const [createdUser, setCreatedUser] = useState({});

    const handleCreateUser = async (data) => {

        try{
           //logic here
           //await createUser(data);
        }catch(err){
            //logic here
        }
    }

   return {createdUser, handleCreateUser}
};

export default useCreateUser;