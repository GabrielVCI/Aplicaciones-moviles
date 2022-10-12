import { IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent,   IonMenuButton, } from '@ionic/react';
import React from 'react';

const Video: React.FC = () => {
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Video</IonTitle>
              <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Gkz8-NR47oQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>          
          </IonContent>
        </IonPage>
      );
    };

export default Video;