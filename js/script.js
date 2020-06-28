(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded',function(){
        console.log('Ready!!');

        // Open and close menu
        const btn_open = document.querySelector('.btn-open')
        const btn_close = document.querySelector('.btn-close')
        const sidebar = document.querySelector('.sidebar')

        btn_open.addEventListener('click',function(){
            sidebar.classList.add('active')            
        })
        btn_close.addEventListener('click',function(){
            sidebar.classList.remove('active')
        })

        // Launch animation
        const animate = document.querySelectorAll('.animate');

        function showScroll(){
            const scrollTop = document.documentElement.scrollTop;
            for(var i=0; i<animate.length; i++){
                const heightElement = animate[i].offsetTop;
                if(heightElement-500<scrollTop){
                    animate[i].style.opacity = 1;
                    animate[i].classList.add('launch')
                }
            }
        }

        window.addEventListener('scroll',showScroll)

        // Fix Menu
        window.addEventListener('scroll',function(){
            const menu = document.querySelector('.navegation')
            menu.classList.toggle('fixed',window.scrollY > 100)
        })
        

    });
})();