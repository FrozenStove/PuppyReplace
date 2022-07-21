

const theBody = document.body


const bodyText = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p ,li, td, caption, span, a, div')

let keyPhrase = "dog";
let replacementPhrase = "cat"


for (let i = 0; i < bodyText.length ; i++) {
    // if (text[i].innerHTML.includes(keyPhrase)){
        text[i].innerHTML = text[i].innerHTML.replaceAll(keyPhrase ,replacementPhrase)
    // }
}