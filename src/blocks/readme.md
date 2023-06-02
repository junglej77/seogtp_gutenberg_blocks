blocks 更偏向于描述功能和业务逻辑，

{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 2,
   // 主要用来控制块级元素的主要标签类名 wp-block-create-block-example-static
  "name": "create-block/example-static",
  "version": "0.1.0",
  // 用于选择快的时候的名字
  "title": "Example Static",
  // 分类
  "category": "widgets",
  // 显示图标
  "icon": "smiley",
  // 缩略描述
  "description": "Example block scaffolded with Create Block tool.",
  "supports": {
    "html": false
  },
  //"textdomain"是用于本地化/翻译的标识符，它指定了一个唯一的名称，用于在主题或插件中加载相应的本地化文本域。在这个例子中，"example-static"是本地化文本域的名称，可以在后续的代码中使用这个名称来加载与该块相关的本地化翻译。
  "textdomain": "example-static",
  //
  "editorScript": "file:./index.js",
  // 对应的 editor.scss
  "editorStyle": "file:./index.css",
  // 对应的 style.scss
  "style": "file:./style-index.css"
}