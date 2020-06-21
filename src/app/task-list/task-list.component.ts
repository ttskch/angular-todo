import { Component, OnInit } from '@angular/core';
import { fromDocument, Task, TaskDocument } from '../../models/task';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(
    private firestore: AngularFirestore,
  ) { }

  tasks$ = this.firestore.collection('tasks').valueChanges({idField: 'id'}).pipe(
    map((tasks: TaskDocument[]) => tasks.map(fromDocument).sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime()))
  );

  ngOnInit(): void {
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
