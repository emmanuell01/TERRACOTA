export default function AlfajoresFilteringButton({nameButton, onClick, isActive}) {
    const baseStyles = "h-10 w-full text-secondary text-center font-work-sans font-semibold rounded transition-all duration-300 hover:scale-105 active:scale-95"
    const activeStyles = isActive ? "bg-primary-dark scale-95" : "bg-primary-light"
    
    return (
        <button
            type="button"
            className={`${baseStyles} ${activeStyles}`}
            onClick={onClick}
            aria-pressed={isActive}
        >
            {nameButton}
        </button>
    )
}