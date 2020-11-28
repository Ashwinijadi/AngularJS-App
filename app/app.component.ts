import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'HelloWorld';
  imgUrl="/assets/BL_logo_square_png.png";
  url="https://www.bridgeLabz.com";
  userName: string ="";
  nameError: string="";

  ngOnInit(): void {
    this.title="Hello from Bridgelabz.";
  }  
  
  onClick($event)
{
  console.log("save button is clicked",$event);
  window.open(this.url,"_blank");
}

onInput($event)
{
  console.log("change event occured!!",$event.data);
  const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
  if(nameRegex.test(this.userName)){
    this.nameError="";
    return;
  }
else{
  this.userName="";
  this.nameError="Name is Incorrect!!";}
}
}