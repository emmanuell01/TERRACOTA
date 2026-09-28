const colorMap = {
    neutral: {
        bg: 'bg-neutral-800',
        text: 'text-neutral-800',
    },
    secondary: {
        bg: 'bg-secondary',
        text: 'text-secondary',
    },
}

export default function SectionTitle({ title, color }) {
    const colors = colorMap[color] || colorMap.primary

    return (
        <div className='flex items-center justify-between p-2'>
            <div className={`${colors.bg} h-1 w-full rounded`}></div>
            <h2 className={`${colors.text} text-2xl font-lora font-bold w-full text-center ml-2 mr-2`}>{title}</h2>
            <div className={`${colors.bg} h-1 w-full rounded`}></div>
        </div>
    )
}