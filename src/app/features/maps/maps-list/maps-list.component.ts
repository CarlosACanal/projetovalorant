import { Component, OnInit } from '@angular/core';
import { MapsService } from 'src/app/services/maps.service';

@Component({
  selector: 'app-maps-list',
  templateUrl: './maps-list.component.html',
  styleUrls: ['./maps-list.component.scss']
})
export class MapsListComponent implements OnInit {
  maps!: any;

  constructor(private mapsService: MapsService) { }

  ngOnInit(): void {
    this.mapsService.getMaps().subscribe(maps => {
      this.maps = maps.data;
    })
  }

}
