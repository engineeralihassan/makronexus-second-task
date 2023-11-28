import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbarLinks:any[]=[{text:'tasks',route:''}, {text:'add',route:'/add'},{text:'task',route:'detail/1'}];

}
