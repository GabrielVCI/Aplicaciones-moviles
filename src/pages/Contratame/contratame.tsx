import React from 'react';
import {IonImg, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonButtons, IonMenuButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';


/*
  Codigo comentado

  Gabriel Alejandro Valdez Corporan
  2020-10173
*/


export const Contratame: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
          <IonTitle>Contratame</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>


    <IonCard style={{width: 400, height: 600, marginLeft: 50}}>
      <img alt="Silhouette of mountains" src="../assets/images/fotopersonal.jpeg" style={{width: 400}}/>
      <IonCardHeader>
        <IonCardTitle>Gabriel Alejandro Valdez Corporan</IonCardTitle>
        <IonCardSubtitle>2020-10173</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Esta es mi presentacion.
      </IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Contratame;
