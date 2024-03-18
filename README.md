# AIMI Junior Software Engineer Project

This project is a submission for the Junior Software Engineer position at AIMI. It involves creating a webpage based on the provided design using HTML5, SCSS/SASS, Vanilla JS/jQuery, and Bootstrap 5.

## Project Description

The project aims to create a responsive webpage following a specific design (design.png) and functionality as described in the assignment. The webpage should consist of a grid structure with image boxes that are responsive and fill the available space. Each image box is represented as a checkbox, and clicking on it should highlight the selection using CSS without JavaScript.

### Features Implemented

- Responsive grid structure using Bootstrap 5.
- Image boxes represented as checkboxes.
- Image filling the box with consistent padding between boxes.
- Selection highlighting using CSS.
- View mode to display the selected image in a larger view.

### Setup Instructions

## Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd assignment
   ```

2. Install Dependencies:
   ```bash
   npm install
   ```
3. Run Grunt Tasks:
   ```bash
   grunt default
   ```
4. Open dist/index.html in a Web Browser to view the webpage.

## View Mode Logic

The view mode allows users to click on the expand icon of each image box to view the selected image in a larger view. This functionality is implemented using Vanilla JavaScript. When the expand icon is clicked, it retrieves the image source from the corresponding image box and displays it in a modal-like view.

## Author

Gabriel Sanchez
