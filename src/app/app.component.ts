import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";

@Component({
    selector: 'hinv-root',
    standalone: true,
    templateUrl: './app.component.html',
    // template:`
    // <h1>Using Inline Template instead of External Template URL</h1>
    // `,
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RoomsComponent]
})
export class AppComponent {
  title = 'hotelinventoryapp1';
}
