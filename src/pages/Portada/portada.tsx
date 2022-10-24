import React from 'react';
import { IonSlides, IonSlide, IonContent, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

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
        <h1>Slide 1</h1>
      </IonSlide>
      <IonSlide>
        <h1>Slide 2</h1>
      </IonSlide>
      <IonSlide>
        <h1>Slide 3</h1>
      </IonSlide>
    </IonSlides>
  </IonContent>
);

export default Portada;

/*import React from 'react';
import { IonContent, IonPage, IonicSlides, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import 'swiper/modules/keyboard/keyboard.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/zoom/zoom.min.css';
import '@ionic/react/css/ionic-swiper.css';

export const Portada: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
          <IonTitle>Portada</IonTitle>
        </IonToolbar>
      </IonHeader>
        <Swiper
          modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]}
          autoplay={true}
          keyboard={true}
          pagination={true}
          scrollbar={true}
          zoom={true}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};
export default Portada;*/