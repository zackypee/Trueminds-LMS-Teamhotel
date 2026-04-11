import searchIcon from "../../../../assets/search-icon.svg";
import { useState } from "react";

const SearchBar = ({handleOnChangeSearch, value, setToggleFilterButton}) => {
    
    return (
        <div className=" relative  max-[1150px]:w-[384px] border border-[#E5E7EB] rounded-xl " >
            <input
             value={value}
             placeholder={" Search for Interns..."}
             className=" w-full pr-4 py-2  pl-12 text-[14px] font-semibold leading-5.25 focus:outline-none rounded-xl focus:ring-2 focus:ring-[#0029F5]"
             onChange={handleOnChangeSearch}
             onFocus={()=>setToggleFilterButton(false)}

            />
            <img src={searchIcon} alt="Search Icon" className="absolute top-[30%] left-[7%]" />
        </div>
    );
};

export default SearchBar;