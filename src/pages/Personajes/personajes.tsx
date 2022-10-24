import React from 'react';
import { IonSlides, IonSlide, IonContent, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400
};

export const Personajes: React.FC = () => (
  <IonContent>
            <IonHeader>
        <IonToolbar>
        <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
          <IonTitle>Personajes</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
        <h1>Personaje 1</h1>
      </IonSlide>
      <IonSlide>
        <h1>Personaje 2</h1>
      </IonSlide>
      <IonSlide>
        <h1>Slide 3</h1>
      </IonSlide>
    </IonSlides>
  </IonContent>
);

export default Personajes;