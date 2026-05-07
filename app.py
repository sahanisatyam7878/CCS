import sqlite3
from pathlib import Path

from flask import Flask, abort, g, jsonify, render_template, request
from werkzeug.security import check_password_hash, generate_password_hash

app = Flask(__name__)
DATABASE = Path(__file__).with_name("computer_course.db")

# 🔥 ALL COURSES (same structure)
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


def get_db():
    if "db" not in g:
        g.db = sqlite3.connect(DATABASE)
        g.db.row_factory = sqlite3.Row
    return g.db


@app.teardown_appcontext
def close_db(error=None):
    db = g.pop("db", None)
    if db is not None:
        db.close()


def init_db():
    db = sqlite3.connect(DATABASE)
    db.execute("PRAGMA foreign_keys = ON")
    db.executescript(
        """
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL,
            created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS courses (
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL UNIQUE,
            description TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS user_progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            course_id INTEGER NOT NULL,
            topic TEXT NOT NULL,
            completed INTEGER NOT NULL DEFAULT 0,
            updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(user_id, course_id, topic),
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
            FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
        );
        """
    )
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

# 🔥 Computer Basics Topics + Content (UPDATED)
computer_topics = {
    "topics": [
        "Introduction",
        "History of Computer",
        "Types of Computer",
        "Hardware",
        "Software"
    ],
    "content": {
        "Introduction": "Computer ek electronic machine hai jo data ko process karta hai.",

        # ✅🔥 FULL CONTENT ADDED WITH IMAGE
        "History of Computer": """
<img src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
style="width:100%; border-radius:10px; margin-bottom:15px;">

<h2>History of Computer</h2>

<p>
The history of computers is a long journey from simple calculating tools to modern digital machines.
Computers have evolved over thousands of years and now play an important role in every field.
</p>

<h3>1. Early Computing Devices</h3>
<p>
The Abacus (3000 BC) was the first calculating tool. Later, Napier’s Bones, Pascaline, 
and Leibniz calculator were invented to improve calculations.
</p>

<h3>2. Mechanical Computers</h3>
<p>
Charles Babbage designed the Analytical Engine, which is considered the first computer concept.
Ada Lovelace became the first programmer.
</p>

<h3>3. First Generation (1940–1956)</h3>
<p>
These computers used vacuum tubes. They were very large, expensive, and generated a lot of heat.
Examples: ENIAC and UNIVAC.
</p>

<h3>4. Second Generation (1956–1963)</h3>
<p>
Transistors replaced vacuum tubes. Computers became smaller, faster, and more reliable.
Languages like COBOL and FORTRAN were introduced.
</p>

<h3>5. Third Generation (1964–1971)</h3>
<p>
Integrated Circuits (IC) were used. Operating systems were introduced and computers became more efficient.
</p>

<h3>6. Fourth Generation (1971–Present)</h3>
<p>
Microprocessors were introduced. Personal computers, laptops, and smartphones became popular.
</p>

<h3>7. Fifth Generation (Future)</h3>
<p>
Based on Artificial Intelligence (AI). Computers can learn, think, and make decisions.
</p>

<h3>Conclusion</h3>
<p>
From Abacus to AI, computers have transformed the world and continue to evolve rapidly.
</p>
""",

        "Types of Computer": "Analog, Digital aur Hybrid computers hote hain.",
        "Hardware": "Hardware physical parts hote hain jaise keyboard, mouse, CPU.",
        "Software": "Software programs hote hain jo computer ko chalate hain."
    }
}

# 🔥 Internet & Email Topics (same)
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
        "Introduction to Internet": "Internet ek global network hai jo duniya bhar ke computers ko connect karta hai.",
        "Types of Internet Connections": "WiFi, Broadband, Mobile Data aur Fiber common types hain.",
        "Web Browser Basics": "Chrome, Edge, Firefox browser use hote hain websites open karne ke liye.",
        "Search Engine Use": "Google par keywords use karke search karte hain.",
        "Website & URL Understanding": "URL ek web address hota hai jaise https://example.com",
        "Downloading & Uploading Files": "Files ko download ya upload kar sakte hain.",
        "Online Safety & Security": "Strong password aur antivirus use karna chahiye.",
        "Social Media Basics": "Facebook, Instagram jaise platforms social media hain.",
        "Introduction to Email": "Email ek digital message system hai.",
        "Creating Email Account": "Gmail par account create kar sakte hain.",
        "Sending & Receiving Emails": "Email bhejna aur receive karna basic skill hai.",
        "Email Attachments": "File, image attach kar sakte hain email me.",
        "Email Formatting": "Subject, CC, BCC ka use hota hai.",
        "Spam & Email Security": "Unknown mails se bachna chahiye.",
        "Cloud & Online Storage": "Google Drive par data store hota hai."
    }
}

# 🔥 HOME PAGE
@app.route("/")
def home():
    return render_template("index.html", courses=get_courses())

# 🔥 COURSE PAGE
@app.route("/course/<int:id>")
def course(id):
    selected = get_db().execute(
        "SELECT id, title, description AS desc FROM courses WHERE id = ?",
        (id,),
    ).fetchone()
    if selected is None:
        abort(404)
    return render_template("course.html", course=dict(selected))


@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json(silent=True) or {}
    username = (data.get("username") or "").strip()
    password = (data.get("password") or "").strip()

    if not username or not password:
        return jsonify({"error": "Username and password are required."}), 400

    if len(password) < 4:
        return jsonify({"error": "Password must be at least 4 characters."}), 400

    try:
        db = get_db()
        db.execute(
            "INSERT INTO users (username, password_hash) VALUES (?, ?)",
            (username, generate_password_hash(password)),
        )
        db.commit()
    except sqlite3.IntegrityError:
        return jsonify({"error": "This username is already registered. Please login."}), 409

    return jsonify({"message": "Account created successfully. Please login."}), 201


@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json(silent=True) or {}
    username = (data.get("username") or "").strip()
    password = (data.get("password") or "").strip()

    if not username or not password:
        return jsonify({"error": "Username and password are required."}), 400

    user = get_db().execute(
        "SELECT id, username, password_hash FROM users WHERE username = ?",
        (username,),
    ).fetchone()

    if user is None or not check_password_hash(user["password_hash"], password):
        return jsonify({"error": "Wrong username or password."}), 401

    return jsonify({
        "message": "Login successful.",
        "user": {"id": user["id"], "username": user["username"]},
    })

# 🔥 API FOR TOPICS
@app.route("/get_topics/<int:id>")
def get_topics(id):
    if id == 1:
        return jsonify(computer_topics)

    if id == 3:
        return jsonify(internet_topics)

    return jsonify({"topics": [], "content": {}})

# 🔥 RUN
init_db()

if __name__ == "__main__":
    app.run(debug=True)
