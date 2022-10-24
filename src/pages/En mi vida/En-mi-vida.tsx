/*import { IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonMenuButton, IonInput, IonLabel } from '@ionic/react';
import React from 'react';
import { useState } from 'react';

const Calculadora: React.FC = () => {

    let [input, setInput] = useState<string>('');

    if (input === ""){
        input = "0";
    }

    let nums = parseInt(input);

    let resultado = nums * 1

    const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Calculadora</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
            <IonGrid>
            <IonRow>
            <IonCol>
                <h1>Ingrese el numero a multiplicar</h1>
                <IonInput type='number' value={input} placeholder="Ingrese el numero" onIonChange={(e: any) => setInput(e.detail.value)}></IonInput>
            </IonCol>
        </IonRow>
    </IonGrid>

            {Array.map(num => ( 
                <IonGrid>
                    <IonRow>
                      <IonCol>                           
                        <IonLabel>{num} x {input} = {resultado * num}</IonLabel>
                      </IonCol>
                    </IonRow>
                </IonGrid>
                ))
                }
            </IonContent>

        </IonPage>
    );
};

export default Calculadora;  */

import React from 'react';
import { IonSlides, IonSlide, IonContent, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

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
          <IonTitle>Impacto en mi vida</IonTitle>
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

export default Impacto;