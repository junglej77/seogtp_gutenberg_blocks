import React from 'react';
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
import { InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyComponent = () => {
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
    const [tabActive, setTabActive] = useState('style')
    const tabclick = (key) => {
        console.log(key);
        setTabActive(key)
    }
    return (
        // 返回组件的 JSX 结构
        <InspectorControls>
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
        </InspectorControls>
    );
};

export default MyComponent;
