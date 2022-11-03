import StyledLink from "./StyledLink";
import Badge from "./Badge";

const Card = ({slug, matter}) => {
    const fromatedDate = new Date(matter.date).toLocaleDateString(
        'en-gb',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
    );

    return (
        /* <!-- Article Card --> */
        <article className="flex items-center h-28 px-4 md:h-auto">

            {/* <!-- Card Text --> */}
            <div className="flex-1 flex-col justify-between pr-4 md:pr-16">
                <div className="mt-4 mb-4">
                    <div className="flex items-center space-x-2 text-sm font-semibold text-gray-900 dark:text-white">
                        <span>By</span>
                        <img className="w-6 h-6 rounded-full" src="https://static.displate.com/280x392/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" alt=""/>
                        <span className="truncate">Đontra Volta</span>
                        <span className="truncate text-gray-400">- {fromatedDate}</span>
                    </div>
                    <StyledLink href={`/posts/${slug}`}>
                        <h1 className="inline-block text-md font-bold">{matter.title}</h1>
                        <p className="hidden line-clamp">{matter.summary}</p>
                    </StyledLink>
                </div>

                <div className="flex items-center">
                    <div className="flex flex-wrap">

                        {
                             matter.tags.slice(0, Math.min(matter.tags.length, 2)).map((tag) => (
                                <Badge key={tag} text={tag} />
                                ))
                        }

                        {
                            matter.tags.length > 2 && (
                                <p className="pr-2">...</p>
                            )
                        }

                    </div>
                    <span className="truncate text-xs text-gray-400">3 min read</span>
                </div>
            </div>

            {/* <!-- Card Image --> */}
            <div className="flex h-24 w-24 md:h-36 md:w-36">
            <StyledLink href={`/posts/${slug}`}>
                <img className="object-contain" src="https://miro.medium.com/fit/c/224/224/1*8EwWrYk_zE5w_p4LD8MZQg.png" alt=""/>
            </StyledLink>
            </div>
        </article>
    )
}

export default Card;