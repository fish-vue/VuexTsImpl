import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface TodoItem {
  id: number;
  content: string;
  finished: boolean;
}

const todoList: TodoItem[] = [{
  id: 2,
  content: '唱',
  finished: true,
}, {
  id: 3,
  content: '跳',
  finished: true,
}, {
  id: 4,
  content: '篮球',
  finished: false,
}];

export default new Vuex.Store({
  state: {
    todoList,
  },
  mutations: {
    addTodo(state, item: TodoItem) {
      state.todoList.push(item);
    },
  },
  actions: {

  },
});
