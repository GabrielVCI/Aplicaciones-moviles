import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.page.html',
  styleUrls: ['./miembros.page.scss'],
})
export class MiembrosPage implements OnInit {

  constructor(private http: HttpClient) { }

  miembros = []

  ngOnInit() {
    this.http.get<any>('https://adamix.net/defensa_civil/def/miembros.php').subscribe(
      res => {
        console.log(res.datos)

        this.miembros = res.datos

        console.log(this.miembros)

 

      })
  }

}
