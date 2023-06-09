import SeoGtpBlocksSetup from '../../../admin/js/blocks-edit';
import { __ } from '@wordpress/i18n';
import {
    useBlockProps, InnerBlocks
} from '@wordpress/block-editor';

import './editor.scss';
export default function Edit() {
    const blockProps = useBlockProps();
    return (
        <>
            <SeoGtpBlocksSetup />
            <div {...blockProps}
            >
                <InnerBlocks
                    placeholder="请将你的内容放在这里面"
                />
            </div>
        </>
    );
}
