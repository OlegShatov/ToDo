import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from "../../../../Service/data-handler.service";
import {Task} from "../../../Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {
    this.dataHandler.tasksSubject.subscribe(tasks => this.tasks = tasks);
  }

}
