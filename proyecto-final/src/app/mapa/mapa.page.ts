import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
 import { GoogleMap, Marker } from '@capacitor/google-maps';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ModalPage } from '../modal/modal.page';
 
const apiKey = 'AIzaSyC0_Fny5J5eF58k1VGOXqmHq3hRYfm_B90';


 

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  @ViewChild
  ('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  constructor(private http: HttpClient, private modalCtrl: ModalController) { }

  datos = []
  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: 18.8902059,
          lng: -69.937567,
        },
        zoom: 8,
      },
    });

    this.addMarkers()
  }

  ionViewDidEnter(){

    this.createMap()

  }

  async addMarkers(){

    this.http.get<any>("https://adamix.net/defensa_civil/def/albergues.php").subscribe(res => {

      
      console.log(res.datos)
      this.datos = res.datos


      for(let i = 0; i < 52; i++){
        
      }

      console.log(parseFloat(this.datos[1]["lat"]))

      
        const markers: Marker[] = [
          {
            coordinate: {
              lat: 18.47,
              lng: -69.3
            },

            title: "Ciudad: San Pedro",
          
          }, 
        ];
        for (let i = 0; i < 52; i++){
          markers.push({
            coordinate: {
              lat: Number(this.datos[i]["lat"]),
              lng: Number(this.datos[i]["lng"])
            },
    

            title: 
            this.datos[i]["ciudad"] + 
            "\nCapacidad: " + this.datos[i]["capacidad"] +
            "\nEdificio: " + this.datos[i]["edificio"] + 
            "\nCoordinador: " + this.datos[i]["coordinador"] + 
            "\nTelefono: " + this.datos[i]["telefono"],

            
          })
        }

        

        const result = this.newMap.addMarkers(markers);

        this.newMap.setOnMarkerClickListener(async (marker)=>{
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

      


    })




  }
 


  


  ngOnInit() {
  }

}
