const FilterBar = ({ filters, handleFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-2 absolute left-[35%] top-[72%]">

      {/* Role */}
      
        <select
          value={filters.role}
          onChange={(e) => handleFilterChange("role", e.target.value)}
          className="border w-22 p-1 rounded text-[12px]"
          aria-label="select role"
        >
          <option value="">All Role</option>
          <option value="ui/ux">UI/UX</option>
          <option value="frontend developer">FE</option>
          <option value="backend developer">BE</option>
          <option value="sm">SM</option>
          <option value="graphic designer">Designer</option>
          <option value="growth intern">Growth Intern</option> 
          <option value="content writer">Content Writer</option> 
            
        </select>
      

      {/* Status */}
      
        <select
          value={filters.status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
          className="border p-1 rounded w-22 text-[12px]"
          aria-label="select role"
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      
    </div>
  );
};

export default FilterBar;