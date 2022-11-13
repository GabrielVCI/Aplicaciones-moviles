import React from 'react';
import { IonSlides, IonSlide, IonContent, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonLabel, IonItem } from '@ionic/react';

// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400
};

export const Impacto: React.FC = () => (
  <IonContent>
     <IonHeader>
                <IonToolbar>
                <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>En mi vida</IonTitle>
                </IonToolbar>
            </IonHeader>
    <IonLabel>
      <IonItem className='ion-padding'>
        <h1>IMPACTO DE LA SERIE EN MI VIDA</h1> 
        <h5>En mi opinion, esta es la mejor serie que existe, quizas me faltan series por ver, pero sin duda esta esta el top incluso en las listas
          de los criticos de las mejores series de la historia. Significó mucho para mi, ya que la disfruté.
        </h5>
        </IonItem>

    </IonLabel>

    
  </IonContent>
);

export default Impacto;