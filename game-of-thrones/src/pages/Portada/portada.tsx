import React from 'react';
import { IonSlides, IonSlide, IonContent, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import ReactAudioPlayer from 'react-audio-player';
// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400
};

export const Portada: React.FC = () => (
  <IonContent>
     <IonHeader>
                <IonToolbar>
                <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Portada</IonTitle>
                </IonToolbar>
            </IonHeader>
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
        <IonImg src="../assets/images/got.jpeg" alt="" style={{ height: '90vh'}}></IonImg>

      </IonSlide>
      <IonSlide>
      <IonImg src="../assets/images/got2.jpg" alt="" style={{ height: '90vh'}}></IonImg>
      </IonSlide>
      <IonSlide>
        <IonImg src="../assets/images/dragon.jpg" alt="" style={{ height: '90vh'}}></IonImg>

      </IonSlide>
      <IonSlide>
      <ReactAudioPlayer src="../assets/music/got.mp3" 
        autoPlay 
        controls 
        style={{width: '10%', backgroundColor: "black", }}
        />
      </IonSlide>

    </IonSlides>


  </IonContent>
);

export default Portada;