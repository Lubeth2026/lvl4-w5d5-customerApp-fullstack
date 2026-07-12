# Customer Management App

A full-stack customer management application built with React, Flask, and Supabase.
Users can create new customers and view customer history stored in a Supabase database.

## Project Features

## Home Page
- Welcome screen for the application
- Navigation between pages

## Create Customer Page
Users can create new customers through a form.
Features:
- Controlled React inputs
- Form validation through database rules
- POST request to Flask backend
- Customer saved to Supabase
- Success message after creation
Customer fields:
- First Name
- Last Name
- Email
- City
- State

## Customer History Page
Displays all customers stored in Supabase.
Features:
- Fetch customer data from Flask API
- Store data using React state
- Display customer records dynamically
- Styled customer cards

### How To Run The Project
Backend Setup
1. Navigate into the backend folder:
cd backend
2. Create and activate virtual environment:
python -m venv .venv
.venv\Scripts\activate
3. Install dependencies:
pip install -r requirements.txt
4. Create a .env file:
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
5. Start flask:
flask run
6. The backend will run on:
http://127.0.0.1:5000

Frontend Setup
1. Navigate into the frontend folder:
cd frontend
2. Install dependencies:
npm install
3. Start React:
npm run dev
4. The frontend will run on:
http://localhost:5173
