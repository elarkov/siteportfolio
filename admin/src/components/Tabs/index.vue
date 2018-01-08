<template lang="pug">
  .tabs
    ul.list
      li.item(v-for="tab in tabs")
        router-link(
          :to="tab.href"
          exact-active-class="active-tab"
        ).link {{tab.name}}
</template>


<script>
  export default {
    data(){
      return {
        tabs: [
          {name: 'Таб 1', href: '/'},
          {name: 'Таб 2', href: '/works'},
          {name: 'Таб 3', href: '/blog'}
        ]
      }
    }
  }
</script>


<style src="styles/tabs.scss" lang="scss">

</style>
