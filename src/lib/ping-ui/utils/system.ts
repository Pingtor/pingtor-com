type Cls = string | undefined | (() => undefined | string);

function addCls(cls: string) {
	return cleanup(cls);
}

export function provide(pred: boolean, style: Cls): Cls {
	return pred ? style : undefined;
}

function cleanup(cls: string) {
	return cls
		.trim()
		.replace(/\s*\n\s*/g, ' ')
		.split(' ');
}

export class ClassBuilder {
	defaults: string[];
	classes: string[];
	constructor(base: string) {
		const _base = cleanup(base);
		this.defaults = _base;
		this.classes = _base;
	}

	flush(): ClassBuilder {
		this.classes = this.defaults;
		return this;
	}

	extend(...classes: Cls[] | undefined): ClassBuilder {
		if (classes) {
			classes.forEach((cls) => {
				this.add(cls);
			});
		}
		return this;
	}

	add(cls: Cls): ClassBuilder {
		if (cls) {
			try {
				let _cls = cls as string;
				if (typeof cls === 'function') {
					_cls = cls();
				}
				this.classes = [...this.classes, ...addCls(_cls)];
			} catch (error) {
				//console.warn(error);
			}
		}
		return this;
	}

	addIf(pred: boolean, cls: Cls): ClassBuilder {
		this.add(provide(pred, cls));
		return this;
	}

	get(): string {
		return this.classes.join(' ');
	}
}
type AsProp = (prop: string) => string;

interface IGet<T> {
	fromProps: T;
	fallback?: keyof T;
	as: { [k in keyof T]: unknown };
}

export function find<T>({ fromProps, as }: IGet<T>): [typeof as, keyof T] {
	// eslint-disable-next-line prefer-const
	for (let key of Object.keys(fromProps)) {
		if (fromProps[key] !== undefined) {
			return [as[key], key as keyof T];
		}
	}
	return [undefined, undefined];
}

function createGetter<T>(props: IGet<T>) {
	return () => {
		const [result, key] = find<T>(props);
		if (result) {
			return [result, key];
		}

		return props.fallback
			? [props.as[props.fallback], props.fallback]
			: [undefined, undefined];
	};
}

export function getVariant<T>(props: IGet<T>): [AsProp, keyof T] {
	const get = createGetter<T>(props);
	const [result, key] = get();
	return [result as AsProp, key as unknown as keyof T];
}

export function getSize<T>(props: IGet<T>): [string, keyof T] {
	const get = createGetter(props);
	const [result, key] = get();
	return [result as string, key as unknown as keyof T];
}

export function getShape<T>(props: IGet<T>): [AsProp, keyof T] {
	const get = createGetter(props);
	const [result, key] = get();
	return [result as AsProp, key as unknown as keyof T];
}
