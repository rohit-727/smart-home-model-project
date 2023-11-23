from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import telnetlib

tns = telnetlib.Telnet("127.0.0.1", 2323)
app = FastAPI()

# Cross-Origin Resource Sharing Config
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/data")
def read_data():
    return {"key": "value"}

@app.post("/api/post_data")
def post_data(data: dict):
    print(data)
    item = list(data.keys())
    match item[0]:
        case "GFL":
            print("Ground Floor")
            if data['GFL']==False: print("off")#tns.write(6)
            else: tns.write(7)
        case "FFL":
            if data['FFL']==False: print("off") #tns.write(8)
            else: print("on") #tns.write(9)
        case "newSpeed":
            print(f"New speed set to: {data['newSpeed']}")
    return {"message": "Data received."}
