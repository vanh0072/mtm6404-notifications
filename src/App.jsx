// src/App.jsx
import React, { useState } from 'react';
import { notifications as initialNotifications } from './notifications'; // Import notifications
import NotificationList from './NotificationList'; // Import NotificationList component
import './index.css'; // Import the CSS

const App = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  // Handle clearing an individual notification
  const handleClearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  // Handle clearing all notifications
  const handleClearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div>
      <h1>Notifications</h1>
      <NotificationList 
        notifications={notifications} 
        onClear={handleClearNotification} 
        onClearAll={handleClearAllNotifications} 
      />
    </div>
  );
};

export default App;
