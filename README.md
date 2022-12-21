# Footy-Predictor-Football-Match-Prediction-TensorFlow-FastAPI-Plugin


## Prototype Installation


### Software requirements
1. Python 3.9.x
2. Latest pip version 22.0.x

### Setting up the API
1. Extract the Prototype & Additional Material.zip
2. Navigate to the following path,
> Prototype & Additional Material\2. Prototype\1. Footy-Predictor-API-FastAPI
3. Open terminal inside the directory
4. Install FastAPI using the following command
> pip install "fastapi[all]"
5. Install pandas using the following command
> pip install pandas
6. Execute the following command to run the API
> uvicorn main:app --reload
7. By default, this should serve the API in the following URL
> http://127.0.0.1:8000

### Setting up the Chrome Plugin
1. Extract the Prototype & Additional Material.zip
2. Navigate to the following path,
> Prototype & Additional Material\2. Prototype\2. Chrome-Extension-SkySports
3. This is the source folder for the plugin
4. Open Chrome (Latest version is preferred)
5. Go to the following URL
> chrome://extensions/
6. Click the “Load unpacked” button at the top left corner
7. Open the plugin’s source folder mentioned in step 3
8. Click “Select Folder” button
9. Now the plugin is setup properly
10. Make sure the API is running as well
11. Navigate to the following URLs in chrome and test out the results
> https://www.skysports.com/premier-league-fixtures
> https://www.skysports.com/premier-league-results

> Note: Current future prediction data stored within the CSV and served by the API will be outdated by the 1st of October 2022. 
Hence fixtures tab might not show any future prediction results. 
To fix this, the Predictions.csv file inside the API’s source folder has to be updated with newer prediction data.


### Screenshots

![image](https://user-images.githubusercontent.com/20539850/208999392-328fe48a-82d4-470d-a08f-ebadf220e2e9.png)


![image](https://user-images.githubusercontent.com/20539850/208999434-5cb64446-aa29-4ca5-a067-a94589265436.png)



> Note: This project was developed as a prototype for my Master's dissertation at Middlesex University
