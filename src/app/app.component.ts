import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentMediaComponent } from "./component-media/component-media.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentMediaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'media-project';
}
