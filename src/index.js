
export function printMe() {
    console.log('I get called from index.js!');
}

export function doDomInteraction() {
    document.body.innerHTML = '<p>Hello World!!</p>';
}
