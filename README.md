# Micro Tracker

### INF654

### Sokly Hour

### Assignment 4 : Implement Firebase and IndexedDB

## Project Title

The Micro Tracker is a progressive web application (PWA) designed to help users track their meals and nutrient intake. Users can easily add meals to their tracker, set daily calorie goals, and view their nutritional summary.

## Description

### Features

- **Add Meals**: Enter the meal name and its nutritional values (calories, carbohydrates, protein, fats) to add it to your tracker. The application prevents duplicates to maintain a clean meal list.
- **Set Daily Calorie Goal**: Users can specify a daily calorie goal to help manage their intake.
- **Remove Meals**: Remove meals from the list as you complete tracking for the day.
- **Daily Summary**: View a summary of total calories and nutrients consumed.
- **Offline Functionality**: The app supports offline use, storing meal data locally with IndexedDB and syncing to Firebase when back online.

## Firebase and IndexedDB Integration

This project integrates Firebase for online data storage and IndexedDB for offline data storage. Here's how each feature works:

### Firebase Integration (Online Data Storage)

- **Firebase Firestore or Realtime Database**: is used for storing meal data when the user is online.
- **CRUD operations (Create, Read, Update, Delete)**: are implemented to manage meal data in Firebase.
- **Unique identifiers**: are used to prevent conflicts during syncing, and Firebase data is automatically synchronized with IndexedDB when the app is offline.

### IndexedDB Integration (Offline Data Storage)

- **IndexedDB**: is set up to store meal data when the app is offline, ensuring users can still interact with their meal tracker even without an internet connection. When the app goes back online, the data in IndexedDB is synchronized with Firebase.

### Data Synchronization Logic

- The app detects online/offline status and toggles between Firebase and IndexedDB storage.
- Data from IndexedDB is synced to Firebase when the app reconnects to the internet.
- Firebase-generated IDs are used across both online and offline data to avoid conflicts and duplicates during synchronization.
  
### Offline Data Handling in Service Worker

- The service worker is updated to handle caching of necessary resources for offline functionality.
- Essential scripts and assets are cached for CRUD operations to work when the app is offline.
  
### UI and Error Handling

- CRUD operations are accessible via forms and buttons.
- Notifications are displayed when offline data is synced with Firebase upon reconnecting.
- Error handling is in place for smooth transitions between online and offline modes.

## Technologies Used

- **HTML5**: For structuring the web content.
- **CSS3**: For styling the application.
- **Materialize CSS**: A modern responsive front-end framework based on Material Design.
- **JavaScript**: For implementing dynamic features.
- **PWA Technologies**: Such as service workers and web app manifests to enhance performance and offline capabilities.
- **Firebase**: For online data storage and syncing.
- **IndexedDB**: For offline data storage and syncing.
  
## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository in the terminal**:

   ```bash
   git clone https://github.com/SoklyHour/Sokly_INF654.git

2. **Install dependencies:**: If your project requires any external libraries or dependencies, you will need to install them using npm or other package managers. For example, to install the Firebase SDK:

   ```bash
   npm install firebase

- If you're using any other libraries, make sure to check your project for the necessary installation commands.

### Run the project

- Open the project in your preferred code editor (e.g., Visual Studio Code). You can use the Live Server extension in Visual Studio Code to serve the project locally and view it in the browser.

### Prerequisites

- **Live Server extension**: Make sure to install the Live Server extension in Visual Studio Code for easy development.
- **Web Browser**: Use any modern web browser (e.g., Chrome, Firefox, Safari).

### Testing the Application

- Test Online: Ensure that the app syncs data to Firebase when online and updates the UI in real-time.
- Test Offline: Test adding, updating, and deleting meals while offline. Ensure that data is stored in IndexedDB and synced to Firebase when the app goes online again.
- Cross-Device Compatibility: Test the application on multiple devices and browsers to confirm consistent performance and responsiveness.

### Authors

Contributors name: Sokly Hour
