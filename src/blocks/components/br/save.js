
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
export default function save({ attributes }) {
    const { height } = attributes;
    const classes = useBlockProps.save({ style: { height: height + 'px' } });
    return <div {...classes}></div>;
}
