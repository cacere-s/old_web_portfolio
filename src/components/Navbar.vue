<template>
    <div class="navbar">
        <div class="logo">
            <h1 class="title">
                <span>Julio Caceres</span>
            </h1>
        </div>
        <div class="group">
            <ul class="navigation">
                <li >
                    <a class="menu-item" data-url="inicio" @click="menuNavbar" href="#inicio">Inicio</a>
                </li>
                <li>
                    <a class="menu-item" data-url="portafolio"  @click="menuNavbar" href="#portafolio">Portafolio</a>
                </li>
                <li>
                    <a class="menu-item" data-url="contacto" @click="menuNavbar" href="#contacto">Contacto</a>
                </li>
            </ul>
            <v-icon class="menuToggle" color="white" icon="mdi-menu" @click="menuToggle"></v-icon>
        </div>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
    data() {
        return {
            
        }
    },

    methods: {
        ...mapActions('navbar', ['menuToggle', 'scrollNavigation', 'menuNavbar'])
    },

    mounted(){
        this.scrollNavigation()
    }
}


</script>

<style>

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: #242424;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 5px 10px #0000007c;
    z-index: 99;
}

.logo {
    color: white;
    font-family: 'Arial', Helvetica, sans-serif;
    font-size: 0.5em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.4em;
}

.group {
    display: flex;
    align-items: center;
}

.group .navigation {
    position: relative;
    display: flex;
    gap: 30px;
}
.group .navigation li {
    list-style: none;
    
}
.group .navigation li a {
    position: relative;
    text-decoration: none;
    font-size: 0.8em;
    font-weight: 100;
    color: rgb(169, 169, 169);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    cursor: pointer;
}
.group .navigation li a::before {
    content: "";
    position: absolute;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: rgb(169, 169, 169);
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: right;
}
.group .navigation li a:hover::before {
    transform: scaleX(1);
    transform-origin: left;
}
.group .navigation .activo::before {
    content: "";
    position: absolute;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: rgb(169, 169, 169);
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: right;
    transform: scaleX(1);
    transform-origin: left;
}
.menuToggle{
    position: relative;
    display: none;
}

  /* responsive */
@media (max-width: 800px) {

    .menuToggle {
        position: absolute;
        display: block;
        font-size: 1.8em;
        cursor: pointer;
        z-index: 10;
        
    }
    
    .group .navigation {
        position: absolute;
        opacity: 0;
        visibility: hidden;
        left: 100%;
    } 
    div.open .navigation {
        top: 80px;
        opacity: 1;
        visibility: visible;
        left: 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #242424;
        height: calc(100vh - 80px);
        padding: 40px;
        border-top: 1px solid rgb(169, 169, 169);  
    }
    .group .navigation li p {
        display: inline-block;
        
    }
}

</style>