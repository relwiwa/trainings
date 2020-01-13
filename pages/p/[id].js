import fetch from "isomorphic-unfetch";

import MyLayout from '../../components/MyLayout';

const Content = ({ show }) => {
    return (
        <>
            <h1>{show.name}</h1>
            <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
            {show.image ? <img src={show.image.medium} /> : null}
        </>
    );
};

const Post = ({ show }) => {
    return (
        <MyLayout>
            <Content show={show} />
        </MyLayout>
    );
};

Post.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return { show };
};

export default Post;
