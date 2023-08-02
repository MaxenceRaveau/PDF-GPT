# AI-Enhanced LLM in Marketing Intelligence


## Important Files

 - app.py (Our backend) 
 - requirements.txt 
 - Sales_guide.pdf (The Pdf we are using Langchain) 
 - .env (Insert your OpenAI Key here)  
 - site-packages (All the libraries for the execution of the backend)
 - backend.zip
 - build folder (inside frontend folder)
 - 

## Backend Deployment

This project use Fast API, as long as OpenAI API and Langchain.

### Testing on local Machine

1. **Install Python**: First, download Python 3.9.13 from the official website: [Python Downloads](https://www.python.org/downloads/release/python-3913/).

2.  **Unzip the Repository**: Extract the contents of the zip file that contains the entire repository to a preferred location on your computer.

3.  **Open Command Prompt (CMD)**: Launch the Command Prompt on your system.

4.  **Navigate to Repository Directory**: Use the `cd` command in the Command Prompt to go to the directory where you unzipped the repository files. For example, if you extracted the repository to the "my_project" folder on your Desktop, you can type:`cd C:\Users\<YourUsername>\Desktop\my_project`

5. **Install Dependencies**: Run the following command in the Command Prompt to install the required dependencies: `pip install -r requirements.txt` 	  Alternatively, you can create a Python environment using virtualenv or conda before installing the requirements.

6.  **Start the Application**: Navigate to the main folder of the repository and open a Command Prompt. Then run the following command to start the application:`uvicorn app:app --reload`

 ![Result Expected](https://image.noelshack.com/fichiers/2023/31/3/1690955883-screenshot-6.png)

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

### Deploy on AWS EC2



1.  **Download the Build Folder**: Inside the "frontend" folder, locate the "build" folder and download it. This folder contains the production-ready build of the React app.
    
2.  **Follow the Tutorial**: You can use the build we just downloaded to follow the deployment tutorial available at [https://www.makeuseof.com/deploy-react-app-to-aws-ec2/](https://www.makeuseof.com/deploy-react-app-to-aws-ec2/). This tutorial will guide you through the steps to deploy your React app on an AWS EC2 instance.
    
3.  **Important Note - Update Backend IP**: Before deploying, make sure to modify the IP access inside the ".env" file in the "frontend" folder. Set the IP address to match the IP address of your backend server. This ensures that your React app can communicate with the backend correctly after deployment.



## Access Metrics

After launching and running the backend application, you can access metrics by visiting "http://{url_backend}/metrics." To create a dashboard with these data, we can consider using Grafana (https://grafana.com/) or a similar tool.

## CI/CD Pipeline

Please check the tests in the test.py file. The main.yaml file is located inside the github/workflows directory.

## Tasks for Improvements
 - Integrate vector databases into Pinecone to avoid processing the file every time the server is run.
 - Add more tests into test.py 

