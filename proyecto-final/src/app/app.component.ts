import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'albums' },
    { title: 'Historia', url: '/historia', icon: 'book' },
    { title: 'Servicios', url: '/servicios', icon: 'accessibility' },
    { title: 'Noticias', url: '/noticias', icon: 'newspaper' },
    { title: 'Videos', url: '/videos', icon: 'videocam' },
    { title: 'Albergues', url: '/albergues', icon: 'home' },
    { title: 'Mapa', url: '/mapa', icon: 'map' },
    { title: 'Medidas Preventivas', url: '/medidas-preventivas', icon: 'construct' },
    { title: 'Miembros', url: '/miembros', icon: 'people' },
    { title: 'Quiero ser voluntario', url: '/voluntario', icon: 'happy' },
    { title: 'Acerca de', url: '/acerca-de', icon: 'information' },
    { title: 'Iniciar Sesion', url: '/iniciar-sesion', icon: 'arrow-forward' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
