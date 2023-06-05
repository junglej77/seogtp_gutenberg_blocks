
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
    const { borderRadius, borderShow, border, boxShadowShow,
        boxShadow, backgroundColor, padding } = attributes;
    const [borderValue, setBorderValue] = useState(border);
    const [boxShadowColor, setBoxShadowColor] = useState(boxShadowShow.color);//
    const [bgColor, setbgColor] = useState(backgroundColor);
    const [paddingValue, setPaddingValue] = useState(padding);
    function resetAttributes(attributeName) {
        switch (attributeName) {
            case 'borderRadius':
                setAttributes({ borderRadius: 5 });
                break;
            case 'border':
                setAttributes({
                    border: { width: 1, style: 'solid', color: '#000' },
                    borderShow: false,
                });
                setBorderValue({ width: 1, style: 'solid', color: '#000' });
                break;
            case 'boxShadow':
                setAttributes({
                    boxShadow: { x: 0, y: 0, blur: 10, spread: 0, color: 'rgb(0 0 0 / 38%)' },
                    boxShadowShow: true,
                });
                setBoxShadowColor('rgb(0 0 0 / 38%)');
                break;
            case 'backgroundColor':
                setAttributes({ backgroundColor: ' ' });
                setbgColor(' ');
                break;
            case 'padding':
                setAttributes({
                    padding: { top: 20, left: 20, right: 20, bottom: 20 },
                });
                setPaddingValue({ top: 20, left: 20, right: 20, bottom: 20 });
                break;
            default:
                break;
        }
    }

    function getStyles(attributes) {
        const { borderRadius, borderShow, border, boxShadowShow, boxShadow, backgroundColor, padding } = attributes;

        let styles = {
            borderRadius: borderRadius !== 5 ? borderRadius : undefined,
            borderWidth: borderShow && border.width !== 1 ? border.width : undefined,
            borderStyle: borderShow && border.style !== 'solid' ? border.style : undefined,
            borderColor: borderShow && border.color !== 'rgb(0 0 0 / 38%' ? border.color : undefined,
            boxShadow: boxShadowShow ? `${boxShadow.x}px ${boxShadow.y}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color}` : undefined,
            backgroundColor: backgroundColor !== ' ' ? backgroundColor : undefined,
            padding: padding !== '20px' ? `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}` : undefined,
        };

        return styles;
    }

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
                <Panel>
                    <PanelBody
                        title='边框设置'>
                        <PanelRow>
                            <NumberControl
                                label="边角设置"
                                value={borderRadius}
                                onChange={(nextValue) => {
                                    setAttributes({
                                        borderRadius: nextValue
                                    });
                                }}
                            />
                            <Button
                                variant="link"
                                onClick={() => resetAttributes('borderRadius')}
                            >
                                重置
                            </Button>

                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label="边线显示"
                                checked={borderShow}
                                onChange={() => {
                                    setAttributes({
                                        borderShow: !borderShow
                                    });
                                }}
                            />
                            <Button
                                variant="link"
                                onClick={() => resetAttributes('border')}
                            >
                                重置
                            </Button>

                        </PanelRow>
                        {
                            borderShow &&
                            <PanelRow>
                                <BorderControl
                                    label="边线设置"
                                    value={borderValue}
                                    enableAlpha={true}
                                    onChange={(nextValue) => {
                                        setAttributes({
                                            border: nextValue
                                        });
                                        setBorderValue(nextValue);
                                    }}
                                />
                            </PanelRow>
                        }
                        <PanelRow>
                            <ToggleControl
                                label="阴影显示"
                                checked={boxShadowShow}
                                onChange={() => {
                                    setAttributes({
                                        boxShadowShow: !boxShadowShow
                                    });
                                }}
                            />
                            <Button
                                variant="link"
                                onClick={() => resetAttributes('boxShadow')}
                            >
                                重置
                            </Button>
                        </PanelRow>
                        {
                            boxShadowShow &&
                            <PanelRow>
                                <NumberControl
                                    label="x偏移"
                                    value={boxShadow.x}
                                    onChange={(nextValue) => {
                                        let newObj = Object.assign({}, boxShadow, {
                                            x: nextValue
                                        })
                                        setAttributes({
                                            boxShadow: newObj,
                                        });
                                    }}
                                />
                                <NumberControl
                                    label="y偏移"
                                    value={boxShadow.y}
                                    onChange={(nextValue) => {
                                        let newObj = Object.assign({}, boxShadow, {
                                            y: nextValue
                                        })
                                        setAttributes({
                                            boxShadow: newObj,
                                        });
                                    }}
                                />
                                <NumberControl
                                    label="模糊"
                                    value={boxShadow.blur}
                                    onChange={(nextValue) => {
                                        let newObj = Object.assign({}, boxShadow, {
                                            blur: nextValue
                                        })
                                        setAttributes({
                                            boxShadow: newObj,
                                        });
                                    }}
                                />
                                <NumberControl
                                    label="扩展"
                                    value={boxShadow.spread}
                                    onChange={(nextValue) => {
                                        let newObj = Object.assign({}, boxShadow, {
                                            spread: nextValue
                                        })
                                        setAttributes({
                                            boxShadow: newObj,
                                        });
                                    }}
                                />
                            </PanelRow>
                        }
                        {
                            boxShadowShow &&
                            <PanelRow>
                                <span>阴影颜色</span>
                                <ColorPalette
                                    value={boxShadowColor}
                                    enableAlpha={true}
                                    onChange={(color) => {
                                        let newObj = Object.assign({}, boxShadow, {
                                            color: color
                                        })
                                        setAttributes({
                                            boxShadow: newObj,
                                        });
                                        setBoxShadowColor(color)
                                    }}
                                />
                            </PanelRow>
                        }

                    </PanelBody>
                    <PanelBody
                        title='背景颜色'>
                        <PanelRow>
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
                        </PanelRow>
                    </PanelBody>
                    <PanelBody
                        title='内间距'>
                        <PanelRow>
                            <BoxControl
                                values={paddingValue}
                                resetValues={{
                                    top: '20px', left: '20px', right: '20px', bottom: '20px'
                                }}
                                onChange={(nextValues) => {
                                    setAttributes({
                                        padding: nextValues,
                                    });
                                    setPaddingValue(nextValues)
                                }}
                            />
                        </PanelRow>
                    </PanelBody>
                </Panel>
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
