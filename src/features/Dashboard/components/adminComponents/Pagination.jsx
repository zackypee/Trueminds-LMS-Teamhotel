const Pagination = ({totalPages, currentPage, setCurrentPage}) => {
    
    return(

        <div className="flex items-center gap-2 mt-4">

            {/* Prev Button */}
            <button
                type="button"
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1  rounded disabled:opacity-50"
            >
                {"<"}
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;

                return (
                <button
                    type="button"
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 text-[12px] leading-4 py-1 rounded ${
                    currentPage === page
                        ? "bg-[#0029F5] text-white font-bold"
                        : "bg-white text-[#001C3B] font-medium"
                    }`}
                >
                    {page}
                </button>
                );
            })}

            {/* Next Button */}
            <button
                type="button"
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1  rounded disabled:opacity-50"
            >
                {">"}
            </button>

        </div>

    );
};

export default Pagination