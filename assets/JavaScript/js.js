const loader = document.getElementsByClassName('loader')[0];
window.onload=function(){
    loader.classList.add('del');

    this.setTimeout(function(){
        loader.remove()
    }, 4000);
}

window.addEventListener('scroll',function(){
    var nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.screenY > 0)
})