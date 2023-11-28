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

  constructor(private fb: FormBuilder, private taskService: TaskService) {}

  ngOnInit(): void {
    localStorage.setItem('taskid','300')
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      completed: ['', Validators.required],
    });
  }

  onSubmit(): void {
    
    let localid=localStorage.getItem('taskid');
alert("submittions");
    // if (this.taskForm.valid) {
      const newTask = {userId:1,id:this.convertintoNumber(localid),title:this.taskForm.value.title,completed:this.taskForm.value.completed==='false'?false:true}
      this.taskService.addTask(newTask).subscribe((task:any) => {
        console.log('Task added successfully:', task);
        alert("hurray")
      });
    // }
  }
  convertintoNumber(id:any){
    return +id;
  }
}
