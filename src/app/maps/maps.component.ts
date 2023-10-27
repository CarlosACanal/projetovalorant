import { MapsService } from './../services/maps.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  maps!: any;

  constructor(private mapsService: MapsService) { }

  ngOnInit(): void {
    this.mapsService.getMaps().subscribe(maps => {
      this.maps = maps.data;
    })
  }

}
