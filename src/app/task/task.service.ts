import {Injectable, Inject} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TaskService {

  private actionUrl: string;
  private headers: Headers;

  constructor(@Inject('api') private api, private _http: Http) {

    this.actionUrl = `${this.api}/task`;

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  getAllTasks(): Observable<string[]> {
    let tasks = this._http.get(this.actionUrl, {headers: this.headers})
      .map((res: Response) => <string[]>res.json());
    console.log(tasks);
    return tasks;
  }

  addTask(taskTitle): Observable<any> {
    let body = JSON.stringify({title: taskTitle});
    return this._http.post(this.actionUrl, body, {headers: this.headers})
      .map((res: Response) => <any>res.json());
  }

  deleteTask(id): Observable<any> {
    let body = JSON.stringify({id: id});
    return this._http.delete(`${this.actionUrl}/${id}`, {headers: this.headers})
      .map((res: Response) => <any>res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }

}
