import Link from "next/link";

import MyLayout from "../components/MyLayout";

const PostLink = ({ title }) => (
    <li>
        <Link href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
);

export default function Index() {
    return (
        <div>
            <MyLayout>
                <h1>My Blog</h1>
                <ul>
                    <PostLink title="Hello Next.js" />
                    <PostLink title="Learn Next.js is awesome" />
                    <PostLink title="Deploy apps with Zeit" />
                </ul>
            </MyLayout>
        </div>
    );
}
