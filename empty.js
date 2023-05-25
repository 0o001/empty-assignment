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