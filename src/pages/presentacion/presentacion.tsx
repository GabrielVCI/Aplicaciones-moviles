/*import { IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonMenuButton, IonLabel, IonImg } from '@ionic/react';
import React from 'react';

const Presentacion: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Presentacion</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                
                <IonGrid>
                    <IonRow>
                        <IonCol> 
                            <h1>Gabriel Alejandro Valdez Corporan</h1>
                            <h2>Matricula: 2020-10173</h2>
                            <h2>gabrielgamercavalier@gmail.com</h2>

                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};*/


import React from 'react';
import {IonImg, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonButtons, IonMenuButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

export const Presentacion: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
          <IonTitle>Presentacion</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
          <IonImg src='../assets/images/fotopersonal.jpeg' style={{ width: 100, height: 100, marginBottom: 15,  }}></IonImg>

            <IonCardSubtitle>2020-10173</IonCardSubtitle>
            <IonCardTitle>Gabriel Alejandro Valdez Corporan</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            gabrielgamercavalier@gmail.com
      </IonCardContent>
        </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default Presentacion;
