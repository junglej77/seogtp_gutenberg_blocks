
import { __ } from '@wordpress/i18n';
import {
    useBlockProps, InspectorControls, InspectorAdvancedControls
} from '@wordpress/block-editor';
import {
    ResizableBox, PanelBody,
    PanelRow, TextControl
} from '@wordpress/components';
import './editor.scss';
export default function Edit({ attributes, setAttributes, toggleSelection }) {
    const { height, anchor } = attributes;
    return (
        <>
            <InspectorControls>
                <PanelBody
                    title='属性'>
                    <PanelRow>
                        <TextControl
                            label="高度设置"
                            value={height}
                            onChange={(nextValue) => {
                                setAttributes({
                                    height: nextValue,
                                });
                            }}
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <InspectorAdvancedControls>
                <TextControl
                    label="HTML锚点"
                    value={anchor}
                    onChange={(nextValue) => {
                        setAttributes({
                            anchor: nextValue,
                        });
                    }}
                />
            </InspectorAdvancedControls>
            <div
                {...useBlockProps()}
            >
                <ResizableBox
                    size={{
                        height,
                    }}
                    minHeight="50"
                    enable={{
                        top: false,
                        right: false,
                        bottom: true,
                        left: false,
                        topRight: false,
                        bottomRight: false,
                        bottomLeft: false,
                        topLeft: false,
                    }}
                    onResizeStop={(event, direction, elt, delta) => {
                        setAttributes({
                            height: height + delta.height,
                        });
                        toggleSelection(true);
                    }}
                    onResizeStart={() => {
                        toggleSelection(false);
                    }}
                >
                    <span class="promtText">空格</span>
                </ResizableBox>
            </div>
        </>
    );
}
