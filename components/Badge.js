import Link from "next/link";

const Badge = ({text}) => {
    return (
        <Link href={`/tags/${text}`}>
            <a className="truncate bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs
                        font-bold mr-1 px-1 py-1 rounded dark:bg-blue-200 dark:text-blue-800
                        dark:hover:bg-blue-300">
                {text}
            </a>
        </Link>
    )
}

export default Badge;