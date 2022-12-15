import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias-a-seguir',
  templateUrl: './noticias-a-seguir.page.html',
  styleUrls: ['./noticias-a-seguir.page.scss'],
})
export class NoticiasASeguirPage implements OnInit {

  public appPages = [
    { title: 'Noticias a seguir', url: '/noticias-a-seguir', icon: 'albums' },
    { title: 'Reportar situacion', url: '/reportar-situacion', icon: 'book' },
    { title: 'Mis situaciones', url: '/mis-situaciones', icon: 'accessibility' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
