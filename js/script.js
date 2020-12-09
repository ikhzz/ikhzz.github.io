const  section = document.querySelectorAll('section'),
  navlist = document.querySelectorAll('.nav li'),
  listButton = document.querySelectorAll('.fullList button'),
  listMenu = document.querySelectorAll('.listMenu'),
  date = new Date

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

document.querySelector('.nyam').addEventListener('click', () => {
    document.querySelector('aside').classList.toggle('open')
    document.querySelector('.main').classList.toggle('openc')
})

listButton.forEach((e, i)=> {
  e.addEventListener('click', ()=> {
    listMenu[i].classList.toggle('listButton')
  })
})

document.querySelector('.age').innerHTML = `Age : ${date.getFullYear()- 1993} year old`
