<template lang="pug">
  .works
    h2.works__title Страница Мои работы
    .form
      h3.works__header Загрузить новую работу
      .row-input
        app-input(
          placeholder="Название проекта"
          type="text"
          v-model="fields.title"
        )
      .row-input
        app-input(
          placeholder="Технологии"
          type="text"
          v-model="fields.tech"
        )
      .row-input
        label.upload
          input.type-file(
            type="file"
            @change="getFile($event)"
          )
          .upload__icon
          .upload__text Загрузить картинку
        div.error-message {{validation.firstError('fields.file')}}
      .row-input
        app-button(
          title="Добавить"
          :disabled="!fields.file || validation.hasError('fields.file')"
          @click="sendData"
        )
</template>


<script>
  import {Validator} from 'simple-vue-validator'
  import {mapActions} from 'vuex'

  export default {
    mixins: [require('simple-vue-validator').mixin],
    validators: {
      'fields.file': (value) => {
        return Validator.custom(() => {
          if (Validator.isEmpty(value)) return

            const allowedTypes = ['application/pdf', 'application/zip']

          if (!_.includes(allowedTypes, value.type)) {
            return 'Недопустимый формат файла, разрешены только .zip и .pdf'
          }
        })
      }
    },
    data: () => ({
      fields: {
        title: '',
        tech: '',
        file: null
      }
    }),
    methods: {
      ...mapActions('works', ['addNewWork']),
      getFile(event) {
        const file = event.target.files[0]
        this.fields.file = file
      },
      sendData(){
        this.$validate().then(success => {
          if(!success) return

            const formData = new FormData()

            formData.append('file', this.fields.file)
            formData.append('tech', this.fields.tech)
            formData.append('title', this.fields.title)

            this.addNewWork(formData)
        })
      }
    },
    //регистрируем компоненты
    components: {
      appInput: require('__common/Input'),
      appButton: require('__common/Button'),
    }
  }
</script>

<style src="styles/works.scss" lang="scss">

</style>