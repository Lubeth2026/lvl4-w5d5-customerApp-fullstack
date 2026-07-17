
import os
from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()
app = Flask(__name__)
CORS(app, origins=["*"])

supabase: Client = create_client(
    os.getenv("SUPABASE_URL"),
    os.getenv("SUPABASE_KEY")
)
@app.route("/")
def health():
    return {"Status": "Good"}

@app.get("/api/customers")
def customers_list():
    response = supabase.table("customers").select("*").execute()
    return {"customers": response.data}

@app.post("/api/customers")
def create_customer():
    data = request.get_json()
    
    response = supabase.table("customers").insert({
        "first_name": data["first_name"],
        "last_name": data["last_name"],
        "email": data["email"],
        "city": data["city"],
        "state": data["state"]
    }).execute()
    return {"message": "Customer was Created", "customer": response.data}

if __name__ == "__main__":
    app.run(debug=True)
