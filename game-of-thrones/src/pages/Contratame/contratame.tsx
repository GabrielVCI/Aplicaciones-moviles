import React from 'react';
import { IonSlides, IonSlide, IonContent, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/react';

// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400
};

export const Contratame: React.FC = () => (
  <IonContent>
     <IonHeader>
                <IonToolbar>
                <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Contratame</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonCard>
          <IonCardHeader>
          <IonImg src="../assets/images/fotopersonal.jpeg" alt="" style={{ width: 300, height: 400}}></IonImg>
          <IonCardTitle>Gabriel Alejandro Valdez Corporan</IonCardTitle>

            <IonCardSubtitle>gabrielvcorporan@gmail.com | 849-362-2217</IonCardSubtitle>
            <IonCardSubtitle></IonCardSubtitle>

            
          </IonCardHeader>

          <IonCardContent>
         <h3 className="ion-padding">Soy un desarrollador fullstack y movil con conocimientos de ASP.NET CORE, Ionic, Flutter y React Native, 
         entusiasta del aprendizaje y de la innovacion.</h3>

      </IonCardContent>
        </IonCard>
  </IonContent>
);

export default Contratame;
