import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const MyLayout = ({ children }) => (
    <div style={layoutStyle}>
        <Header />
        {children}
    </div>
);

const withLayout = Page => {
    return () => (
        <div style={layoutStyle}>
            <Header />
            <Page />
        </div>
    );
};

const Layout = ({ content }) => (
    <div style={layoutStyle}>
        <Header />
        {content}
    </div>
);

export default MyLayout;

export {
    Layout,
    MyLayout,
    withLayout
}