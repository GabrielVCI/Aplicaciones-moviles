import { Component, OnInit } from '@angular/core';
import {

  FormGroup,
  FormControl,
  Validators,
  FormBuilder

} from "@angular/forms"
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public navCtrl: NavController) {

    this.formularioLogin = this.fb.group({
      'cedula': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
   }

  async Ingresar(){
    
    let f = this.formularioLogin.value;

    //Llamar al api para comparar valores y acceder al otro menu

    this.navCtrl.navigateRoot("noticias-a-seguir");

  }
  ngOnInit() {
  }

}
