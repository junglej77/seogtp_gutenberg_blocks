import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function Save({ attributes }) {
    const { alignItems, justifyContent } = attributes;
    const classes = useBlockProps.save({
        className: classnames({
            [`align-items-${alignItems}`]: alignItems != 'center',
            [`justify-content-${justifyContent}`]: justifyContent != 'space-between'
        })
    })
    return (
        <div {...classes}>
            <InnerBlocks.Content />
        </div>
    );
}
