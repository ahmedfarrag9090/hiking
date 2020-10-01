(
    function app() {
        const butt = document.querySelector('.side-drawer'),
            nav = document.querySelector('nav');
            
        butt.addEventListener('click', function () {
            nav.classList.contains('nav-active') ? nav.classList.remove('nav-active') :
                nav.classList.add('nav-active')
        });


        const landing = document.querySelector('.landing'),
            letsgo = document.querySelector('.lets-go');


        window.onscroll = function () {

            if (window.scrollY < letsgo.offsetTop) {
                landing.style.transform = `translateY(-${window.scrollY}px)`;
            }

        }
    }
)();