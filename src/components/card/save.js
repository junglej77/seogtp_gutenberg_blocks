
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save({ attributes }) {
    const { borderRadius, borderShow, border, boxShadowShow,
        boxShadow, backgroundColor, padding } = attributes;

    // 边角的弧度
    let borderRadiusObj = {}
    if (borderRadiusObj != 5) {
        borderRadiusObj.borderRadius = borderRadius
    }
    // 根据borderShow是否展示设置样式,如果跟默认一样也不展示
    let borderObj = {}
    if (borderShow) {
        Object.keys(border).forEach((key) => {
            switch (key) {
                case 'width':
                    if (border.width != 1)
                        borderObj.borderWidth = border.width
                case 'style':
                    if (border.style != 'solid')
                        borderObj.borderStyle = border.style
                case 'color':
                    if (border.color != 'rgb(0 0 0 / 38%')
                        borderObj.borderColor = border.color
                default:
                    ;
            }
        })
    }
    // 根据borderShow是否展示设置样式,如果跟默认一样也不展示
    let boxShadowObj = {}
    if (boxShadowShow) {
        boxShadowObj.boxShadow = `${boxShadow.x}px ${boxShadow.y}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color}`
    }
    // 卡片的背景颜色
    let backgroundColorObj = {}
    if (backgroundColor != " ") {
        backgroundColorObj.backgroundColor = backgroundColor
    }
    // 卡片的内边距
    let paddingObj = {}
    if (padding != "20px") {
        paddingObj.padding = `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
    }

    const classes = useBlockProps.save({
        className: classnames({
            [`border-hide`]: !borderShow,
            [`boxShadow-hide`]: !boxShadowShow,
        }),
        style: {
            ...borderRadiusObj,
            ...borderObj,
            ...boxShadowObj,
            ...backgroundColorObj,
            ...paddingObj
        }
    })
    return (
        <div {...classes}>
            <InnerBlocks.Content />
        </div>
    );
}
