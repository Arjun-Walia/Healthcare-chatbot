# AI-Powered Healthcare Chatbot

This project is a web-based healthcare chatbot that provides simulated health data, tracks user health metrics over time, and offers basic health advice. It's designed to be a dynamic and engaging tool for exploring health-related information.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Customization](#customization)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **Simulated Health Data:** Generates random data for heart rate, steps, sleep hours, and location.
- **Real-Time Updates:** Health data is updated automatically every 5 seconds.
- **Data Visualization:** Displays health data trends over time using a line chart.
- **Data Analysis:** Provides average heart rate, total steps, and average sleep hours.
- **Step Progress Bar:** Visualizes the user's step count against a daily goal.
- **Mood Tracker:** Allows users to select their mood using emoji options.
- **Motivational Quotes:** Displays a random motivational quote related to health.
- **Chatbot Interface:** Allows users to ask health-related questions and receive basic advice.
- **Theme Toggle:** Allows users to switch between light and dark themes.
- **Emergency Button:** Simulates contacting emergency services and sharing the user's location.
- **Smooth Transitions and Animations:** Provides a polished and interactive user experience.

## Technologies Used

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript
  - Chart.js (for data visualization)
- **Backend:**
  - Node.js
  - Express.js (for server)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (version 14 or higher)
-   [npm](https://www.npmjs.com/) (Node Package Manager, usually included with Node.js)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [repository-url]
    cd [repository-name]
    ```
2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Application

1.  **Start the server:**

    ```bash
    npm start
    ```
2.  **Open in Browser:** Open `index.html` in your browser.

## Project Structure

Healthcare-chatbot/
├── public/
│ ├── index.html # Main HTML file
│ ├── styles.css # CSS styling
│ ├── script.js # Client-side JavaScript logic
│ └── images/ # Folder for images
│    ├── bot.jpg
│    └── zoro.png
├── server.js # Server-side Node.js logic
├── package.json # Node project file
└── README.md # This README file


## Usage

1.  **Access the Chatbot:** Open the `index.html` file in your web browser.
2.  **View Health Data:** The simulated health data, analysis, and chart will be displayed on the left side of the screen.
3.  **Interact with the Chatbot:** Type your health-related questions or concerns in the input field and click "Send."
4.  **Select Mood:** Click on the emoji that best represents your mood.
5.  **Toggle Theme:** Use the theme toggle button to switch between light and dark themes.
6.  **Emergency Button:** Click the "Emergency" button to simulate contacting emergency services.

## Customization

-   **Responses:** You can modify the chatbot responses in the `server.js` file.
-   **Motivational Quotes:** You can add or modify the motivational quotes in the `script.js` file.
-   **Styling:** You can customize the UI by modifying the `styles.css` file.
-   **Data Generation:** You can adjust the data generation logic in the `script.js` file.

## Future Enhancements

-   **Advanced NLP:** Implement more advanced NLP techniques to improve intent detection and entity recognition.
-   **Machine Learning:** Train a simple ML model to predict health risks based on user data.
-   **Personalized User Profiles:** Allow users to create profiles and store their data for a more personalized experience.
-   **Integration with Wearables:** Integrate with wearable devices to get real-time data.
-   **Gamification:** Add gamified elements to encourage users to stay healthy.
-   **Community Features:** Allow users to connect with others and share their health journeys.
-   **AI-Powered Recommendations:** Use AI to provide personalized health recommendations based on user data and goals.
-   **Voice Interaction:** Add voice interaction for a more natural user experience.
-   **Multilingual Support:** Support multiple languages to reach a wider audience.
-   **Accessibility:** Ensure your chatbot is accessible to users with disabilities.

## Contributing

Contributions are welcome! If you have any ideas for improvements or new features, please feel free to submit a pull request.

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Push your changes to your fork.
5.  Submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

-   This project was inspired by the need for accessible and engaging health information tools.
-   Thanks to the open-source community for providing the tools and resources used in this project.