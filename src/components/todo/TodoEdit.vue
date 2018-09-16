<template>
  <div v-if="todo">
    title: {{ todo.title }}  <br>
    user: {{ todo.userId }} <br>
    id: {{ todo.id }} <br>
    completed: {{ todo.completed }} <br>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { httpService } from "@/services/http.service";

@Component({
  name: "todo-edit"
})
export default class ToDoListComponent extends Vue {
  @Prop({ required: true })
  private todoId!: string;
  private todo: any = {};

  created() {
    console.log(`https://jsonplaceholder.typicode.com/todos/${this.todoId}`);
    httpService
      .get(`https://jsonplaceholder.typicode.com/todos/${this.todoId}`)
      .then(res => {
        this.todo = res.data;
      });
  }
}
</script>