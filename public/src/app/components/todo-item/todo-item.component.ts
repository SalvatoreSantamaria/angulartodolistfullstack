import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import { Todo } from 'src/app/models/todo';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo; // taking in
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter(); // type is todo. have to catch this in todos.component.html
  @Output() updateToggle: EventEmitter<Todo> = new EventEmitter(); // adding this for completed- will this work?
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

// Set Dynamic Classes
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed // this.todo comes from the input. 'is-completed' has to be in quotes because it is hypenated
    };
    return classes;
  }

  onToggle(todo) {
    // toggle in UI
    // console.log('toggle');
    todo.completed = !todo.completed; // setting this to whatever it is not. this changes the UI (strikethrough) on the page
    console.log('from todo-item.component.ts. onToggle todo is', todo);
    this.updateToggle.emit(todo);

  }
  // clicking the delete button in this component sends off event, emitting this as output (see @Output above)
  // catching it in todos.component.html, and setting it to deleteTodo in the todos.component.ts
  onDelete(todo) { // take in todo param
    console.log('from todo-item.component.ts. delete', todo);
    this.deleteTodo.emit(todo); // passing in todo param

  }
}

