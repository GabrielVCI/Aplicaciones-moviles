import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  constructor(private http: HttpClient) { }

  noticias = []

  ngOnInit() {

    this.http.get<any>('https://adamix.net/defensa_civil/def/noticias.php').subscribe(
      res => {
        console.log(res.datos)

        this.noticias = res.datos

        console.log(this.noticias)

        // res.datos[0].foto = this.imagen_extraccion
        // res.datos[1].foto = this.imagen_salvamento
        // res.datos[2].foto = this.imagen_atencion

        
        
        // for(let i = 0; i < 2; i++){

        //   this.images = res.datos[1].foto

        // }

      })
  }

}
