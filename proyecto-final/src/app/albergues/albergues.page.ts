import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { stringify } from 'querystring';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-albergues',
  templateUrl: './albergues.page.html',
  styleUrls: ['./albergues.page.scss'],
})
export class AlberguesPage implements OnInit {

  constructor ( private http:HttpClient){}

  // // longitud = 0;
  // // latitud = 0;

  // // @ViewChild('map')
  // // mapRef: ElementRef<HTMLElement>;
  // // map: GoogleMap;
  // // center = {
  // //   lat:  this.latitud,
  // //   lng:  this.longitud,
  // // }
  
  // // constructor() { }

  // // ionViewDidEnter(){
  // //     this.createMap()
  // // }

  // // async createMap(){

  // //   this.map = await GoogleMap.create(
  // //     {
  // //       id: "capacitor-google-maps",
  // //       apiKey: "AIzaSyC0_Fny5J5eF58k1VGOXqmHq3hRYfm_B90",
  // //       element: this.mapRef.nativeElement,
  // //        config: {
          
  // //         center:{
  // //           lat: 33.6,
  // //           lng: -117.9,
  // //         },
  // //         zoom: 8,
  // //       },

  // //     }
  // //   )
  // // }

  // // ngOnInit(): void {
      
  // // }

  // constructor(private modalCtrl: ModalController) { }

  // latitud = 0  
  // longitud = 0

  // markerId: string;
  
  // @ViewChild('map')
  // mapRef: ElementRef<HTMLElement>;
  // newMap: GoogleMap;
  // center = {
  //   lat:  this.latitud,
  //   lng:  this.longitud,
  // }
  
  // nombre = ''
  // apellido = ''

 

  // ngOnInit() {
  // }

  // async createMap() {

  //   if(this.longitud == 0 || this.latitud == 0 || this.nombre == "" || this.apellido == "" || this.latitud == undefined || this.longitud == undefined){

  //     alert("No puede dejar datos vacios");

  //   }else{
  //     this.newMap = await GoogleMap.create({
  //       id: 'capacitor-google-maps',
  //       element: this.mapRef.nativeElement,
  //       apiKey: environment.google_maps_api_key,
  //       config: {
  //         center: {
  //           lat: this.latitud,
  //           lng: this.longitud
  //         },
  //         zoom: 13,
  //       },
  //     });

  //     this.addMarkers();
  //   }
  // }

  // async addMarkers(){

  //   const markers: Marker[] = [
  //     {
  //       coordinate: {
  //         lat: this.latitud,
  //         lng: this.longitud
  //       },

  //       title: this.nombre + " " + this.apellido,
      
  //     }
  //   ];


  //   const results = await this.newMap.addMarkers(markers);

  //   this.newMap.setOnMarkerClickListener(async (marker) => {
  //     const modal = await this.modalCtrl.create({
  //       component: ModalPage,
  //       componentProps: {
  //         marker,
  //       },

  //       breakpoints: [0, 0.3],
  //       initialBreakpoint: 0.3
  //     });

  //     modal.present();
      
  //   })
  // }

  albergues = []

  index = 0

  ngOnInit(): void {
    for(let i = 0; i < 52; i++){

      this.index++;
    }

    this.http.get<any>("https://adamix.net/defensa_civil/def/albergues.php").subscribe(res => {

      this.albergues = res.datos
      console.log(res.datos)
      console.log(this.index)

    })
  }
}
