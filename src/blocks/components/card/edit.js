
import { __ } from '@wordpress/i18n';
import {
    useBlockProps, InnerBlocks, InspectorControls
} from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import {
    Panel,
    PanelBody,
    PanelRow,
    Button,
    ToggleControl,
    ColorPalette,
    __experimentalNumberControl as NumberControl,
    __experimentalBorderControl as BorderControl,
    __experimentalBoxControl as BoxControl
} from '@wordpress/components';
import classnames from 'classnames';
import './editor.scss';
export default function Edit({ attributes, setAttributes }) {
    const classes = useBlockProps({
        className: classnames({
            [`border-hide`]: !borderShow,
            [`boxShadow-hide`]: !boxShadowShow,
        }),
        style: getStyles(attributes)
    })
    return (
        <>
            <InspectorControls>
                <PanelBody>
                    这里时tab标签
                </PanelBody>
            </InspectorControls>
            <div
                {...classes}
            >
                <InnerBlocks
                    placeholder="请将你的内容放在这里面"
                />
            </div>
        </>
    );
}
