import { IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonMenuButton, IonInput, IonLabel, IonButton, IonCard, IonCardContent } from '@ionic/react';
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

export default Sumadora;