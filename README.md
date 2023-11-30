# Smart Home Controller 
Model Smart Home Controller project as part of the Introduction to Engineering course in the first semester of Vellore Institute of Technology, Chennai Campus.

The project involves the construction of a modern model house, fitted with lights and other appliances that are controlled by an Arduino Uno. This Arduino receives serial inputs from an Android device used to run the servers. The Android device is running a Termux session which implements a Linux-like environment. The backend hosts a web server that handles API calls using from the frontend React page.

# Screenshots
![image](https://github.com/rohit-a4s5/smart-home-model-project/assets/145858319/b5754317-a776-4da1-ac29-db5d1f785c87)
![image](https://github.com/rohit-a4s5/smart-home-model-project/assets/145858319/a94bdf7a-70a6-4725-81f1-c14e0b8ede80)

# Tech Stack
## Frontend
* ReactJS

## Backend
* FastAPI
* Uvicorn
* Ngrok (for domain tunneling)

# Building and Running
First off,  clone and  `cd` into the directory using
```
cd smart-home-model-project
```
Following this, the npm packages can be installed using
```
npm install
```

The React front page can be built using
```
npm run build
```
or for a development environment
```
npm start
```

As for the backend, uvicorn can be used to run the FastAPI server
```
python -m uvicorn phoneServer:app --reload
```

This hosts the server on `localhost:8000`
The port can be domain tunneled using ngrok
```
ngrok http <domain> 8000
```

With this, both the frontend and backend should be up and running.
