
import { __ } from '@wordpress/i18n';
import {
    useBlockProps, InnerBlocks, InspectorControls
} from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import {
    PanelBody,
    PanelRow,
    ToggleControl,
    __experimentalBoxControl as BoxControl,
    ColorPalette, Button
} from '@wordpress/components';
import classnames from 'classnames';
import { isObjectValueEqualNew } from '../../utils/utils.js';

import './editor.scss';
export default function Edit({ attributes, setAttributes }) {
    const { wide, padding, backgroundColor } = attributes;
    let widthLabel = wide ? '全宽' : '限宽';
    const [paddingValues, setPaddingValues] = useState(padding);
    const [bgColor, setbgColor] = useState(backgroundColor);

    function resetAttributes(attributeName) {
        switch (attributeName) {
            case 'backgroundColor':
                setAttributes({ backgroundColor: ' ' });
                setbgColor(' ');
                break;
            default:
                break;
        }
    }
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
    const blockProps = useBlockProps({
        className: classnames({
            [`width-full`]: wide,
            [`width-limit`]: !wide,
        }),
        style: getStyles()
    });


    return (
        <>
            <InspectorControls>
                <PanelBody
                    title='宽度设置'>
                    <PanelRow>
                        <ToggleControl
                            label={widthLabel}
                            checked={wide}
                            onChange={(nextValue) => {
                                setAttributes({
                                    wide: nextValue
                                });
                            }}
                        />
                    </PanelRow>
                </PanelBody>
                <PanelBody
                    title='内间距'>
                    <BoxControl
                        values={paddingValues}
                        resetValues={{
                            top: 0, left: 15, right: 15, bottom: 0
                        }}
                        onChange={(nextValues) => {
                            setAttributes({
                                padding: nextValues,
                            });
                            setPaddingValues(nextValues)
                        }}
                    />
                </PanelBody>
                <PanelBody
                    title='背景色'>
                    <ColorPalette
                        value={bgColor}
                        enableAlpha={true}
                        onChange={(color) => {
                            setAttributes({
                                backgroundColor: color,
                            });
                            setbgColor(color)
                        }}
                    />
                    <Button
                        variant="link"
                        onClick={() => resetAttributes('backgroundColor')}
                    >
                        重置
                    </Button>
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}
            >
                <InnerBlocks />
            </div>
        </>
    );
}
