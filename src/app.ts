const anchor = document.querySelector('a')!

console.log(anchor.href)

// const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form') as HTMLFormElement
console.log(form.children)

//Input

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('amount') as HTMLInputElement;
