import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Voiture } from '../../models/voiture';
import { VoitureService } from '../../services/voiture.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-voiture',
  standalone: true,
  imports: [FormsModule],
  providers: [VoitureService],
  templateUrl: './voiture.component.html',
  styleUrl: './voiture.component.css'
})
export class VoitureComponent {

  voitureService = inject(VoitureService)

  price: any ;

  voiture: Voiture = {
    brand: '',
    model: '',
    model_year: 0,
    fuel_type: '',
    transmission: '',
    ext_col: '',
    int_col: '',
    accident: '',
    clean_title: '',
    milage: 0
  }



  predict_price() {
    this.voitureService.predict(this.voiture).subscribe(res => {
      console.log(res)
      this.price = res.price;
    })
  }

}
