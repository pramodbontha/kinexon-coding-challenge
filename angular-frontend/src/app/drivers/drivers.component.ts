import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from './driver.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css'],
})


export class DriversComponent implements OnInit {
  drivers: Driver[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getDrivers();
  }

  private getDrivers() {
    this.http
      .get<[Driver]>('/drivers')
      .subscribe((drivers) => {
        this.drivers = drivers;
        console.log(this.drivers[3].driverCityOrigin)
      });
  }
}
