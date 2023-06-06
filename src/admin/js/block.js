import React from 'react';
import ReactDOM from 'react-dom';
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

import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, BlockControls } from '@wordpress/block-editor';
import { Button, PanelBody, Toolbar } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

registerBlockType('my-plugin/my-block', {
    // ...其他设置...
    apiVersion: 2,
    title: 'My Block',
    icon: 'smiley',
    category: 'design',
    example: {},
    edit: (props) => {
        const { isSelected } = props;
        function alert() {
            alert(1)
        };
        return (
            <Fragment>
                <BlockControls>
                    <Toolbar>
                        <Button
                            icon="admin-settings"
                            label="Additional Settings"
                            onClick={() => {
                                alert();
                            }}
                        />
                    </Toolbar>
                </BlockControls>
                {isSelected && (
                    <InspectorControls>
                        <PanelBody title="Additional Settings">
                            <p>这里是一些附加设置。</p>
                            {/* 插入你的设置控件 */}
                        </PanelBody>
                    </InspectorControls>
                )}
                <div>这是我的 block 的内容。</div>
            </Fragment>
        );
    },
    save: () => {
        return null;  // 使用 dynamic block，前台通过 PHP 渲染
    },
});