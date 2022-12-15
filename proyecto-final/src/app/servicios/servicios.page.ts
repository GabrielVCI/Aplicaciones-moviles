import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

type NewType = Observable<any>;

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  constructor(private http: HttpClient) { }

  services = []
  
  images = ["./assets/images/EXTRICACION_VEHICULAR.jpg", "./assets/images/salvamento.jpg", "./assets/images/atencion-pre.jpeg"]

  mostrar(){

    // this.http.get('https://adamix.net/defensa_civil/def/servicios.php');


  }

  ngOnInit() {

    this.http.get<any>('https://adamix.net/defensa_civil/def/servicios.php').subscribe(
      res => {
        console.log(res.datos)

        this.services = res.datos

        console.log(this.services)

        // res.datos[0].foto = this.imagen_extraccion
        // res.datos[1].foto = this.imagen_salvamento
        // res.datos[2].foto = this.imagen_atencion

        console.log(res.datos[0].foto)
        
        // for(let i = 0; i < 2; i++){

        //   this.images = res.datos[1].foto

        // }

        console.log(this.images, "dd")
    })
  }

}
