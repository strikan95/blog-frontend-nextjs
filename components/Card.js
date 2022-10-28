const Card = ({title, summary}) => {
    return (
// <!-- Article Card -->
<article className="flex items-center h-28 px-4 md:h-auto">

    {/* <!-- Card Text --> */}
    <div className="flex-1 flex-col justify-between pr-4 md:pr-32">
        <div className="mt-2 mb-4">
            <div className="flex items-center space-x-2 text-sm font-semibold text-gray-900 dark:text-white">
                <span>By</span>
                <img className="w-6 h-6 rounded-full" src="https://static.displate.com/280x392/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" alt=""/>
                <span className="truncate">Đontra Volta</span>
                <span className="text-gray-400">- Sep 19</span>
            </div>

            <h1 className="text-md font-bold">{title}</h1>
            <p className="hidden line-clamp">{summary}</p>
        </div>

        <div>
            <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300">Fullstack</a>
            <span className="text-xs text-gray-400">3 min read</span>
        </div>
    </div>

    {/* <!-- Card Image --> */}
    <div className="flex h-24 w-24 md:h-36 md:w-36">
        <img className="object-contain" src="https://miro.medium.com/fit/c/224/224/1*8EwWrYk_zE5w_p4LD8MZQg.png" alt=""/>
    </div>
</article>

    )
}

export default Card;