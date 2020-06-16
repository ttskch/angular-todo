import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface Task {
  title: string;
  done: boolean;
  deadline?: Date;
}
export interface TaskDocument {
  title: string;
  done: boolean;
  deadline?: Timestamp;
}

export function fromDocument(doc: TaskDocument): Task {
  return {
    title: doc.title,
    done: doc.done,
    deadline: doc.deadline ? doc.deadline.toDate() : null,
  };
}
