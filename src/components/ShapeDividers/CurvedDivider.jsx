export default function CurvedDividerTopInverted() {
    return (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="relative block w-[calc(100%+1.3px)] h-10 md:h-37.5">
            <path
                d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                className='fill-primary' />
            </svg>
        </div>
    )
}