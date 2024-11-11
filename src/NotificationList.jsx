import React from 'react';

const NotificationList = ({ notifications, onClear, onClearAll }) => {
    return (
        <div>
            {notifications.length === 0 ? (
                <p>No notifications available.</p>
            ) : (
                <ul>
                    {notifications.map(notification => (
                        <li key={notification.id} className="notification"> {/* Add class here */}
                            <strong>{notification.name}:</strong> {notification.message} 
                            <button onClick={() => onClear(notification.id)}>Clear</button>
                        </li>
                    ))}
                </ul>
            )}
            {notifications.length > 0 && (
                <button onClick={onClearAll}>Clear All Notifications</button>
            )}
        </div>
    );
};

export default NotificationList;
