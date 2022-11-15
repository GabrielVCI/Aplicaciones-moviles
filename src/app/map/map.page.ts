import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  latitud = 0
  longitud = 0

  markerId: string;
  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;
  center = {
    lat:  this.latitud,
    lng:  this.longitud,
  }
  
  nombre = ''
  apellido = ''

 

  ngOnInit() {
  }

  async createMap() {

    if(this.longitud == 0 || this.latitud == 0 || this.nombre == "" || this.apellido == "" || this.latitud == undefined || this.longitud == undefined){

      alert("No puede dejar datos vacios");

    }else{
      this.newMap = await GoogleMap.create({
        id: 'capacitor-google-maps',
        element: this.mapRef.nativeElement,
        apiKey: environment.google_maps_api_key,
        config: {
          center: {
            lat: this.latitud,
            lng: this.longitud
          },
          zoom: 13,
        },
      });

      this.addMarkers();
    }
  }

  async addMarkers(){

    const markers: Marker[] = [
      {
        coordinate: {
          lat: this.latitud,
          lng: this.longitud
        },

        title: this.nombre + " " + this.apellido,
      
      }
    ];


    const results = await this.newMap.addMarkers(markers);

    this.newMap.setOnMarkerClickListener(async (marker) => {
      const modal = await this.modalCtrl.create({
        component: ModalPage,
        componentProps: {
          marker,
        },

        breakpoints: [0, 0.3],
        initialBreakpoint: 0.3
      });

      modal.present();
    })
  }
}
