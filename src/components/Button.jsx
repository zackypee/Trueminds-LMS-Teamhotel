
export const Button = ({children, onClick, className, disabled, type}) => { 
    return (
        <button onClick={onClick} 
         type={type}
         role="button"
         disabled={disabled}
         className={`px-4 py-2 bg-[#7C3AED] text-white w-95 rounded-md cursor-pointer hover:bg-[#1E3A5F] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
          {children}
        </button>
    )
}