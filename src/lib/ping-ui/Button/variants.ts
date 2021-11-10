export type Variant = 'link' | 'outline' | 'solid' | 'ghost';
const variants: Record<Variant, (prop: string) => string> = {
	solid: (prop) => {
		return `
        border-black
        bg-black
        text-gray-200
        hover:text-black
        hover:bg-gray-200
        hover:border-black
        active:bg-gray-300
        focus:ring-gray-600
        disabled:hover:bg-black
        disabled:hover:text-gray-200
        disabled:hover:border-black
        `;
	},
	outline: (prop) => {
		return `
        text-black
        border-black
        hover:bg-gray-200
        active:bg-gray.300
        focus:ring-gray-600
        disabled:hover:bg-transparent
        disabled:active:bg-transparent
        `;
	},
	link: (prop) => {
		return `
        border-transparent
        hover:underline
        active:font-semibold
        focus:ring-gray-600

        `;
	},
	ghost: (prop) => {
		return `
        border-transparent
        hover:bg-gray-200
        active:bg-gray.300
        focus:ring-gray-600
        disabled:hover:bg-transparent
        `;
	}
};

export default variants;
