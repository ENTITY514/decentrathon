import React from 'react';
import * as PusherPushNotifications from "@pusher/push-notifications-web";
import style from './push_event.module.css';

interface IProviderProps {
    address: string
}

export const PushEvent: React.FC<IProviderProps> = ({ address }) => {
    const [isSubscribe,] = React.useState(false)
    const beamsClient = new PusherPushNotifications.Client({
        instanceId: "e9c7df1d-fdc0-4cbb-b044-e7f005a89e85",
    });

    const handleClick = () => {
        beamsClient.start()
            .then(() => {
                beamsClient.addDeviceInterest(address)
                if (localStorage.getItem("subscribe")) {
                    const items = JSON.parse(localStorage.getItem("subscribe") as string)
                    items.push(address)
                    localStorage.setItem("subscribe", JSON.stringify(items))
                }
                else {
                    localStorage.setItem("subscribe", JSON.stringify([address]))
                }
            })
            .then(() => console.log('Successfully registered and subscribed!'))
            .catch(console.error);
    }
    if (isSubscribe) {
        return (
            <div className={style.white_container}>
                Unsubscribe
            </div>
        )
    }
    else {
        return (
            <div className={style.green_container} onClick={handleClick}>
                Subcribe
            </div>
        )
    }
}