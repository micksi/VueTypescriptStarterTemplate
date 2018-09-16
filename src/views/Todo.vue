<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <todo-list v-if="!todoId"></todo-list>
    <todo-edit v-else :todoId="todoId"></todo-edit>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import TodoList from "@/components/todo/TodoList.vue"; // @ is an alias to /src
import TodoEdit from "@/components/todo/TodoEdit.vue"; // @ is an alias to /src

@Component({
  components: {
    TodoList,
    TodoEdit
  }
})
export default class Todo extends Vue {
  todoId: string = "";

  created() {
    console.log("created");
  }

  @Watch("$route", { immediate: true })
  loadTodo() {
    this.todoId = this.$route.params.id;
  }
}
</script>
