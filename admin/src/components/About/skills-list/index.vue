<template lang="pug">
  div.about__item
    .title {{skillType}}
    table.table
      skill-item(
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
        v-if = "checkSkillType(skillType) === skill.type"
        @removeSkill="removeSkill"
      )
    .addButton
      button.button(
        type="button"
        @click="addSkill"
      ) Добавить новый
      input.input-add(
        type="text"
        v-model="newSkill"
        @keydown.enter = "addSkill"
        :class="{error: validation.hasError('newSkill')}"
      )
      div.skill-valid {{ validation.firstError('newSkill') }}

</template>


<script>
import {mapMutations} from 'vuex';
import {Validator} from 'simple-vue-validator';
  export default {
    mixins: [require('simple-vue-validator').mixin],
    validators: {
      newSkill(value){
        return Validator.value(value).required('Поле должно быть заполнено')
      }
    },
    props: {
      skillType: String,
      skills: Array
    },
    data(){
      return {
        newSkill: ""
      }
    },
    //computed
    methods: {
      ...mapMutations(['addNewSkill', 'removeExistedSkill']),
      addSkill() {
        this.$validate().then(success => {
          if(!success) return;
            this.addNewSkill({
              id: Math.round(Math.random() * 10000),
              name: this.newSkill,
              percents: 0,
              type: this.checkSkillType(this.skillType)
        });
        this.newSkill = '';
        this.validation.reset();
        });
      },
      removeSkill(skillID){
        this.removeExistedSkill(skillID)
      },
      checkSkillType(skillType){
        switch(skillType){
          case 'frontend' :
            return 1;
          case 'workflow' :
            return 2;
          case 'backend' :
            return 3;
        }
      }
    },
    //huks
    components: {
      skillItem: require('../skill')
    }
  }
</script>


<style src="styles/skills-list.scss" lang="scss">

</style>
