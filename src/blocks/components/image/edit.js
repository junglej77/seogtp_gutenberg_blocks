import SeoGtpBlocksSetup from '../../../admin/js/blocks-edit';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, MediaUpload } from '@wordpress/block-editor';
import { Button, TextareaControl } from '@wordpress/components';
import './editor.scss';
// 在编辑器外部定义默认的图片 URL
export default function Edit({ attributes, setAttributes }) {
    const { imageUrl, imageAlt } = attributes;
    const [imgWidth, setImgWidth] = useState('');
    const [imgHeight, setImgHeight] = useState('');
    const onSelectImage = (media) => {
        if (media && media.url) {
            setImgWidth(media.width);
            setImgHeight(media.height);
            setAttributes({ imageUrl: media.url });
        }
    };
    const blockProps = useBlockProps({
        style: {
            maxWidth: imgWidth,
            maxHeight: imgHeight,
        }
    });

    let styleSets = (
        <TextareaControl
            label="Text"
            help="Enter some text"
            value={imageAlt}
            onChange={(value) => {
                setAttributes({
                    imageAlt: value
                })
            }}
        />
    )

    return (
        <>
            <SeoGtpBlocksSetup>
                {styleSets}
            </SeoGtpBlocksSetup>
            <div {...blockProps}>
                <MediaUpload
                    onSelect={onSelectImage}
                    allowedTypes={['image']}
                    value={imageUrl}
                    render={({ open }) => (
                        <Button onClick={open}>Select Image</Button>
                    )}
                />
                {imageUrl && <img src={imageUrl} alt="Selected Image" />}
            </div>
        </>
    );
}
