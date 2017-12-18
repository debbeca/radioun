import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  url:string;
  stream:any;
  promise:any;
  

  constructor() {
     this.url = "http://tsfjazz.ice.infomaniak.ch/tsfjazz-high.mp3";
   this.stream = new Audio(this.url);
   }

  ngOnInit() {
  }

  
 play() {
   this.stream.play();
   this.promise = new Promise((resolve,reject) => {
     this.stream.addEventListener('playing', () => {
       resolve(true);
     });

     this.stream.addEventListener('error', () => {
       reject(false);
     });
   });
   
  return this.promise;
};

pause() {
  this.stream.pause();
};

}
