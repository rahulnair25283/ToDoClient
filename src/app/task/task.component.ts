import {Component, OnInit, Inject, Input} from '@angular/core';
import {TasklistComponent} from '../tasklist/tasklist.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() newTask;
  private _tasks: String[];

  constructor(@Inject('task') private taskService) {
  }

  ngOnInit() {
    this.getAllTasks();
  }

  private getAllTasks() {
    this.taskService.getAllTasks().subscribe(tasks => this._tasks = tasks);
  }

  addTask() {
    this.taskService.addTask(this.newTask).subscribe(task => {
      console.log("task created");
      this.getAllTasks();
      this.newTask = null;
    });
  }

  deleteTask(id) {
    this.taskService.deleteTask(id).subscribe(task => {
      console.log("task deleted");
      this.getAllTasks();
    });

  }

  getTasks() {
    return this._tasks;
  }
}
