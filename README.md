# Data Visualization Dashboard with D3.js integration

![Website](https://img.shields.io/website?url=https://blackcoffer0dashboard.netlify.app/)
![Last Commit](https://img.shields.io/github/last-commit/sarveshguru/Dashboard_d3js) 
![Total Commits](https://img.shields.io/github/commit-activity/y/sarveshguru/Dashboard_d3js)
![Commit Activity](https://img.shields.io/github/commit-activity/m/sarveshguru/Dashboard_d3js)
![Contributors](https://img.shields.io/github/contributors/sarveshguru/Dashboard_d3js)


> This project is a comprehensive data visualization dashboard built using the MERN stack (MongoDB, Express.js, React, Node.js) and D3.js for creating interactive and responsive data visualizations. The project efficiently handles large datasets, manages state and data flow, and provides various features for data analysis and insights.

## Server-Side

The server-side of the application is responsible for setting up the server, defining API endpoints, interacting with the MongoDB database, and preparing data for the dashboard. It utilizes Express.js for the server setup and Mongoose for data modeling and database operations.

### Responsibilities
1. **Server Setup:** Initializes the Express.js server and imports the necessary routes and models to handle incoming requests.
2. **API Endpoints:** Defines endpoints for retrieving, creating, updating, and deleting data. These endpoints use controllers to interact with the database.
3. **Data Modeling:** Specifies the schema and indexes for the MongoDB collections, ensuring efficient data storage and retrieval.
4. **Data Controllers:** Contains the logic for database operations, including fetching, transforming, and preparing data for use in the dashboard.
5. **Data Preparation:** Fetches data from the database, performs necessary transformations, and exports the prepared data for use in the client-side visualizations.

## Client-Side

The client-side of the application is responsible for rendering the user interface, managing global state, fetching data from the server, and creating interactive and responsive data visualizations using D3.js. It uses React for building the UI components and Redux for state management.

### Responsibilities
1. **Application Initialization:** Sets up the Redux store and renders the main application component, ensuring the entire application is bootstrapped correctly.
2. **Main Component:** Manages the overall layout and routing of the application, importing and rendering necessary components.
3. **Theming:** Defines the Material-UI theme, including color palette, typography, and other styling options for a consistent look and feel.
4. **API Interaction:** Uses Redux Toolkit Query to define endpoints for fetching data from the server, handling data fetching, and caching.
5. **Global State Management:** Manages the global state of the application, including theme mode and other settings.
6. **Filtering Options:** Renders filtering options for the dashboard, allowing users to customize the data being visualized.
7. **Styled Components:** Provides reusable styled components, such as flex containers and headers, to ensure a consistent layout across the application.
8. **Navigation and Header:** Renders the navigation bar and header section, including menu items, theme mode toggle, and dashboard title/logo.
9. **Statistical Information:** Displays statistical information in a structured format, including titles, values, icons, and descriptions.

## Data Visualizations

The client-side includes several components for visualizing data using D3.js and Material UI(DataGrid). These components create various types of charts and graphs, including:

1. Stacked Bar Chart
2. Pie Chart
3. Bar Chart
4. Geographical Map
5. Tabular Data Formation

## Challenges and Solutions

1. **Handling Large Datasets:** The application efficiently handles large datasets by using D3.js techniques like data joins, scales, and hierarchies. These techniques optimize performance and ensure interactive and responsive visualizations.
2. **Custom Data Visualizations:** D3.js is used to create custom data visualizations that meet specific requirements and provide valuable insights. It offers a wide range of chart types and customizable options to create tailored visualizations.
3. **State and Data Flow Management:** React's component-based architecture and Redux's state management tools are used to efficiently manage state and data flow, ensuring a smooth user experience and maintaining data consistency.
4. **Asynchronous Data Fetching:** Axios, a promise-based HTTP client, is used to make requests to APIs and handle asynchronous data fetching. This ensures that the application can retrieve and update data in real-time.

## Features and Functionalities

### Data Visualization Charts and Graphs

The application uses D3.js to create various data visualization charts and graphs, providing interactive and responsive visualizations.

1. **Interactive Visualizations:** The visualizations allow users to explore and interact with the data using D3.js event handling and interaction techniques such as tooltips.
2. **Data Filtering and Aggregation:** Users can filter and aggregate data based on specific criteria, such as selecting sectors, time periods, or countries. D3.js provides data manipulation techniques to enable these functionalities.
3. **Data Analysis:** The application provides data analysis and insights by calculating statistical and mathematical functions.
4. **Integration with External APIs:** The application integrates with external APIs to fetch data related to specific topics. Axios is used to make requests to these APIs and handle asynchronous data fetching.

### 🌐 Live Demo

Check out the live demo: [Admin Dashboard](https://blackcoffer0dashboard.netlify.app/)

### 🚀 Getting Started

To get started with the project, follow these steps:

#### Client Side

1. Navigate to the client directory:
   ```bash
   cd client
   
2. Install dependencies:
   ```bash
   npm install

3. Run the client:
   ```bash
   npm start

#### Server Side

1. Navigate to the server directory:
   ```bash
   cd server

2. Install dependencies:
   ```bash
   npm install

3. Run the server:
   ```bash
   npm start

### 🧑‍💻 Author & Contact

- **Author**: [Sarvesh Choudhary](https://github.com/sarveshguru)
- **LinkedIn**: [Sarvesh Choudhary](https://www.linkedin.com/in/your-profile)
- **Portfolio**: [My Portfolio Website](https://sarvesh-choudhary-portfolio.netlify.app)
- **Email**: [E-mail](mailto:csarvesh288@gmail.com)
