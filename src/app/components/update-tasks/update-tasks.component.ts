import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-update-tasks',
  templateUrl: './update-tasks.component.html',
  styleUrls: ['./update-tasks.component.css']
})
export class UpdateTasksComponent {
  taskForm: FormGroup;
  task: any;
  loading:boolean=false;
  updating:boolean=false;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private taskService: TaskService,
    private fb: FormBuilder
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      completed: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loading=true;
    this.loadTask();
  }

  loadTask(): void {
    const taskIdString = this.route.snapshot.paramMap.get('id');
    if (taskIdString !== null) {
      const taskId = +taskIdString;
  
      this.taskService.getTaskById(taskId).subscribe((task) => {
        this.task = task;
        this.taskForm.patchValue({
          title: this.task.title,
          completed: this.task.completed,
        });
        this.loading=false;
      });
    } else {
      alert('Task is not Found');
      this.loading=false;
      this.router.navigate(['/tasks']);
    }
  }
  

  updateTask(): void {
    this.updating=true;
    if (this.taskForm.valid) {
      const updatedTask = {
        ...this.task,
        ...this.taskForm.value,
      };

      console.log("updated tasks",updatedTask);
      this.taskService.updateTask(updatedTask).subscribe((updatedTask) => {
        console.log('Task updated successfully:', updatedTask);
        this.updating=false;
        setTimeout(() => {
          this.router.navigate(['/tasks']);
        }, 100);
      });
    }else{
      alert("Please fill all Values");
      this.updating=false;
    }
  }
}
