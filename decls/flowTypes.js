declare class describe {
	static (description: string, spec: () => void): void;
}

declare class it {
	static (description: string, spec: () => void): void;
}

declare type Vector = {
  x: number,
  y: number,
}
