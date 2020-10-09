// @ts-nocheck


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 请注意，当前文件的后缀从 .js 改为了 .ts
// 如果你看到这行注释，请确认文件后缀是 .ts
// 然后就可以删掉本注释了!!!!!!!!!!!!!!!!


import {md} from "./plugins/md";
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'

export default {
	base: './',
	assetsDir: 'assets',
	plugins: [md()],
	vueCustomBlockTransforms: {
		/**
		 * 自定义处理 demo 标签块内容, 在编译时遇到 <demo> 块时，会将块中的内容包装后传递给 options 选项
		 *
		 * 这块代码主要的工作是：
		 * 将设置了自定义块的 .vue 文件的内容解析后作为当前组件对象的属性
		 */
		demo: (options) => {
			const {path} = options;
			const file = fs.readFileSync(path).toString();
			const parsed = baseParse(file).children.find(n => n.tag === 'demo');
			const title = parsed.children[0].content;
			const main = file.split(parsed.loc.source).join('').trim();
			return `export default function (Component) {
        Component.__sourceCode = ${
				JSON.stringify(main)
			}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim()
		}
	}
};
