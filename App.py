from flask import Flask
import sqlite3

app = Flask(__name__)

def create_database():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price INTEGER NOT NULL
        )
    """)

    conn.commit()
    conn.close()

@app.route("/")
def home():
    return "Online Shopping Website"

if __name__ == "__main__":
    create_database()
    app.run(debug=True)
