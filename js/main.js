window.addEventListener('load', () => {


    const spinner = document.querySelector('.spinner');

    spinner.style.display = 'none';
    document.body.style.overflowY = 'auto';





    const butt = document.querySelector('.side-drawer'),
        nav = document.querySelector('nav');

    butt.addEventListener('click', function () {
        nav.classList.contains('nav-active') ? nav.classList.remove('nav-active') :
            nav.classList.add('nav-active')
    });





    const landing = document.querySelector('.landing'),
        letsgo = document.querySelector('.lets-go'),
        header = document.querySelector('header')


    window.onscroll = function () {

        if (this.scrollY < letsgo.offsetTop) {
            landing.style.transform = `translateY(-${this.scrollY}px)`;
            header.style.top = '0'
        }else{
            header.style.top = '-100%'
        }

    }
});