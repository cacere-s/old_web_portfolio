<template>
  <div>
    <vue-particles style="width: 100%; height: 98vh; position: absolute; z-index: 0; top: 0;"
        color="#ffffff"
        :particleOpacity="0.7"
        :particlesNumber="50"
        shapeType="circle"
        :particleSize="2"
        linesColor="#ffffff"
        :linesWidth=".25"
        :lineLinked="true"
        :lineOpacity="0.5"
        :linesDistance="200"
        :moveSpeed="5"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
      ></vue-particles>
        
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({

  }),
  
  
  
}

</script>

<style>


</style>
