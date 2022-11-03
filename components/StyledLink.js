import Link from "next/link";

const StyledLink = ({href, children}) => {
    return (
        <Link href={href}>
            <a>
                {children}
            </a>
        </Link>
    )
}

export default StyledLink;