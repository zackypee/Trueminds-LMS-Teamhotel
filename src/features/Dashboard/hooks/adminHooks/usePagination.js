import { useState } from "react"

const usePagination = () => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const startIndex = (currentPage - 1) * itemsPerPage;
   

    return {
        currentPage,
        setCurrentPage,
        itemsPerPage,
        startIndex,  
    }

}

export default usePagination;