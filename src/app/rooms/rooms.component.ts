import { Component } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  // constructor(){

  // }

  hotelName:string = 'Hilton-Hotel';
  noOfRooms:number = 10;
  hideRooms:boolean = false;

  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
