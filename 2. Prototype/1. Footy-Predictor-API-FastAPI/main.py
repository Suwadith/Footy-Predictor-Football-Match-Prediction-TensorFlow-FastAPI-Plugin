import json

from fastapi import FastAPI
from fastapi.responses import JSONResponse
import pandas as pd

app = FastAPI()

df = pd.read_csv('Predictions.csv')


@app.get("/")
async def root():
    return {"message": "Welcome to Footy Predictor API V1.0"}


@app.get("/predictions/results")
async def get_predictions():
    results_df = df.loc[df['FTR'] != 'YTD']
    return JSONResponse(content=json.loads(results_df.to_json(orient="records")))


@app.get("/predictions/fixtures")
async def get_predictions():
    results_df = df.loc[df['FTR'] == 'YTD']
    return JSONResponse(content=json.loads(results_df.to_json(orient="records")))


@app.get("/predictions/{season}/{month}")
async def get_predictions(season: int, month: int):
    month_df = df.loc[(df['Season'] == season) & (df['Month'] == month)]
    return JSONResponse(content=json.loads(month_df.to_json(orient="records")))
