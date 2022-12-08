let s = document.getElementById('s')

let darktheme = (ev)=>{
    let target = ev.currentTarget;
    target.className = 'black';
}

[s].forEach((element)=>{
    element.addEventListener('click', darktheme)
})

document.querySelector('.DkMd').addEventListener('click', () => {
    document.body.classList.toggle('dark')
}
)

function handleClick(element){
    element.innerHTML = "Light Theme"
}