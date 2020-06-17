import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProj';
  bgColor = "red";
  show = false;

  changeStatus(){
    if(this.bgColor == "red"){
      this.bgColor = "green"
    }
    else{
      this.bgColor = "red";
    }
    this.show = ! this.show;
  }
}
