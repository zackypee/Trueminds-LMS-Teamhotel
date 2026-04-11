import { useState } from "react"

const useSelectedUsers = () => {

    const [selectedUsers, setSelectedUsers] = useState([]);

    const handleSelectUser = (userId) => {
        setSelectedUsers((prev) =>
            prev.includes(userId)
            ? prev.filter((id) => id !== userId)
            : [...prev, userId] // select
        ); 
    };
    const handleSelectAll = () => {
        if (selectedUsers.length === users.length) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers(users.map((user) => user.id));
        }
    };

    return{handleSelectAll, handleSelectUser, selectedUsers};

}

export default useSelectedUsers;