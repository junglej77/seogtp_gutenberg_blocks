
import { __ } from '@wordpress/i18n';
import {
    useBlockProps, InnerBlocks, InspectorControls
} from '@wordpress/block-editor';
import {
    Panel,
    PanelBody,
    PanelRow,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import classnames from 'classnames';

import './editor.scss';
export default function Edit({ attributes, setAttributes }) {
    const flexAlignItemsOptions = [
        { value: 'flex-start', label: '顶部对齐' },
        { value: 'center', label: '居中' },
        { value: 'flex-end', label: '底部对齐' },
    ];
    const flexJustifyContentOptions = [
        { value: 'flex-start', label: '靠左' },
        { value: 'center', label: '居中' },
        { value: 'flex-end', label: '靠右' },
        { value: 'space-between', label: '间隔' },
        { value: 'space-around', label: '空隙' },
    ];
    const { alignItems, justifyContent } = attributes;

    const classes = useBlockProps({
        className: classnames({
            [`align-items-${alignItems}`]: alignItems != 'center',
            [`justify-content-${justifyContent}`]: justifyContent != 'space-between'
        })
    })
    return (
        <>
            <InspectorControls>
                <Panel>
                    <PanelBody title="对齐方式">
                        <PanelRow>
                            <ToggleGroupControl
                                label="水平"
                                value={justifyContent}
                                onChange={(nextValue) => {
                                    setAttributes({
                                        justifyContent: nextValue
                                    })
                                }}
                            >
                                {flexJustifyContentOptions.map(item => (
                                    <ToggleGroupControlOption
                                        label={item.label}
                                        value={item.value}
                                    />
                                ))}
                            </ToggleGroupControl>
                        </PanelRow>
                        <PanelRow>
                            <ToggleGroupControl
                                label="垂直"
                                value={alignItems}
                                onChange={(nextValue) => {
                                    setAttributes({
                                        alignItems: nextValue
                                    })
                                }}
                            >
                                {flexAlignItemsOptions.map(item => (
                                    <ToggleGroupControlOption
                                        label={item.label}
                                        value={item.value}
                                    />
                                ))}
                            </ToggleGroupControl>
                        </PanelRow>
                    </PanelBody>
                </Panel>
            </InspectorControls>
            <div
                {...classes}
            >
                <InnerBlocks />
            </div>
        </>
    );
}
