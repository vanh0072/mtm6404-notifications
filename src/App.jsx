import React, { useState } from 'react';
import { notifications } from './notifications';
import NotificationList from './NotificationList';

function App() {
    const [notificationList, setNotificationList] = useState(notifications);

    const clearNotification = (id) => {
        setNotificationList(notificationList.filter(notification => notification.id !== id));
    };

    const clearAllNotifications = () => {
        setNotificationList([]);
    };

    return (
        <div className="app">
            <h1>Notifications ({notificationList.length})</h1>
            <NotificationList 
                notifications={notificationList} 
                onClear={clearNotification}
                onClearAll={clearAllNotifications}
            />
        </div>
    );
}

export default App;
