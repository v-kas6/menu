const  menu =[
    {
        id : '1',
        img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg',
        name: 'Buttermilk Pancakes',
        price : '$15.99',
        para: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`
    },
    {
        id : '2',
        img : 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg',
        name: 'Dinner Double',
        price : '$13.99',
        para: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`
    },
    {
        id : '3',
        img : 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg',
        name: 'Godzilla Millshake',
        price : '$6.99',
        para: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
    },
    {
        id : '4',
        img : 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg',
        name: 'Country Delight',
        price : '$20.99',
        para: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,`
    },
    {
        id : '5',
        img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg',
        name: 'Egg Attack',
        price : '$22.99',
        para: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`
    },
    {
        id : '6',
        img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg',
        name: 'Oreo Dream',
        price : '$18.99',
        para: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
    },
    {
        id : '7',
        img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg',
        name: 'Bacon Overflow',
        price : '$8.99',
        para: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`
    },
    {
        id : '8',
        img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg',
        name: 'American Classic',
        price : '$12.99',
        para: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`
    },
    {
        id : '9',
        img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg',
        name: 'Quarantine Buddy',
        price : '$166.99',
        para: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
    },
    {
        id : '10',
        img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg',
        name: 'Steak Dinner ',
        price : '$39.99',
        para: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
    },
]

const original = document.querySelector('#original')
const btnAll = document.querySelector('.all')
const btnBreakfast = document.querySelector('.breakfast')
const btnLunch = document.querySelector('.lunch')
const btnShakes = document.querySelector('.shakes')
const btnDinner = document.querySelector('.dinner')

const all = ['0','1','2','3','4','5','6','7','8','9']
const breakfast = ['0','3','6']
const lunch = ['1','4','7']
const shakes =  ['2','5','8']
const dinner = ['9']

window.addEventListener('load',runAll)
btnAll.addEventListener( 'click' ,runAll)
btnBreakfast.addEventListener('click',runBreakfast )
btnLunch.addEventListener('click',runLunch)
btnShakes.addEventListener('click',runShakes)
btnDinner.addEventListener('click',runDinner)

function runAll() {
    search(all) 
}

function runBreakfast(){
    search(breakfast)
}

function runLunch(){
    search(lunch)
}
function runShakes(){
    search(shakes)
}
function runDinner(){
    search(dinner)
}


function search(a){
   
    original.childNodes[1].childNodes[1].src =""
    original.childNodes[3].childNodes[1].childNodes[1].childNodes[1].textContent = ""
    original.childNodes[3].childNodes[1].childNodes[1].childNodes[3].textContent = ""
    original.childNodes[3].childNodes[3].childNodes[1].textContent = ""
    const clones = document.querySelectorAll('#clone') 
    if (clones.length > 0){
        for (const element of clones) {
            element.remove()
        }
    }

    for (let  i = 0; i <a.length; i++) {
      duplicate(i , a)
    }
}

function duplicate( i,a ){
    const clone = original.cloneNode(true)
    if(i == 0){

        original.childNodes[1].childNodes[1].src = menu[a[i]].img
        original.childNodes[3].childNodes[1].childNodes[1].childNodes[1].textContent = menu[a[i]].name
        original.childNodes[3].childNodes[1].childNodes[1].childNodes[3].textContent = menu[a[i]].price
        original.childNodes[3].childNodes[3].childNodes[1].textContent = menu[a[i]].para
       
    } else {

        clone.childNodes[1].childNodes[1].src = menu[a[i]].img
        clone.childNodes[3].childNodes[1].childNodes[1].childNodes[1].textContent = menu[a[i]].name
        clone.childNodes[3].childNodes[1].childNodes[1].childNodes[3].textContent = menu[a[i]].price
        clone.childNodes[3].childNodes[3].childNodes[1].textContent = menu[a[i]].para
        clone.id = 'clone'
        original.parentNode.appendChild(clone)
    }
}