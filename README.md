
# Omerta

**Omerta** is a live chat and customer service tool designed to help businesses communicate with their customers in real-time. It provides a platform for businesses to offer instant support, engage with customers, and analyze customer interactions to improve service quality.

---

## **Features**

### **Frontend (React)
- **Real-Time Chat**: Engage in live chat with customers using WebSockets.
- **Analytics Dashboard**: View chat metrics and user activity.
- **User Authentication**: Login, logout, and user registration.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

### **Backend (Django)**
- **WebSocket Support**: Real-time communication using Django Channels.
- **RESTful APIs**: Endpoints for chat, analytics, and user management.
- **Database Models**: Stores user data, chat messages, and analytics.
- **Celery Tasks**: Background processing for analytics data.

---

## **Technologies Used**

### **Frontend**
- **React**: Frontend library for building user interfaces.
- **Axios**: HTTP client for making API calls.
- **Socket.IO**: Real-time communication with the backend.
- **Chart.js**: Data visualization for the analytics dashboard.
- **CSS**: Styling for components and pages.

### **Backend**
- **Django**: Backend framework for building APIs.
- **Django Channels**: WebSocket support for real-time communication.
- **Celery**: Background task processing.
- **Redis**: Message broker for Celery and WebSocket layer.
- **SQLite**: Default database for development.

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/thetruesammyjay/omerta.git
cd omerta
