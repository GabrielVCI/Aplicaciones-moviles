import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, 
  IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, 
  IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Presentacion from './pages/presentacion/presentacion';
import Calculadora from './pages/calc/calculadora';
import {person, calculator, apps, logoYoutube, addOutline} from 'ionicons/icons'
import Sumadora from './pages/ObtenerMayor/sumadora';
import React from 'react';

/*
  Codigo comentado

  Gabriel Alejandro Valdez Corporan
  2020-10173
*/


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side='start' contentId='MenuApp'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>App with React + Ionic</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>

         <IonMenuToggle>
          
              <IonItem routerLink='/presentacion' routerDirection='none' lines='none'>
                <IonIcon color='medium' slot='start' icon={person}></IonIcon>
                <IonLabel>Presentacion</IonLabel>            
              </IonItem>

              <IonItem routerLink='/sumadora' routerDirection='none' lines='none'>
                <IonIcon color='medium' slot='start' icon={addOutline}></IonIcon>
                <IonLabel>Obtener mayor numero</IonLabel>
              </IonItem>

              <IonItem routerLink='/calculadora' routerDirection='none' lines='none'>
                <IonIcon color='medium' slot='start' icon={calculator}></IonIcon>
                <IonLabel>Calculadora</IonLabel>
              </IonItem>
  
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id='MenuApp'>
          <Route path="/presentacion" component={Presentacion} exact />
          <Route path="/sumadora" component={Sumadora} exact />
          <Route path="/calculadora" component={Calculadora} exact />
          <Redirect to="/presentacion" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

<IonApp>
      <IonReactRouter>
      <IonMenu side='start' contentId='MenuApp'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>App with React + Ionic</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
        <IonMenuToggle>
          
          <IonItem routerLink='/calculadora' routerDirection='none' lines='none'>
            <IonIcon color='medium' slot='start' icon={person}></IonIcon>
            <IonLabel>Presentacion</IonLabel>            
          </IonItem>

          </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
          <IonRouterOutlet id="MenuApp">
          <Route path="/calculadora" component={Calculadora} exact />

          </IonRouterOutlet>
        
      </IonReactRouter>
    </IonApp>