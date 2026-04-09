import searchIcon from "../../../../assets/search-icon.svg";

const SearchBar = () => {
    return (
        <div className=" relative px-4 py-2 border border-[#E5E7EB] rounded-xl" >
            <input
             placeholder=" Search for Interns..."
             className=" w-full pl-8 text-[14px] font-semibold leading-5.25"

            />
            <img src={searchIcon} alt="Search Icon" className="absolute top-[30%]" />
        </div>
    );
};

export default SearchBar;