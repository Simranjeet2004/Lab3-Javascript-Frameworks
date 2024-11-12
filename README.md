# Student Management API

This project is a simple Express.js application that provides a RESTful API for managing student data. The API supports basic CRUD operations: Create, Read, Update, and Delete.

## Usage

1. Start the server:
    ```bash
    npm start
    ```
2. The server will be running at `http://localhost:3000`.

### Get All Students

- **URL:** `/`
- **Method:** `GET`
- **Description:** Retrieve all student data.
- **Response:**
    ```json
    [
        { "id": 1, "name": "Jasman", "Favourite Subject": "Java Fundamentals" },
        { "id": 2, "name": "Simran", "Favourite Subject": "Arduino" },
        ...
    ]
    ```

### Create a New Student

- **URL:** `/students`
- **Method:** `POST`
- **Description:** Create a new student.
- **Request Body:**
    ```json
    {
        "id": 11,
        "name": "New Student",
        "Favourite Subject": "New Subject"
    }
    ```
- **Response:**
    ```json
    {
        "message": "Student created",
        "student": {
            "id": 11,
            "name": "New Student",
            "Favourite Subject": "New Subject"
        }
    }
    ```

### Update a Student

- **URL:** `/students/:id`
- **Method:** `PUT`
- **Description:** Update an existing student by ID.
- **Request Body:**
    ```json
    {
        "name": "Updated Name",
        "Favourite Subject": "Updated Subject"
    }
    ```
- **Response:**
    ```json
    {
        "message": "Student updated",
        "student": {
            "id": 1,
            "name": "Updated Name",
            "Favourite Subject": "Updated Subject"
        }
    }
    ```

### Delete a Student

- **URL:** `/students/:id`
- **Method:** `DELETE`
- **Description:** Delete a student by ID.
- **Response:**
    ```json
    {
        "message": "Student deleted",
        "student": {
            "id": 1,
            "name": "Deleted Student",
            "Favourite Subject": "Deleted Subject"
        }
    }
    ```

```

