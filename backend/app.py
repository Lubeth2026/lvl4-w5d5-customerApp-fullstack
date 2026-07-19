
import os
from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()
app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

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

@app.delete("/api/customers/<int:id>")
def delete_customer(id):
    try:
        response = (supabase.table("customers").delete().eq("id", id).execute())

        return {
            "success": True,
            "message": "Customer deleted successfully.",
            "customer": response.data
        }, 200

    except Exception as e:
        return {
            "success": False,
            "message": "This customer cannot be deleted because they have existing orders.",
            "error": str(e)
        }, 400
    
if __name__ == "__main__":
    app.run(debug=True)
