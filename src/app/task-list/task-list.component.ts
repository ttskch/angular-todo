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

  tasks: Task[] = [];

  ngOnInit(): void {
    this.firestore.collection('tasks').valueChanges().subscribe((tasks: any[]) => {
      this.tasks = tasks.map(task => {
        task.deadline = task.deadline ? task.deadline.toDate() : null;
        return task;
      }) as Task[];
    });
  }

  addTask(task: Task): void {
    this.firestore.collection('tasks').add(task);
  }
}
