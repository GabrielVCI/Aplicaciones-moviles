import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medidas-preventivas',
  templateUrl: './medidas-preventivas.page.html',
  styleUrls: ['./medidas-preventivas.page.scss'],
})
export class MedidasPreventivasPage implements OnInit {

  constructor(private http: HttpClient) { }

  medidas = []

  ngOnInit() {

    this.http.get<any>('https://adamix.net/defensa_civil/def/medidas_preventivas.php').subscribe(
      res => {
        console.log(res.datos)

        this.medidas = res.datos

        console.log(this.medidas)

 

      })
  }

}
