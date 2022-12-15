import { HttpClient,  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voluntario',
  templateUrl: './voluntario.page.html',
  styleUrls: ['./voluntario.page.scss'],
})
export class VoluntarioPage implements OnInit {

  constructor(private http: HttpClient) { }

  cedula = "";
  nombre = "";
  apellido = "";
  correo = "";
  telefono = "";
  password = "";

  data = new Array()

  ngOnInit() {

    this.http.get("https://adamix.net/defensa_civil/def/registro.php").subscribe(
      (res: any) => {
        console.log(res)
      })
  }

  createVolunteer(){

    let postData = {
      "cedula": this.cedula,
      "nombre": this.nombre,
      "apellido": this.apellido,
      "correo": this.correo,
      "telefono": this.telefono,
      "password": this.password
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json' );

    this.http.post<any>("https://adamix.net/defensa_civil/def/registro.php", JSON.stringify(postData)).subscribe(
      (res) => {

        console.log(JSON.stringify(res))
        res.exito = true

        this.data.push({
          "cedula": this.cedula,
          "nombre": this.nombre,
          "apellido": this.apellido,
          "correo": this.correo,
          "telefono": this.telefono,
          "password": this.password
      })
        // res.datos.push = postData
        console.log(res)
        console.log(this.data)
      }
    )

  }

}
