```python
import os
import pymysql

from flask import Flask, abort, jsonify, render_template, request
from werkzeug.security import check_password_hash, generate_password_hash

# =========================================
# FLASK APP
# =========================================

app = Flask(__name__)

# IMPORTANT FOR VERCEL
application = app

# =========================================
# MYSQL DATABASE CONNECTION
# =========================================

def get_db():
    return pymysql.connect(
        host=os.getenv("MYSQLHOST"),
        user=os.getenv("MYSQLUSER"),
        password=os.getenv("MYSQLPASSWORD"),
        database=os.getenv("MYSQLDATABASE"),
        port=int(os.getenv("MYSQLPORT")),
        cursorclass=pymysql.cursors.DictCursor
    )

# =========================================
# GET COURSES
# =========================================

def get_courses():

    db = get_db()
    cursor = db.cursor()

    cursor.execute(
        "SELECT id, title, description AS `desc` FROM courses ORDER BY id"
    )

    rows = cursor.fetchall()

    db.close()

    return rows

# =========================================
# COMPUTER TOPICS
# =========================================

computer_topics = {
    "topics": [
        "Introduction",
        "History of Computer",
        "Types of Computer",
        "Hardware",
        "Software"
    ],

    "content": {

        "Introduction":
        "Computer ek electronic machine hai jo data ko process karta hai.",

        "History of Computer": """
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475"
        style="width:100%; border-radius:10px; margin-bottom:15px;">

        <h2>History of Computer</h2>

        <p>
        The history of computers is a long journey from simple
        calculating tools to modern digital machines.
        </p>

        <h3>1. Early Computing Devices</h3>
        <p>
        Abacus pehla calculating tool tha.
        </p>

        <h3>2. Mechanical Computers</h3>
        <p>
        Charles Babbage ne Analytical Engine banaya.
        </p>

        <h3>3. First Generation</h3>
        <p>
        Vacuum tubes use hote the.
        </p>

        <h3>4. Second Generation</h3>
        <p>
        Transistors use hone lage.
        </p>

        <h3>5. Third Generation</h3>
        <p>
        Integrated Circuits (IC) aaye.
        </p>

        <h3>6. Fourth Generation</h3>
        <p>
        Microprocessors aaye.
        </p>

        <h3>7. Fifth Generation</h3>
        <p>
        AI based computers future hain.
        </p>
        """,

        "Types of Computer":
        "Analog, Digital aur Hybrid computers hote hain.",

        "Hardware":
        "Hardware physical parts hote hain jaise keyboard, mouse, CPU.",

        "Software":
        "Software programs hote hain jo computer ko chalate hain."
    }
}

# =========================================
# INTERNET TOPICS
# =========================================

internet_topics = {
    "topics": [
        "Introduction to Internet",
        "Types of Internet Connections",
        "Web Browser Basics",
        "Search Engine Use",
        "Website & URL Understanding",
        "Downloading & Uploading Files",
        "Online Safety & Security",
        "Social Media Basics",
        "Introduction to Email",
        "Creating Email Account",
        "Sending & Receiving Emails",
        "Email Attachments",
        "Email Formatting",
        "Spam & Email Security",
        "Cloud & Online Storage"
    ],

    "content": {

        "Introduction to Internet":
        "Internet ek global network hai jo duniya bhar ke computers ko connect karta hai.",

        "Types of Internet Connections":
        "WiFi, Broadband, Mobile Data aur Fiber common types hain.",

        "Web Browser Basics":
        "Chrome, Edge, Firefox browser use hote hain websites open karne ke liye.",

        "Search Engine Use":
        "Google par keywords use karke search karte hain.",

        "Website & URL Understanding":
        "URL ek web address hota hai jaise https://example.com",

        "Downloading & Uploading Files":
        "Files ko download ya upload kar sakte hain.",

        "Online Safety & Security":
        "Strong password aur antivirus use karna chahiye.",

        "Social Media Basics":
        "Facebook, Instagram jaise platforms social media hain.",

        "Introduction to Email":
        "Email ek digital message system hai.",

        "Creating Email Account":
        "Gmail par account create kar sakte hain.",

        "Sending & Receiving Emails":
        "Email bhejna aur receive karna basic skill hai.",

        "Email Attachments":
        "File, image attach kar sakte hain email me.",

        "Email Formatting":
        "Subject, CC, BCC ka use hota hai.",

        "Spam & Email Security":
        "Unknown mails se bachna chahiye.",

        "Cloud & Online Storage":
        "Google Drive par data store hota hai."
    }
}

# =========================================
# HOME PAGE
# =========================================

@app.route("/")
def home():

    return render_template(
        "index.html",
        courses=get_courses()
    )

# =========================================
# COURSE PAGE
# =========================================

@app.route("/course/<int:id>")
def course(id):

    db = get_db()
    cursor = db.cursor()

    cursor.execute(
        "SELECT id, title, description AS `desc` FROM courses WHERE id=%s",
        (id,)
    )

    selected = cursor.fetchone()

    db.close()

    if selected is None:
        abort(404)

    return render_template(
        "course.html",
        course=selected
    )

# =========================================
# REGISTER API
# =========================================

@app.route("/api/register", methods=["POST"])
def register():

    data = request.get_json(silent=True) or {}

    username = (data.get("username") or "").strip()
    password = (data.get("password") or "").strip()

    if not username or not password:

        return jsonify({
            "error": "Username and password are required."
        }), 400

    if len(password) < 4:

        return jsonify({
            "error": "Password must be at least 4 characters."
        }), 400

    try:

        db = get_db()
        cursor = db.cursor()

        cursor.execute(
            "INSERT INTO users (username, password_hash) VALUES (%s, %s)",
            (username, generate_password_hash(password))
        )

        db.commit()
        db.close()

    except Exception:

        return jsonify({
            "error": "Username already exists."
        }), 409

    return jsonify({
        "message": "Account created successfully."
    }), 201

# =========================================
# LOGIN API
# =========================================

@app.route("/api/login", methods=["POST"])
def login():

    data = request.get_json(silent=True) or {}

    username = (data.get("username") or "").strip()
    password = (data.get("password") or "").strip()

    if not username or not password:

        return jsonify({
            "error": "Username and password are required."
        }), 400

    db = get_db()
    cursor = db.cursor()

    cursor.execute(
        "SELECT id, username, password_hash FROM users WHERE username=%s",
        (username,)
    )

    user = cursor.fetchone()

    db.close()

    if user is None or not check_password_hash(
        user["password_hash"],
        password
    ):

        return jsonify({
            "error": "Wrong username or password."
        }), 401

    return jsonify({
        "message": "Login successful.",
        "user": {
            "id": user["id"],
            "username": user["username"]
        }
    })

# =========================================
# TOPICS API
# =========================================

@app.route("/get_topics/<int:id>")
def get_topics(id):

    if id == 1:
        return jsonify(computer_topics)

    if id == 3:
        return jsonify(internet_topics)

    return jsonify({
        "topics": [],
        "content": {}
    })

# =========================================
# RUN APP
# =========================================

if __name__ == "__main__":
    app.run(debug=True)
```
