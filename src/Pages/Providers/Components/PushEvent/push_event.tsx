import React from 'react';
import style from './push_event.module.css';

export const PushEvent = () => {
    const [isSubscribe,] = React.useState(false)
    // const beamsClient = new PusherPushNotifications.Client({
    //   instanceId: "2d2fd629-0157-4b64-a648-96ea1d631e52",
    // });

    // beamsClient.start().then(() => {
    // });
    if (isSubscribe) {
        return (
            <div className={style.white_container}>
            </div>
        )
    }
    else {
        return (
            <div className={style.green_container}>
            </div>
        )
    }
}