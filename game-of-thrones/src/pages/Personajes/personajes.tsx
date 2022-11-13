import React from 'react';
import { IonSlides, IonSlide, IonContent, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonImg } from '@ionic/react';

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
            <IonAccordionGroup>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>Daenerys Targaryen</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <h3 className='ion-padding'>Daenerys Stormborn de la Casa Targaryen, la primera con el nombre, 
            Reina de los Ándals y los Primeros Hombres, Protectora de los Siete Reinos, 
            la Madre de los Dragones, la Khaleesi del Gran Mar de Hierba y la Rompedora de Cadenas. Es la mujer mas poderosa de todo Westeros, 
            aunque sus inicios fueron sencillos.</h3>
            <IonImg src="../assets/images/daenerys.jpg" alt="" style={{ width: 250}} className="ion-margin"></IonImg>
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>Jon Snow</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <h3 className='ion-padding'>Conocido como un hijo bastardo del noble Ned Stark, es desterrado a la muralla por su padre y fue humillado, noble 
          y valiente, llega a ser uno de los personajes mas importantes de todo Westeros, y ademas se esconde una oscura verdad sobre el.</h3>
            <IonImg src="../assets/images/jon.jpg" alt="" style={{ width: 250}} className="ion-margin"></IonImg>
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>Cersei Lannister</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <h3 className='ion-padding'>fue el vigésimo gobernante de los Siete Reinos y la viuda del rey Robert Baratheon. 
           hija de Lord Tywin Lannister, hermana gemela de Jaime Lannister y hermana mayor de Tyrion Lannister. La antagonista mas despiada de todas.</h3>
            <IonImg src="../assets/images/cersei.jpeg" alt="" style={{ width: 250}} className="ion-margin"></IonImg>
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  </IonContent>
);

export default Personajes;