var list = document.querySelectorAll('li a ')
Array.from(list).forEach(Element=>{
    Element.addEventListener('click', ()=> {
    list.className = 'unselected'
      Element.classList.add('selected')
    })
})
var page = 1;