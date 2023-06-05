const { createElement } = wp.element;
const { Fragment } = wp.element;
const { registerPlugin } = wp.plugins;
const { PluginPostStatusInfo } = wp.editPost;

registerPlugin('my-custom-element', {
    render: function () {
        return createElement(
            PluginPostStatusInfo,
            {},
            'This is my custom element!'
        );
    }
});
