import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(
    private firestore: AngularFirestore,
  ) { }

  tasks: Task[] = [
    {title: '牛乳を買う', done: false, deadline: new Date('2021-01-01')},
    {title: '可燃ゴミを出す', done: true, deadline: new Date('2020-01-02')},
    {title: '銀行に行く', done: false, deadline: new Date('2020-01-03')},
  ];

  ngOnInit(): void {
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.firestore.collection('tasks').add(task);
  }
}
