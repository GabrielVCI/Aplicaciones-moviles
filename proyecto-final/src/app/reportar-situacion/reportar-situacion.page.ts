import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportar-situacion',
  templateUrl: './reportar-situacion.page.html',
  styleUrls: ['./reportar-situacion.page.scss'],
})
export class ReportarSituacionPage implements OnInit {

  constructor() { }

  titulo = ""
  descripcion = ""
  foto = ""
  latitud = ""
  longitud = ""


  ngOnInit() {
  }



  postSituacion(){

  }
}
