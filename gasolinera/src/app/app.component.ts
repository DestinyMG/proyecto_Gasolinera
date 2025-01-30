import { Component, OnInit } from '@angular/core';
import { StationsService, GasStation } from './stations.service';
import { CommonModule } from '@angular/common';  // Importación agregada

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule]  // Agregado al decorador
})
export class AppComponent implements OnInit {
  title = 'gasolinera'; 
  stations: GasStation[] = [];

  constructor(private stationsService: StationsService) { }

  ngOnInit(): void {
    this.stationsService.getStations().subscribe(data => {
      this.stations = data;
    });
  }
}
