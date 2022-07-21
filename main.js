const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.addEventListener('DOMContentLoaded', () => {
    const dog1 = document.querySelector('.dog1');
    const dog2 = document.querySelector('.dog2');
    const dog3 = document.querySelector('.dog3');

    const cat1 = document.querySelector('.cat1');
    const cat2 = document.querySelector('.cat2');
    const cat3 = document.querySelector('.cat3');

    const bird1 = document.querySelector('.bird1');
    const bird2 = document.querySelector('.bird2');
    const bird3 = document.querySelector('.bird3');


    dog1.addEventListener('click', ReplaceDog1);

    function ReplaceDog1() {
        chrome.storage.sync.set({
            dogNum: 0,
            keyPhrase1: "dog",
            keyPhrase2: "Dog"
        });
        console.log("Corgi")
    }

    dog2.addEventListener('click', ReplaceDog2);

    function ReplaceDog2() {
        chrome.storage.sync.set({
            dogNum: 1,
            keyPhrase1: "dog",
            keyPhrase2: "Dog"
        });
        console.log('Golden Doodle')
    }

    dog3.addEventListener('click', ReplaceDog3);

    function ReplaceDog3() {
        chrome.storage.sync.set({
            dogNum: 2,
            keyPhrase1: "dog",
            keyPhrase2: "Dog"
        });
        console.log("Chihuahua")
    }

    cat1.addEventListener('click', () => {
        chrome.storage.sync.set({
            dogNum: 3,
            keyPhrase1: "cat",
            keyPhrase2: "Cat"
        });
        console.log("Cat1")
    })

    cat2.addEventListener('click', () => {
        chrome.storage.sync.set({
            dogNum: 4,
            keyPhrase1: "cat",
            keyPhrase2: "Cat"
        });
        console.log("Cat2")
    })

    cat3.addEventListener('click', () => {
        chrome.storage.sync.set({
            dogNum: 5,
            keyPhrase1: "cat",
            keyPhrase2: "Cat"
        });
        console.log("Cat3")
    })

    bird1.addEventListener('click', () => {
        chrome.storage.sync.set({
            dogNum: 6,
            keyPhrase1: "bird",
            keyPhrase2: "Bird"
        });
        console.log("Bird1")
    })

    bird2.addEventListener('click', () => {
        chrome.storage.sync.set({
            dogNum: 7,
            keyPhrase1: "bird",
            keyPhrase2: "Bird"
        });
        console.log("Bird2")
    })

    bird3.addEventListener('click', () => {
        chrome.storage.sync.set({
            dogNum: 8,
            keyPhrase1: "bird",
            keyPhrase2: "Bird"
        });
        console.log("Bird3")
    })

})





const dogObj = {};

chrome.storage.sync.get({
    // the values in here are grabbed as default values
    dogNum: 0,
    keyPhrase1: "dog",
    keyPhrase2: "Dog"
}, function (items) {
    console.log(items.dogNum)
    dogObj.number = items.dogNum;
    dogObj.keyPhrase1 = items.keyPhrase1
    dogObj.keyPhrase2 = items.keyPhrase2

    replaceDog(dogObj);
})


function replaceDog(dogObj) {



    const theBody = document.body

    const bodyText = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p ,li, td, caption, span, table, tr, th, tbody')

    let keyPhrase1 = dogObj.keyPhrase1
    let keyPhrase2 = dogObj.keyPhrase2


    const imgArray = ["https://i.pinimg.com/originals/22/fd/1d/22fd1db541a0074b0ea3176814fddf60.jpg", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf26GoQeSosYhK9fYrcFYJ55Xq-09bggP0A&usqp=CAU', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F09%2Fchihuahua-laying-down-wooden-floor-1675701502-2000.jpg', 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80', 'https://images.unsplash.com/photo-1611267254323-4db7b39c732c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2848&q=80', 'https://images.unsplash.com/photo-1570018144715-43110363d70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80', 'https://www.tyla.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.tyla.com%2Fs3%2Fcontent%2Fe65975a35ea8fbbf27afdaba1d88a8c1.png', 'https://www.thesprucepets.com/thmb/QoFOF4pKqGKidE41VMEchaNPRIo=/1080x1080/filters:no_upscale():max_bytes(150000):strip_icc()/79590861_556150255242597_5576742561921620521_n-91402a6c979f429ab5e4554fd6a21f14.jpg', 'https://www.thesprucepets.com/thmb/h64TESUNS1ed6Ufb86nh-UtiQ2w=/700x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/65822349_609247572918523_5892072578642889552_n-4eeff611681340a79bdff9ac93549aaf.jpg']

    let imgLink = imgArray[dogObj.number]

    let replacementPhrase = '<img style=" height : 40px" src=' + imgLink + '>'

    let nReplaced = 0;


    for (let i = 0; i < bodyText.length; i++) {
        if (bodyText[i].innerHTML.includes(keyPhrase2) || bodyText[i].innerHTML.includes(keyPhrase1)) {


            if (!bodyText[i].innerHTML.includes("img") || !bodyText[i].innerHTML.includes("</a>")) {
                
                bodyText[i].innerHTML = bodyText[i].innerHTML.replaceAll(keyPhrase1, replacementPhrase)
                bodyText[i].innerHTML = bodyText[i].innerHTML.replaceAll(keyPhrase2, replacementPhrase)
                
                // console.log(nReplaced++)

                // this is supposed to check for the anchor tags to leave hyperlinks in tact. it does not work yet.
                /*
                let indexArray = [0];
                // store the index of the starting and closing brackets
                let indexNum = 0;

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
                */


            }
        }
    }

}


/*

1. breaking hyperlinks
2. breaking image links

3. storing options data

4. bootstrap security problems

5. manifest options (popup action)

*/