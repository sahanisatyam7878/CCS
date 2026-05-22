import os
import sqlite3
from pathlib import Path

from flask import Flask, abort, g, jsonify, render_template, request
from werkzeug.security import check_password_hash, generate_password_hash

# =========================================
# FLASK APP
# =========================================

app = Flask(__name__)

# ✅ IMPORTANT FOR VERCEL
application = app

DEFAULT_DATABASE = (
    "/tmp/computer_course.db"
    if os.environ.get("VERCEL") or os.environ.get("AWS_LAMBDA_FUNCTION_NAME")
    else Path(__file__).with_name("computer_course.db")
)
DATABASE = Path(os.environ.get("DATABASE_PATH", DEFAULT_DATABASE))
SCHEMA_FILE = Path(__file__).with_name("schema.sql")

# =========================================
# COURSES
# =========================================

courses = [
    {"id": 1, "title": "Computer Basics", "desc": "Learn basic computer skills"},
    {"id": 2, "title": "MS Office", "desc": "Word, Excel, PowerPoint"},
    {"id": 3, "title": "Internet & Email", "desc": "Learn browsing & email"},
    {"id": 4, "title": "HTML", "desc": "Build web structure"},
    {"id": 5, "title": "CSS", "desc": "Design websites"},
    {"id": 6, "title": "JavaScript", "desc": "Make websites dynamic"},
    {"id": 7, "title": "Python", "desc": "Programming language"},
    {"id": 8, "title": "C / C++", "desc": "Programming basics"},
    {"id": 9, "title": "Database (MySQL)", "desc": "Store data"},
    {"id": 10, "title": "Full Stack Development", "desc": "Complete web dev"}
]

# =========================================
# DATABASE FUNCTIONS
# =========================================

def get_db():
    if "db" not in g:
        DATABASE.parent.mkdir(parents=True, exist_ok=True)
        g.db = sqlite3.connect(DATABASE, timeout=10)
        g.db.row_factory = sqlite3.Row
        g.db.execute("PRAGMA foreign_keys = ON")
    return g.db


@app.teardown_appcontext
def close_db(error=None):
    db = g.pop("db", None)

    if db is not None:
        db.close()


def init_db():
    DATABASE.parent.mkdir(parents=True, exist_ok=True)
    db = sqlite3.connect(DATABASE)

    db.execute("PRAGMA foreign_keys = ON")

    db.executescript(SCHEMA_FILE.read_text(encoding="utf-8"))

    db.executemany(
        """
        INSERT INTO courses (id, title, description)
        VALUES (:id, :title, :desc)
        ON CONFLICT(id) DO UPDATE SET
            title = excluded.title,
            description = excluded.description
        """,
        courses,
    )

    db.commit()
    db.close()


def get_courses():
    rows = get_db().execute(
        "SELECT id, title, description AS desc FROM courses ORDER BY id"
    ).fetchall()

    return [dict(row) for row in rows]

# =========================================
# TOPICS DATA
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
# ROUTES
# =========================================

@app.route("/")
def home():
    return render_template(
        "index.html",
        courses=get_courses()
    )


@app.route("/course/<int:id>")
def course(id):

    selected = get_db().execute(
        "SELECT id, title, description AS desc FROM courses WHERE id = ?",
        (id,),
    ).fetchone()

    if selected is None:
        abort(404)

    return render_template(
        "course.html",
        course=dict(selected)
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

        db.execute(
            "INSERT INTO users (username, password_hash) VALUES (?, ?)",
            (username, generate_password_hash(password)),
        )

        db.commit()

    except sqlite3.IntegrityError:

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

    user = get_db().execute(
        "SELECT id, username, password_hash FROM users WHERE username = ?",
        (username,),
    ).fetchone()

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
# INIT DATABASE
# =========================================

with app.app_context():
    init_db()

# =========================================
# RUN APP
# =========================================

if __name__ == "__main__":
    app.run()
