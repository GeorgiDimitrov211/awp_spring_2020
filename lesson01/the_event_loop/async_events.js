function foo(input) {
    console.log("Hello from foo():", input);
}

function bar(input) {
    console.log("Hello from bar():", input);
}

function baz(input) {
    console.log("Hello from baz():", input);
}

// Can you guess the order of the output in the console?
// Do they _always_ output in the same order when you try it?

baz("Before setTimeout");
setTimeout(() => bar("hello later"), 501);
setTimeout(() => foo("first foo"), 1000);
setTimeout(() => foo("second foo"), 1000);
setTimeout(() => bar("hello"), 500);