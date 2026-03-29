
export const Button = ({children, onClick, className}) => { 
    return (
        <button onClick={onClick} 
         className={`px-4 py-2 bg-[#7C3AED] text-white w-[380px] rounded-md cursor-pointer ${className}`}
        >
          {children}
        </button>
    )
}