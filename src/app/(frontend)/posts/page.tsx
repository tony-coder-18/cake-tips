import { client } from "@/sanity/lib/client"
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

export default async function PostsIndex() {
    const {data: posts} = await sanityFetch({query: POSTS_QUERY} );

    return (
        <main>
            <ul>
                {posts.map((post) => (
                    <li key={post._id}>
                        <Link href={`/posts/${post?.slug?.current}`}>
                            <span>{post?.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}