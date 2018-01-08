<template lang="pug">
  tr
    td.title-skill {{skill.name}}
    td
      input.skill-input(
        type="text"
        :value = "skill.percents"
      )
    td.skill-percent %
    td
      button.button(type="button" @click="removeSkill") Удалить
</template>


<script>
  export default {
    props: {
      skill: Object
    },
    methods: {
      removeSkill() {
        this.$emit('removeSkill', this.skill.id);
      }
    }
  }
</script>


<style lang="scss">

</style>
