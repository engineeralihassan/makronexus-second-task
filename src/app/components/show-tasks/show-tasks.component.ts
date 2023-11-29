import { Component } from '@angular/core';
import { TaskService } from 'src/app/task.service';
@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTasksComponent {
  tasks: any[]=[];
  loading!:boolean;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loading=true;
    this.taskService.getTasks().subscribe((tasks) => {
      console.log("Tasks list :",tasks);
      this.tasks = tasks;
      this.loading=false;
    });
  }
  deleteTask(id:any): void {
    const userConfirmed = confirm('Are you sure you want to delete this task?');

    if (userConfirmed) {
      this.taskService.deleteTask(id).subscribe(() => {
        alert("Deleted Successfully");
         window.location.reload();
      });
    }
  }
}
