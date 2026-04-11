import { useState, useMemo } from "react";
import { users } from "../../pages/adminpages/teamAllocationPage/sections/TeamOverview";

const useUserFilters = () => {
  const [searchByName, setSearchByName] = useState("");
  const [filterByTeam, setFilterByTeam] = useState("");
  const [filters, setFilters] = useState({ role: "", status: "" });

  
  const handleOnChangeSearchByName = (e) => {
    setSearchByName(e.target.value.toLowerCase().trim());
  };

  const handleFilterByTeamChange = (e) => {
    setFilters({ role: "", status: "" });
    setFilterByTeam(e.target.value);
  };

  const handleFilterChange = (key, value) => {
    setFilterByTeam("");
    setFilters((prev) => ({
      ...prev,
      [key]: value.toLowerCase().trim(),
    }));
  };

  const clearState = () => {
    setSearchByName("");
    setFilterByTeam("");
    setFilters({ role: "", status: "" });
  };

  // ✅ THE ONLY FILTER YOU NEED
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const nameMatch = searchByName
        ? user.name.toLowerCase().includes(searchByName)
        : true;

      const teamMatch = filterByTeam
        ? user.team.toLowerCase() === filterByTeam.toLowerCase()
        : true;

      const roleMatch = filters.role
        ? user.role.toLowerCase() === filters.role
        : true;

      const statusMatch = filters.status
        ? user.isActive === (filters.status === "active")
        : true;

      return nameMatch && teamMatch && roleMatch && statusMatch;
    });
  }, [searchByName, filterByTeam, filters]);

 

  return {
    handleOnChangeSearchByName,
    handleFilterByTeamChange,
    handleFilterChange,
    clearState,

    searchByName,
    filterByTeam,
    filters,

    filteredUsers,
  };
};

export default useUserFilters;