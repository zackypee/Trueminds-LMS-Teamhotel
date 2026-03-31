
export const Button = ({children, onClick, className}) => { 
    return (
        <button onClick={onClick} 
         role="button"
         className={`px-4 py-2 bg-[#7C3AED] text-white w-95 rounded-md cursor-pointer ${className}`}
        >
          {children}
        </button>
    )
}