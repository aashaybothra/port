import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OriginComponent } from './origin/origin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OriginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portAashay';
}
