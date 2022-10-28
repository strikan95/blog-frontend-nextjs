import { useRouter } from "next/router";
import { getAllPostIds, getPostData } from "../../lib/posts";

const Post = ({ postData }) => {
    return <p>{ postData.title }</p>
}

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export default Post