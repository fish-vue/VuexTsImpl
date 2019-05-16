<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TodoList/>
    <AddTodo/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';

@Component({
  components: {
    TodoList,
    AddTodo
  },
})
export default class Home extends Vue {}
</script>
