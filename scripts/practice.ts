interface Obj {
	foo: number;
	bar: string;
}

function getObj(n: number, s: string): Obj {
	return {
		foo: n,
		bar: s,
	}
}
 
console.log(getObj(123, 'read me'));

/**
 * then run the command:
 * 
 * node_modules/.bin/ts-node scripts/practice.ts
 * 
 */