
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';
import { isObjectValueEqualNew } from '../../utils/utils.js';
export default function save({ attributes }) {
    const { wide, padding, backgroundColor } = attributes;
    function getStyles() {
        let styles = {}
        if (!isObjectValueEqualNew(padding, {
            top: 0, left: 15, right: 15, bottom: 0
        })) {
            styles.paddingTop = padding.top != 0 ? padding.top : undefined;
            styles.paddingRight = padding.right != 0 ? padding.right : undefined;
            styles.paddingBottom = padding.bottom != 0 ? padding.bottom : undefined;
            styles.paddingLeft = padding.left != 0 ? padding.left : undefined
        }
        if (backgroundColor != ' ') {
            styles.backgroundColor = backgroundColor
        }
        return styles;
    }
    const blockProps = useBlockProps.save({
        className: classnames({
            [`width-full`]: wide,
            [`width-limit`]: !wide,
        }),
        style: getStyles()
    });
    return (
        <section {...blockProps}
        >
            <InnerBlocks.Content />
        </section>
    );
}
