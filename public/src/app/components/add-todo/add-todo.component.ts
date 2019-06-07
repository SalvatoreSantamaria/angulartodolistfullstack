import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      title: this.title, // the input in the component is bound to title with [(ngModel)] (this.title is on line 9)
      completed: false
    };
    this.addTodo.emit(todo);

  }

}
