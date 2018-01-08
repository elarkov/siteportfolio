<template lang="pug">
  #app
    .header
      app-header
    .tabs
      app-tabs
    .content
      router-view
</template>


<script>
  export default {
    components: {
      appHeader: require('./components/Header'),
      appTabs: require('./components/Tabs'),
      appAbout: require('./components/About')
    }
  }
</script>


<style lang="scss">

</style>
