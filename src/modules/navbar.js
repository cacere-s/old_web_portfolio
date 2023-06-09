export default {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        menuToggle() {
            let navbar = document.querySelector('.navbar');
            navbar.classList.toggle('open') 
          },
        menuNavbar() {
            let navbar = document.querySelector('.navbar');
            navbar.classList.remove('open') 
        },
        scrollNavigation (){
            const secciones = document.querySelectorAll('.seccion')
            const menuItems = document.querySelectorAll('.menu-item');

            const funcionObserver = entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        const itemActual = Array.from(menuItems).find(item => item.dataset.url === entry.target.id)
                        itemActual.classList.add('activo')
                        for(const item of menuItems) {
                            if(item != itemActual) {
                                 item.classList.remove('activo')
                            }
                        }
                    }
                })
            }

            const observer = new IntersectionObserver( funcionObserver, {
                root: null,
                rootMargin: '0px',
                threshold: 0.8
            })
            
            secciones.forEach(seccion => observer.observe(seccion))

        }
        
    },
    getters: {

    }

}