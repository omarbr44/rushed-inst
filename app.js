// tailwind configuration
tailwind.config = {
    theme: {
        extend: {
            colors:{
            "site-green": "#075210",
            "site-light-green": "#3aa636",
            "site-brown": "#32140a",
            }
        },
        fontFamily:{
            Roboto: ["Roboto, sans-serif"],
        },
        container: {
            padding: "0 0.5rem",
        },
        screens:{
            sm: {'max': '640px'},
            md: {'max': '1024px',
                'min': '640px'} ,
            lg: '1024px',
        }
},
}
    function showHideSideBar() {
        let sideBar = document.querySelector('#accessibility-sidebar')
        if(sideBar.classList.contains('left-0')) {
            sideBar.classList.add('-left-[120%]')
            sideBar.classList.remove('left-0')
        }
        else {
            sideBar.classList.add('left-0')
            sideBar.classList.remove('-left-[120%]')
        }
    }
    function showHidemainMenu() {
        let mainMenu = document.querySelector('#main-menu')
        if(mainMenu.classList.contains('right-0')) {
            mainMenu.classList.add('-right-[120%]')
            mainMenu.classList.remove('right-0')
        }
        else {
            mainMenu.classList.add('right-0')
            mainMenu.classList.remove('-right-[120%]')
        }
    }
    function showLinks(index) {
        let mainMenu = document.querySelector('#showLinks'+index)
        if(mainMenu.classList.contains('h-0')) {
            mainMenu.classList.add('h-fit')
            mainMenu.classList.remove('h-0')
        }
        else {
            mainMenu.classList.add('h-0')
            mainMenu.classList.remove('h-fit')
        }
    }