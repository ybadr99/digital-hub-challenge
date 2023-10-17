# Task Management App

This is a simple Task Management application built using React. It allows you to add, edit, delete tasks, update their status, and filter tasks based on their titles.

## Features

- **Add Task**: You can add a new task by entering its title, and it will be added to the list of tasks with a default status of 'Not Started'.

- **Edit Task**: You can edit the title of a task by clicking the "Edit" button and saving your changes.

- **Delete Task**: You can remove a task from the list by clicking the "Remove" button.

- **Update Status**: You can change the status of a task to 'In Progress' or 'Finished' using a dropdown menu.

- **Filter Tasks**: You can filter tasks by entering text in the filter input. Only tasks with titles that match the entered text will be displayed.

- **Data Persistence**: Tasks are saved to local storage, allowing them to persist between sessions. This means that when you add, edit, or remove tasks, your changes will be preserved even if you close and reopen the application.

## Live Demo

You can try out a live demo of the Task Management App by following this link:

[Live Demo](https://your-live-demo-url.com)

## Usage

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ybadr99/digital-hub-challenge.git
   ```

2. Navigate to the project directory:

   ```bash
   cd digital-hub-challenge
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## How it Works

- The app uses React and manages tasks as state variables.
- You can add, edit, and delete tasks through the user interface.
- Tasks are stored in local storage to persist between sessions.
- Filtering is based on task titles and updates dynamically as you type.

## Contributions

Contributions to this project are welcome! Feel free to open an issue or submit a pull request if you have any improvements or bug fixes to suggest.
