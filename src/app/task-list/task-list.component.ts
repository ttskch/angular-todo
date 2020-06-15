import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  tasks = [
    {title: '牛乳を買う', done: false, deadline: new Date('2021-01-01')},
    {title: '可燃ゴミを出す', done: true, deadline: new Date('2020-01-02')},
    {title: '銀行に行く', done: false, deadline: new Date('2020-01-03')},
  ];

  newTask = {
    title: '',
    deadline: new Date(),
  };

  ngOnInit(): void {
  }

  addTask() {
    this.tasks.push({title: this.newTask.title, done: false, deadline: new Date(this.newTask.deadline)});
    this.newTask = {
      title: '',
      deadline: new Date(),
    };
  }

  isOverdue(task) {
    return !task.done && task.deadline < (new Date()).setHours(0, 0, 0, 0);
  }
}
