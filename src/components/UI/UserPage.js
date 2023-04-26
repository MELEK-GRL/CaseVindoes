

export default function UserPage() {
    return (
        <div className='border rounded p-3 flex flex-col w-full  gap-1'>
            <div className='flex flex-col gap-1'>
                <h2 className='text-lg font-semibold truncate whitespace-nowrap'>Çağlar Çapar </h2>
                <span className='whitespace-nowrap truncate text-sm'>(Virtara Group Bilişim Teknolojileri)</span>
            </div>
            <div className='flex sm:gap-1 gap-0 sm:items-center sm:flex-row flex-col '>
                <span className='text-sm'>VN041022548927</span>
                <span className='font-semibold invisible h-0 sm:h-fit sm:visible'>•</span>
                <span>mail@cinarcapar.com.tr</span>

            </div>
        </div>
    )
}
