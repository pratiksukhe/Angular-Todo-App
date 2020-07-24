import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/Todo';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos: Todo[];

  constructor(private todosrvice: TodoService) {}

  ngOnInit(): void {
    this.todosrvice.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  changeTodoStatus(todo: Todo) {
    this.todosrvice.changeStatus(todo);
  }

  deleteTodo(todo: Todo) {
    this.todosrvice.deleteTodo(todo);
  }
}
