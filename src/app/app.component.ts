import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VoitureComponent } from './components/voiture/voiture.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VoitureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PredictVehicule';
}
