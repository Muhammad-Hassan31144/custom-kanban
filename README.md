# Kanban Board Project

This project is a Kanban board application built using React, Vite, Tailwind CSS, and DaisyUI. The application allows users to manage tasks through a drag-and-drop interface, where tasks can be moved between different columns representing various stages of a workflow.

## Features

- **Drag and Drop Interface**: Users can easily drag and drop tasks between columns.
- **Add and Remove Columns**: Users can dynamically add new columns and remove existing ones.
- **Add and Remove Tasks**: Users can add new tasks to any column and remove tasks as needed.
- **Real-time Updates**: The application updates the task board in real-time as tasks are moved or modified.
- **Responsive Design**: The application is fully responsive, ensuring usability across different devices and screen sizes.
- **Semantic HTML**: The application uses semantic HTML elements to improve accessibility and SEO.

## Components

### Board

The `Board` component is the main container for the Kanban board. It manages the state of columns and cards, handles adding and removing columns, and includes the `BurnBarrel` component for deleting tasks.

### Column

The `Column` component represents a single column in the Kanban board. It handles displaying tasks, dragging and dropping tasks, and adding new tasks within the column.

### Card

The `Card` component represents an individual task. It is draggable and contains the task's title.

### BurnBarrel

The `BurnBarrel` component provides a drop area for deleting tasks. When a task is dragged over the `BurnBarrel`, it highlights in red, indicating that the task will be deleted if dropped.

### AddCard

The `AddCard` component provides a form for adding new tasks to a column. It includes input fields for the task title and buttons for adding or canceling the action.

## Styling

The project utilizes Tailwind CSS and DaisyUI for styling, ensuring a modern and consistent look across the application. DaisyUI components are used to enhance the UI elements, providing a clean and cohesive design.

## Usage

The Kanban board can be used to manage tasks in a variety of workflows, such as software development, project management, personal task tracking, and more. The drag-and-drop interface makes it easy to move tasks between different stages, and the ability to add and remove columns and tasks provides flexibility in organizing the board according to specific needs.

## Screenshots

![Kanban Board](screenshot.png)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework.
- **DaisyUI**: A plugin for Tailwind CSS that provides pre-designed components.
- **Framer Motion**: A library for animations in React.
