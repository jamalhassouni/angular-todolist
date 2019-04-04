import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'todolist';

  constructor(){
    console.log(" hello "+this.title)
    this.changeTitle("jamal")
  }

  changeTitle(title:string) :void{
    this.title=title
  }
}
