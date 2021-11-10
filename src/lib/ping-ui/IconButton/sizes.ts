export type Size = 'sm' | 'md' | 'lg' | 'xl';

const sizes: Record<Size, string> = {
	sm: 'h-10 w-10',
	md: 'h-14 w-14',
	lg: 'h-20 w-20',
	xl: 'h-24 w-24'
};

export default sizes;
