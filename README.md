# Getting Started
1. Clone Repository.
``` bash
git clone https://github.com/Jorgeniuus/duckduckgo-search-backend.git
```
2. Navigate to the `duckduckgo-search-backend` folder:
``` bash 
cd duckduckgo-search-backend
cd ../
```
3. Run following command to install all required dependencies such as **express**, **cors**, and **axios**.
``` bash
npm install
```
# Runnig the Project
- Once you are inside the `duckduckgo-search-backend` folder, run following command to start server.
``` bash
npm start
```
- The server runs on port **3000** by default.
``` bash
http://localhost:3000
```
# Versions
- **Node.js:** node.js v20.17.0
- **npm:** 10.9.0

### Installing NVM (Node Version Manager)

 To easily manage Node.js versions on your machine, we recommend using [NVM](https://github.com/nvm-sh/nvm), a version manager for Node.js.

### Steps to install NVM:
1. **Open your terminal (Git Bash recommended for Windows)**.
2. Run the following command to download and install NVM:

   **For macOS / Linux:**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
### Managing Node.js Versions with NVM

To manage Node.js versions with NVM, follow these basic commands:

1. **Install a specific version of Node.js:**

    ```bash
    nvm install 16.14.0
    ```

2. **List installed Node.js versions:**

    ```bash
    nvm ls
    ```

3. **Use a specific version of Node.js:**

    ```bash
    nvm use 14.17.6
    ```

# Project Structure
- The folders have been organized according to the MVC structure.
    1. **src/api**: The APIs are consumed here and return a response to be used in the controller files.
    2. **src/controllers**: In the controller folder, we have files that handle route requests.
    3. **src/routes**: All route requests are called by the app and go through the route files.

# Features
- HTTP GET method used for query paramater request with **?q=searching**
- HTTP POST method used for body request.

# Project Overview
- In this project, we can perform searches through the **DuckDuckGo API**, using the endpoint routes of the **GET** method, which receives a **query param**, and the **POST** method, which receives a **body query** through the request. From these requests, we can perform a search with the API, which returns a list of objects/JSON as a response.

