export type Variant = 'unstyled' | 'outline' | 'filled' | 'flushed';
const variants: Record<Variant, (prop: string) => string> = {
	outline: (prop) => {
		return `
		border
		hover:border-${prop === 'red' ? prop : 'gray'}-400
		`;
	},
	filled: (prop) => {
		return `
		bg-gray-200
		hover:bg-gray-300
		border-current
		text-gray-500
		focus:bg-white
		`;
	},
	flushed: (prop) => {
		return `
		rounded-none
		border-b
		outline-none
		focus:border-b
		focus:border-${prop}-500
		focus:shadow-underline`;
	},
	unstyled: (prop) => {
		return `
		outline-none`;
	}
};

export default variants;
