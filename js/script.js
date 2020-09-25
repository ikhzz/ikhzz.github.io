const   filter = document.querySelector('.filter'),
        filters = filter.children,
        totalFilter = filters.length,
        itemPort = document.querySelectorAll('p-item'),
        totalPort = itemPort.length;

const filtera = document.querySelectorAll('.filter button')

console.log(filter)
console.log(filtera)

for(let i=0; i < totalFilter; i++) {
    filters[i].addEventListener('click', (e)=> {
        //console.log(filters[i].innerHTML)
    })
}
filtera.forEach(element => {
    element.addEventListener('click', (e)=> {
        console.log(element.innerHTML)
    })
});