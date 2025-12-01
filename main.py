from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Backend Connected Successfully"}

@app.post("/log")
def log_interaction(data: dict):
    return {"status": "success", "received_data": data}