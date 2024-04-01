This repository provides a React application demonstrating drag-and-drop functionality for building customizable interfaces. It leverages the @dnd-kit/core library for smooth drag and drop interactions.

## Deployed link - https://drag-drop-app-rho.vercel.app/

### Features:

- Drag and drop various UI elements (labels, inputs, buttons) from a sidebar onto a designated page area.
- Position and manage dropped elements by dragging them around the page.
- Optionally configure dropped elements (e.g., edit text labels) using a modal window (not fully implemented yet).

### Getting Started:
```git clone https://github.com/ashishsen003/drag-drop-inputs```

### Install dependencies:
```cd drag-drop-inputs```
```npm install```

### Run the application:
```npm start```

This will start a development server and open the application in your default browser, usually at http://localhost:3000

### Code Structure:
The codebase is organized into the following components:

- App.js: The main application component that manages state, sensors, and overall functionality.
- Page.js: Renders the designated area where dropped elements are positioned.
- Sidebar.js: Displays the available draggable UI elements.
- Input.js: A reusable component for individual draggable elements (can be extended for other UI components).
- Modal.js: (Partially implemented) Handles configuration options for dropped elements (future functionality).

### Using the Application:
- Drag and drop UI elements from the sidebar onto the designated page area.
- The dropped elements will appear with visual feedback indicating their selection state.
- (Future functionality) Clicking a dropped element should open a modal window for configuration (not fully implemented yet).

### Future Enhancements:
- Implement full functionality for editing dropped elements through the modal window.
- Consider persisting dropped element positions and configurations using local storage or a database.

### Contribution:
Feel free to fork this repository and contribute your improvements or additional features!



