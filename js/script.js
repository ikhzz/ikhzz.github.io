const   itemPort = document.querySelectorAll('.p-item li'),
        filter = document.querySelectorAll('.filter li'),
        navlist = document.querySelectorAll('.nav li'),
        section = document.querySelectorAll('section')
let     itemindex = 0;

filter.forEach(element => {
    element.addEventListener('click', (e)=> {
        document.querySelector('.filter').querySelector('.active').classList.remove('active');
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

itemPort.forEach(((item, index) => {
    item.addEventListener('click', ()=> {
        itemindex = index;
        changePort();
        togglelightbox();
    }); 
}) );

function changePort() {
    imgsrc = itemPort[itemindex].querySelector('li img').getAttribute('src');
    category = itemPort[itemindex].getAttribute('data-category');
    document.querySelector('.lightportContent img').src = imgsrc;
    document.querySelector('.lightportCaption .counter').innerHTML = (itemindex+1) + ' of ' + itemPort.length;
    document.querySelector('.lightportCaption .text').innerHTML = category[0].toUpperCase() + category.slice(1);
}
function togglelightbox() {
    document.querySelector('.lightport').classList.toggle('show');
}
function nextport() {
    if(itemindex == itemPort.length -1) {
        itemindex = 0;
    } else {
        itemindex++;
    }
    changePort();
}
function prevport() {
    if(itemindex == 0) {
        itemindex = itemPort.length -1;
    } else {
        itemindex--;
    }
    changePort();
}

// lighbox end

navlist.forEach(((items)=> {
    const a = items.querySelector('li a')
    a.addEventListener('click', ()=> {
        section.forEach((items) => {
            items.classList.remove('back');
        })
        navlist.forEach((items,index)=> {
            if(items.querySelector('a').classList.contains('active')) {
                section[index].classList.add('back');
            }
            items.querySelector('a').classList.remove('active');
        })
        a.classList.add('active');
        (()=> {
            const item = items.querySelector('li a').getAttribute('href').split('#')[1];
            section.forEach((item)=> {
                item.classList.remove('active');
            })
            document.querySelector('#'+item).classList.add('active');
        })();
    });
}));

// section and nav end

document.querySelector('.nyam').addEventListener('click', () => {
    document.querySelector('aside').classList.toggle('open')
    document.querySelector('.content').classList.toggle('openc')
})

// burger end