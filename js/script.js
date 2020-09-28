const   filter = document.querySelector('.filter'),
        filters = filter.children,
        totalFilter = filters.length,
        itemPort = document.querySelectorAll('.p-item li'),
        totalPort = itemPort.length;

const filtera = document.querySelectorAll('.filter li')

for(let i=0; i < totalFilter; i++) {
    filters[i].addEventListener('click', (e)=> {
        //console.log(filters[i].innerHTML)
    })
}
filtera.forEach(element => {
    element.addEventListener('click', (e)=> {
        filter.querySelector('.active').classList.remove('active');
        element.classList.add('active')
        
        const value = element.getAttribute('data-filter');
        itemPort.forEach( i => {
            if(value == i.getAttribute('data-category')) {
                i.classList.remove('hide')
                i.classList.add('show')
            } else if(value == 'all') {
                i.classList.remove('hide')
                i.classList.add('show')
            } else {
                i.classList.remove('show')
                i.classList.add('hide')
            }
        })
    })
});

// filter end

const   lightboxport = document.querySelector('.lightport'),
        lightportContent = document.querySelector('.lightportContent img'),
        lightportCaptiontext = document.querySelector('.lightportCaption .text'),
        lightportCaptioncounter = document.querySelector('.lightportCaption .counter'),
        lightportClose = document.querySelector('.lightportClose')
let itemindex = 0;

// itemPort.forEach( () => {
//     document.addEventListener('click', (e,index) => {
//         console.log( e)
//     })
// })

itemPort.forEach(tesfunc )
function tesfunc(item, index) {
    //console.log(item, index)
    item.addEventListener('click', ()=> {
        itemindex = index;
        changePort(item);
        togglelightbox();
    })
}

function changePort(data) {
    imgsrc = itemPort[itemindex].querySelector('li img').getAttribute('src');
    lightportContent.src = imgsrc;
    lightportCaptioncounter.innerHTML = (itemindex+1) + ' of ' + itemPort.length;
    //console.log(lightportContent)
}
function togglelightbox() {
    lightboxport.classList.toggle('show')
    
}
lightportClose.addEventListener('click', ()=> {
    lightboxport.classList.toggle('show')
})

function nextport() {
    //console.log(itemindex)
    if(itemindex == itemPort.length -1) {
        itemindex = 0
    } else {
        itemindex++;
    }
    changePort();
}
function prevport() {
    //console.log(itemindex)
    if(itemindex == 0) {
        itemindex = itemPort.length -1
    } else {
        itemindex--;
    }
    changePort();
}

// lighbox end

const   nav = document.querySelector('.nav'),
        navlist = document.querySelectorAll('.nav li'),
        totalnav = navlist.length,
        section = document.querySelectorAll('section')
        console.log(section)

for(let i=0; i<totalnav; i++) {
    const a = navlist[i].querySelector('a');
    a.addEventListener('click', ()=> {
        for(let k=0; k<section.length;k++) {
            section[k].classList.remove('back')
        }
        for(let j=0; j<totalnav; j++) {
            console.log()
            if(navlist[j].querySelector('a').classList.contains('active')) {
                section[j].classList.add('back')
            }
            navlist[j].querySelector('a').classList.remove('active')
        }
        a.classList.add('active')
        showSection(a);
    })
}

function showSection(element) {
    const a = element.getAttribute('href').split('#')[1]
    for(let i=0; i<section.length;i++) {
        section[i].classList.remove('active')
    }
    document.querySelector('#'+a).classList.add('active')
}

const   nyam = document.querySelector('.nyam'),
        content = document.querySelector('.content'),
        aside = document.querySelector('aside')

nyam.addEventListener('click', () => {
    aside.classList.toggle('open')
    content.classList.toggle('openc')
})