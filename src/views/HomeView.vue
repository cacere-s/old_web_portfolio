<template>
  <div>

    <Navbar />
    <Particles />
    <Home/>
    <Project/>
    <Slider/>
    <Contact/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Components

import Navbar from '../components/Navbar.vue';
import Particles from '../components/Particles.vue'
import Home from '../components/Home.vue'
import Slider from '../components/Slider.vue'
import Project from '@/components/Project.vue'
import Contact from '@/components/Contact.vue';



export default defineComponent({
  name: 'HomeView',

  components: {
    Navbar,
    Particles,
    Home,
    Slider,
    Project,
    Contact,
    
  },
});
</script>

<style>
body {
  background: #242424;
}
main {
  width: 100%;
  height: 100%;
  background: #242424;
}
section {
  scroll-margin-top: 70px ;
}
</style>
