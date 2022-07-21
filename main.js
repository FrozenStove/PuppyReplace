const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.addEventListener('DOMContentLoaded', () => {
    const dog1 = document.querySelector('.dog1');
    const dog2 = document.querySelector('.dog2');
    const dog3 = document.querySelector('.dog3');
    console.log(dog1)

    dog1.addEventListener('click', ReplaceDog1);

    function ReplaceDog1() {
        let dogNum = 0;
        replaceDog(dogNum)
        console.log("Corgi")
    }

    dog2.addEventListener('click', ReplaceDog2);

    function ReplaceDog2() {
        let dogNum = 1;
        replaceDog(dogNum)
        console.log('Golden Doodle')
    }

    dog3.addEventListener('click', ReplaceDog3);

    function ReplaceDog3() {
        let dogNum = 2;
        replaceDog(dogNum)
        console.log("Chihuahua")
    }
})

// replaceDog(2,document)

// function replaceDog(dognum,document) {

const theBody = document.body


const bodyText = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p ,li, td, caption, span, table, tr, th, tbody')

let keyPhrase = "dog";
let keyPhrase1 = "Dog";

let dogNum = 2;


const imgArray = ["https://i.pinimg.com/originals/22/fd/1d/22fd1db541a0074b0ea3176814fddf60.jpg", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf26GoQeSosYhK9fYrcFYJ55Xq-09bggP0A&usqp=CAU', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F09%2Fchihuahua-laying-down-wooden-floor-1675701502-2000.jpg',]

let imgLink = imgArray[dogNum]

let replacementPhrase = '<img style=" height : 30px" src=' + imgLink + '>'

let nReplaced = 0;

for (let i = 0; i < bodyText.length; i++) {
    if (bodyText[i].innerHTML.includes(keyPhrase) || bodyText[i].innerHTML.includes(keyPhrase1)) {


        if (!bodyText[i].innerHTML.includes("img") || !bodyText[i].innerHTML.includes("</a>")) {
            // console.log(nReplaced++)
            // console.log(bodyText[i].innerHTML)

            let indexArray = [0];
            // store the index of the starting and closing brackets
            let indexNum = 0;
            // let indexNum = 0;

            // console.log(bodyText[i].innerHTML)
            while (indexNum !== -1) {
                indexNum = bodyText[i].innerHTML.indexOf("<a", indexNum + 1);
                indexArray.push(indexNum);
                indexArray.push(bodyText[i].innerHTML.indexOf(">", indexNum));
            }
            if (indexNum.length > 1) {
                indexArray.pop()
                indexArray.pop()
            }
            // console.log(bodyText[i].innerHTML)
            // console.log(indexArray)
            // for ( let n = 0; n < bodyText[i].innerHTML.length; n++){
            //     if (bodyText[i].innerHTML.substring(n, n+2).includes('<a')) {
            //         while (bodyText[i].innerHTML[n] !== ">") {
            //             n++;
            //         }
            //         console.log(bodyText[i].innerHTML.substring(n))
            //     }


            bodyText[i].innerHTML = bodyText[i].innerHTML.replaceAll(keyPhrase, replacementPhrase)
            bodyText[i].innerHTML = bodyText[i].innerHTML.replaceAll(keyPhrase1, replacementPhrase)

        }
    }
}



// }


// console.log(bodyText[1])
// console.log(bodyText.length)



//{/* <img alt="" src="//upload.nni.jpg" decoding="async" width="81" height="64" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/0/05/Lengthy_body_Kanni.jpg/122px-Lengthy_body_Kanni.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/0/05/Lengthy_body_Kanni.jpg/162px-Lengthy_body_Kanni.jpg 2x" data-file-width="1183" data-file-height="935"></img> */}



// <a href="/w/index.php?title=Special:CreateAccount&amp;returnto=Domestication+of+the+dog" title="You are encouraged to create an account and log in; however, it is not mandatory"><span>Create account</span></a>