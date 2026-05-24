CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(80) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS courses (
    id INT PRIMARY KEY,
    title VARCHAR(120) NOT NULL UNIQUE,
    description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS user_progress (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    topic VARCHAR(180) NOT NULL,
    completed TINYINT(1) NOT NULL DEFAULT 0,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY unique_user_course_topic (user_id, course_id, topic),
    CONSTRAINT fk_user_progress_user
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_user_progress_course
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

INSERT INTO courses (id, title, description) VALUES
(1, 'Computer Basics', 'Start with the foundations of computers, hardware, software, and storage.'),
(2, 'MS Office', 'Learn Word, Excel, PowerPoint, and day-to-day office productivity skills.'),
(3, 'Internet & Email', 'Understand browsing, online safety, email basics, and internet tools.'),
(4, 'HTML', 'Learn the structure of web pages with HTML tags and elements.'),
(5, 'CSS', 'Style web pages with layouts, colors, spacing, and responsive design.'),
(6, 'JavaScript', 'Add interactivity to websites using JavaScript basics and DOM events.'),
(7, 'Python', 'Learn beginner-friendly programming with Python syntax and examples.'),
(8, 'C / C++', 'Learn C and C++ programming concepts with examples and syntax.'),
(9, 'Database (MySQL)', 'Understand databases, tables, SQL commands, and MySQL basics.'),
(10, 'Full Stack Development', 'Understand how frontend, backend, databases, APIs, and deployment work together.')
ON DUPLICATE KEY UPDATE
    title = VALUES(title),
    description = VALUES(description);
