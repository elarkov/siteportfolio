<template lang="pug">
  .about
      h2.about__title Страница Обо мне
      div.about__list
        skills-list(
          v-for="(skillType, index) in skillsTypes"
          :key="index"
          :skillType="skillType"
          :skills="skills"
        )
</template>


<script>
import {mapActions, mapGetters} from 'vuex';
  export default {
    data(){
      return {
        skillsTypes: ['frontend', 'backend', 'workflow']
      };
    },
    computed: {
      ...mapGetters(['skills'])
    },
    methods: {
      ...mapActions(['fetchSkills'])
    },
    created(){
      this.fetchSkills();
    },
    components: {
      skillsList: require('./skills-list')
    }
  }
</script>


<style src="styles/about.scss" lang="scss">

</style>
