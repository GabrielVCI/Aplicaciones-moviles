import React from 'react';
import { IonSlides, IonSlide, IonContent, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonPage } from '@ionic/react';

// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400
};

export const Acerca_de: React.FC = () => (
  <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
          <IonTitle>Acerca de</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
          <IonImg src="../assets/images/got.jpeg" alt="" style={{ width: 300, height: 400}}></IonImg>
          <IonCardTitle>Juego de Tronos</IonCardTitle>

            <IonCardSubtitle >2011 - 2019 (Finalizada)</IonCardSubtitle>
            
          </IonCardHeader>

          <IonCardContent>
         <h3 className="ion-padding">Es una serie de televisión de drama y fantasía medieval desarrollada por David Benioff y D. B. 
          Weiss y producida por la cadena HBO. Su argumento está inspirado en la serie de novelas Canción de hielo y 
          fuego, escrita por el estadounidense George R. R. Martin, y relata las vivencias de un grupo de personajes de 
          distintas casas nobiliarias en el continente ficticio de Poniente para tener el control del Trono de Hierro y 
          gobernar los siete reinos que conforman el territorio.</h3>

          <h2 className="ion-padding">Cantidad de temporadas: 8</h2>

          <h2 className="ion-padding">Cantidad de episodios: 73</h2>

          <h2 className="ion-padding">Creador: George R.R. Martin</h2>

          <h2 className="ion-padding">Personajes principales: Jon Snow, Daenerys Targaryen, entre otros.</h2>

          <h2 className="ion-padding">Personajes secundarios: Sansa Stark, La araña, entre muchos otros.</h2>

      </IonCardContent>
        </IonCard>


      </IonContent>
    </IonPage>
);

export default Acerca_de;