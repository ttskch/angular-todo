import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface Task {
  id?: string;
  title: string;
  done: boolean;
  deadline?: Date;
}
export interface TaskDocument {
  id: string;
  title: string;
  done: boolean;
  deadline?: Timestamp;
}

export function fromDocument(doc: TaskDocument): Task {
  return {
    id: doc.id,
    title: doc.title,
    done: doc.done,
    deadline: doc.deadline ? doc.deadline.toDate() : null,
  };
}
