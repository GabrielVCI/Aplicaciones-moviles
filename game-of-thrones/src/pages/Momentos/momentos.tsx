import React from 'react';
import { IonSlides, IonSlide, IonAccordion,IonItem,IonAccordionGroup, IonContent, IonLabel, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';

// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400
};

export const Momentos: React.FC = () => (
  <IonContent>
     <IonHeader>
                <IonToolbar>
                <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Momentos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonAccordionGroup>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>La Boda Roja</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <h3 className='ion-padding'>Uno de los acontecimientos mas sorpresivos de toda la serie, donde vemos la masacre del 
          Rey del Norte Robb Stark, de su madre Caitlin Tully y muchos de sus vasallos, ademas de su esposa con su hijo en el vientre.</h3>
          <iframe width="500" height="500" src="https://www.youtube.com/embed/uL5uk9KG29U" title="Juego de Tronos - La Boda Roja" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>La Batalla de los Bastardos y muerte de Ramsay Bolton</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <h3 className='ion-padding'>La mejor batalla de toda la serie, con un trasfondo oscuro y con un aparente claro ganador, con sorpresas y 
          muertes inesperadas, estrategias de batallas representativas de la epoca, drama familiar y un chin mas. Ninguna otra batalla se le acerca a los talones.</h3>
          <iframe width="500" height="500" src="https://www.youtube.com/embed/4AAVh6LzJ5Q" title="la batalla de los bastardos (ESPAÑOL LATINO) parte 1 HD" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>Muerte de los Frey</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <h3 className='ion-padding'>Una de las muertes mas satisfactorias de toda la serie, considerando quien es que la ejecuta y la forma 
          tan curiosa en que pasa. Después de matar a sus hijos, Walder Frey es alimentado con un pastel con la carne de sus hijos como principal condimento,
          luego de que lo prueba, una oculta Arya Stark le corta el cuello mientras lo mira.</h3>
           <iframe width="500" height="500" src="https://www.youtube.com/embed/_1F_6C8RH8g" title="Juego de Tronos  7x1 - Arya masacra a los Frey (Latino)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>               </div>
      </IonAccordion>
      <IonItem>
      <IonLabel>Mención honorifica a la muerte de Joffrey Baratheon.</IonLabel>

      </IonItem>
    </IonAccordionGroup>
  </IonContent>
);

export default Momentos;