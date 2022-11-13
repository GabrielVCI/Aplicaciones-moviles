import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';


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
import Portada from './pages/Portada/portada';
import Acerca_de from './pages/Acerca de/acerca-de';
import Momentos from './pages/Momentos/momentos';
import Personajes from './pages/Personajes/personajes';
import Contratame from './pages/Contratame/contratame';
import Impacto from './pages/En mi vida/en-mi-vida';

import {people, qrCodeOutline, bonfire, personAdd, happy, flame, informationCircleOutline} from 'ionicons/icons'
setupIonicReact();

const App: React.FC = () => {
  return (
  
    <IonApp>
    <IonReactRouter>
      <IonMenu side='start' contentId='MenuApp'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Juego de Tronos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>

         <IonMenuToggle>
          
              <IonItem routerLink='/portada' routerDirection='none' lines='none'>
                <IonIcon color='medium' slot='start' icon={qrCodeOutline}></IonIcon>
                <IonLabel>Portada</IonLabel>            
              </IonItem>

              <IonItem routerLink='/personajes' routerDirection='none' lines='none'>
                <IonIcon color='medium' slot='start' icon={people}></IonIcon>
                <IonLabel>Personajes</IonLabel>
              </IonItem>

              <IonItem routerLink='/momentos' routerDirection='none' lines='none'>
                <IonIcon color='medium' slot='start' icon={flame}></IonIcon>
                <IonLabel>Momentos</IonLabel>             
              </IonItem>

              <IonItem routerLink='/acerca-de' routerDirection='none' lines='none'>
                <IonIcon color='medium' slot='start' icon={informationCircleOutline}></IonIcon>
                <IonLabel>Acerca de</IonLabel>
              </IonItem>

              <IonItem routerLink='/en-mi-vida' routerDirection='none' lines='none'>
                <IonIcon color='medium' slot='start' icon={happy}></IonIcon>
                <IonLabel>En mi vida</IonLabel>
              </IonItem>

              <IonItem routerLink='/contratame' routerDirection='none' lines='none'>
                <IonIcon color='medium' slot='start' icon={personAdd}></IonIcon>
                <IonLabel>Contratame</IonLabel>
              </IonItem>

            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id='MenuApp'>
          <Route path="/portada" component={Portada} exact />
          <Route path="/personajes" component={Personajes} exact />
          <Route path="/momentos" component={Momentos} exact />
          <Route path="/acerca-de" component={Acerca_de} exact />
          <Route path="/en-mi-vida" component={Impacto} exact />
          <Route path="/contratame" component={Contratame} exact />
          <Redirect to="/portada" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>

  );
};

export default App;
