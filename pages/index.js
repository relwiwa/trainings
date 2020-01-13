import Link from "next/link";
import fetch from "isomorphic-unfetch";

import MyLayout from "../components/MyLayout";

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
}

function PostLink({ post }) {
    return (
        <li>
            <Link href={`/post?title=${post.title}`}>
                <a>{post.title}</a>
            </Link>
            <style jsx>{`
                li {
                    list-style: none;
                    margin: 5px 0;
                }
                
                a {
                    font-family: 'Arial';
                    text-decoration: none;
                    color: blue;
                }

                a:hover {
                    opacity: 0.6;
                }
            `}</style>
        </li>
    );
}

function Index({ shows }) {
    return (
        <MyLayout>
            <h1>My Blog</h1>
            <ul>
                {getPosts().map(post => (
                    <PostLink key={post.id} post={post} />
                ))}
            </ul>
            <style jsx>{`
                h1 {
                    font-family: 'Arial';
                }

                ul {
                    padding: 0;
                }
            `}</style>
        </MyLayout>
    )
}

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;
