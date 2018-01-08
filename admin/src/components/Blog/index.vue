<template lang="pug">
  .blog
    h2.blog__title Страница Блог
    .container
      form.forma
        h3.forma__title Добавить запись
        .row-input
          app-input(
            placeholder="Название"
            type="text"
            v-model="fields.title"
          )
        .row-input
          app-input(
            type="date"
            v-model="fields.date"
          )
        .row-input
          textarea.input.forma-textarea(
            placeholder="Содержание"
            type="text"
            v-model="fields.text"
          )
        .row-input
          app-button(
            title="Добавить"
            @click="addPost"
          )
        .table.col
          table.posts
            tr(v-for="(post, index) in posts")
              td {{post.title}}
              td {{post.date}}
              td {{post.text}}
</template>


<script>
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    data: () => ({
      fields: {
        title: '',
        date: '',
        text: ''
      }
    }),
    methods: {
      ...mapMutations('posts', ['addBlogPost']),
      addPost(){
        const fieldsData = _.clone(this.fields)
        this.addBlogPost(fieldsData)
      }
    },
    computed: {
      ...mapGetters('posts', ['posts'])
    },
    components: {
      appInput: require('__common/Input'),
      appButton: require('__common/Button'),
    }
  }
</script>


<style src="styles/blog.scss" lang="scss">

</style>
