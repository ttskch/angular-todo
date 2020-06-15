import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit {

  constructor() { }

  @Input() task;

  ngOnInit(): void {
  }

  isOverdue(task) {
    return !task.done && task.deadline < (new Date()).setHours(0, 0, 0, 0);
  }
}
