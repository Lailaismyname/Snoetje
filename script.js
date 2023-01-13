const offCanvasNav = document.getElementById('offCanvasNav');
const moreBtn = document.querySelector('.more-menu');
const mainContent = document.querySelector('main');

moreBtn.addEventListener('click', (e)=>{
    offCanvasNav.style.display = 'block';
    mainContent.style.display = 'none';
})
offCanvasNav.addEventListener('click', (e)=>{
    if(e.target.id == "offCanvasNav"){
        offCanvasNav.style.display = 'none';
        mainContent.style.display = 'flex';
    }
})