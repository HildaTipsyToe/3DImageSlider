import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImageScrolling3D';

}

var counter: number = 0;
window.onwheel = e =>{
  if(e.deltaY > 0){

    counter += 10;
    console.log("DownwardsDog");
    console.log(counter);
    
  }
  if(e.deltaY < 0){
    if(counter === 0){
      counter = 360
    }
    counter -= 10;
    console.log("Upwardsdog"); 
    console.log(counter);
       
  }
  counter = Math.max(Math.min(counter, 360), 0)
  document.getElementById('gallery_box_outer')!.style.transform = `perspective(1000px) rotateX(-8deg) rotateY(${-counter}deg)`;
  
}

