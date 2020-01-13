import Link from "next/link";

import MyLayout from "../components/MyLayout";

const PostLink = ({ id }) => (
    <li>
        <Link href={`/p/[id]`} as={`/p/${id}`}>
            <a>{id}</a>
        </Link>
    </li>
);

export default function Index() {
    return (
        <div>
            <MyLayout>
                <h1>My Blog</h1>
                <ul>
                    <PostLink id="Hello Next.js" />
                    <PostLink id="Learn Next.js is awesome" />
                    <PostLink id="Deploy apps with Zeit" />
                </ul>
            </MyLayout>
        </div>
    );
}
