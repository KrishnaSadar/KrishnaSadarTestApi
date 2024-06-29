# REST API Project

## Overview

This project is a fully-functional REST API designed using Node.js, Express, and MongoDB. It showcases robust CRUD operations, data validation, comprehensive error handling, and more.

## Project Highlights

1. **Robust CRUD Operations**: Efficiently manage products with Create, Read, Update, and Delete functionalities.
2. **Data Validation**: Ensures data integrity and reliability using Mongoose schema validation.
3. **Comprehensive Error Handling**: Implements robust error handling to gracefully manage various scenarios.
4. **Middleware Integration**: Utilizes Express middleware for streamlined JSON parsing and detailed logging with Morgan.
5. **Seamless Database Connection**: Connects to MongoDB for efficient data storage and retrieval.
6. **Deployment Ready**: Fully configured for easy deployment on Vercel, ensuring quick and hassle-free setup.
7. **MVC Architecture**: Structured using the Model-View-Controller (MVC) pattern to enhance code organization and maintainability.
8. **API Testing with Postman**: Utilized Postman for thorough testing of all API endpoints to ensure reliability and performance.
9. **Version Control with Git and GitHub**: Managed code versioning and collaboration through Git, with the repository hosted on GitHub for transparency and collaboration.

## Technologies Used

- **Node.js**: For server-side JavaScript execution and non-blocking I/O operations.
- **Express**: A minimal and flexible Node.js web application framework for handling HTTP requests and routing.
- **MongoDB**: A NoSQL database for scalable and high-performance data storage.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, providing schema-based solutions.
- **Morgan**: HTTP request logger middleware for Node.js to keep track of incoming requests and responses.
- **Postman**: A collaboration platform for API development used for testing the API endpoints.
- **Git & GitHub**: Version control system and code hosting platform used to manage project development and collaboration.
- **Vercel**: A cloud platform for static sites and Serverless Functions, used for deploying and hosting the API.

## Explore the Project

**API Base URL**: [https://krishnasadartestapi.vercel.app/](https://krishnasadartestapi.vercel.app/)



### How to Use This API

- **GET**: Retrieve all products or a specific product by ID.
  - **Get all products**: `GET /`
    ![GET All Products](https://firebasestorage.googleapis.com/v0/b/firebasstut-ffdb5.appspot.com/o/Screenshot%202024-06-29%20090444.png?alt=media&token=834c089b-1634-4fb3-86d6-6e20e4aad524)
  - **Get a product by ID**: `GET /:id`
    ![GET Product by ID](https://firebasestorage.googleapis.com/v0/b/firebasstut-ffdb5.appspot.com/o/Screenshot%202024-06-29%20090444.png?alt=media&token=834c089b-1634-4fb3-86d6-6e20e4aad524)

- **POST**: Create a new product.
  - **Create a product**: `POST /`
    - Request Body Example:
      ```json
      {
        "title": "New Product",
        "description": "Product description",
        "price": 100,
        "discountPercentage": 10,
        "rating": 4.5,
        "brand": "Brand Name",
        "category": "Category Name",
        "thumbnail": "http://example.com/image.jpg",
        "images": ["http://example.com/image1.jpg", "http://example.com/image2.jpg"]
      }
      ```
    ![POST Create Product](https://firebasestorage.googleapis.com/v0/b/firebasstut-ffdb5.appspot.com/o/Screenshot%202024-06-29%20090407.png?alt=media&token=7f3f8898-fa95-4a93-b5da-ab11a77978b6)

- **PUT**: Replace a product by ID.
  - **Replace a product**: `PUT /:id`
    - Request Body: Complete replacement object (similar to POST request body).
    ![PUT Replace Product](https://firebasestorage.googleapis.com/v0/b/firebasstut-ffdb5.appspot.com/o/Screenshot%202024-06-29%20090535.png?alt=media&token=2267566d-0d13-47d3-92d8-3667be3b241a)

- **PATCH**: Update a product by ID.
  - **Update a product**: `PATCH /:id`
    - Request Body: Partial update object.
    ![PATCH Update Product](https://firebasestorage.googleapis.com/v0/b/firebasstut-ffdb5.appspot.com/o/Screenshot%202024-06-29%20090618.png?alt=media&token=7d491800-7e67-4a9f-8367-bb93a8b71b09)

- **DELETE**: Delete a product by ID.
  - **Delete a product**: `DELETE /:id`
    ![DELETE Product](https://firebasestorage.googleapis.com/v0/b/firebasstut-ffdb5.appspot.com/o/Screenshot%202024-06-29%20090703.png?alt=media&token=102adc9b-069e-4985-a51a-508dbcfaab47)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   
This project is a testament to my continuous learning and dedication to mastering web development technologies. I welcome any feedback, suggestions, or discussions about the implementation and potential improvements.
