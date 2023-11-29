import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-create-tasks',
  templateUrl: './create-tasks.component.html',
  styleUrls: ['./create-tasks.component.css']
})
export class CreateTasksComponent {
  taskForm!: FormGroup;
  submiting:boolean=false;

  constructor(private fb: FormBuilder, private taskService: TaskService) {}

  ngOnInit(): void {
    if(!localStorage.getItem('taskid')){
      localStorage.setItem('taskid','18')
    }
    
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      completed: ['false', Validators.required],
    });
  }

  onSubmit(): void {
    this.submiting=true;
    let localid=localStorage.getItem('taskid');
     if (this.taskForm.valid) {
      const newTask = {userId:1,id:this.convertintoNumber(localid),title:this.taskForm.value.title,completed:this.taskForm.value.completed==='false'?false:true}
      this.taskService.addTask(newTask).subscribe((task:any) => {
        console.log('Task added successfully:', task);
        alert("Task added successfully");
        this.taskForm.reset();
        this.submiting=false;
        localStorage.setItem('taskid',`${newTask.id.toString()}`);
      });
     } else{
      alert("Please fill all values");
     }
  }
  convertintoNumber(id:any){
    return +id+1;
  }
}
