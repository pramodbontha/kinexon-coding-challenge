import { Component, Input, OnInit } from '@angular/core';
import {Driver} from '../driver.model';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  @Input() driver = {} as Driver;
  constructor() { }

  ngOnInit(): void {
  }

}
