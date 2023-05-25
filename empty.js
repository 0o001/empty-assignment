let [] = [
	console.log('hello'),
	console.log('world')
];

let {} = ((function() {
	console.log('hello');
    console.log('world');
})(), true);

/*output: hello
          world
          hello
          world*/

//Only run sloppy mode
let = 'hello';
console.log(let);
