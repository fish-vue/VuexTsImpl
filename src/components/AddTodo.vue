<template>
  <div>
      <input v-model="content">
      <button @click="addTodoHandler"> 提交todo</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {
  State,
  Mutation,
} from 'vuex-class'

import { TodoItem } from '@/store.ts'

@Component
export default class TodoList extends Vue {

  // 不加private浑身难受
  private content: string = '';

  // Vuex注入的addTodo方法，需要手动维护它的类型，哎，就当是写代码注释了
  @Mutation
  private addTodo !: (item: TodoItem) => void;

  addTodoHandler(){
    if (this.content === '') {
      return;
    }
    this.addTodo({
      id: Math.random(),
      content: this.content,
      finished: false
    });
    // 等价于store.commit('addTodo', { ... })
    this.content = ''
  }
}
</script>
