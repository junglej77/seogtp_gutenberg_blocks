document.addEventListener('DOMContentLoaded', function () {
    wp.data.subscribe(function () {
        const toolbarLeftContainer = document.querySelector('.edit-post-header-toolbar');
        const toolbarRightContainer = document.querySelector('.interface-pinned-items');

        if (toolbarLeftContainer && toolbarLeftContainer.querySelector('.seogtp_gutenberg_blocks_library') === null) {
            const myButton = document.createElement('button');
            myButton.classList.add('seogtp_gutenberg_blocks_library');
            myButton.textContent = 'Design Library';

            toolbarLeftContainer.appendChild(myButton);
        }
        if (toolbarRightContainer && toolbarRightContainer.querySelector('.seogtp_gutenberg_blocks_setting') === null) {
            const myButton = document.createElement('button');
            myButton.classList.add('seogtp_gutenberg_blocks_setting');
            myButton.textContent = 'set';

            toolbarRightContainer.appendChild(myButton);
        }
    });
});
import React from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, __experimentalBorderControl as BorderControl } from '@wordpress/components';
import { useState } from '@wordpress/element';



const SeoGtpBlocksSetup = ({ children }) => {
    // 定义状态变量
    const [tabActive, setTabActive] = useState('style')
    // 在这里编写组件的逻辑和状态
    let tabs = [
        {
            variant: 'secondary',
            key: 'block',
            name: '属性'
        },
        {
            variant: 'secondary',
            key: 'style',
            name: '样式'
        },
        {
            variant: 'secondary',
            key: 'advanced',
            name: '高级'
        }
    ]
    const tabclick = (key) => {
        document.querySelector('.components-panel').setAttribute('data-seogtpGB-tab', key)
        setTabActive(key)
    }
    return (
        <InspectorControls >
            <PanelBody>
                {tabs.map(item =>
                    <Button
                        className={[`seogtpGB_tab seogtpGB_${item.key}`, item.key == tabActive && 'active']}
                        variant={item.variant}
                        onClick={() => {
                            tabclick(item.key)
                        }}
                    >
                        {item.name}
                    </Button>
                )}
            </PanelBody>
            {
                tabActive == 'block' && <BorderControl
                    colors={[
                        {
                            color: '#72aee6',
                            name: 'Blue 20'
                        },
                        {
                            color: '#3582c4',
                            name: 'Blue 40'
                        },
                        {
                            color: '#e65054',
                            name: 'Red 40'
                        },
                        {
                            color: '#8a2424',
                            name: 'Red 70'
                        },
                        {
                            color: '#f2d675',
                            name: 'Yellow 10'
                        },
                        {
                            color: '#bd8600',
                            name: 'Yellow 40'
                        }
                    ]}
                    label="Border"
                    onChange={function noRefCheck() { }}
                />
            }
            {
                tabActive == 'style' && children
            }
            {
                tabActive == 'advanced' && '高级设置'
            }
        </InspectorControls>
    )
};
export default SeoGtpBlocksSetup;
