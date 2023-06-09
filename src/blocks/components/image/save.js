
import { __ } from '@wordpress/i18n';
export default function save({ attributes }) {
    const { imageUrl, imageAlt } = attributes;

    return (
        <div>
            {imageUrl && (
                <img src={imageUrl} alt={imageAlt} />
            )}
        </div>
    );
}
