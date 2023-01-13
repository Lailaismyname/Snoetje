const offCanvasNav = document.getElementById('offCanvasNav');
const moreBtn = document.querySelector('.more-menu');

moreBtn.addEventListener('click', (e)=>{
    offCanvasNav.style.display = 'block';
})
offCanvasNav.addEventListener('click', (e)=>{
    if(e.target.id == "offCanvasNav"){
        offCanvasNav.style.display = 'none';
    }
})