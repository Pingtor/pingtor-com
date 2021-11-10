export type Shape = 'circle' | 'square';

const shapes: Record<Shape, (prop: string) => string> = {
	circle: (prop) => 'rounded-full',
	square: (prop) => `w-${prop}`
};

export default shapes;
