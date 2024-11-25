// src/NotificationList.jsx
import React from 'react';

const NotificationList = ({ notifications, onClear, onClearAll }) => {
  if (!notifications || notifications.length === 0) {
    return <p>No notifications available.</p>;
  }

  return (
    <div>
      <h2>Notifications ({notifications.length})</h2>
      {notifications.map((notification) => (
        <div key={notification.id} className="notification">
          <p>
            <strong>{notification.name}:</strong> {notification.message}
          </p>
          <button onClick={() => onClear(notification.id)}>Clear</button>
        </div>
      ))}
      <button onClick={onClearAll}>Clear All Notifications</button>
    </div>
  );
};

export default NotificationList;