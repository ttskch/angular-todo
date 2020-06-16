import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  constructor() { }

  @Output() addTask = new EventEmitter<Task>();

  newTask = {
    title: '',
    deadline: new Date(),
  };

  ngOnInit(): void {
  }

  submit(): void {
    this.addTask.emit({title: this.newTask.title, done: false, deadline: new Date(this.newTask.deadline)});
    this.newTask = {
      title: '',
      deadline: new Date(),
    };
  }
}
