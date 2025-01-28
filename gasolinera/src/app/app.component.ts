import { Component, OnInit, Inject } from '@angular/core';
import { StationsService, GasStation } from './stations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent implements OnInit {
  stations: GasStation[] = [];

  constructor(private stationsService: StationsService) { }

  ngOnInit(): void {
    this.stationsService.getStations().subscribe(data => {
      this.stations = data;
    });
  }
}
