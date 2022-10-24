/*import { IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonMenuButton, IonInput, IonLabel, IonButton, IonCard, IonCardContent } from '@ionic/react';
import React, { useRef } from 'react';
import { useState } from 'react';

const Sumadora: React.FC = () => {

    const [number, setNumber] = useState<number>();
    const [number2, setNumber2] = useState<number>();

    
    console.log(number, number2);
    const [calculoDeIMC, Resultado] = useState<number>();

    const Sumar = () => {
        const numero1 = number;
        const numero2 = number2;
        const sonIguales = "Son Iguales";

        if(!numero1 || !numero2){
            return;
        }
        numero1 > numero2 ? Resultado(numero1) : Resultado(numero2);
        // const result = +numero1 + +numero2;
        // Resultado(result);
    }

 
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Sumadora</IonTitle>
                </IonToolbar>
            </IonHeader>

           
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                        <IonLabel>Ingrese los numeros que quiere sumar</IonLabel>
                <IonInput type="number" value={number} placeholder="Ingrese un numero" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
                <IonInput type="number" value={number2} placeholder="Ingrese el otro numero" onIonChange={e => setNumber2(parseInt(e.detail.value!, 10))}></IonInput>      
                <IonButton onClick={Sumar}>Obtener el mayor</IonButton>
                
                {calculoDeIMC && (
                    <IonRow>
                    <IonCol>
                        <IonCard>
                            <IonCardContent>
                                <h2>{calculoDeIMC}</h2>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
                )}
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Sumadora;*/
import React from 'react';
import { IonSlides, IonSlide, IonContent, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400
};

export const Acerca_de: React.FC = () => (
  <IonContent>
            <IonHeader>
        <IonToolbar>
        <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
          <IonTitle>Acerca de</IonTitle>
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

export default Acerca_de;

