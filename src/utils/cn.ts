/**
 * Template string based utility function for setting classNames  
 */
export const cn = (template: TemplateStringsArray, ...args: (string | boolean | undefined | number | null)[]) => {
	let res = ''

	for (let i = 0; i < template.length; i++) {
		res += `${template[ i ]}${args[ i ] || ''} `
	}
	return res.replace(/[\n\r\s\t]+/gm, " ").trim()
}
