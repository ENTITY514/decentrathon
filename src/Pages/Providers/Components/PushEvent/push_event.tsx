import React from 'react';
import * as PusherPushNotifications from "@pusher/push-notifications-web";
import style from './push_event.module.css';

interface IProviderProps {
    address: string
}

export const PushEvent: React.FC<IProviderProps> = ({ address }) => {
    const [isSubscribe, setIsSubscribe] = React.useState(false)
    const beamsClient = new PusherPushNotifications.Client({
        instanceId: "e9c7df1d-fdc0-4cbb-b044-e7f005a89e85",
    });

    React.useLayoutEffect(() => {
        if (localStorage.getItem("subscribe")) {
            const items = JSON.parse(localStorage.getItem("subscribe") as string) as Array<string>
            items.forEach(element => {
                if (element === address) {
                    setIsSubscribe(true)
                }
            });
        }
    }, [])

    const handleClickSubscribe = () => {
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
            .then(() => {
                console.log('Successfully registered and subscribed!');
                setIsSubscribe(true)
            })
            .catch(console.error);
        setIsSubscribe(true)
    }

    const handleClickUnSubscribe = () => {
        beamsClient.start()
            .then(() => {
                beamsClient.removeDeviceInterest(address)
                if (localStorage.getItem("subscribe")) {
                    const items = JSON.parse(localStorage.getItem("subscribe") as string) as Array<string>
                    let i
                    items.forEach((item, index) => {
                        if (item === address) {
                            i = index
                        }
                    });
                    if (i) {
                        items.splice(i, 1)
                    }
                    localStorage.setItem("subscribe", JSON.stringify(items))
                }
            })
            .then(() => {
                console.log('Successfully unregistered and subscribed!');
                setIsSubscribe(false)
            })
            .catch(console.error);
    }

    if (isSubscribe) {
        return (
            <div className={style.white_container} onClick={handleClickUnSubscribe}>
                Unsubscribe
            </div>
        )
    }
    else {
        return (
            <div className={style.green_container} onClick={handleClickSubscribe}>
                Subcribe
            </div>
        )
    }
}