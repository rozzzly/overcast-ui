const React = require('react');
const {
    Title,
    Description,
    ArgsTable,
    Primary,
    Stories,
    PRIMARY_STORY,
    DocsContext,
} = require('@storybook/addon-docs');




/**
 * `preview.js` is configured to use this layout instead of
 * the default `addon-docs` configuration.
 *
 * This allows us to insert custom elements or change the order
 * of doc blocks as we see fit.
 */
const Layout = () => {
    // const isComponent = useIsComponent(DocsContext);
    const ctx = React.useContext(DocsContext);
    console.log(ctx);
    return (<div>
        <Title />
        <Description />

        {/* {isComponent && <ImportCopy />} */}
        {/* <Primary /> */}
        <Stories includePrimary />
        <ArgsTable story={PRIMARY_STORY} />
    </div>);
};


module.exports = Layout;
module.exports.Layout = Layout;