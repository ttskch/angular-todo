import { Component, OnInit } from '@angular/core';
import { fromDocument, Task, TaskDocument } from '../../models/task';
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
    this.firestore.collection('tasks').valueChanges({idField: 'id'}).subscribe((tasks: TaskDocument[]) => {
      this.tasks = tasks.map(fromDocument).sort((a: Task, b: Task) => a.createdAt.getTime() - b.createdAt.getTime());
    });
  }

  addTask(task: Task): void {
    const clone = Object.assign({}, task);
    delete clone.id;

    this.firestore.collection('tasks').add(clone);
  }

  updateTask(task: Task): void {
    const clone = Object.assign({}, task);
    delete clone.id;

    this.firestore.collection('tasks').doc(task.id).update(clone);
  }

  deleteTask(task: Task): void {
    this.firestore.collection('tasks').doc(task.id).delete();
  }
}
