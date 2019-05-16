<template>
  <div>
    <div v-for="item of todoList">
      <div v-if="item.finished">
        已完成: {{item.content}}
      </div>
      <div v-else>
        未完成: {{item.content}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State } from 'vuex-class'

import { TodoItem } from '@/store.ts'

@Component
export default class TodoList extends Vue {
  @State('todoList') todoList!: TodoItem[];

  // 或者简写成这样的
  // @State todoList!: TodoItem[];

  // 写成这种格式就会报错，懵逼了
  // @State('todoList') todoList!: TodoItem[];
}
</script>
