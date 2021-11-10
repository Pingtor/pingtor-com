export type Size = 'xs' | 'sm' | 'md' | 'lg';

const sizes: Record<Size, string> = {
	xs: 'h-8 text-xs',
	sm: 'h-10 text-sm',
	md: 'h-12 text-md',
	lg: 'h-14 text-xl'
};

export default sizes;
