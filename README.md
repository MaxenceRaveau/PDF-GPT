# AI-Enhanced LLM in Marketing Intelligence

## Functionnality

This web application enables users to browse through any file and interact with ChatGPT by asking questions based on the contents of that file. In this example, I have selected the file 'SalesGuide.pdf,' which serves as a guide for sales people. However, you have the flexibility to replace this PDF with any other file you prefer, such as a 'Database of Leads' or 'Sales Guidance,' to provide valuable assistance to sales professionals in their day-to-day work.

**Final Result** : https://www.youtube.com/watch?v=eKK5BMEcT3Y
## Usage

When you ran both frontend and backend, you shoud arrive on this page.
![enter image description here](https://image.noelshack.com/fichiers/2023/31/3/1690964666-mainpage.png)
From there, you can ask whatever Sales Advices you want. For example we can try :
"As a sales manager, outline a focused plan to enhance the sales team's performance by addressing the following five tasks:
- Training and Skill Development
- Sales Process Optimization
- Incentive and Recognition
- CRM Integration"

**This is the answer we get:**![enter image description here](https://image.noelshack.com/fichiers/2023/31/3/1690965800-result.png)

We also have access to the history of our conversation below:
![enter image description here](https://image.noelshack.com/fichiers/2023/31/3/1690965868-history.png)


## Important Files

-   **app.py:** This file contains our backend code.
-   **test.py:** This file contains the CI/CD tests for our project.
-   **requirements.txt:** This file lists all the dependencies required to run the project.
-   **Sales_guide.pdf:** This is the PDF document we are using for Langchain.
-   **.env:** Insert your OpenAI Key here in this file.
-   **site-packages:** This folder contains all the libraries necessary for the execution of the backend.
-   **backend.zip:** This is a compressed archive of the backend code.
-   **build folder:** This folder is located inside the frontend folder and is used to deploy the frontend of our project.
 

## Backend Deployment

This project use Fast API, as long as OpenAI API and Langchain.

**CREATE OPENAI API KEY**: To run this program, you must obtain an OpenAI API key. To acquire one, refer to the tutorial available at: [https://www.howtogeek.com/885918/how-to-get-an-openai-api-key/](https://www.howtogeek.com/885918/how-to-get-an-openai-api-key/)

### Testing on local Machine

1. **Install Python**: First, download Python 3.9.13 from the official website: [Python Downloads](https://www.python.org/downloads/release/python-3913/).

2.  **Unzip the Repository**: Extract the contents of the zip file that contains the entire repository to a preferred location on your computer.

3.  **Open Command Prompt (CMD)**: Launch the Command Prompt on your system.

4.  **Navigate to Repository Directory**: Use the `cd` command in the Command Prompt to go to the directory where you unzipped the repository files. For example, if you extracted the repository to the "my_project" folder on your Desktop, you can type:`cd C:\Users\<YourUsername>\Desktop\my_project`

5. **Install Dependencies**: Run the following command in the Command Prompt to install the required dependencies: `pip install -r requirements.txt` 	  Alternatively, you can create a Python environment using virtualenv or conda before installing the requirements.
7. **Change the API_key:** in the .env file located in the main folder

8.  **Start the Application**: Navigate to the main folder of the repository and open a Command Prompt. Then run the following command to start the application:`uvicorn app:app --reload`

 ![Result Expected](https://image.noelshack.com/fichiers/2023/31/3/1690955883-screenshot-6.png)

 You can test the backend server by getting the url of it http://{backend_server_ip}/ in your browser. You should get a "OK" message.

### Deploying to AWS S3 with Lambda

1.  **Download the Backend Zip File**: Obtain the backend.zip file by downloading it from the provided source or location.
    
2.  **Set Up FastAPI with AWS Lambda**: Follow the tutorial available at [https://www.deadbear.io/simple-serverless-fastapi-with-aws-lambda/](https://www.deadbear.io/simple-serverless-fastapi-with-aws-lambda/) to set up FastAPI with AWS Lambda. This tutorial will guide you through the steps to deploy the serverless FastAPI application on AWS Lambda.

**Important Note**: To ensure proper access to our backend, it is necessary to modify the CORS (Cross-Origin Resource Sharing) settings in the App.js file. This adjustment will authorize the appropriate server to access our backend securely.


## Frontend Deployment 

This Frontend use React.JS and Material UI.
### Install on Local Machine

1.  **Install Node.js**: Visit the Node.js website at [https://nodejs.org/en/download](https://nodejs.org/en/download). Download the appropriate installer for your operating system (Windows, macOS, or Linux). Run the installer and follow the on-screen instructions to install Node.js.
    
2.  **Install Frontend Libraries**:
    
    -   Navigate to the main folder that contains the frontend application.
    -   Locate the "frontend" folder within the main folder, and then go into the "src" folder.
    -   Open a command prompt (CMD) on Windows or a terminal on macOS/Linux in this "src" folder.
    -   Run the following command in the command prompt or terminal to install the necessary libraries:
    `npm install @mui/joy @emotion/react @emotion/styled @fontsource/inter axios react`


After completing these steps, your frontend application will have all the necessary dependencies installed, and you'll be ready to run or build the application as needed.
To run our frontend, run:  `npm start`

**Important Note - Update Backend IP**: Generally, there is no need to modify the backend IP as it will default to the appropriate value when you launch the FastAPI server. However, if you encounter connection issues due to a port change, you can rectify it by editing the .env file located inside the frontend folder.

### Deploy on AWS EC2

1.  **Download the Build Folder**: Inside the "frontend" folder, locate the "build" folder and download it. This folder contains the production-ready build of the React app.
    
2.  **Follow the Tutorial**: You can use the build we just downloaded to follow the deployment tutorial available at [https://www.makeuseof.com/deploy-react-app-to-aws-ec2/](https://www.makeuseof.com/deploy-react-app-to-aws-ec2/). This tutorial will guide you through the steps to deploy your React app on an AWS EC2 instance.
    
**Important Note - Update Backend IP**: Before deploying, make sure to modify the IP access inside the ".env" file in the "frontend" folder. Set the IP address to match the IP address of your backend server. This ensures that your React app can communicate with the backend correctly after deployment.



## Access Metrics

After launching and running the backend application, you can access metrics by visiting "http://{url_backend}/metrics." To create a dashboard with these data, we can consider using Grafana (https://grafana.com/) or a similar tool.

## CI/CD Pipeline

Please check the tests in the test.py file. The main.yaml file is located inside the github/workflows directory.


##   Proposed Tasks for Improving the Project

Despite the restricted time limit, we have identified several key improvements that can significantly enhance the project:

1.  **Integration of Vector Databases with Pinecone:** To improve efficiency, it is crucial to integrate vector databases with Pinecone. This integration will eliminate redundant file processing during server runs, leading to faster and more optimized operations.
    
2.  **Expansion of test.py with Comprehensive Testing:** Ensuring a reliable project requires comprehensive test coverage. To achieve this, we will add more tests to the test.py file. By increasing the test suite, we can identify potential issues and bugs, thereby enhancing the project's stability.
    
3.  **Implementation of OpenAI API Token Usage Monitoring:** Monitoring the usage of the OpenAI API tokens is essential for efficient resource utilization. By closely tracking API token consumption, we can identify usage patterns and optimize our token usage. This proactive approach will help prevent unexpected interruptions in API access and ensure seamless performance.
    
4.  **Enhanced Text Display in the Web Application:** Improving the presentation of text inside the web app will enhance the user experience. We will work on refining the display to make it more visually appealing and user-friendly.
    
5.  **Add a Loading Element to Indicate API Processing:** To keep the client informed during API calls, we will add a loading element. This element will notify users that the system is processing their request, ensuring a smoother user experience.

