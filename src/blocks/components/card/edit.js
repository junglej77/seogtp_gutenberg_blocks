
import { __ } from '@wordpress/i18n';
import {
    useBlockProps, InnerBlocks, InspectorControls
} from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import {
    Panel,
    PanelRow,
    PanelBody,
    Button,
    ToggleControl,
    ColorPalette,
    __experimentalNumberControl as NumberControl,
    __experimentalBorderControl as BorderControl,
    __experimentalBoxControl as BoxControl
} from '@wordpress/components';
import classnames from 'classnames';
import MyComponent from '../../../admin/js/block';
import './editor.scss';
export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
        className: classnames({
        }),
    });

    return (
        <>
            <MyComponent />
            <div {...blockProps}
            >
                <InnerBlocks
                    placeholder="请将你的内容放在这里面"
                />
            </div>
        </>
    );
}
