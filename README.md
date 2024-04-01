This repository provides a React application demonstrating drag-and-drop functionality for building customizable interfaces. It leverages the @dnd-kit/core library for smooth drag and drop interactions.

### Deployed link - https://drag-drop-app-rho.vercel.app/

### Features:

- Drag and drop various UI elements (labels, inputs, buttons) from a sidebar onto a designated page area.
- Position and manage dropped elements by dragging them around the page.
- Optionally configure dropped elements (e.g., edit text labels) using a modal window (not fully implemented yet).

### App will look like:
![Screenshot 2024-04-01 220022](https://github.com/ashishsen003/drag-drop-inputs/assets/112822104/29e7e9a1-0422-4250-a678-02a9110de462)
- dragging an element
![Screenshot 2024-04-01 220042](https://github.com/ashishsen003/drag-drop-inputs/assets/112822104/247ab37a-0891-4e0c-8f8b-22f5120ffdcd)
![Screenshot 2024-04-01 220310](https://github.com/ashishsen003/drag-drop-inputs/assets/112822104/3715e3aa-b1e2-47e5-b50a-ff6d74c8d348)
![Screenshot 2024-04-01 220358](https://github.com/ashishsen003/drag-drop-inputs/assets/112822104/56b9773b-4a14-4748-9e0c-36784a07b1f9)
- on droping (modal will open to configure an element)
![Screenshot 2024-04-01 220215](https://github.com/ashishsen003/drag-drop-inputs/assets/112822104/95797288-c77c-4a82-8f9f-54c90e6e6b74)
- after drop
![Screenshot 2024-04-01 220340](https://github.com/ashishsen003/drag-drop-inputs/assets/112822104/4ff04804-e8ae-4c40-8792-5e67304a72a5)
![Screenshot 2024-04-01 220419](https://github.com/ashishsen003/drag-drop-inputs/assets/112822104/120dc94c-2919-4e11-ad37-9cda8f9e3db3)
- on select an element
![Screenshot 2024-04-01 220435](https://github.com/ashishsen003/drag-drop-inputs/assets/112822104/d453753b-0005-47ec-88d4-5feb2fc916b6)
![Screenshot 2024-04-01 220923](https://github.com/ashishsen003/drag-drop-inputs/assets/112822104/738438cf-33a5-453d-84af-4a8b79a55659)






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



