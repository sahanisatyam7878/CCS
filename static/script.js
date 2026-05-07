const imagePaths = window.appImagePaths || {};

const topicsData = {
    "Computer Basics": [
        "Introduction",
        "History of Computer",
        "Types of Computer",
        "Hardware",
        "Software",
        "Input Devices",
        "Output Devices",
        "CPU",
        "Memory",
        "Storage Devices"
    ],
    "MS Office": [
        "Introduction to MS Office",
        "MS Word Basics",
        "MS Excel Basics",
        "PowerPoint Basics"
    ],
    "Internet & Email": [
        "Introduction to Internet",
        "Types of Internet Connections",
        "Web Browser",
        "Search Engines",
        "Internet Safety",
        "Introduction to Email"
    ],
    "HTML": [
        "Introduction to HTML",
        "HTML Structure",
        "HTML Doctype & Root",
        "HTML Head & Metadata",
        "HTML Headings",
        "HTML Paragraphs & Text",
        "HTML Links",
        "HTML Images",
        "HTML Lists",
        "HTML Tables",
        "HTML Forms",
        "HTML Semantic Sections",
        "HTML Attributes",
        "HTML Block vs Inline Elements",
        "HTML Tags"
    ],
    "CSS": [
        "Overview",
        "Selectors",
        "Colors & Backgrounds",
        "Box Model"
    ],
    "JavaScript": [
        "Introduction to JavaScript",
        "History of JavaScript",
        "JavaScript Features",
        "JavaScript Syntax",
        "JavaScript Variables",
        "JavaScript Data Types",
        "Variable Declaration",
        "Variable Scope",
        "Type Conversion",
        "Operators",
        "Functions",
        "Conditional Statements",
        "Loops",
        "Arrays",
        "Objects",
        "DOM Basics",
        "Events",
        "JavaScript in HTML",
        "Frameworks & Libraries"
    ],
    "Python": [
        "Introduction",
        "History of Python",
        "Python Features",
        "Python Syntax",
        "Variables",
        "Data Types",
        "Operators",
        "Conditional Statements",
        "Loops",
        "Lists",
        "Tuples",
        "Dictionaries",
        "Sets",
        "Functions",
        "Modules & Packages",
        "Input & Output",
        "File Handling",
        "Error Handling",
        "Python Applications"
    ],
    "C / C++": [
        "Overview",
        "History of C & C++",
        "Basic Syntax",
        "Variables & Data Types",
        "Operators",
        "Control Statements",
        "Functions",
        "Pointers & Memory",
        "Arrays & Strings",
        "Structures & Unions",
        "File Input/Output",
        "Preprocessor & Macros",
        "Object-Oriented Concepts",
        "Standard Template Library",
        "Differences Between C and C++"
    ],
    "Database (MySQL)": [
        "Overview",
        "Database Basics",
        "DBMS and RDBMS",
        "MySQL Introduction",
        "Tables, Rows and Columns",
        "Data Types",
        "Keys and Constraints",
        "Create Database and Table",
        "Insert Data",
        "Select Queries",
        "Where and Operators",
        "Update and Delete",
        "Order By and Limit",
        "Aggregate Functions",
        "Group By and Having",
        "Joins",
        "Subqueries",
        "Indexes",
        "Views",
        "Backup and Restore"
    ],
    "Full Stack Development": [
        "Overview",
        "Web Development Basics",
        "Frontend Development",
        "HTML Structure",
        "CSS Styling",
        "JavaScript Interactivity",
        "Responsive Design",
        "Backend Development",
        "Server and HTTP",
        "APIs and JSON",
        "Databases in Full Stack",
        "CRUD Operations",
        "Authentication and Authorization",
        "MVC and Project Structure",
        "Version Control with Git",
        "Testing and Debugging",
        "Deployment and Hosting",
        "Security Basics",
        "Performance Basics",
        "Full Stack Project Roadmap"
    ]
};

const contentData = {
    "Computer Basics": {
        "Introduction": `
            <div class="lesson-section">
                <img src="${imagePaths.computerIntro}" alt="Introduction to computer" class="lesson-image">
                <h3>Introduction to Basic Computer</h3>
                <p>
                    A computer is an electronic machine that accepts data, processes it, and produces meaningful results.
                </p>
                <p>
                    Computer basics helps beginners understand how a computer works and how it is used in daily life.
                    This foundation makes it easier to learn advanced topics like office tools, internet use,
                    programming, and software development.
                </p>

                <h4>Definition of Computer</h4>
                <p>
                    A computer is an electronic machine that accepts data, processes it, and produces meaningful results.
                </p>

                <p><strong>A computer performs four main functions:</strong></p>
                <ul>
                    <li><strong>Input:</strong> takes data through devices like keyboard and mouse</li>
                    <li><strong>Processing:</strong> processes data through the CPU</li>
                    <li><strong>Output:</strong> displays results through devices like monitor</li>
                    <li><strong>Storage:</strong> saves data in devices like hard disk and SSD</li>
                </ul>

                <h4>Computer Working Cycle</h4>
                <p class="highlight-line">Input -> Processing -> Output -> Storage</p>

                <p><strong>Example:</strong></p>
                <ul>
                    <li>You type your name -> Input</li>
                    <li>Computer processes it -> Processing</li>
                    <li>It shows on screen -> Output</li>
                    <li>It gets saved -> Storage</li>
                </ul>

                <h4>Full Definition (Exam Level)</h4>
                <p>
                    A computer is a programmable electronic device that accepts input data, processes data based on
                    instructions, produces output, and stores data for future use.
                </p>

                <h4>Main Components of a Computer</h4>
                <img src="${imagePaths.componentsDiagram}" alt="Components of computer diagram" class="lesson-image">

                <p><strong>Input Devices</strong></p>
                <ul>
                    <li>Keyboard</li>
                    <li>Mouse</li>
                    <li>Scanner</li>
                    <li>Microphone</li>
                </ul>

                <p><strong>Processing Unit</strong></p>
                <ul>
                    <li>CPU (Central Processing Unit)</li>
                    <li>ALU (Arithmetic Logic Unit)</li>
                    <li>CU (Control Unit)</li>
                </ul>

                <p><strong>Output Devices</strong></p>
                <ul>
                    <li>Monitor</li>
                    <li>Printer</li>
                    <li>Speakers</li>
                </ul>

                <p><strong>Storage Devices</strong></p>
                <ul>
                    <li>RAM (Temporary Memory)</li>
                    <li>ROM (Permanent Memory)</li>
                    <li>Hard Disk / SSD</li>
                </ul>

                <h4>Importance of Computer</h4>
                <p>Computers are used in almost every field:</p>
                <ul>
                    <li>Education</li>
                    <li>Banking</li>
                    <li>Business</li>
                    <li>Entertainment</li>
                    <li>Healthcare</li>
                    <li>Government Services</li>
                </ul>
                <p>Modern life is incomplete without computers.</p>

                <h4>Characteristics of a Computer</h4>
                <ul>
                    <li><strong>Speed:</strong> performs tasks very fast</li>
                    <li><strong>Accuracy:</strong> gives correct results</li>
                    <li><strong>Storage:</strong> can store large amounts of data</li>
                    <li><strong>Automation:</strong> works automatically</li>
                    <li><strong>Versatility:</strong> is used for many different tasks</li>
                </ul>

                <h4>Computer vs Human</h4>
                <div class="table-wrap">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Computer</th>
                                <th>Human</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Speed</td>
                                <td>Very Fast</td>
                                <td>Slow</td>
                            </tr>
                            <tr>
                                <td>Accuracy</td>
                                <td>High</td>
                                <td>Can make mistakes</td>
                            </tr>
                            <tr>
                                <td>Memory</td>
                                <td>Large</td>
                                <td>Limited</td>
                            </tr>
                            <tr>
                                <td>Thinking</td>
                                <td>No</td>
                                <td>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>COMPUTER Full Form (Concept-Based)</h4>
                <ul>
                    <li>C -> Common</li>
                    <li>O -> Operating</li>
                    <li>M -> Machine</li>
                    <li>P -> Purposely</li>
                    <li>U -> Used for</li>
                    <li>T -> Technological</li>
                    <li>E -> Educational</li>
                    <li>R -> Research</li>
                </ul>
            </div>
        `,
        "History of Computer": `
            <div class="lesson-section">
                <img src="${imagePaths.historyComputer}" alt="History of computer" class="lesson-image">
                <h3>History of Computer</h3>
                <p>
                    The history of computers is the story of how human beings moved from simple counting tools
                    to intelligent digital machines. Over time, computers became faster, smaller, more reliable,
                    and more useful in every field of life.
                </p>

                <h4>1. Early Computing Devices</h4>
                <p>
                    The earliest calculating device was the <strong>Abacus</strong>, which was used for counting and
                    basic arithmetic. Later, more advanced devices were developed to help people solve mathematical problems.
                </p>
                <ul>
                    <li><strong>Abacus:</strong> one of the first manual calculating tools</li>
                    <li><strong>Napier's Bones:</strong> used for multiplication and division</li>
                    <li><strong>Pascaline:</strong> invented by Blaise Pascal for addition and subtraction</li>
                    <li><strong>Leibniz Calculator:</strong> improved machine for advanced calculations</li>
                </ul>

                <h4>2. Mechanical Computers</h4>
                <p>
                    In the 19th century, <strong>Charles Babbage</strong> designed the <strong>Analytical Engine</strong>,
                    which is considered the foundation of the modern computer. Because of this, Charles Babbage is known as
                    the <strong>Father of Computer</strong>.
                </p>
                <p>
                    <strong>Ada Lovelace</strong> wrote instructions for this machine and became the first computer programmer.
                </p>

                <img src="${imagePaths.oldComputerParts}" alt="Old computer parts" class="lesson-image">

                <h4>3. Electromechanical and Early Electronic Computers</h4>
                <p>
                    After mechanical machines, computers started using electricity and later electronics. These machines
                    were much faster than manual devices.
                </p>
                <ul>
                    <li><strong>Mark I:</strong> an early electromechanical computer</li>
                    <li><strong>ENIAC:</strong> one of the first large electronic computers</li>
                    <li><strong>EDVAC:</strong> introduced stored-program concepts</li>
                    <li><strong>UNIVAC:</strong> one of the first commercial computers</li>
                </ul>

                <h4>4. Generations of Computer</h4>
                <p>The development of computers is commonly divided into five generations:</p>
                <ul>
                    <li><strong>First Generation (1940-1956):</strong> used vacuum tubes, very large and expensive</li>
                    <li><strong>Second Generation (1956-1963):</strong> used transistors, smaller and more reliable</li>
                    <li><strong>Third Generation (1964-1971):</strong> used integrated circuits (IC), faster and more efficient</li>
                    <li><strong>Fourth Generation (1971-present):</strong> used microprocessors, leading to personal computers</li>
                    <li><strong>Fifth Generation:</strong> based on artificial intelligence, machine learning, and smart systems</li>
                </ul>

                <h4>5. Modern Computer Era</h4>
                <p>
                    Today we use desktops, laptops, tablets, and smartphones. Modern computers are powerful enough for
                    education, banking, business, healthcare, entertainment, and scientific research.
                </p>

                <h4>Conclusion</h4>
                <p>
                    The history of computer shows continuous improvement from simple hand-operated devices to intelligent
                    machines. This journey explains how computers became one of the most important inventions in modern life.
                </p>
            </div>
        `,
        "Types of Computer": `
            <div class="lesson-section">
                <img src="${imagePaths.typesComputer}" alt="Types of computers" class="lesson-image">
                <h3>Types of Computer</h3>
                <p>
                    Computers are of many types. They can be classified on the basis of size, speed, purpose,
                    and the kind of data they process. Each type of computer is designed for a special use.
                </p>

                <h4>1. Analog Computer</h4>
                <p>
                    An analog computer works with continuous data such as temperature, speed, pressure, and voltage.
                    It does not calculate in exact numbers like a digital computer. Instead, it measures physical values.
                </p>
                <p><strong>Example:</strong> speedometer, thermometer, and old scientific measuring machines.</p>

                <h4>2. Digital Computer</h4>
                <p>
                    A digital computer works with numbers, letters, and symbols. It processes data in binary form
                    (0 and 1). This is the most common type of computer used today.
                </p>
                <p><strong>Example:</strong> desktop computer, laptop, smartphone, calculator.</p>

                <h4>3. Hybrid Computer</h4>
                <p>
                    A hybrid computer combines the features of both analog and digital computers. It can measure
                    physical values and also process them in digital form.
                </p>
                <p><strong>Example:</strong> machines used in hospitals, airplanes, and scientific laboratories.</p>

                <img src="${imagePaths.partsOverview}" alt="Different types of computers" class="lesson-image">

                <h4>4. Supercomputer</h4>
                <p>
                    A supercomputer is the fastest and most powerful type of computer. It is used for complex scientific
                    calculations that require huge processing power.
                </p>
                <p><strong>Uses:</strong> weather forecasting, space research, nuclear research, artificial intelligence.</p>

                <h4>5. Mainframe Computer</h4>
                <p>
                    A mainframe computer is a large and powerful computer used by big organizations to handle a large
                    amount of data and many users at the same time.
                </p>
                <p><strong>Uses:</strong> banks, railway systems, government departments, large companies.</p>

                <h4>6. Minicomputer</h4>
                <p>
                    A minicomputer is smaller than a mainframe but more powerful than a microcomputer. It can support
                    multiple users at the same time.
                </p>
                <p><strong>Uses:</strong> small businesses, colleges, and offices.</p>

                <h4>7. Microcomputer</h4>
                <p>
                    A microcomputer is the smallest general-purpose computer. It is designed for personal use and is
                    the most common computer type in homes, schools, and offices.
                </p>
                <p><strong>Examples:</strong> desktop, laptop, tablet, smartphone.</p>

                <img src="${imagePaths.oldComputerParts}" alt="Old and personal computer types" class="lesson-image">

                <h4>8. Desktop Computer</h4>
                <p>
                    A desktop computer is a personal computer that is placed on a desk. It usually has separate parts
                    like monitor, keyboard, mouse, and CPU cabinet.
                </p>
                <p><strong>Best for:</strong> office work, study, design, and home use.</p>

                <h4>9. Laptop Computer</h4>
                <p>
                    A laptop is a portable computer that can be carried easily from one place to another. It has a
                    built-in screen, keyboard, battery, and touchpad.
                </p>
                <p><strong>Best for:</strong> students, office work, travel, and online classes.</p>

                <h4>10. Tablet Computer</h4>
                <p>
                    A tablet is a lightweight touch-screen computer. It is easy to carry and mostly used for internet,
                    reading, videos, apps, and online learning.
                </p>
                <p><strong>Best for:</strong> entertainment, learning, and light work.</p>

                <h4>11. Workstation</h4>
                <p>
                    A workstation is a high-performance computer designed for professional users. It is more powerful
                    than a normal personal computer.
                </p>
                <p><strong>Uses:</strong> engineering, animation, 3D design, video editing, and scientific work.</p>

                <h4>12. Server</h4>
                <p>
                    A server is a computer that provides data, resources, or services to other computers through a network.
                    It stores websites, files, software, and databases.
                </p>
                <p><strong>Uses:</strong> websites, apps, company networks, cloud storage.</p>

                <h4>Summary</h4>
                <p>
                    In simple words, computers can be small or large, slow or fast, personal or industrial.
                    Different types of computers are made for different tasks, and together they play an important
                    role in modern life.
                </p>
            </div>
        `,
        "Hardware": `
            <div class="lesson-section">
                <img src="${imagePaths.hardwareComponents}" alt="Computer hardware parts" class="lesson-image">
                <h3>Hardware</h3>
                <p>
                    Hardware means the physical parts of a computer that we can see and touch. Without hardware,
                    a computer cannot work because all input, processing, output, and storage activities depend on it.
                </p>
                <p>
                    In simple words, hardware is the body of the computer, while software is the set of instructions
                    that tells the hardware what to do.
                </p>

                <h4>Main Hardware Categories</h4>
                <ul>
                    <li><strong>Input Devices:</strong> keyboard, mouse, scanner, microphone</li>
                    <li><strong>Processing Devices:</strong> CPU, motherboard, processor chip</li>
                    <li><strong>Output Devices:</strong> monitor, printer, speakers, projector</li>
                    <li><strong>Storage Devices:</strong> hard disk, SSD, pen drive, memory card</li>
                    <li><strong>Communication Devices:</strong> modem, network devices, webcam</li>
                </ul>

                <img src="${imagePaths.partsOverview}" alt="Parts of computer" class="lesson-image">

                <h4>1. Keyboard</h4>
                <p>
                    A keyboard is an input device used to type letters, numbers, and commands into the computer.
                    It is one of the most common devices used for entering data.
                </p>

                <h4>2. Mouse</h4>
                <p>
                    A mouse is an input device used to point, click, select, drag, and open files or programs
                    on the screen.
                </p>

                <h4>3. Monitor</h4>
                <p>
                    A monitor is an output device that displays text, images, videos, and all results produced by
                    the computer.
                </p>

                <h4>4. CPU / Processor</h4>
                <p>
                    CPU stands for Central Processing Unit. It is called the brain of the computer because it performs
                    calculations, controls operations, and processes instructions.
                </p>

                <h4>5. Motherboard</h4>
                <p>
                    The motherboard is the main circuit board of the computer. It connects all hardware components
                    such as CPU, RAM, storage devices, and power supply so they can work together.
                </p>

                <h4>6. Hard Disk / SSD</h4>
                <p>
                    Hard Disk and SSD are storage devices used to save data, files, software, and the operating system
                    for long-term use. SSD is faster than a hard disk.
                </p>

                <h4>7. RAM</h4>
                <p>
                    RAM stands for Random Access Memory. It is temporary memory that stores data while the computer is running.
                    When the power is off, the data in RAM is lost.
                </p>

                <h4>8. ROM</h4>
                <p>
                    ROM stands for Read Only Memory. It stores permanent instructions required to start the computer.
                </p>

                <h4>9. Printer</h4>
                <p>
                    A printer is an output device that prints digital data on paper. It is used to create hard copies
                    of documents and images.
                </p>

                <h4>10. Scanner</h4>
                <p>
                    A scanner is an input device that converts paper documents and photos into digital form.
                </p>

                <h4>11. Speakers</h4>
                <p>
                    Speakers are output devices that produce sound from the computer, such as music, voice, and video audio.
                </p>

                <h4>12. Microphone</h4>
                <p>
                    A microphone is an input device that sends voice or sound into the computer for recording,
                    communication, or voice commands.
                </p>

                <h4>13. Pen Drive / USB Flash Drive</h4>
                <p>
                    A pen drive is a portable storage device used to save and transfer data from one computer to another.
                </p>

                <h4>14. Memory Card</h4>
                <p>
                    A memory card is a small storage device commonly used in mobile phones, cameras, and card readers.
                </p>

                <h4>15. Webcam</h4>
                <p>
                    A webcam is an input device used to capture video and images. It is useful for online classes,
                    video calls, and meetings.
                </p>

                <h4>16. Modem</h4>
                <p>
                    A modem is a communication device that connects a computer or network to the internet.
                </p>

                <img src="${imagePaths.hardwareComponents}" alt="Detailed hardware devices" class="lesson-image">

                <h4>Importance of Hardware</h4>
                <ul>
                    <li>It allows users to input data into the computer</li>
                    <li>It helps the system process instructions</li>
                    <li>It displays results clearly</li>
                    <li>It stores files and important information</li>
                    <li>It connects the computer with other devices and networks</li>
                </ul>

                <h4>Conclusion</h4>
                <p>
                    Hardware is the physical foundation of every computer system. From keyboard to CPU and from monitor
                    to storage devices, each part has an important role in making the computer work properly.
                </p>
            </div>
        `,
        "Software": `
            <div class="lesson-section">
                <img src="${imagePaths.softwareImage}" alt="Computer software and programs" class="lesson-image">
                <h3>Software</h3>
                <p>
                    Software is a collection of programs and instructions that tells the computer what to do.
                    Hardware is the physical part of the computer, but software is the working intelligence that
                    controls all operations.
                </p>
                <p>
                    In simple words, software is the set of commands that helps a computer perform useful tasks such as
                    typing, calculating, drawing, browsing the internet, watching videos, and running applications.
                </p>

                <h4>Definition of Software</h4>
                <p>
                    Software is the intangible part of the computer system. We cannot touch it physically, but we can
                    use it to perform tasks. Without software, hardware cannot work properly.
                </p>

                <h4>Why Software Is Important</h4>
                <ul>
                    <li>It gives instructions to hardware</li>
                    <li>It helps users perform different tasks</li>
                    <li>It makes the computer useful and functional</li>
                    <li>It controls input, processing, output, and storage operations</li>
                </ul>

                <h4>Main Types of Software</h4>
                <p>
                    Software is mainly divided into two major types:
                </p>
                <ul>
                    <li><strong>System Software</strong></li>
                    <li><strong>Application Software</strong></li>
                </ul>

                <h4>1. System Software</h4>
                <p>
                    System software is the software that manages and controls the computer hardware. It creates a platform
                    on which application programs can run.
                </p>
                <p><strong>Examples:</strong> Windows, Linux, macOS, device drivers, language translators.</p>

                <h4>Functions of System Software</h4>
                <ul>
                    <li>Controls hardware devices</li>
                    <li>Manages memory and files</li>
                    <li>Starts and runs the computer</li>
                    <li>Provides a platform for application software</li>
                </ul>

                <h4>Parts of System Software</h4>
                <p><strong>Operating System</strong></p>
                <p>
                    An operating system is the main software of the computer. It manages all hardware and software resources.
                </p>
                <p><strong>Examples:</strong> Windows, Linux, Android.</p>

                <p><strong>Device Drivers</strong></p>
                <p>
                    Device drivers help the operating system communicate with hardware devices like printer, keyboard, mouse, and monitor.
                </p>

                <p><strong>Utility Programs</strong></p>
                <p>
                    Utility software is used for maintenance and protection of the computer.
                </p>
                <p><strong>Examples:</strong> antivirus, disk cleanup, backup tools, file compression tools.</p>

                <h4>2. Application Software</h4>
                <p>
                    Application software is designed to help the user perform specific tasks. These programs are created
                    for practical day-to-day work.
                </p>
                <p><strong>Examples:</strong> MS Word, MS Excel, PowerPoint, Paint, Chrome, VLC media player.</p>

                <h4>Types of Application Software</h4>
                <ul>
                    <li><strong>General Purpose Software:</strong> Word processor, spreadsheet, browser, calculator</li>
                    <li><strong>Special Purpose Software:</strong> billing software, payroll software, school management software</li>
                </ul>

                <h4>Examples of Software and Their Uses</h4>
                <ul>
                    <li><strong>MS Word:</strong> used for typing letters and documents</li>
                    <li><strong>MS Excel:</strong> used for calculations, tables, and charts</li>
                    <li><strong>PowerPoint:</strong> used for presentations</li>
                    <li><strong>Paint:</strong> used for simple drawing</li>
                    <li><strong>Google Chrome:</strong> used for internet browsing</li>
                    <li><strong>VLC Media Player:</strong> used for playing audio and video files</li>
                </ul>

                <h4>Software vs Hardware</h4>
                <div class="table-wrap">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Hardware</th>
                                <th>Software</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nature</td>
                                <td>Physical parts</td>
                                <td>Programs and instructions</td>
                            </tr>
                            <tr>
                                <td>Touch</td>
                                <td>Can be touched</td>
                                <td>Cannot be touched</td>
                            </tr>
                            <tr>
                                <td>Examples</td>
                                <td>Keyboard, mouse, monitor</td>
                                <td>Windows, Word, Chrome</td>
                            </tr>
                            <tr>
                                <td>Function</td>
                                <td>Performs physical operations</td>
                                <td>Controls and directs the hardware</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Characteristics of Software</h4>
                <ul>
                    <li>It is not physical</li>
                    <li>It is developed by programmers</li>
                    <li>It helps users perform useful tasks</li>
                    <li>It can be updated, changed, and improved</li>
                </ul>

                <h4>Importance of Software in Daily Life</h4>
                <p>
                    Today software is used in education, offices, hospitals, banks, mobile phones, shops, railway systems,
                    and online services. Almost every modern digital activity depends on software.
                </p>

                <h4>Conclusion</h4>
                <p>
                    Software is an essential part of the computer system. It makes hardware useful and allows the user
                    to perform different tasks easily. Without software, a computer is only a machine with no instructions.
                </p>
            </div>
        `,
        "Input Devices": `
            <div class="lesson-section">
                <img src="${imagePaths.inputDevicesImage}" alt="Input devices" class="lesson-image">
                <h3>Input Devices</h3>
                <p>
                    Input devices are the hardware parts that are used to enter data, instructions, or signals into
                    the computer. A computer cannot do any work unless some data or command is given to it, and this
                    work is done with the help of input devices.
                </p>
                <p>
                    In simple words, input devices act as the communication bridge between the user and the computer.
                    They help the user give text, numbers, sound, pictures, and commands to the system.
                </p>

                <h4>Definition of Input Device</h4>
                <p>
                    An input device is a hardware device that sends data and instructions to the computer for processing.
                </p>

                <h4>Importance of Input Devices</h4>
                <ul>
                    <li>They help users communicate with the computer</li>
                    <li>They allow data entry for processing</li>
                    <li>They make computers useful in daily life</li>
                    <li>They are needed for typing, scanning, speaking, clicking, and drawing</li>
                </ul>

                <h4>Main Input Devices</h4>
                <ul>
                    <li>Keyboard</li>
                    <li>Mouse</li>
                    <li>Scanner</li>
                    <li>Microphone</li>
                    <li>Webcam</li>
                    <li>Joystick</li>
                    <li>Touch Screen</li>
                    <li>Light Pen</li>
                    <li>Barcode Reader</li>
                    <li>OCR, OMR, and MICR</li>
                </ul>

                <h4>1. Keyboard</h4>
                <p>
                    A keyboard is the most common input device. It is used to type letters, numbers, symbols,
                    and commands into the computer.
                </p>
                <p><strong>Example:</strong> typing a document, entering password, writing a message.</p>

                <h4>2. Mouse</h4>
                <p>
                    A mouse is a pointing device used to move the pointer on the screen. It helps the user click,
                    open files, select options, drag objects, and scroll pages.
                </p>
                <p><strong>Example:</strong> clicking icons, opening folders, selecting text.</p>

                <h4>3. Scanner</h4>
                <p>
                    A scanner is used to convert printed documents, photos, or papers into digital form so that
                    they can be stored and edited in the computer.
                </p>
                <p><strong>Example:</strong> scanning certificates, ID cards, and photographs.</p>

                <h4>4. Microphone</h4>
                <p>
                    A microphone is an input device that captures voice or sound and sends it to the computer.
                </p>
                <p><strong>Example:</strong> voice recording, online classes, video calls, voice search.</p>

                <h4>5. Webcam</h4>
                <p>
                    A webcam is an input device used to capture live video and images. It is often used with computers
                    for communication and security purposes.
                </p>
                <p><strong>Example:</strong> Zoom meeting, video conferencing, taking a photo.</p>

                <h4>6. Joystick</h4>
                <p>
                    A joystick is an input device mainly used to control movement on the screen. It is common in games,
                    flight simulators, and some control systems.
                </p>
                <p><strong>Example:</strong> playing car games or airplane games.</p>

                <h4>7. Touch Screen</h4>
                <p>
                    A touch screen allows the user to give input by touching the display directly. It acts as both
                    an input and an output device.
                </p>
                <p><strong>Example:</strong> ATM, smartphone, tablet, ticket machine.</p>

                <h4>8. Light Pen</h4>
                <p>
                    A light pen is a pointing input device used to draw or select items directly on the computer screen.
                    It was more common in older computer systems.
                </p>

                <h4>9. Barcode Reader</h4>
                <p>
                    A barcode reader reads barcode lines printed on products and sends the information into the computer.
                </p>
                <p><strong>Example:</strong> shopping malls, stores, libraries.</p>

                <h4>10. OCR</h4>
                <p>
                    OCR stands for Optical Character Recognition. It reads printed text from paper and converts it into
                    editable digital text.
                </p>

                <h4>11. OMR</h4>
                <p>
                    OMR stands for Optical Mark Recognition. It reads marked answers on specially designed forms.
                </p>
                <p><strong>Example:</strong> objective answer sheets in exams and surveys.</p>

                <h4>12. MICR</h4>
                <p>
                    MICR stands for Magnetic Ink Character Recognition. It is used mainly in banks to read special
                    characters printed on cheques.
                </p>

                <h4>How Input Devices Help the Computer</h4>
                <p>
                    Input devices collect data from the user and send it to the CPU. The CPU then processes this data
                    and produces output. Without input devices, the computer cannot receive user commands properly.
                </p>

                <h4>Examples of Daily Use</h4>
                <ul>
                    <li>Typing homework using a keyboard</li>
                    <li>Opening files with a mouse</li>
                    <li>Scanning documents with a scanner</li>
                    <li>Speaking through a microphone</li>
                    <li>Joining online classes with a webcam</li>
                    <li>Using touch screens in phones and ATMs</li>
                </ul>

                <h4>Conclusion</h4>
                <p>
                    Input devices are very important because they allow users to enter commands and data into the computer.
                    They make the system interactive, useful, and easy to operate in schools, offices, banks, shops,
                    hospitals, and homes.
                </p>
            </div>
        `,
        "Output Devices": `
            <div class="lesson-section">
                <img src="${imagePaths.outputDevice}" alt="Output devices" class="lesson-image">
                <h3>Output Devices</h3>
                <p>
                    Output devices are the hardware devices that show or present the result produced by the computer.
                    After the computer processes the input data, the final information is given to the user through
                    output devices.
                </p>
                <p>
                    In simple words, output devices help the user see, hear, or get the result of the work done by
                    the computer.
                </p>

                <h4>Definition of Output Device</h4>
                <p>
                    An output device is a hardware device that receives processed data from the computer and presents
                    it to the user in a readable or understandable form.
                </p>

                <h4>Importance of Output Devices</h4>
                <ul>
                    <li>They display the result of processing</li>
                    <li>They help users understand the information clearly</li>
                    <li>They allow us to see text, images, and videos</li>
                    <li>They allow us to hear sound and print documents</li>
                </ul>

                <h4>Main Output Devices</h4>
                <ul>
                    <li>Monitor</li>
                    <li>Printer</li>
                    <li>Speakers</li>
                    <li>Projector</li>
                </ul>

                <h4>1. Monitor</h4>
                <p>
                    A monitor is the most common output device. It displays text, images, videos, and all visual
                    information generated by the computer.
                </p>
                <p><strong>Example:</strong> watching a video, reading a document, or seeing a presentation on screen.</p>

                <h4>2. Printer</h4>
                <p>
                    A printer is an output device that prints digital information on paper. The printed copy is called
                    a hard copy.
                </p>
                <p><strong>Uses:</strong> printing documents, certificates, bills, and photographs.</p>

                <h4>Types of Printers</h4>
                <ul>
                    <li><strong>Inkjet Printer:</strong> used for colorful printing</li>
                    <li><strong>Laser Printer:</strong> used for fast and high-quality printing</li>
                    <li><strong>Dot Matrix Printer:</strong> used in billing and old office systems</li>
                </ul>

                <h4>3. Speakers</h4>
                <p>
                    Speakers are output devices that produce sound from the computer. They are used to hear music,
                    speech, videos, alarms, and audio messages.
                </p>
                <p><strong>Example:</strong> listening to songs, hearing online class audio, playing games.</p>

                <h4>4. Headphones</h4>
                <p>
                    Headphones are also output devices. They work like speakers but allow a single user to listen to
                    sound privately.
                </p>
                <p><strong>Example:</strong> listening to music or attending online classes without disturbing others.</p>

                <h4>5. Projector</h4>
                <p>
                    A projector is an output device that displays the computer screen on a large wall or screen.
                    It is useful when many people need to see the same content together.
                </p>
                <p><strong>Uses:</strong> classroom teaching, office meetings, seminars, and movie presentations.</p>

                <h4>6. Plotter</h4>
                <p>
                    A plotter is a special output device used to create large drawings and designs with high precision.
                </p>
                <p><strong>Uses:</strong> maps, engineering diagrams, building plans, and charts.</p>

                <h4>Soft Copy and Hard Copy Output</h4>
                <p>
                    Output can be of two types:
                </p>
                <ul>
                    <li><strong>Soft Copy:</strong> result shown on monitor, projector, or speakers</li>
                    <li><strong>Hard Copy:</strong> result printed on paper using a printer</li>
                </ul>

                <h4>How Output Devices Work</h4>
                <p>
                    First, the user gives input to the computer. Then the CPU processes the data. After processing,
                    output devices present the result to the user in the form of text, sound, image, or printed paper.
                </p>

                <h4>Examples of Daily Use</h4>
                <ul>
                    <li>Reading text on a monitor</li>
                    <li>Printing an assignment using a printer</li>
                    <li>Listening to music through speakers</li>
                    <li>Watching a presentation through a projector</li>
                    <li>Using headphones for private listening</li>
                </ul>

                <h4>Output Devices in Real Life</h4>
                <p>
                    Output devices are used everywhere such as schools, colleges, banks, hospitals, offices,
                    cyber cafes, homes, shops, and entertainment centers.
                </p>

                <h4>Conclusion</h4>
                <p>
                    Output devices are essential because they help users receive the results produced by the computer.
                    They make information visible, audible, and printable, which makes computer work useful and meaningful.
                </p>
            </div>
        `,
        "CPU": `
            <div class="lesson-section">
                <img src="${imagePaths.cpuImage}" alt="Central Processing Unit chip" class="lesson-image">
                <h3>CPU (Central Processing Unit)</h3>
                <p>
                    CPU stands for <strong>Central Processing Unit</strong>. It is the main processing part of a
                    computer and is commonly called the <strong>brain of the computer</strong>. The CPU receives
                    instructions, processes data, controls other parts of the computer, and produces results.
                </p>

                <h4>Definition of CPU</h4>
                <p>
                    A CPU is an electronic chip that executes instructions given by software and controls the
                    overall working of the computer system.
                </p>

                <h4>Why CPU Is Important</h4>
                <ul>
                    <li>It processes all instructions given by the user or software</li>
                    <li>It controls input, output, memory, and storage operations</li>
                    <li>It performs calculations and logical decisions</li>
                    <li>It decides how fast a computer can complete many tasks</li>
                </ul>

                <h4>Main Parts of CPU</h4>
                <img src="${imagePaths.cpuPartsImage}" alt="Main parts of CPU diagram" class="lesson-image">
                <ul>
                    <li>
                        <strong>ALU (Arithmetic Logic Unit):</strong> performs mathematical calculations like addition,
                        subtraction, multiplication, and division. It also compares values using logic operations.
                    </li>
                    <li>
                        <strong>CU (Control Unit):</strong> controls and coordinates all parts of the computer. It tells
                        input devices, memory, ALU, and output devices what to do.
                    </li>
                    <li>
                        <strong>Registers:</strong> small and very fast memory locations inside the CPU. They temporarily
                        store data, instructions, and results while processing is happening.
                    </li>
                </ul>

                <h4>How CPU Works</h4>
                <p>The CPU mainly works in three simple steps:</p>
                <ul>
                    <li><strong>Fetch:</strong> gets an instruction from memory</li>
                    <li><strong>Decode:</strong> understands what the instruction means</li>
                    <li><strong>Execute:</strong> performs the instruction and sends the result</li>
                </ul>
                <p class="highlight-line">Fetch -> Decode -> Execute</p>

                <h4>Example of CPU Working</h4>
                <p>
                    Suppose you open Calculator and type <strong>5 + 3</strong>. The keyboard sends input to the
                    computer, the CPU processes the calculation, and the monitor shows the answer <strong>8</strong>.
                </p>

                <h4>CPU Speed</h4>
                <p>
                    CPU speed is usually measured in <strong>GHz (Gigahertz)</strong>. A higher GHz value means the CPU
                    can perform more cycles per second. However, real performance also depends on cores, cache, RAM,
                    and software.
                </p>

                <h4>CPU Cores</h4>
                <p>
                    A core is like a small processing unit inside the CPU. Modern CPUs can have multiple cores, such as
                    dual-core, quad-core, hexa-core, and octa-core. More cores help the computer handle multiple tasks
                    more smoothly.
                </p>

                <div class="table-wrap">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>CPU Term</th>
                                <th>Meaning</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ALU</td>
                                <td>Performs arithmetic and logical operations</td>
                            </tr>
                            <tr>
                                <td>Control Unit</td>
                                <td>Controls the flow of data and instructions</td>
                            </tr>
                            <tr>
                                <td>Registers</td>
                                <td>Stores temporary data inside the CPU</td>
                            </tr>
                            <tr>
                                <td>Clock Speed</td>
                                <td>Shows how many cycles the CPU can perform per second</td>
                            </tr>
                            <tr>
                                <td>Core</td>
                                <td>Individual processing unit inside a CPU</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Common CPU Examples</h4>
                <ul>
                    <li>Intel Core i3, i5, i7, i9</li>
                    <li>AMD Ryzen 3, Ryzen 5, Ryzen 7, Ryzen 9</li>
                    <li>Mobile processors used in smartphones and tablets</li>
                </ul>

                <h4>Conclusion</h4>
                <p>
                    The CPU is one of the most important parts of a computer. It reads instructions, processes data,
                    controls other components, and helps the computer perform every task from typing a document to
                    running software and games.
                </p>
            </div>
        `,
        "Memory": `
            <div class="lesson-section">
                <img src="${imagePaths.memory}" alt="Computer memory" class="lesson-image">
                <h3>Computer Memory</h3>
                <p>
                    Memory is an important part of a computer system. It stores data, instructions, and results so the
                    CPU can use them while working. Without memory, a computer cannot start programs, process data,
                    or remember information during operation.
                </p>

                <h4>Definition of Memory</h4>
                <p>
                    Computer memory is a storage area where data and instructions are kept either temporarily or
                    permanently for processing and future use.
                </p>

                <h4>Why Memory Is Important</h4>
                <ul>
                    <li>It stores instructions needed by the CPU</li>
                    <li>It helps programs run smoothly</li>
                    <li>It stores data while work is being processed</li>
                    <li>It improves the speed and performance of the computer</li>
                    <li>It helps the computer start and load the operating system</li>
                </ul>

                <h4>Types of Computer Memory</h4>
                <img src="${imagePaths.memoryTypes}" alt="Types of computer memory diagram" class="lesson-image">
                <p>
                    Computer memory is mainly divided into two major types: <strong>Primary Memory</strong> and
                    <strong>Secondary Memory</strong>. Primary memory is directly used by the CPU, while secondary
                    memory is used to store data for a long time.
                </p>

                <h4>1. Primary Memory</h4>
                <p>
                    Primary memory is the main memory of the computer. It is directly connected with the CPU and is
                    used while the computer is running. It is faster than secondary memory.
                </p>
                <ul>
                    <li><strong>RAM:</strong> temporary memory used while programs are running</li>
                    <li><strong>ROM:</strong> permanent memory used to store startup instructions</li>
                    <li><strong>Cache Memory:</strong> very fast memory used to speed up CPU processing</li>
                </ul>

                <h4>RAM (Random Access Memory)</h4>
                <p>
                    RAM is a temporary memory. It stores data and instructions while the computer is switched on.
                    When power is turned off, data stored in RAM is lost. This is why RAM is called
                    <strong>volatile memory</strong>.
                </p>
                <p><strong>Example:</strong> When you open a browser, MS Word, or a game, it loads into RAM.</p>

                <h4>ROM (Read Only Memory)</h4>
                <p>
                    ROM is permanent memory. It stores important instructions needed to start the computer. Data in ROM
                    is not lost when power is turned off, so ROM is called <strong>non-volatile memory</strong>.
                </p>
                <p><strong>Example:</strong> BIOS or firmware instructions are stored in ROM.</p>

                <h4>Cache Memory</h4>
                <p>
                    Cache memory is a small and very fast memory located near or inside the CPU. It stores frequently
                    used data so the CPU can access it quickly. Cache memory helps increase processing speed.
                </p>

                <h4>2. Secondary Memory</h4>
                <p>
                    Secondary memory is used to store data permanently. It is not directly used by the CPU like RAM,
                    but it can store a large amount of data for a long time.
                </p>
                <ul>
                    <li>Hard Disk Drive (HDD)</li>
                    <li>Solid State Drive (SSD)</li>
                    <li>Pen Drive</li>
                    <li>Memory Card</li>
                    <li>CD / DVD</li>
                </ul>

                <h4>Primary Memory vs Secondary Memory</h4>
                <div class="table-wrap">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Primary Memory</th>
                                <th>Secondary Memory</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Use</td>
                                <td>Used during processing</td>
                                <td>Used for long-term storage</td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td>Fast</td>
                                <td>Slower than primary memory</td>
                            </tr>
                            <tr>
                                <td>Connection</td>
                                <td>Directly accessed by CPU</td>
                                <td>Accessed through storage devices</td>
                            </tr>
                            <tr>
                                <td>Examples</td>
                                <td>RAM, ROM, Cache</td>
                                <td>HDD, SSD, Pen Drive</td>
                            </tr>
                            <tr>
                                <td>Data Safety</td>
                                <td>RAM data is lost after power off</td>
                                <td>Data remains saved after power off</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Volatile and Non-Volatile Memory</h4>
                <ul>
                    <li><strong>Volatile Memory:</strong> loses data when power is off. Example: RAM</li>
                    <li><strong>Non-Volatile Memory:</strong> keeps data even after power is off. Example: ROM, HDD, SSD</li>
                </ul>

                <h4>Units of Memory</h4>
                <ul>
                    <li>Bit: smallest unit of data</li>
                    <li>Byte: group of 8 bits</li>
                    <li>KB: Kilobyte</li>
                    <li>MB: Megabyte</li>
                    <li>GB: Gigabyte</li>
                    <li>TB: Terabyte</li>
                </ul>

                <h4>Simple Example</h4>
                <p>
                    Think of RAM like a study table and secondary memory like a cupboard. The table holds the books you
                    are using right now, while the cupboard stores books for later use.
                </p>

                <h4>Conclusion</h4>
                <p>
                    Memory helps the computer store and process data. RAM, ROM, cache, and storage devices all play
                    important roles. A computer with enough memory can run programs faster and work more smoothly.
                </p>
            </div>
        `,
        "Storage Devices": `
            <div class="lesson-section">
                <img src="${imagePaths.oldComputerParts}" alt="Storage devices" class="lesson-image">
                <h3>Storage Devices</h3>
                <p>Storage devices keep data for long-term use.</p>
                <ul>
                    <li>Hard Disk</li>
                    <li>SSD</li>
                    <li>Pen Drive</li>
                    <li>Memory Card</li>
                </ul>
            </div>
        `
    },
    "MS Office": {
        "Introduction to MS Office": `
            <div class="lesson-section">
                <img src="${imagePaths.officeIntroImage}" alt="Introduction to MS Office" class="lesson-image">
                <h3>Introduction to MS Office</h3>
                <p>
                    MS Office, also called Microsoft Office, is a collection of application software developed by Microsoft.
                    It is used to perform common office, school, business, and personal tasks on a computer.
                </p>
                <p>
                    MS Office is one of the most popular software packages in the world because it helps users create
                    documents, prepare presentations, work with data, manage emails, and organize information efficiently.
                </p>

                <h4>Definition of MS Office</h4>
                <p>
                    MS Office is a productivity software suite that contains different programs for typing, calculations,
                    presentations, databases, communication, and office management.
                </p>

                <h4>Why MS Office Is Important</h4>
                <ul>
                    <li>It helps in school, office, and business work</li>
                    <li>It saves time and improves productivity</li>
                    <li>It makes documentation and data handling easier</li>
                    <li>It is widely used in computer education and jobs</li>
                </ul>

                <h4>Main Applications in MS Office</h4>
                <ul>
                    <li><strong>MS Word:</strong> for typing letters, reports, resumes, and documents</li>
                    <li><strong>MS Excel:</strong> for calculations, tables, formulas, and charts</li>
                    <li><strong>MS PowerPoint:</strong> for making presentations and slideshows</li>
                    <li><strong>MS Access:</strong> for storing and managing data in databases</li>
                    <li><strong>MS Outlook:</strong> for emails, calendars, and contacts</li>
                    <li><strong>OneNote:</strong> for notes and organization</li>
                </ul>

                <h4>1. MS Word</h4>
                <p>
                    MS Word is a word processing program used to create and edit text documents. It is used for typing
                    applications, letters, reports, projects, and exam notes.
                </p>
                <p><strong>Uses:</strong> typing, formatting, spell check, tables, images, printing.</p>

                <h4>2. MS Excel</h4>
                <p>
                    MS Excel is a spreadsheet program used for calculations, tables, records, formulas, and charts.
                    It is especially useful for accounts and data analysis.
                </p>
                <p><strong>Uses:</strong> marksheets, salary sheets, attendance, bills, and graphs.</p>

                <h4>3. MS PowerPoint</h4>
                <p>
                    MS PowerPoint is used to create slide-based presentations. It helps users explain ideas using text,
                    images, charts, and animations.
                </p>
                <p><strong>Uses:</strong> school projects, seminars, office meetings, training, and teaching.</p>

                <h4>4. MS Access</h4>
                <p>
                    MS Access is a database management program. It is used to store, organize, search, and manage large
                    amounts of information in a structured way.
                </p>
                <p><strong>Uses:</strong> student records, employee records, customer details, stock records.</p>

                <h4>5. MS Outlook</h4>
                <p>
                    MS Outlook is used for email communication and personal information management. It helps users manage
                    messages, contacts, tasks, and calendars.
                </p>

                <h4>Features of MS Office</h4>
                <ul>
                    <li>User-friendly interface</li>
                    <li>Easy formatting and editing tools</li>
                    <li>Spell check and grammar help</li>
                    <li>Charts, tables, and templates</li>
                    <li>Printing and sharing options</li>
                    <li>Useful for both beginners and professionals</li>
                </ul>

                <h4>Advantages of MS Office</h4>
                <ul>
                    <li>Improves office work speed</li>
                    <li>Makes documents neat and professional</li>
                    <li>Helps in calculations and data management</li>
                    <li>Useful for presentations and communication</li>
                    <li>Widely accepted in schools, colleges, and workplaces</li>
                </ul>

                <h4>Uses of MS Office in Daily Life</h4>
                <ul>
                    <li>Students use it for assignments and projects</li>
                    <li>Teachers use it for notes and presentations</li>
                    <li>Offices use it for letters, records, and reports</li>
                    <li>Businesses use it for billing, charts, and email communication</li>
                    <li>Home users use it for personal documents and calculations</li>
                </ul>

                <h4>MS Office in Exams and Jobs</h4>
                <p>
                    Knowledge of MS Office is very important in computer courses, competitive exams, office jobs,
                    banking work, school work, and online tasks. Many employers expect basic MS Office skills.
                </p>

                <h4>Conclusion</h4>
                <p>
                    MS Office is an essential software package for modern computer users. It helps in typing, calculations,
                    presentations, communication, and data management. Learning MS Office improves digital skills and
                    makes computer work faster, easier, and more professional.
                </p>
            </div>
        `,
        "MS Word Basics": `
            <div class="lesson-section">
                <img src="${imagePaths.wordImage}" alt="Microsoft Word introduction" class="lesson-image">
                <h3>MS Word Basics</h3>
                <p>
                    MS Word, also known as Microsoft Word, is a word processing software used to create, edit,
                    format, save, and print documents. It is widely used in schools, offices, businesses, cyber cafes,
                    and government work.
                </p>

                <h4>Definition of MS Word</h4>
                <p>
                    MS Word is an application software that helps users type text, format documents, insert pictures,
                    create tables, check spelling, and prepare professional documents.
                </p>

                <h4>Uses of MS Word</h4>
                <ul>
                    <li>Writing letters and applications</li>
                    <li>Creating resumes and biodata</li>
                    <li>Preparing school projects and assignments</li>
                    <li>Making reports, notices, and certificates</li>
                    <li>Creating tables, lists, and forms</li>
                    <li>Printing documents and saving files as PDF</li>
                </ul>

                <h4>MS Word Interface</h4>
                <img src="${imagePaths.wordToolsImage}" alt="Microsoft Word interface and tools" class="lesson-image">
                <p>
                    The MS Word window contains many parts that help users create and format documents easily.
                    Beginners should understand these parts before working on documents.
                </p>
                <ul>
                    <li><strong>Title Bar:</strong> shows the document name</li>
                    <li><strong>Quick Access Toolbar:</strong> contains common commands like Save, Undo, and Redo</li>
                    <li><strong>Ribbon:</strong> contains tabs and command groups</li>
                    <li><strong>Document Area:</strong> the main white page where we type</li>
                    <li><strong>Scroll Bar:</strong> helps move up and down in the document</li>
                    <li><strong>Status Bar:</strong> shows page number, word count, and view options</li>
                </ul>

                <h4>Main Tabs in MS Word</h4>
                <div class="table-wrap">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Tab</th>
                                <th>Main Work</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>File</td>
                                <td>New, Open, Save, Save As, Print, Export</td>
                            </tr>
                            <tr>
                                <td>Home</td>
                                <td>Font, paragraph, copy, paste, alignment, bullets</td>
                            </tr>
                            <tr>
                                <td>Insert</td>
                                <td>Pictures, tables, shapes, header, footer, page number</td>
                            </tr>
                            <tr>
                                <td>Design</td>
                                <td>Themes, document formatting, page background</td>
                            </tr>
                            <tr>
                                <td>Layout</td>
                                <td>Margins, orientation, size, columns, spacing</td>
                            </tr>
                            <tr>
                                <td>References</td>
                                <td>Table of contents, footnotes, citations</td>
                            </tr>
                            <tr>
                                <td>Review</td>
                                <td>Spelling check, grammar, comments, word count</td>
                            </tr>
                            <tr>
                                <td>View</td>
                                <td>Zoom, ruler, page view, navigation pane</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Creating a New Document</h4>
                <ul>
                    <li>Open MS Word</li>
                    <li>Click on Blank Document</li>
                    <li>Start typing in the document area</li>
                    <li>Use the Home tab to format the text</li>
                    <li>Save the document using File -> Save</li>
                </ul>

                <h4>Typing and Editing Text</h4>
                <p>
                    In MS Word, users can type text and edit it easily. Editing means making changes to the document
                    after typing.
                </p>
                <ul>
                    <li><strong>Backspace:</strong> deletes text from the left side</li>
                    <li><strong>Delete:</strong> deletes text from the right side</li>
                    <li><strong>Copy:</strong> duplicates selected text</li>
                    <li><strong>Cut:</strong> removes selected text and keeps it ready to paste</li>
                    <li><strong>Paste:</strong> places copied or cut text in a new location</li>
                    <li><strong>Undo:</strong> reverses the last action</li>
                    <li><strong>Redo:</strong> repeats the undone action</li>
                </ul>

                <h4>Text Formatting</h4>
                <img src="${imagePaths.wordTipsImage}" alt="Microsoft Word formatting tips" class="lesson-image">
                <p>
                    Formatting makes a document neat, readable, and professional. Most text formatting options are
                    available in the Home tab.
                </p>
                <ul>
                    <li><strong>Font:</strong> changes the text style</li>
                    <li><strong>Font Size:</strong> increases or decreases text size</li>
                    <li><strong>Bold:</strong> makes text darker and stronger</li>
                    <li><strong>Italic:</strong> slants the text</li>
                    <li><strong>Underline:</strong> adds a line below text</li>
                    <li><strong>Font Color:</strong> changes text color</li>
                    <li><strong>Highlight:</strong> marks important text with color</li>
                </ul>

                <h4>Paragraph Formatting</h4>
                <ul>
                    <li><strong>Alignment:</strong> left, center, right, and justify</li>
                    <li><strong>Line Spacing:</strong> controls space between lines</li>
                    <li><strong>Bullets:</strong> creates unordered lists</li>
                    <li><strong>Numbering:</strong> creates ordered lists</li>
                    <li><strong>Indent:</strong> moves paragraph text inward or outward</li>
                    <li><strong>Borders and Shading:</strong> adds borders or background color to paragraphs</li>
                </ul>

                <h4>Page Setup</h4>
                <p>
                    Page setup controls how the document page looks before printing or sharing.
                </p>
                <ul>
                    <li><strong>Margins:</strong> space around the page edges</li>
                    <li><strong>Orientation:</strong> Portrait or Landscape</li>
                    <li><strong>Page Size:</strong> A4, Letter, Legal, and other sizes</li>
                    <li><strong>Columns:</strong> divides text into newspaper-style columns</li>
                    <li><strong>Page Break:</strong> starts content on a new page</li>
                </ul>

                <h4>Insert Options</h4>
                <ul>
                    <li><strong>Table:</strong> organizes data in rows and columns</li>
                    <li><strong>Pictures:</strong> adds images from the computer</li>
                    <li><strong>Shapes:</strong> adds arrows, boxes, circles, and other shapes</li>
                    <li><strong>Header:</strong> adds text at the top of each page</li>
                    <li><strong>Footer:</strong> adds text at the bottom of each page</li>
                    <li><strong>Page Number:</strong> adds automatic numbering to pages</li>
                    <li><strong>Text Box:</strong> adds movable text inside a box</li>
                </ul>

                <h4>Spelling and Grammar Check</h4>
                <p>
                    MS Word can check spelling and grammar mistakes. Incorrect words are usually marked with colored
                    lines. Users can right-click the word and choose a correct suggestion.
                </p>

                <h4>Saving a Document</h4>
                <ul>
                    <li><strong>Save:</strong> saves changes in the current file</li>
                    <li><strong>Save As:</strong> saves the document with a new name or location</li>
                    <li><strong>PDF:</strong> saves the document in a fixed format for sharing and printing</li>
                </ul>

                <h4>Printing a Document</h4>
                <p>
                    To print a document, go to <strong>File -> Print</strong>. Before printing, check printer name,
                    page range, copies, page size, and orientation.
                </p>

                <h4>Important Shortcut Keys</h4>
                <div class="table-wrap">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Shortcut</th>
                                <th>Use</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Ctrl + N</td><td>New document</td></tr>
                            <tr><td>Ctrl + O</td><td>Open document</td></tr>
                            <tr><td>Ctrl + S</td><td>Save document</td></tr>
                            <tr><td>Ctrl + P</td><td>Print document</td></tr>
                            <tr><td>Ctrl + C</td><td>Copy selected text</td></tr>
                            <tr><td>Ctrl + X</td><td>Cut selected text</td></tr>
                            <tr><td>Ctrl + V</td><td>Paste copied or cut text</td></tr>
                            <tr><td>Ctrl + Z</td><td>Undo last action</td></tr>
                            <tr><td>Ctrl + Y</td><td>Redo action</td></tr>
                            <tr><td>Ctrl + B</td><td>Bold text</td></tr>
                            <tr><td>Ctrl + I</td><td>Italic text</td></tr>
                            <tr><td>Ctrl + U</td><td>Underline text</td></tr>
                        </tbody>
                    </table>
                </div>

                <h4>Common Documents Made in MS Word</h4>
                <ul>
                    <li>Application letter</li>
                    <li>Resume or CV</li>
                    <li>Notice</li>
                    <li>Project report</li>
                    <li>Question paper</li>
                    <li>Certificate</li>
                    <li>Invoice or simple bill format</li>
                </ul>

                <h4>Practice Task</h4>
                <p>
                    Create a one-page application in MS Word. Add a heading, write two paragraphs, make the heading bold
                    and centered, add your name at the bottom, save the file, and print or export it as PDF.
                </p>

                <h4>Conclusion</h4>
                <p>
                    MS Word is one of the most useful office tools for beginners. It helps users create clean,
                    well-formatted, and professional documents for study, office, business, and daily work.
                </p>
            </div>
        `,
        "MS Excel Basics": `
            <div class="lesson-section">
                <img src="${imagePaths.excelImage}" alt="Microsoft Excel worksheet interface" class="lesson-image">
                <h3>MS Excel Basics</h3>
                <p>
                    MS Excel, also called Microsoft Excel, is a spreadsheet software used to store data, perform
                    calculations, create tables, prepare reports, and make charts. It is widely used in schools,
                    offices, shops, banks, businesses, and data-related work.
                </p>

                <h4>Definition of MS Excel</h4>
                <p>
                    MS Excel is an application software that organizes data in rows and columns and allows users to
                    calculate, analyze, format, sort, filter, and present data using formulas, functions, tables, and charts.
                </p>

                <h4>Uses of MS Excel</h4>
                <ul>
                    <li>Creating marksheets and result sheets</li>
                    <li>Preparing salary sheets and attendance records</li>
                    <li>Making bills, invoices, and stock records</li>
                    <li>Doing mathematical calculations</li>
                    <li>Creating charts and graphs</li>
                    <li>Sorting and filtering data</li>
                    <li>Managing lists, tables, and business reports</li>
                </ul>

                <h4>MS Excel Interface</h4>
                <div class="lesson-image-frame redact-top">
                    <img src="${imagePaths.excelHomeImage}" alt="Excel Home tab interface with top title hidden" class="lesson-image">
                </div>
                <p>
                    The Excel window contains different parts that help users enter, calculate, and manage data.
                    Understanding the interface makes Excel easier for beginners.
                </p>
                <ul>
                    <li><strong>Workbook:</strong> an Excel file that contains one or more worksheets</li>
                    <li><strong>Worksheet:</strong> a single sheet inside a workbook</li>
                    <li><strong>Rows:</strong> horizontal lines numbered as 1, 2, 3, and so on</li>
                    <li><strong>Columns:</strong> vertical lines named A, B, C, and so on</li>
                    <li><strong>Cell:</strong> the box formed by the crossing of a row and a column</li>
                    <li><strong>Name Box:</strong> shows the selected cell address, such as A1</li>
                    <li><strong>Formula Bar:</strong> displays and edits data or formulas in the selected cell</li>
                    <li><strong>Sheet Tabs:</strong> help switch between worksheets</li>
                </ul>

                <h4>Important Excel Terms</h4>
                <div class="table-wrap">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Term</th>
                                <th>Meaning</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Workbook</td>
                                <td>The complete Excel file</td>
                            </tr>
                            <tr>
                                <td>Worksheet</td>
                                <td>A page or sheet inside a workbook</td>
                            </tr>
                            <tr>
                                <td>Cell</td>
                                <td>A single box where data is entered</td>
                            </tr>
                            <tr>
                                <td>Cell Address</td>
                                <td>The name of a cell, such as A1 or B5</td>
                            </tr>
                            <tr>
                                <td>Range</td>
                                <td>A group of selected cells, such as A1:A10</td>
                            </tr>
                            <tr>
                                <td>Formula</td>
                                <td>An expression used for calculation, such as =A1+B1</td>
                            </tr>
                            <tr>
                                <td>Function</td>
                                <td>A ready-made formula, such as SUM or AVERAGE</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Main Tabs in MS Excel</h4>
                <ul>
                    <li><strong>File:</strong> New, Open, Save, Save As, Print, Export</li>
                    <li><strong>Home:</strong> font, alignment, number format, cells, editing</li>
                    <li><strong>Insert:</strong> tables, pictures, charts, shapes, pivot tables</li>
                    <li><strong>Page Layout:</strong> margins, orientation, size, print area</li>
                    <li><strong>Formulas:</strong> insert functions and manage calculations</li>
                    <li><strong>Data:</strong> sort, filter, data validation, remove duplicates</li>
                    <li><strong>Review:</strong> spelling, comments, protect sheet</li>
                    <li><strong>View:</strong> zoom, gridlines, freeze panes, workbook views</li>
                </ul>

                <h4>Entering Data in Excel</h4>
                <p>
                    Data is entered inside cells. Excel can store different types of data depending on the work.
                </p>
                <ul>
                    <li><strong>Text:</strong> names, subjects, item names</li>
                    <li><strong>Numbers:</strong> marks, quantity, price, salary</li>
                    <li><strong>Date and Time:</strong> attendance date, invoice date, schedule</li>
                    <li><strong>Formula:</strong> calculation starting with the equals sign</li>
                </ul>

                <h4>Basic Formulas</h4>
                <p>
                    A formula in Excel always starts with the <strong>=</strong> sign. Formulas are used to perform
                    calculations using cell addresses.
                </p>
                <ul>
                    <li><strong>=A1+B1</strong> adds values from A1 and B1</li>
                    <li><strong>=A1-B1</strong> subtracts B1 from A1</li>
                    <li><strong>=A1*B1</strong> multiplies A1 and B1</li>
                    <li><strong>=A1/B1</strong> divides A1 by B1</li>
                </ul>

                <h4>Basic Functions</h4>
                <div class="table-wrap">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Function</th>
                                <th>Use</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SUM</td>
                                <td>Adds values</td>
                                <td>=SUM(A1:A10)</td>
                            </tr>
                            <tr>
                                <td>AVERAGE</td>
                                <td>Finds average value</td>
                                <td>=AVERAGE(A1:A10)</td>
                            </tr>
                            <tr>
                                <td>MAX</td>
                                <td>Finds highest value</td>
                                <td>=MAX(A1:A10)</td>
                            </tr>
                            <tr>
                                <td>MIN</td>
                                <td>Finds lowest value</td>
                                <td>=MIN(A1:A10)</td>
                            </tr>
                            <tr>
                                <td>COUNT</td>
                                <td>Counts numeric cells</td>
                                <td>=COUNT(A1:A10)</td>
                            </tr>
                            <tr>
                                <td>IF</td>
                                <td>Checks a condition</td>
                                <td>=IF(A1&gt;=33,"Pass","Fail")</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Formatting Data</h4>
                <p>
                    Formatting makes Excel data clear and professional. The Home tab contains most formatting tools.
                </p>
                <ul>
                    <li>Change font style, size, and color</li>
                    <li>Apply bold, italic, and underline</li>
                    <li>Align data left, center, or right</li>
                    <li>Apply borders and fill colors</li>
                    <li>Format numbers as currency, percentage, date, or decimal</li>
                    <li>Merge and center cells for headings</li>
                </ul>

                <h4>Features of Excel</h4>
                <img src="${imagePaths.excelFeaturesImage}" alt="Features of Excel diagram" class="lesson-image">
                <ul>
                    <li><strong>Sorting:</strong> arranges data in ascending or descending order</li>
                    <li><strong>Filtering:</strong> shows only selected data from a large list</li>
                    <li><strong>Charts:</strong> presents data visually using graphs</li>
                    <li><strong>Conditional Formatting:</strong> highlights data based on rules</li>
                    <li><strong>Data Validation:</strong> controls what type of data can be entered</li>
                    <li><strong>Pivot Table:</strong> summarizes large data quickly</li>
                </ul>

                <h4>Charts in Excel</h4>
                <p>
                    Charts help users understand data visually. Excel can create different types of charts from selected
                    data.
                </p>
                <ul>
                    <li><strong>Column Chart:</strong> compares values using vertical bars</li>
                    <li><strong>Bar Chart:</strong> compares values using horizontal bars</li>
                    <li><strong>Line Chart:</strong> shows trends over time</li>
                    <li><strong>Pie Chart:</strong> shows parts of a whole</li>
                </ul>

                <h4>Sorting and Filtering</h4>
                <p>
                    Sorting arranges data in order, such as A to Z, Z to A, smallest to largest, or largest to smallest.
                    Filtering helps display only the rows that match a condition.
                </p>

                <h4>Page Setup and Printing</h4>
                <ul>
                    <li>Set page margins</li>
                    <li>Choose portrait or landscape orientation</li>
                    <li>Select paper size</li>
                    <li>Set print area</li>
                    <li>Use print preview before printing</li>
                    <li>Fit sheet on one page if needed</li>
                </ul>

                <h4>Saving Excel Files</h4>
                <ul>
                    <li><strong>Save:</strong> saves changes in the current workbook</li>
                    <li><strong>Save As:</strong> saves a workbook with a new name or location</li>
                    <li><strong>Excel Workbook:</strong> common file format with .xlsx extension</li>
                    <li><strong>PDF:</strong> useful for sharing or printing fixed reports</li>
                </ul>

                <h4>Important Shortcut Keys</h4>
                <div class="table-wrap">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Shortcut</th>
                                <th>Use</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Ctrl + N</td><td>New workbook</td></tr>
                            <tr><td>Ctrl + O</td><td>Open workbook</td></tr>
                            <tr><td>Ctrl + S</td><td>Save workbook</td></tr>
                            <tr><td>Ctrl + P</td><td>Print workbook</td></tr>
                            <tr><td>Ctrl + C</td><td>Copy selected cells</td></tr>
                            <tr><td>Ctrl + X</td><td>Cut selected cells</td></tr>
                            <tr><td>Ctrl + V</td><td>Paste copied or cut cells</td></tr>
                            <tr><td>Ctrl + Z</td><td>Undo last action</td></tr>
                            <tr><td>Ctrl + B</td><td>Bold selected data</td></tr>
                            <tr><td>Ctrl + 1</td><td>Open Format Cells dialog box</td></tr>
                            <tr><td>F2</td><td>Edit selected cell</td></tr>
                            <tr><td>Alt + =</td><td>AutoSum selected numbers</td></tr>
                        </tbody>
                    </table>
                </div>

                <h4>Example: Student Marksheet</h4>
                <p>
                    In Excel, you can create a marksheet with columns like Roll No, Name, English, Math, Computer,
                    Total, Percentage, and Result. Use <strong>SUM</strong> to calculate total marks and
                    <strong>IF</strong> to show Pass or Fail.
                </p>

                <h4>Practice Task</h4>
                <p>
                    Create a small marksheet for five students. Enter marks for three subjects, calculate total marks,
                    calculate average marks, apply borders, make the heading bold, and save the file as an Excel workbook.
                </p>

                <h4>Conclusion</h4>
                <p>
                    MS Excel is a powerful tool for calculations, tables, records, reports, charts, and data analysis.
                    Learning Excel basics helps students and office users complete daily work faster and more accurately.
                </p>
            </div>
        `,
        "PowerPoint Basics": `
            <div class="lesson-section">
                <div class="lesson-image-frame redact-top">
                    <img src="${imagePaths.powerpointImage}" alt="PowerPoint interface overview" class="lesson-image">
                </div>
                <h3>PowerPoint Basics</h3>
                <p>
                    PowerPoint is a presentation software used to create slide shows. It helps users present ideas,
                    topics, lessons, business plans, projects, reports, and training material in a visual and organized way.
                </p>

                <h4>Definition of PowerPoint</h4>
                <p>
                    PowerPoint is an application software that allows users to create presentations using slides,
                    text, images, shapes, charts, tables, audio, video, animations, and transitions.
                </p>

                <h4>Uses of PowerPoint</h4>
                <ul>
                    <li>Creating school and college project presentations</li>
                    <li>Preparing office meeting slides</li>
                    <li>Making training and teaching material</li>
                    <li>Presenting business ideas and reports</li>
                    <li>Creating photo slideshows</li>
                    <li>Designing simple certificates, posters, and notices</li>
                </ul>

                <h4>PowerPoint Interface</h4>
                <div class="lesson-image-frame redact-top">
                    <img src="${imagePaths.powerpointInterfaceImage}" alt="PowerPoint window parts diagram" class="lesson-image">
                </div>
                <p>
                    The PowerPoint window has different parts that help users create, design, and present slides.
                </p>
                <ul>
                    <li><strong>Title Bar:</strong> shows the presentation name</li>
                    <li><strong>Quick Access Toolbar:</strong> contains Save, Undo, and Redo</li>
                    <li><strong>Ribbon:</strong> contains tabs and commands</li>
                    <li><strong>Slides Pane:</strong> shows slide thumbnails on the left side</li>
                    <li><strong>Slide Area:</strong> the main area where the selected slide is edited</li>
                    <li><strong>Notes Pane:</strong> used to write speaker notes</li>
                    <li><strong>Status Bar:</strong> shows slide number and view controls</li>
                    <li><strong>Zoom Slider:</strong> increases or decreases slide view size</li>
                </ul>

                <h4>Main Tabs in PowerPoint</h4>
                <div class="table-wrap">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Tab</th>
                                <th>Main Work</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>File</td>
                                <td>New, Open, Save, Save As, Print, Export</td>
                            </tr>
                            <tr>
                                <td>Home</td>
                                <td>New slide, layout, font, paragraph, drawing tools</td>
                            </tr>
                            <tr>
                                <td>Insert</td>
                                <td>Pictures, tables, shapes, charts, text box, audio, video</td>
                            </tr>
                            <tr>
                                <td>Design</td>
                                <td>Themes, variants, slide size, background format</td>
                            </tr>
                            <tr>
                                <td>Transitions</td>
                                <td>Slide change effects between slides</td>
                            </tr>
                            <tr>
                                <td>Animations</td>
                                <td>Movement effects for text, images, and objects</td>
                            </tr>
                            <tr>
                                <td>Slide Show</td>
                                <td>Start and control the presentation</td>
                            </tr>
                            <tr>
                                <td>Review</td>
                                <td>Spelling, comments, language, compare</td>
                            </tr>
                            <tr>
                                <td>View</td>
                                <td>Normal view, slide sorter, ruler, zoom, notes page</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>What Is a Slide?</h4>
                <p>
                    A slide is a single page of a presentation. A presentation is made by combining many slides in a
                    proper order. Each slide can contain text, images, shapes, charts, tables, audio, video, and animations.
                </p>

                <h4>Creating a New Presentation</h4>
                <ul>
                    <li>Open PowerPoint</li>
                    <li>Choose Blank Presentation or a template</li>
                    <li>Add a title on the first slide</li>
                    <li>Add more slides using New Slide</li>
                    <li>Insert text, pictures, shapes, and charts</li>
                    <li>Apply design, transitions, and animations</li>
                    <li>Save and run the slide show</li>
                </ul>

                <h4>Slide Layouts</h4>
                <p>
                    Layouts are ready-made arrangements for slide content. They help users place text and objects neatly.
                </p>
                <ul>
                    <li><strong>Title Slide:</strong> used for presentation title and subtitle</li>
                    <li><strong>Title and Content:</strong> used for heading and main points</li>
                    <li><strong>Section Header:</strong> used to start a new section</li>
                    <li><strong>Two Content:</strong> used to compare two items</li>
                    <li><strong>Blank:</strong> used for custom slide design</li>
                    <li><strong>Picture with Caption:</strong> used for image-based slides</li>
                </ul>

                <h4>Adding Content to Slides</h4>
                <div class="lesson-image-frame redact-top">
                    <img src="${imagePaths.powerpointTemplateImage}" alt="PowerPoint slide editing area" class="lesson-image">
                </div>
                <ul>
                    <li><strong>Text Box:</strong> adds text anywhere on the slide</li>
                    <li><strong>Pictures:</strong> adds images from the computer</li>
                    <li><strong>Shapes:</strong> adds arrows, circles, rectangles, and symbols</li>
                    <li><strong>Table:</strong> organizes information in rows and columns</li>
                    <li><strong>Chart:</strong> shows data visually</li>
                    <li><strong>SmartArt:</strong> creates diagrams and process flows</li>
                    <li><strong>Audio and Video:</strong> adds media to the presentation</li>
                </ul>

                <h4>Design and Themes</h4>
                <p>
                    Themes give a professional look to slides by applying matching colors, fonts, and backgrounds.
                    A good presentation should use simple design, readable fonts, and consistent colors.
                </p>

                <h4>Transitions</h4>
                <p>
                    Transitions are effects that appear when moving from one slide to another. Examples include Fade,
                    Push, Wipe, and Split. Use transitions carefully so the presentation looks clean and professional.
                </p>

                <h4>Animations</h4>
                <p>
                    Animations are effects applied to objects inside a slide, such as text, pictures, and shapes.
                    They can make content appear, disappear, move, or highlight during the slide show.
                </p>
                <ul>
                    <li><strong>Entrance:</strong> object appears on the slide</li>
                    <li><strong>Emphasis:</strong> object is highlighted</li>
                    <li><strong>Exit:</strong> object leaves the slide</li>
                    <li><strong>Motion Path:</strong> object moves along a path</li>
                </ul>

                <h4>Slide Show</h4>
                <p>
                    Slide Show mode is used to present slides full screen. You can start the presentation from the
                    beginning or from the current slide.
                </p>
                <ul>
                    <li><strong>From Beginning:</strong> starts from slide 1</li>
                    <li><strong>From Current Slide:</strong> starts from the selected slide</li>
                    <li><strong>Presenter View:</strong> helps the presenter see notes and next slide</li>
                    <li><strong>Esc Key:</strong> exits slide show mode</li>
                </ul>

                <h4>Saving and Exporting</h4>
                <ul>
                    <li><strong>Save:</strong> saves the current presentation</li>
                    <li><strong>Save As:</strong> saves with a new name or location</li>
                    <li><strong>PPTX:</strong> default PowerPoint presentation format</li>
                    <li><strong>PDF:</strong> useful for sharing slides as fixed pages</li>
                    <li><strong>Video:</strong> exports the presentation as a video file</li>
                </ul>

                <h4>Printing Slides</h4>
                <p>
                    PowerPoint allows printing full slides, notes pages, outlines, or handouts. Handouts are useful
                    when students or audience members need printed copies of slides.
                </p>

                <h4>Important Shortcut Keys</h4>
                <div class="table-wrap">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Shortcut</th>
                                <th>Use</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Ctrl + N</td><td>New presentation</td></tr>
                            <tr><td>Ctrl + O</td><td>Open presentation</td></tr>
                            <tr><td>Ctrl + S</td><td>Save presentation</td></tr>
                            <tr><td>Ctrl + P</td><td>Print presentation</td></tr>
                            <tr><td>Ctrl + M</td><td>Insert new slide</td></tr>
                            <tr><td>Ctrl + D</td><td>Duplicate selected slide or object</td></tr>
                            <tr><td>Ctrl + C</td><td>Copy selected object or text</td></tr>
                            <tr><td>Ctrl + V</td><td>Paste copied object or text</td></tr>
                            <tr><td>Ctrl + Z</td><td>Undo last action</td></tr>
                            <tr><td>F5</td><td>Start slide show from beginning</td></tr>
                            <tr><td>Shift + F5</td><td>Start slide show from current slide</td></tr>
                            <tr><td>Esc</td><td>Exit slide show</td></tr>
                        </tbody>
                    </table>
                </div>

                <h4>Tips for a Good Presentation</h4>
                <ul>
                    <li>Keep slides simple and clean</li>
                    <li>Use short points instead of long paragraphs</li>
                    <li>Use readable font size</li>
                    <li>Use images and charts only when they support the topic</li>
                    <li>Use the same design style across all slides</li>
                    <li>Avoid too many animations and transitions</li>
                    <li>Check spelling before presenting</li>
                </ul>

                <h4>Practice Task</h4>
                <p>
                    Create a five-slide presentation on “My School” or “Computer Basics”. Add a title slide, two content
                    slides, one image slide, and one thank-you slide. Apply a simple theme, add one transition, save the
                    presentation, and run it in slide show mode.
                </p>

                <h4>Conclusion</h4>
                <p>
                    PowerPoint is a useful tool for presenting information clearly and visually. With slides, themes,
                    images, charts, transitions, and animations, users can create effective presentations for study,
                    office, training, and business work.
                </p>
            </div>
        `
    },
    "Internet & Email": {
        "Introduction to Internet": `
            <div class="lesson-section">
                <img src="${imagePaths.internetIntro}" alt="Internet network illustration" class="lesson-image">
                <h3>Introduction to the Internet</h3>
                <p>
                    The internet is a global system of connected computers, servers, and devices that share information using standard rules called protocols.
                    It allows people to access websites, send email, search for information, use social media, and work with online files from anywhere in the world.
                </p>

                <h4>How the Internet Works</h4>
                <p>
                    The internet connects many smaller networks into one large network. Every device on the internet has a unique address and can send or receive data.
                    Data is broken into small packets, and each packet travels through routers and servers to reach its destination.
                </p>

                <h4>Internet Components</h4>
                <ul>
                    <li><strong>Server:</strong> A computer that stores websites and sends content when requested.</li>
                    <li><strong>Router:</strong> A device that directs data packets between networks.</li>
                    <li><strong>Modem:</strong> A device that connects your home or office network to the internet service provider.</li>
                    <li><strong>URL:</strong> The address of a webpage, like https://example.com.</li>
                </ul>

                <h4>Main Internet Topics</h4>
                <ul>
                    <li>Types of Internet Connections</li>
                    <li>Web Browsers</li>
                    <li>Search Engines</li>
                    <li>Internet Safety</li>
                    <li>Introduction to Email</li>
                    <li>Websites and URLs</li>
                    <li>Downloading and Uploading Files</li>
                    <li>Social Media</li>
                    <li>Cloud Storage</li>
                </ul>

                <h4>Why the Internet is Important</h4>
                <p>
                    The internet makes learning, communication, work, and entertainment faster and simpler.
                    It helps students study, businesses connect with customers, friends share updates, and people access news instantly.
                </p>

                <h4>Example Uses</h4>
                <ul>
                    <li>Browsing websites for news, education, or shopping.</li>
                    <li>Sending and receiving email messages.</li>
                    <li>Searching for information using search engines.</li>
                    <li>Using social media to connect with friends and family.</li>
                    <li>Saving and opening files from cloud storage like Google Drive.</li>
                </ul>
            </div>
        `,
        "Types of Internet Connections": `
            <div class="lesson-section">
                <img src="${imagePaths.internetConnectionsImage}" alt="Types of internet connections" class="lesson-image">
                <h3>Types of Internet Connections</h3>
                <p>
                    There are several common ways to connect to the internet. Each type offers different speed, reliability, and cost.
                </p>

                <h4>1. Dial-up</h4>
                <p>
                    Dial-up uses a telephone line and a modem. It is very slow and ties up the phone line while connected.
                    This method was common in the past, but today it is mostly replaced by faster options.
                </p>

                <h4>2. Broadband</h4>
                <p>
                    Broadband is a fast, always-on connection. Common broadband types are DSL, cable, and fiber.
                    It is good for streaming videos, online learning, and using multiple devices at the same time.
                </p>

                <h4>3. Fiber Optic</h4>
                <p>
                    Fiber optic internet uses thin glass cables that carry information as light.
                    This type is one of the fastest and most reliable, especially for high-definition video and video calls.
                </p>

                <h4>4. Wi-Fi</h4>
                <p>
                    Wi-Fi is a wireless connection inside homes, schools, and public places.
                    A wireless router sends signals that devices use to connect without a cable.
                </p>

                <h4>5. Mobile Data</h4>
                <p>
                    Mobile data uses the phone network like 3G, 4G, or 5G.
                    It is ideal for smartphones and tablets when you are outside or away from Wi-Fi.
                </p>

                <h4>6. Satellite</h4>
                <p>
                    Satellite internet works through a dish that sends and receives signals to satellites in space.
                    It is useful in remote areas where cable or fiber is not available, though it can be slower.
                </p>

                <h4>Which Connection Should You Choose?</h4>
                <p>
                    For home use, broadband or fiber is the best option if available. For mobile work, choose mobile data.
                    Use satellite only when other options are not available.
                </p>
            </div>
        `,
        "Web Browser": `
            <div class="lesson-section">
                <img src="${imagePaths.webBrowserImage}" alt="Web browser interface" class="lesson-image">
                <h3>Web Browser</h3>
                <p>
                    A web browser is the software used to open and read websites. Examples include Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari.
                </p>

                <h4>Common Browser Features</h4>
                <ul>
                    <li><strong>Address bar:</strong> Enter the website address or URL here.</li>
                    <li><strong>Search bar:</strong> Search for information directly from the browser.</li>
                    <li><strong>Tabs:</strong> Open different websites in the same window at the same time.</li>
                    <li><strong>Bookmarks:</strong> Save favorite websites for easy return later.</li>
                    <li><strong>History:</strong> See recently visited websites and reopen them quickly.</li>
                </ul>

                <h4>How to Open a Website</h4>
                <p>
                    Type the website address in the address bar and press Enter. If you do not know the full website address, use a search engine first.
                </p>

                <h4>Browser Security</h4>
                <p>
                    Always check for a padlock icon and HTTPS before entering private information. This means the website is encrypted and safer to use.
                </p>

                <h4>Useful Browser Tips</h4>
                <ul>
                    <li>Open a new tab when you want to visit another website without losing your current page.</li>
                    <li>Use bookmarks to save study resources and important pages.</li>
                    <li>Clear browser history sometimes to keep your device running smoothly.</li>
                </ul>
            </div>
        `,
        "Search Engines": `
            <div class="lesson-section">
                <img src="${imagePaths.searchEngineImage}" alt="Search engine results" class="lesson-image">
                <h3>Search Engines</h3>
                <p>
                    A search engine helps you find information on the internet. Popular search engines include Google, Bing, and Yahoo.
                </p>

                <h4>How Search Engines Work</h4>
                <p>
                    Search engines use programs called crawlers to read web pages and build an index. When you search, they compare your words to that index and show the best matches.
                </p>

                <h4>How to Search</h4>
                <p>
                    Type a question or keywords into the search box. Use simple, clear words like "best laptop for students" or "how to make email account." Then press Enter.
                </p>

                <h4>Understanding Results</h4>
                <p>
                    Results show a list of website links with a short description. The first few links are usually the most useful or popular.
                </p>

                <h4>Search Tips</h4>
                <ul>
                    <li>Use exact phrases with quotation marks: "healthy breakfast recipes."</li>
                    <li>Add more words to make the search more specific.</li>
                    <li>Try different words if the first results are not helpful.</li>
                    <li>Use trusted websites from schools, news sites, or official pages.</li>
                </ul>
            </div>
        `,
        "Internet Safety": `
            <div class="lesson-section">
                <img src="${imagePaths.internetSafetyImage}" alt="Internet safety illustration" class="lesson-image">
                <h3>Internet Safety</h3>
                <p>
                    Internet safety means protecting your personal information, devices, and privacy when using the internet.
                    Safe habits help avoid viruses, scams, and online bullying.
                </p>

                <h4>Strong Passwords</h4>
                <p>
                    Create passwords with letters, numbers, and symbols. Use a different password for each account and never share it.
                </p>

                <h4>Recognize Scams</h4>
                <p>
                    Be suspicious of emails or messages that ask for personal details, money, or login information.
                    If a message looks strange, do not click links or do not download attachments.
                </p>

                <h4>Secure Websites</h4>
                <p>
                    Check for HTTPS and a padlock icon in the address bar before entering passwords or bank details.
                    Secure websites encrypt your information so it is harder for others to steal.
                </p>

                <h4>Public Wi-Fi Safety</h4>
                <p>
                    Avoid using public Wi-Fi for private tasks like banking. If you must use it, avoid sending personal information.
                </p>

                <h4>Protect Your Device</h4>
                <p>
                    Keep your browser and apps up to date, and use antivirus software when possible.
                    Do not download files from websites you do not trust.
                </p>

                <h4>Be Respectful Online</h4>
                <p>
                    Use polite language, do not share mean or private messages, and report bad behavior if someone is harmful.
                </p>
            </div>
        `,
        "Introduction to Email": `
            <div class="lesson-section">
                <img src="${imagePaths.emailIntro}" alt="Email communication illustration" class="lesson-image">
                <h3>Introduction to Email</h3>
                <p>
                    Email is an online service that lets people send and receive messages using the internet.
                    It is a fast, reliable way to communicate with friends, teachers, and businesses.
                </p>

                <h4>What is an Email Address?</h4>
                <p>
                    An email address has two main parts: the username and the domain.
                    For example, in name@example.com, "name" is the username and "example.com" is the domain.
                </p>

                <h4>Parts of an Email Message</h4>
                <ul>
                    <li><strong>To:</strong> The address of the person who receives the email.</li>
                    <li><strong>Subject:</strong> A short topic line that tells the reader what the email is about.</li>
                    <li><strong>Body:</strong> The main message content of the email.</li>
                    <li><strong>Attachments:</strong> Files such as documents, pictures, or videos sent with the email.</li>
                    <li><strong>CC:</strong> Send a copy to other people who should see the message.</li>
                    <li><strong>BCC:</strong> Send a hidden copy to other people without showing their addresses to others.</li>
                </ul>

                <h4>How Email Works</h4>
                <p>
                    When you send an email, your message travels from your computer to an email server and then to the recipient's email server.
                    The recipient's server stores the message until they open it.
                </p>

                <h4>Sending an Email</h4>
                <p>
                    To send an email, open your email app or website, type the recipient's address, add a subject, write your message, and click send.
                    Your email is delivered in seconds if the internet connection is working.
                </p>

                <h4>Receiving an Email</h4>
                <p>
                    When someone sends you an email, it appears in your inbox. You can read it, reply, forward, or delete it.
                </p>

                <h4>Email Etiquette</h4>
                <p>
                    Use a polite greeting, write clearly, and close with a friendly phrase such as "Thank you" or "Best regards." 
                    Avoid using all capital letters and always check for mistakes before sending.
                </p>

                <h4>Keeping Email Safe</h4>
                <p>
                    Do not open emails or attachments from unknown senders. If a message looks suspicious, do not click links and delete it.
                    Use strong passwords and do not share your email password with others.
                </p>
            </div>
        `
    },
    "HTML": {
        "Introduction to HTML": `
            <div class="lesson-section">
                
                <h3>Introduction to HTML</h3>
                <p>
                    HTML stands for HyperText Markup Language. It is the basic language used to create and structure web pages on the internet.
                    HTML tells the browser how to show text, images, links, and other content.
                </p>

                <h4>What is a Markup Language?</h4>
                <p>
                    A markup language uses tags to describe content. In HTML, tags are written inside angle brackets like &lt;h1&gt; and &lt;p&gt;.
                    These tags tell the browser how to display the text.
                </p>

                <h4>Basic HTML Structure</h4>
                <p>
                    Every HTML page begins with a few basic elements. The document starts with &lt;html&gt; and ends with &lt;/html&gt;.
                    Inside, there are two main parts: &lt;head&gt; and &lt;body&gt;.
                </p>

                <h4>Common HTML Tags</h4>
                <ul>
                    <li><strong>&lt;html&gt;:</strong> The root element of the page.</li>
                    <li><strong>&lt;head&gt;:</strong> Contains page information such as title and style links.</li>
                    <li><strong>&lt;title&gt;:</strong> Sets the page title shown in the browser tab.</li>
                    <li><strong>&lt;body&gt;:</strong> Contains all the visible page content like text, images, and links.</li>
                    <li><strong>&lt;h1&gt; to &lt;h6&gt;:</strong> Heading tags used for titles and subtitles.</li>
                    <li><strong>&lt;p&gt;:</strong> A paragraph of text.</li>
                    <li><strong>&lt;a&gt;:</strong> A link to another page or website.</li>
                    <li><strong>&lt;img&gt;:</strong> Displays an image on the page.</li>
                </ul>

                <h4>Example HTML Page</h4>
                <pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My First Web Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello, World!&lt;/h1&gt;
  &lt;p&gt;This is my first HTML page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

                <h4>How HTML and the Browser Work Together</h4>
                <p>
                    The browser reads the HTML code and displays the page accordingly. Tags tell the browser which text is a heading, which text is a paragraph, and where images should appear.
                </p>

                <h4>Why HTML is Important</h4>
                <p>
                    HTML is the foundation of every website. Learning HTML is the first step to building web pages, creating online content, and understanding how websites are made.
                </p>
            </div>
        `,
        "HTML Structure": `
            <div class="lesson-section">
                <h3>HTML Structure</h3>
                <p>Every HTML page follows a standard structure. It begins with a document type declaration and contains a root <code>&lt;html&gt;</code> element that holds two main parts:</p>
                <ul>
                    <li><strong><code>&lt;head&gt;</code></strong> — page metadata and resources, such as the title, character set, and links to styles.</li>
                    <li><strong><code>&lt;body&gt;</code></strong> — visible content that appears in the browser, such as text, images, and links.</li>
                </ul>

                <h4>Key HTML structure elements</h4>
                <ul>
                    <li><code>&lt;!DOCTYPE html&gt;</code> declares that the page uses HTML5.</li>
                    <li><code>&lt;html lang="en"&gt;</code> begins the HTML document and defines the content language.</li>
                    <li><code>&lt;head&gt;</code> contains page settings and resources that do not appear directly on the page.</li>
                    <li><code>&lt;meta charset="UTF-8"&gt;</code> tells the browser how to read text characters.</li>
                    <li><code>&lt;title&gt;</code> sets the text shown in the browser tab.</li>
                    <li><code>&lt;body&gt;</code> contains the content users see, such as headings, paragraphs, images, and links.</li>
                </ul>

                <h4>Why this structure matters</h4>
                <p>Browsers use the HTML structure to understand how to display a page. A correct structure helps:</p>
                <ul>
                    <li>load content correctly</li>
                    <li>make pages accessible to screen readers and search engines</li>
                    <li>keep HTML organized and easier to maintain</li>
                </ul>

                <h4>Complete example</h4>
                <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My First HTML Structure&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Welcome to My Page&lt;/h1&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;p&gt;This simple page shows the basic HTML structure with a head and a body.&lt;/p&gt;
    &lt;a href="https://example.com"&gt;Visit example.com&lt;/a&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;p&gt;Created with HTML.&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

                <h4>How to read the example</h4>
                <p>The <code>&lt;head&gt;</code> section includes metadata and the page title. The <code>&lt;body&gt;</code> section includes the visible parts: a header, a main section, and a footer.</p>
                <p>Using semantic tags like <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code> improves structure and makes the page easier to understand.</p>
            </div>
        `,
        "HTML Tags": `
            <div class="lesson-section">
                <h3>HTML Tags</h3>
                <p>HTML tags are the main building blocks of every web page. A tag tells the browser what type of content it should display and how that content is structured.</p>

                <h4>How tags are written</h4>
                <p>Most HTML tags have an opening tag and a closing tag. The text or other tags go between them.</p>
                <pre>&lt;tagname&gt;Content&lt;/tagname&gt;</pre>
                <p>Some tags are self-closing and do not need a separate closing tag.</p>
                <pre>&lt;img src="photo.jpg" alt="Example image"&gt;</pre>

                <h4>Common HTML tag categories</h4>
                <ul>
                    <li><strong>Document structure tags:</strong> <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code></li>
                    <li><strong>Metadata tags:</strong> <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;script&gt;</code></li>
                    <li><strong>Sectioning tags:</strong> <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code></li>
                    <li><strong>Text content tags:</strong> <code>&lt;h1&gt;</code>...<code>&lt;h6&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;span&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code></li>
                    <li><strong>List tags:</strong> <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code></li>
                    <li><strong>Link and media tags:</strong> <code>&lt;a&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code>, <code>&lt;iframe&gt;</code></li>
                    <li><strong>Grouping tags:</strong> <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code></li>
                    <li><strong>Table tags:</strong> <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code></li>
                    <li><strong>Form tags:</strong> <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;option&gt;</code></li>
                    <li><strong>Formatting tags:</strong> <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;code&gt;</code>, <code>&lt;pre&gt;</code></li>
                </ul>

                <h4>Important HTML tags explained</h4>
                <p><strong><code>&lt;html&gt;</code></strong> defines the root of the HTML document.</p>
                <p><strong><code>&lt;head&gt;</code></strong> contains metadata, links to styles, title, and script references. It is not visible on the page itself.</p>
                <p><strong><code>&lt;body&gt;</code></strong> contains all the visible content shown to users in the browser window.</p>
                <p><strong><code>&lt;title&gt;</code></strong> sets the page title shown in the browser tab and search results.</p>
                <p><strong><code>&lt;meta charset="UTF-8"&gt;</code></strong> ensures the browser reads characters correctly, including letters, symbols, and emoji.</p>
                <p><strong><code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></strong> connects an external CSS file so the page can use styles.</p>

                <h4>Section tags</h4>
                <p>Section tags give meaning to different page areas and make your page easier to understand:</p>
                <ul>
                    <li><code>&lt;header&gt;</code> is used for the page top, including logos and headlines.</li>
                    <li><code>&lt;nav&gt;</code> contains links to other pages or sections.</li>
                    <li><code>&lt;main&gt;</code> contains the main content of the page.</li>
                    <li><code>&lt;section&gt;</code> groups related content together.</li>
                    <li><code>&lt;article&gt;</code> holds a self-contained piece of content like a blog post.</li>
                    <li><code>&lt;aside&gt;</code> contains side notes, related links, or secondary content.</li>
                    <li><code>&lt;footer&gt;</code> is used for page endings, copyright notes, and contact details.</li>
                </ul>

                <h4>Text content and headings</h4>
                <p><code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> are heading tags. Use <code>&lt;h1&gt;</code> for the main title and smaller numbers for subheadings in order.</p>
                <p><strong><code>&lt;p&gt;</code></strong> creates paragraphs of text.</p>
                <p><strong><code>&lt;strong&gt;</code></strong> makes text bold and gives it importance.</p>
                <p><strong><code>&lt;em&gt;</code></strong> emphasizes text, usually displaying it in italics.</p>
                <p><strong><code>&lt;span&gt;</code></strong> is an inline container used for styling or scripting small pieces of text.</p>

                <h4>Lists</h4>
                <p>Use lists when you need to show items in order or as bullet points:</p>
                <ul>
                    <li><code>&lt;ul&gt;</code> is an unordered list with bullet points.</li>
                    <li><code>&lt;ol&gt;</code> is an ordered list with numbers.</li>
                    <li><code>&lt;li&gt;</code> defines each list item.</li>
                </ul>

                <h4>Links and images</h4>
                <p><strong><code>&lt;a href="..."&gt;</code></strong> creates hyperlinks. Users can click these links to go to another page or website.</p>
                <p><strong><code>&lt;img src="..." alt="..."&gt;</code></strong> displays an image. The <code>alt</code> text is important for accessibility and when the image cannot load.</p>

                <h4>Tables</h4>
                <p>Tables organize data in rows and columns:</p>
                <ul>
                    <li><code>&lt;table&gt;</code> defines the table.</li>
                    <li><code>&lt;tr&gt;</code> is a row.</li>
                    <li><code>&lt;th&gt;</code> is a header cell.</li>
                    <li><code>&lt;td&gt;</code> is a normal data cell.</li>
                </ul>

                <h4>Forms and user input</h4>
                <p>Forms collect input from users and can include many types of controls:</p>
                <ul>
                    <li><code>&lt;form&gt;</code> wraps the input controls.</li>
                    <li><code>&lt;label&gt;</code> describes each form field.</li>
                    <li><code>&lt;input&gt;</code> is used for text, email, checkboxes, radio buttons, and more.</li>
                    <li><code>&lt;textarea&gt;</code> is a larger text box.</li>
                    <li><code>&lt;button&gt;</code> submits the form or triggers actions.</li>
                    <li><code>&lt;select&gt;</code> creates a dropdown list.</li>
                    <li><code>&lt;option&gt;</code> defines each dropdown choice.</li>
                </ul>

                <h4>Formatting tags</h4>
                <p>These tags help format text and preserve spacing:</p>
                <ul>
                    <li><code>&lt;br&gt;</code> adds a line break.</li>
                    <li><code>&lt;hr&gt;</code> adds a horizontal rule.</li>
                    <li><code>&lt;code&gt;</code> displays code text.</li>
                    <li><code>&lt;pre&gt;</code> preserves whitespace and line breaks exactly.</li>
                </ul>

                <h4>Full example with many tags</h4>
                <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;HTML Tags Example&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Learning HTML Tags&lt;/h1&gt;
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="#intro"&gt;Introduction&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#features"&gt;Tags &amp; Features&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;main&gt;
    &lt;section id="intro"&gt;
      &lt;h2&gt;What is an HTML Tag?&lt;/h2&gt;
      &lt;p&gt;An HTML tag is a keyword surrounded by angle brackets that tells the browser how to display content.&lt;/p&gt;
    &lt;/section&gt;

    &lt;section id="features"&gt;
      &lt;h2&gt;Common HTML Tags&lt;/h2&gt;
      &lt;article&gt;
        &lt;h3&gt;Text Tags&lt;/h3&gt;
        &lt;p&gt;Use &lt;strong&gt;strong&lt;/strong&gt; for important text and &lt;em&gt;emphasis&lt;/em&gt; for emphasis.&lt;/p&gt;
      &lt;/article&gt;

      &lt;article&gt;
        &lt;h3&gt;Image and Link Tags&lt;/h3&gt;
        &lt;p&gt;Links use &lt;a href="https://example.com"&gt;anchor tags&lt;/a&gt; and images use &lt;img&gt; tags.&lt;/p&gt;
      &lt;/article&gt;

      &lt;article&gt;
        &lt;h3&gt;List Tags&lt;/h3&gt;
        &lt;ul&gt;
          &lt;li&gt;Unordered list item&lt;/li&gt;
          &lt;li&gt;Another item&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/article&gt;
    &lt;/section&gt;

    &lt;section id="contact"&gt;
      &lt;h2&gt;Contact Form&lt;/h2&gt;
      &lt;form&gt;
        &lt;label for="name"&gt;Name:&lt;/label&gt;
        &lt;input id="name" name="name" type="text" placeholder="Enter your name"&gt;
        &lt;label for="message"&gt;Message:&lt;/label&gt;
        &lt;textarea id="message" name="message" rows="4" cols="30"&gt;&lt;/textarea&gt;
        &lt;button type="submit"&gt;Send Message&lt;/button&gt;
      &lt;/form&gt;
    &lt;/section&gt;
  &lt;/main&gt;

  &lt;footer&gt;
    &lt;p&gt;Page created with HTML tags.&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

                <h4>How to use this example</h4>
                <p>This example shows the page structure and many useful tags. It includes a header, navigation, sections, articles, a form, and a footer.</p>
                <p>Changing the content inside the tags will change what users see on the page, while the tags themselves control the page structure.</p>
            </div>
        `,
        "HTML Doctype & Root": `
            <div class="lesson-section">
                <h3>HTML Doctype & Root</h3>
                <p>The first line of every HTML document should be <code>&lt;!DOCTYPE html&gt;</code>. This is called the doctype declaration, and it tells the browser to use the latest HTML standard.</p>
                <p>After the doctype, the entire page is wrapped inside the root element <code>&lt;html&gt;</code>. This root element must contain the <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> sections.</p>
                <h4>Why doctype is important</h4>
                <ul>
                    <li>It tells the browser which HTML version to use.</li>
                    <li>It helps the browser render the page consistently.</li>
                    <li>Without it, browsers may switch to compatibility mode.</li>
                </ul>
                <h4>Example</h4>
                <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;title&gt;Example&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;Page content goes here.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
                <h4>Key points</h4>
                <ul>
                    <li><code>&lt;!DOCTYPE html&gt;</code> is always first.</li>
                    <li><code>&lt;html&gt;</code> wraps the whole document.</li>
                    <li><code>lang="..."</code> improves accessibility and search engine understanding.</li>
                </ul>
            </div>
        `,
        "HTML Head & Metadata": `
            <div class="lesson-section">
                <h3>HTML Head & Metadata</h3>
                <p>The <code>&lt;head&gt;</code> section contains metadata and resources for the page. This information is not displayed directly on the screen, but it is essential for the browser and search engines.</p>
                <h4>Common tags inside <code>&lt;head&gt;</code></h4>
                <ul>
                    <li><code>&lt;title&gt;</code> sets the page title shown in the browser tab.</li>
                    <li><code>&lt;meta charset="UTF-8"&gt;</code> ensures proper character encoding.</li>
                    <li><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> helps the page display correctly on mobile devices.</li>
                    <li><code>&lt;link rel="stylesheet" href="styles.css"&gt;</code> connects external CSS files.</li>
                    <li><code>&lt;script src="script.js"&gt;&lt;/script&gt;</code> loads JavaScript files.</li>
                </ul>
                <h4>Example <code>&lt;head&gt;</code> section</h4>
                <pre>&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My HTML Page&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
  &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/head&gt;</pre>
                <h4>Why metadata matters</h4>
                <p>Metadata gives the browser instructions about how to render the page, and it helps search engines understand the content. It also improves accessibility for assistive technologies.</p>
            </div>
        `,
        "HTML Headings": `
            <div class="lesson-section">
                <h3>HTML Headings</h3>
                <p>Headings are used to create titles and subtitles on a web page. There are six heading levels from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>.</p>
                <h4>Heading levels</h4>
                <ul>
                    <li><code>&lt;h1&gt;</code> is the most important heading and is usually used once per page.</li>
                    <li><code>&lt;h2&gt;</code> to <code>&lt;h6&gt;</code> create subheadings and organize content hierarchically.</li>
                </ul>
                <p>Good heading structure improves readability and helps search engines understand the page sections.</p>
                <h4>Example headings</h4>
                <pre>&lt;h1&gt;Welcome to My Website&lt;/h1&gt;
&lt;h2&gt;About This Page&lt;/h2&gt;
&lt;h3&gt;What You Will Learn&lt;/h3&gt;
&lt;h4&gt;Important Notes&lt;/h4&gt;</pre>
                <h4>Best practices</h4>
                <ul>
                    <li>Use only one <code>&lt;h1&gt;</code> heading per page.</li>
                    <li>Keep the heading order logical.</li>
                    <li>Use headings to divide the page into clear sections.</li>
                </ul>
            </div>
        `,
        "HTML Paragraphs & Text": `
            <div class="lesson-section">
                <h3>HTML Paragraphs & Text</h3>
                <p>The <code>&lt;p&gt;</code> tag is used for paragraphs of text. It is one of the most common tags in HTML.</p>
                <p>Text formatting tags help add meaning and emphasis to words and sentences.</p>
                <h4>Common text tags</h4>
                <ul>
                    <li><code>&lt;p&gt;</code> — paragraph text.</li>
                    <li><code>&lt;strong&gt;</code> — strong importance, usually bold.</li>
                    <li><code>&lt;em&gt;</code> — emphasis, usually italics.</li>
                    <li><code>&lt;span&gt;</code> — inline container for styling or scripting.</li>
                    <li><code>&lt;br&gt;</code> — line break.</li>
                    <li><code>&lt;code&gt;</code> — inline code text.</li>
                    <li><code>&lt;pre&gt;</code> — preformatted text that preserves spaces and line breaks.</li>
                </ul>
                <h4>Example paragraph and text tags</h4>
                <pre>&lt;p&gt;This is a paragraph of text on the page.&lt;/p&gt;
&lt;p&gt;Use &lt;strong&gt;strong&lt;/strong&gt; for important words and &lt;em&gt;emphasized&lt;/em&gt; text.&lt;/p&gt;
&lt;p&gt;Here is some &lt;code&gt;code&lt;/code&gt; inside a sentence.&lt;br&gt;
The next line starts after the break.&lt;/p&gt;
&lt;pre&gt;Preformatted text
  keeps spaces and lines as written.&lt;/pre&gt;</pre>
                <h4>Why text tags are useful</h4>
                <p>These tags make content easier to read and understand. They also improve accessibility because screen readers can announce important text clearly.</p>
            </div>
        `,
        "HTML Links": `
            <div class="lesson-section">
                <h3>HTML Links</h3>
                <p>The <code>&lt;a&gt;</code> tag creates links that users can click to go to another page, section, or website.</p>
                <h4>Important <code>&lt;a&gt;</code> attributes</h4>
                <ul>
                    <li><code>href</code> — the URL or path to navigate to.</li>
                    <li><code>target</code> — where to open the link, such as <code>_blank</code> for a new tab.</li>
                    <li><code>title</code> — optional text shown on hover.</li>
                </ul>
                <h4>Examples of links</h4>
                <pre>&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;
&lt;a href="#section2"&gt;Jump to Section 2&lt;/a&gt;
&lt;a href="mailto:hello@example.com"&gt;Send Email&lt;/a&gt;</pre>
                <h4>Link best practices</h4>
                <ul>
                    <li>Use clear link text that describes the destination.</li>
                    <li>Open external websites in a new tab with <code>target="_blank"</code>.</li>
                    <li>Use relative paths for internal links so the site stays organized.</li>
                </ul>
            </div>
        `,
        "HTML Images": `
            <div class="lesson-section">
                <h3>HTML Images</h3>
                <p>The <code>&lt;img&gt;</code> tag displays images on a web page. It is self-closing and does not require a separate closing tag.</p>
                <h4>Important image attributes</h4>
                <ul>
                    <li><code>src</code> — the path or URL of the image file.</li>
                    <li><code>alt</code> — alternative text shown when the image cannot load and used by screen readers.</li>
                    <li><code>width</code> and <code>height</code> — optional display sizes.</li>
                </ul>
                <h4>Example image tag</h4>
                <pre>&lt;img src="photo.jpg" alt="A photo of a sunrise" width="600" height="400"&gt;</pre>
                <h4>Why <code>alt</code> text is important</h4>
                <p>The <code>alt</code> attribute improves accessibility and helps users understand images if they fail to load.</p>
            </div>
        `,
        "HTML Lists": `
            <div class="lesson-section">
                <h3>HTML Lists</h3>
                <p>Lists organize content into simple, readable items. HTML supports unordered, ordered, and description lists.</p>
                <h4>Unordered lists</h4>
                <p>Use <code>&lt;ul&gt;</code> for bullet lists and <code>&lt;li&gt;</code> for each item.</p>
                <pre>&lt;ul&gt;
  &lt;li&gt;First item&lt;/li&gt;
  &lt;li&gt;Second item&lt;/li&gt;
&lt;/ul&gt;</pre>
                <h4>Ordered lists</h4>
                <p>Use <code>&lt;ol&gt;</code> when order matters.</p>
                <pre>&lt;ol&gt;
  &lt;li&gt;Step one&lt;/li&gt;
  &lt;li&gt;Step two&lt;/li&gt;
&lt;/ol&gt;</pre>
                <h4>Description lists</h4>
                <p>Use <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code>, and <code>&lt;dd&gt;</code> for terms and definitions.</p>
                <pre>&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;A language used to create web pages.&lt;/dd&gt;
&lt;/dl&gt;</pre>
                <h4>Nested lists</h4>
                <p>You can create lists inside list items to show sub-items.</p>
                <pre>&lt;ul&gt;
  &lt;li&gt;Fruits
    &lt;ul&gt;
      &lt;li&gt;Apple&lt;/li&gt;
      &lt;li&gt;Banana&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;</pre>
            </div>
        `,
        "HTML Tables": `
            <div class="lesson-section">
                <h3>HTML Tables</h3>
                <p>Tables display data in rows and columns. They are useful for schedules, price lists, and comparison charts.</p>
                <h4>Table structure</h4>
                <ul>
                    <li><code>&lt;table&gt;</code> — the table container.</li>
                    <li><code>&lt;tr&gt;</code> — a table row.</li>
                    <li><code>&lt;th&gt;</code> — a header cell.</li>
                    <li><code>&lt;td&gt;</code> — a normal data cell.</li>
                    <li><code>&lt;caption&gt;</code> — an optional table title.</li>
                </ul>
                <h4>Example table</h4>
                <pre>&lt;table&gt;
  &lt;caption&gt;Weekly Schedule&lt;/caption&gt;
  &lt;tr&gt;
    &lt;th&gt;Day&lt;/th&gt;
    &lt;th&gt;Activity&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Monday&lt;/td&gt;
    &lt;td&gt;Math class&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Tuesday&lt;/td&gt;
    &lt;td&gt;Science project&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</pre>
                <h4>Best practices</h4>
                <p>Use tables only for data, not for page layout. Always include header cells to describe the values in each column.</p>
            </div>
        `,
        "HTML Forms": `
            <div class="lesson-section">
                <h3>HTML Forms</h3>
                <p>Forms allow users to send information to a website, such as contact details, search queries, or feedback.</p>
                <h4>Common form tags</h4>
                <ul>
                    <li><code>&lt;form&gt;</code> — wraps the entire form.</li>
                    <li><code>&lt;label&gt;</code> — describes a form control.</li>
                    <li><code>&lt;input&gt;</code> — accepts text, email, password, checkboxes, radio buttons, and more.</li>
                    <li><code>&lt;textarea&gt;</code> — accepts multi-line text.</li>
                    <li><code>&lt;button&gt;</code> — submits the form or triggers actions.</li>
                    <li><code>&lt;select&gt;</code> and <code>&lt;option&gt;</code> — create dropdown menus.</li>
                </ul>
                <h4>Example form</h4>
                <pre>&lt;form action="/submit" method="post"&gt;
  &lt;label for="name"&gt;Name:&lt;/label&gt;
  &lt;input id="name" name="name" type="text" required&gt;
  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input id="email" name="email" type="email" required&gt;
  &lt;label for="message"&gt;Message:&lt;/label&gt;
  &lt;textarea id="message" name="message" rows="4" cols="40"&gt;&lt;/textarea&gt;
  &lt;button type="submit"&gt;Send&lt;/button&gt;
&lt;/form&gt;</pre>
                <h4>Why forms matter</h4>
                <p>Forms are how users interact with websites. The data submitted through a form can be processed by a server or used to update the page.</p>
            </div>
        `,
        "HTML Semantic Sections": `
            <div class="lesson-section">
                <h3>HTML Semantic Sections</h3>
                <p>Semantic tags describe the role of each page section. They help browsers, search engines, and assistive tools understand the structure of the page.</p>
                <h4>Common semantic tags</h4>
                <ul>
                    <li><code>&lt;header&gt;</code> — page header or top section.</li>
                    <li><code>&lt;nav&gt;</code> — navigation links.</li>
                    <li><code>&lt;main&gt;</code> — the main content of the page.</li>
                    <li><code>&lt;section&gt;</code> — a thematic section of content.</li>
                    <li><code>&lt;article&gt;</code> — an independent article or post.</li>
                    <li><code>&lt;aside&gt;</code> — side content such as notes or ads.</li>
                    <li><code>&lt;footer&gt;</code> — bottom of the page with copyright or links.</li>
                </ul>
                <h4>Example semantic structure</h4>
                <pre>&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Site Title&lt;/h1&gt;
  &lt;/header&gt;
  &lt;nav&gt;
    &lt;a href="#home"&gt;Home&lt;/a&gt;
  &lt;/nav&gt;
  &lt;main&gt;
    &lt;section&gt;
      &lt;h2&gt;About&lt;/h2&gt;
      &lt;p&gt;This is an example section.&lt;/p&gt;
    &lt;/section&gt;
    &lt;aside&gt;
      &lt;p&gt;Additional notes here.&lt;/p&gt;
    &lt;/aside&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;p&gt;Footer text&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;</pre>
                <p>Using semantic tags makes your HTML easier to read and improves accessibility.</p>
            </div>
        `,
        "HTML Attributes": `
            <div class="lesson-section">
                <h3>HTML Attributes</h3>
                <p>Attributes provide extra information about an element. They appear inside the opening tag after the tag name.</p>
                <h4>Common attributes</h4>
                <ul>
                    <li><code>id</code> — gives the element a unique identifier.</li>
                    <li><code>class</code> — groups elements for styling.</li>
                    <li><code>src</code> — specifies the source for images, scripts, and media.</li>
                    <li><code>href</code> — specifies the destination of a link.</li>
                    <li><code>alt</code> — provides alternate text for images.</li>
                    <li><code>title</code> — provides extra information on hover.</li>
                </ul>
                <h4>Example with attributes</h4>
                <pre>&lt;img src="photo.jpg" alt="A photo of mountains" class="hero-image"&gt;
&lt;a href="https://example.com" target="_blank" title="Open example in a new tab"&gt;Visit Example&lt;/a&gt;</pre>
                <p>Global attributes such as <code>id</code>, <code>class</code>, and <code>title</code> can be used on most HTML elements.</p>
            </div>
        `,
        "HTML Block vs Inline Elements": `
            <div class="lesson-section">
                <h3>HTML Block vs Inline Elements</h3>
                <p>HTML elements are either block-level or inline. Block elements take the full width available and start on a new line, while inline elements only take the space they need and remain within the line.</p>
                <h4>Block-level examples</h4>
                <ul>
                    <li><code>&lt;div&gt;</code></li>
                    <li><code>&lt;p&gt;</code></li>
                    <li><code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code></li>
                    <li><code>&lt;section&gt;</code></li>
                </ul>
                <h4>Inline examples</h4>
                <ul>
                    <li><code>&lt;span&gt;</code></li>
                    <li><code>&lt;a&gt;</code></li>
                    <li><code>&lt;strong&gt;</code></li>
                    <li><code>&lt;img&gt;</code></li>
                </ul>
                <h4>Example showing difference</h4>
                <pre>&lt;div&gt;This is a block element.&lt;/div&gt;
&lt;span&gt;This is inline&lt;/span&gt; text next to it.</pre>
                <p>Block elements stack vertically, while inline elements sit beside other text or inline elements.</p>
            </div>
        `
    },
    "CSS": {
        "Overview": `
            <div class="lesson-section">
                <div class="lesson-image-frame redact-top">
                    <img src="${imagePaths.cssOverviewImage}" alt="CSS syntax diagram" class="lesson-image">
                </div>
                <h3>CSS Overview</h3>
                <p>CSS (Cascading Style Sheets) is the language used to style HTML pages. It defines how text, images, buttons, and layout appear in the browser.</p>
                <p>HTML gives the page structure and content, while CSS controls the presentation. Together they make beautiful and readable web pages.</p>
                <h4>How CSS rules work</h4>
                <p>A CSS rule has three parts: selector, property, and value. The selector selects the element, the property chooses what to change, and the value sets the new style.</p>
                <pre>selector {
  property: value;
}</pre>
                <p>Example:</p>
                <pre>h1 {
  color: #0f6cbd;
  font-size: 32px;
  margin-bottom: 16px;
}</pre>
                <h4>Where to write CSS</h4>
                <ul>
                    <li><strong>External CSS</strong> — in a separate <code>.css</code> file that is linked in the HTML <code>&lt;head&gt;</code>.</li>
                    <li><strong>Internal CSS</strong> — inside a <code>&lt;style&gt;</code> tag in the HTML document.</li>
                    <li><strong>Inline CSS</strong> — directly on an HTML element using the <code>style="..."</code> attribute.</li>
                </ul>
                <h4>Why CSS is important</h4>
                <ul>
                    <li>Separates design from content</li>
                    <li>Makes pages easier to maintain</li>
                    <li>Improves the user experience with readable layouts</li>
                    <li>Helps websites look good on desktop and mobile devices</li>
                </ul>
                <h4>CSS key concepts</h4>
                <ul>
                    <li><strong>Cascade:</strong> when multiple rules apply, the browser chooses the rule with higher priority.</li>
                    <li><strong>Specificity:</strong> more specific selectors override less specific ones.</li>
                    <li><strong>Inheritance:</strong> some properties pass from parent elements to children automatically.</li>
                </ul>
                <h4>Example of an external stylesheet</h4>
                <pre>&lt;head&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;</pre>
            </div>
        `,
        "Selectors": `
            <div class="lesson-section">
                <h3>CSS Selectors</h3>
                <p>Selectors tell the browser which HTML elements should be styled. Choosing the right selector is the first step in writing good CSS.</p>
                <h4>Common selector types</h4>
                <ul>
                    <li><strong>Element selector:</strong> targets all elements of a type, such as <code>p</code> or <code>h1</code>.</li>
                    <li><strong>Class selector:</strong> targets elements with a class attribute, like <code>.button</code> for <code>class="button"</code>.</li>
                    <li><strong>ID selector:</strong> targets one element with a unique ID, like <code>#header</code> for <code>id="header"</code>.</li>
                    <li><strong>Descendant selector:</strong> targets elements inside another element, like <code>.card p</code>.</li>
                    <li><strong>Child selector:</strong> targets direct children only, like <code>.menu &gt; li</code>.</li>
                    <li><strong>Attribute selector:</strong> targets elements with a specific attribute, like <code>a[href]</code>.</li>
                    <li><strong>Group selector:</strong> targets several selectors at once, like <code>h1, h2, h3</code>.</li>
                </ul>
                <h4>Example selectors</h4>
                <pre>p {
  line-height: 1.6;
}

.button {
  background-color: #0f6cbd;
  color: white;
}

#main-title {
  font-size: 36px;
}

.header nav a {
  text-decoration: none;
  color: #333333;
}

input[type="text"] {
  border: 1px solid #cccccc;
}</pre>
                <h4>Selector priority</h4>
                <p>When two rules apply to the same element, the one with more specific selectors wins. For example, an ID selector is stronger than a class selector.</p>
                <p>Using clear and consistent class names helps keep CSS easy to understand.</p>
            </div>
        `,
        "Colors & Backgrounds": `
            <div class="lesson-section">
                <div class="lesson-image-frame redact-top">
                    <img src="${imagePaths.webBrowserImage}" alt="CSS colors and background styles" class="lesson-image">
                </div>
                <h3>Colors & Backgrounds</h3>
                <p>CSS can change the color of text, backgrounds, borders, and shadows. It also allows background images and gradients to make sections more attractive.</p>
                <h4>Common color formats</h4>
                <ul>
                    <li><strong>Hex:</strong> <code>#0f6cbd</code> or <code>#ffffff</code></li>
                    <li><strong>RGB:</strong> <code>rgb(255, 0, 0)</code></li>
                    <li><strong>RGBA:</strong> <code>rgba(255, 0, 0, 0.8)</code> with transparency</li>
                    <li><strong>HSL:</strong> <code>hsl(210, 100%, 50%)</code></li>
                </ul>
                <h4>Background properties</h4>
                <ul>
                    <li><code>background-color</code> sets a solid color.</li>
                    <li><code>background-image</code> places an image behind content.</li>
                    <li><code>background-size</code> controls how the background image is scaled.</li>
                    <li><code>background-position</code> moves the image position.</li>
                    <li><code>background-repeat</code> controls whether the image repeats.</li>
                </ul>
                <h4>Example colors and background</h4>
                <pre>.hero {
  color: #ffffff;
  background-color: #0f6cbd;
  background-image: linear-gradient(135deg, #0f6cbd 0%, #3489ff 100%);
  padding: 48px 24px;
  border-radius: 12px;
}

.card {
  background-color: #ffffff;
  border: 1px solid #d5e4ee;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
}

a {
  color: #0f6cbd;
}

a:hover {
  color: #0a58b8;
}
</pre>
                <h4>Accessibility tip</h4>
                <p>Always use enough contrast between text and background. Dark text on a light background or light text on a dark background is easiest to read.</p>
            </div>
        `,
        "Box Model": `
            <div class="lesson-section">
                <h3>CSS Box Model</h3>
                <p>The box model describes how every element is built from boxes. The box contains the content, padding, border, and margin.</p>
                <h4>Box model parts</h4>
                <ul>
                    <li><strong>Content:</strong> the text, image, or other content inside the element.</li>
                    <li><strong>Padding:</strong> space between the content and the border.</li>
                    <li><strong>Border:</strong> the edge around the padding and content.</li>
                    <li><strong>Margin:</strong> space outside the border that separates elements.</li>
                </ul>
                <h4>Example box model styling</h4>
                <pre>.card {
  width: 320px;
  padding: 24px;
  border: 1px solid #d5e4ee;
  border-radius: 12px;
  margin: 20px auto;
}

.card-title {
  margin-top: 0;
}

.card-text {
  margin-bottom: 16px;
}</pre>
                <h4>Box sizing</h4>
                <p>By default, width and height apply to content only. Using <code>box-sizing: border-box;</code> makes width and height include padding and border, which is easier for layout.</p>
                <pre>* {
  box-sizing: border-box;
}</pre>
                <h4>Why the box model matters</h4>
                <p>Knowing the box model helps you control spacing, align elements, and build layouts that look consistent on every screen.</p>
            </div>
        `
    },
    "JavaScript": {
        "Introduction to JavaScript": `
            <div class="lesson-section">
                <img src="${imagePaths.javascriptIntro}" alt="JavaScript introduction" class="lesson-image">
                <h3>Introduction to JavaScript</h3>
                <p>
                    JavaScript is the programming language that makes web pages interactive. It runs inside the browser and responds to user actions like clicks, typing, and scrolling.
                </p>
                <p>
                    When HTML builds the page structure and CSS styles it, JavaScript adds the behavior. With JavaScript, you can create menus, update page content, validate forms, animate elements, and build games.
                </p>
                <h4>Why JavaScript is important</h4>
                <ul>
                    <li>It runs in every modern web browser.</li>
                    <li>It makes websites dynamic and user-friendly.</li>
                    <li>It is used for web apps, mobile apps, and server-side development.</li>
                    <li>It is the most popular language for front-end web development.</li>
                </ul>
                <h4>Example of JavaScript</h4>
                <pre>&lt;script&gt;
alert("Hello, world!");
&lt;/script&gt;</pre>
            </div>
        `,
        "History of JavaScript": `
            <div class="lesson-section">
                <img src="${imagePaths.javascriptHistory}" alt="History of JavaScript" class="lesson-image">
                <h3>History of JavaScript</h3>
                <p>
                    JavaScript was created in 1995 by Brendan Eich while working at Netscape. It was first called Mocha, then LiveScript, and finally JavaScript.
                </p>
                <h4>Why JavaScript was invented</h4>
                <p>
                    The web needed a language that could run inside the browser and update pages without reloading them. JavaScript made web pages more interactive and allowed developers to build rich user experiences.
                </p>
                <h4>Major milestones</h4>
                <ul>
                    <li><strong>1995:</strong> JavaScript introduced in Netscape Navigator.</li>
                    <li><strong>1997:</strong> JavaScript standardized as ECMAScript.</li>
                    <li><strong>2005:</strong> AJAX became popular and made pages update smoothly.</li>
                    <li><strong>2009:</strong> Node.js arrived, bringing JavaScript to servers.</li>
                    <li><strong>Today:</strong> JavaScript is used for websites, mobile apps, games, and servers.</li>
                </ul>
                <p>
                    From a small browser language, JavaScript has grown into a full programming ecosystem used by millions around the world.
                </p>
            </div>
        `,
        "JavaScript Features": `
            <div class="lesson-section">
                <img src="${imagePaths.javascriptFeatures}" alt="JavaScript features" class="lesson-image">
                <h3>JavaScript Features</h3>
                <p>
                    JavaScript has many powerful features that make it easy to build interactive and responsive websites.
                </p>
                <ul>
                    <li><strong>Dynamic typing:</strong> variables can store numbers, text, arrays, and objects.</li>
                    <li><strong>Event-driven:</strong> code can run when the user clicks, types, or moves the mouse.</li>
                    <li><strong>Functions:</strong> reusable blocks of code that can be called many times.</li>
                    <li><strong>Objects:</strong> used to store related data and behavior together.</li>
                    <li><strong>DOM access:</strong> JavaScript can read and change page content instantly.</li>
                </ul>
                <h4>Task automation</h4>
                <p>
                    JavaScript can repeat steps like animation, form validation, and updating page sections without asking the user to reload the page.
                </p>
            </div>
        `,
        "JavaScript Syntax": `
            <div class="lesson-section">
                <h3>JavaScript Syntax</h3>
                <p>
                    Syntax is the set of rules JavaScript uses to understand your code. Each statement ends with a semicolon, and code is grouped by brackets and punctuation.
                </p>
                <h4>Basic JavaScript code</h4>
                <pre>let message = "Hello";
console.log(message);
if (message) {
  alert("Message exists");
}</pre>
                <h4>Comments</h4>
                <p>
                    Comments help explain code and are ignored by the browser.
                </p>
                <pre>// This is a single-line comment
/* This is a
   multi-line comment */</pre>
            </div>
        `,
        "JavaScript Variables": `
            <div class="lesson-section">
                <h3>JavaScript Variables</h3>
                <p>Variables are containers that store data values. In JavaScript, you use variables to keep numbers, text, or other values so your code can use them later.</p>
                <h4>Why variables are useful</h4>
                <ul>
                    <li>They hold information that can change over time.</li>
                    <li>They make code easier to read and maintain.</li>
                    <li>They let you reuse values instead of writing the same text or number again and again.</li>
                </ul>
                <h4>Variable naming rules</h4>
                <ul>
                    <li>Names can include letters, numbers, <code>$</code>, and <code>_</code>.</li>
                    <li>They cannot start with a number.</li>
                    <li>They cannot use reserved words like <code>let</code>, <code>const</code>, or <code>function</code>.</li>
                    <li>Use meaningful names such as <code>userName</code>, <code>totalAmount</code>, or <code>isLoggedIn</code>.</li>
                </ul>
                <h4>Example of variables</h4>
                <pre>let userName = "Aisha";
let score = 95;
let isPassed = true;

console.log(userName); // Aisha
console.log(score + 5); // 100
console.log(isPassed); // true</pre>
                <h4>Best practices</h4>
                <ul>
                    <li>Choose names that describe the value stored.</li>
                    <li>Avoid single-letter names except for counters like <code>i</code>.</li>
                    <li>Keep variables readable using camelCase.</li>
                </ul>
            </div>
        `,
        "JavaScript Data Types": `
            <div class="lesson-section">
                <h3>JavaScript Data Types</h3>
                <p>Data types tell JavaScript what kind of value is stored in a variable. JavaScript has primitive data types and reference types.</p>
                <h4>Primitive data types</h4>
                <ul>
                    <li><strong>String:</strong> text inside quotes, for example <code>"Hello"</code></li>
                    <li><strong>Number:</strong> numeric values, such as <code>10</code> or <code>3.14</code></li>
                    <li><strong>Boolean:</strong> <code>true</code> or <code>false</code></li>
                    <li><strong>Undefined:</strong> a variable without a value</li>
                    <li><strong>Null:</strong> a value that means "no value"</li>
                    <li><strong>Symbol:</strong> a unique identifier</li>
                    <li><strong>BigInt:</strong> very large integers, for example <code>123n</code></li>
                </ul>
                <h4>Reference data types</h4>
                <ul>
                    <li><strong>Object:</strong> a collection of keys and values</li>
                    <li><strong>Array:</strong> an ordered list of values</li>
                    <li><strong>Function:</strong> reusable code that can run later</li>
                </ul>
                <h4>Example of different data types</h4>
                <pre>let title = "JavaScript Basics"; // String
let price = 250; // Number
let hasDiscount = false; // Boolean
let user = undefined; // Undefined
let product = null; // Null
let colors = ["red", "green", "blue"]; // Array
let person = {
  name: "Anil",
  age: 24,
}; // Object

console.log(typeof title); // string
console.log(typeof price); // number
console.log(typeof person); // object</pre>
                <h4>Why data types matter</h4>
                <p>Knowing the data type helps JavaScript perform the right actions. For example, adding numbers is different from joining strings.</p>
            </div>
        `,
        "Variable Declaration": `
            <div class="lesson-section">
                <h3>Variable Declaration</h3>
                <p>JavaScript supports three ways to declare variables: <code>let</code>, <code>const</code>, and <code>var</code>. Each behaves differently.</p>
                <h4><code>let</code></h4>
                <p><code>let</code> declares a variable whose value can change later.</p>
                <pre>let age = 20;
age = 21; // allowed</pre>
                <h4><code>const</code></h4>
                <p><code>const</code> declares a constant. Once set, its value cannot be changed.</p>
                <pre>const pi = 3.14;
// pi = 3.1415; // error</pre>
                <h4><code>var</code></h4>
                <p><code>var</code> is the old way to declare variables. It still works, but it has confusing behavior and is not recommended for modern code.</p>
                <pre>var user = "Ravi";
user = "Reena";</pre>
                <h4>Key differences</h4>
                <ul>
                    <li><code>let</code> allows reassignment and is block-scoped.</li>
                    <li><code>const</code> does not allow reassignment and is block-scoped.</li>
                    <li><code>var</code> is function-scoped and can be redeclared.</li>
                </ul>
            </div>
        `,
        "Variable Scope": `
            <div class="lesson-section">
                <h3>Variable Scope</h3>
                <p>Scope determines where a variable is accessible in your code. JavaScript has global scope, function scope, and block scope.</p>
                <h4>Global scope</h4>
                <p>Variables declared outside any function or block are global and can be used anywhere.</p>
                <pre>let country = "India";
function showCountry() {
  console.log(country);
}
showCountry(); // India</pre>
                <h4>Function scope</h4>
                <p>Variables declared inside a function are only available inside that function.</p>
                <pre>function test() {
  let message = "Hello";
  console.log(message);
}
// console.log(message); // error</pre>
                <h4>Block scope</h4>
                <p>Variables declared with <code>let</code> or <code>const</code> inside a block (<code>{ }</code>) are only available inside that block.</p>
                <pre>if (true) {
  let score = 90;
  console.log(score); // 90
}
// console.log(score); // error</pre>
                <h4>Scope best practices</h4>
                <ul>
                    <li>Use <code>let</code> and <code>const</code> instead of <code>var</code>.</li>
                    <li>Keep variables in the smallest scope needed.</li>
                    <li>Avoid using many global variables.</li>
                </ul>
            </div>
        `,
        "Type Conversion": `
            <div class="lesson-section">
                <h3>Type Conversion</h3>
                <p>JavaScript can convert values from one type to another. This is called type conversion or type casting.</p>
                <h4>Implicit conversion</h4>
                <p>JavaScript sometimes changes types automatically.</p>
                <pre>let result = "5" + 2; // "52"
let total = "10" * 2; // 20</pre>
                <h4>Explicit conversion</h4>
                <p>You can convert types manually using built-in functions.</p>
                <pre>let value = "100";
let numberValue = Number(value); // 100
let textValue = String(100); // "100"
let booleanValue = Boolean(0); // false</pre>
                <h4>Useful conversion functions</h4>
                <ul>
                    <li><code>String(value)</code> converts to text.</li>
                    <li><code>Number(value)</code> converts to a number.</li>
                    <li><code>Boolean(value)</code> converts to true or false.</li>
                    <li><code>parseInt(value)</code> converts text to an integer.</li>
                    <li><code>parseFloat(value)</code> converts text to a decimal number.</li>
                </ul>
                <h4>Example of type conversion</h4>
                <pre>let ageText = "18";
let ageNumber = Number(ageText); // 18
let isAdult = Boolean(ageNumber >= 18); // true
let message = String(ageNumber) + " years old"; // "18 years old"</pre>
                <h4>Why conversion matters</h4>
                <p>Converting types helps avoid bugs when combining values and ensures calculations work correctly.</p>
            </div>
        `,
        "Operators": `
            <div class="lesson-section">
                <h3>Operators</h3>
                <p>
                    Operators are symbols that perform calculations or compare values.
                </p>
                <ul>
                    <li><strong>Arithmetic:</strong> +, -, *, /, %</li>
                    <li><strong>Assignment:</strong> =, +=, -=</li>
                    <li><strong>Comparison:</strong> ==, ===, !=, !==, &gt;, &lt;</li>
                    <li><strong>Logical:</strong> &&, ||, !</li>
                </ul>
                <h4>Example</h4>
                <pre>let total = 10 + 5;
let valid = total === 15;
let open = true && false;</pre>
            </div>
        `,
        "Functions": `
            <div class="lesson-section">
                <h3>Functions</h3>
                <p>
                    Functions are reusable blocks of code. They help organize logic and avoid repeating the same steps again and again.
                </p>
                <h4>Function example</h4>
                <pre>function greet(name) {
  return "Hello " + name;
}
let message = greet("Aman");
console.log(message);</pre>
                <p>
                    Functions can take inputs called parameters and return values after processing.
                </p>
            </div>
        `,
        "Conditional Statements": `
            <div class="lesson-section">
                <h3>Conditional Statements</h3>
                <p>
                    Conditional statements make decisions. They allow JavaScript to choose different actions based on conditions.
                </p>
                <h4>Example</h4>
                <pre>let score = 75;
if (score &gt;= 90) {
  console.log("Excellent");
} else if (score &gt;= 60) {
  console.log("Good");
} else {
  console.log("Try again");
}</pre>
                <p>
                    Use <code>if</code>, <code>else if</code>, and <code>else</code> to control how the program responds.
                </p>
            </div>
        `,
        "Loops": `
            <div class="lesson-section">
                <h3>Loops</h3>
                <p>
                    Loops repeat instructions until a condition is met. They help run the same code many times without rewriting it.
                </p>
                <h4>Example of a for loop</h4>
                <pre>for (let i = 1; i <= 5; i++) {
  console.log(i);
}</pre>
                <h4>Example of a while loop</h4>
                <pre>let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}</pre>
            </div>
        `,
        "Arrays": `
            <div class="lesson-section">
                <h3>Arrays</h3>
                <p>
                    An array stores a list of values in a single variable. Each value has an index number starting from 0.
                </p>
                <pre>let fruits = ["Mango", "Apple", "Banana"];
console.log(fruits[0]); // Mango</pre>
                <ul>
                    <li><strong>push():</strong> adds a value at the end</li>
                    <li><strong>pop():</strong> removes the last value</li>
                    <li><strong>length:</strong> gives the number of items</li>
                </ul>
            </div>
        `,
        "Objects": `
            <div class="lesson-section">
                <h3>Objects</h3>
                <p>
                    Objects store related data and behavior together. They are useful for real-world items like users, books, or products.
                </p>
                <pre>let student = {
  name: "Sita",
  age: 16,
  grade: "A"
};
console.log(student.name); // Sita</pre>
                <p>
                    Objects can also contain functions called methods.
                </p>
            </div>
        `,
        "DOM Basics": `
            <div class="lesson-section">
                <h3>DOM Basics</h3>
                <p>
                    The DOM (Document Object Model) is the structure of an HTML page. JavaScript can read and change the DOM to update the page instantly.
                </p>
                <h4>Example</h4>
                <pre>let title = document.querySelector("h1");
title.innerText = "Welcome to JavaScript";</pre>
                <p>
                    This code finds the first heading and changes its text without refreshing the page.
                </p>
            </div>
        `,
        "Events": `
            <div class="lesson-section">
                <h3>Events</h3>
                <p>
                    Events are actions the user makes, like clicking a button, moving the mouse, or typing text.
                </p>
                <h4>Event example</h4>
                <pre>let button = document.querySelector("button");
button.addEventListener("click", function() {
  alert("Button clicked!");
});</pre>
                <p>
                    This code listens for a click and runs the function when the button is pressed.
                </p>
            </div>
        `,
        "JavaScript in HTML": `
            <div class="lesson-section">
                <h3>JavaScript in HTML</h3>
                <p>
                    JavaScript code is included inside the HTML page using the <code>&lt;script&gt;</code> tag.
                </p>
                <pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;JS Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;button onclick="sayHello()"&gt;Click Me&lt;/button&gt;
  &lt;script&gt;
    function sayHello() {
      alert("Hello from JavaScript");
    }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
                <p>
                    This is the simplest way to make a web page interactive with JavaScript.
                </p>
            </div>
        `,
        "Frameworks & Libraries": `
            <div class="lesson-section">
                <img src="${imagePaths.javascriptFrameworks}" alt="JavaScript frameworks and libraries" class="lesson-image">
                <h3>Frameworks & Libraries</h3>
                <p>
                    A framework or library is a collection of pre-written JavaScript code that helps build apps faster.
                </p>
                <ul>
                    <li><strong>React:</strong> used for building user interfaces.</li>
                    <li><strong>Vue:</strong> a simple and flexible library for web pages.</li>
                    <li><strong>Angular:</strong> a full framework for large applications.</li>
                    <li><strong>jQuery:</strong> an older library that simplified browser actions.</li>
                </ul>
                <p>
                    Learning JavaScript first is important before using any framework or library.
                </p>
                <p>
                    Frameworks and libraries make it easier to create modern websites, but the foundation is always plain JavaScript.
                </p>
            </div>
        `
    },
    "Python": {
        "Introduction": `
            <div class="lesson-section">
                <img src="${imagePaths.pythonIntro}" alt="Introduction to Python" class="lesson-image">
                <h3>Introduction to Python</h3>
                <p>
                    Python is a modern programming language that is designed to be easy to learn and easy to use.
                    It is used for many different tasks such as making websites, creating games, controlling robots,
                    analyzing data, and writing scripts to automate repetitive work.
                </p>
                <p>
                    Python is popular because it uses simple words and clear structure. Python code can be read like a
                    sentence, which makes it ideal for beginners and for writing programs quickly.
                </p>
                <h4>How Python works</h4>
                <p>
                    Python programs are run by a Python interpreter. The interpreter reads the code line by line,
                    converts it into instructions the computer can understand, and then executes those instructions.
                </p>
                <h4>Why Python is a good first language</h4>
                <ul>
                    <li>Easy to write and understand.</li>
                    <li>Less punctuation and fewer rules than many other languages.</li>
                    <li>Large community and many example programs.</li>
                    <li>Works on most operating systems without changing the code.</li>
                </ul>
                <p>
                    Because of this, students can focus on learning programming ideas rather than remembering complicated syntax.
                </p>
            </div>
        `,
        "History of Python": `
            <div class="lesson-section">
                <h3>History of Python</h3>
                <p>
                    Python began as a personal project by Guido van Rossum in the late 1980s while he was working at
                    the Centrum Wiskunde & Informatica (CWI) laboratory in the Netherlands. His goal was to create a
                    language that combined the power of older languages with a clearer and simpler style.
                </p>
                <p>
                    The first public version, Python 0.9.0, was released in 1991. This early version already included
                    functions, exception handling, and modules. It also supported strings, lists, and dictionaries, which
                    made it easy to write practical programs from the beginning.
                </p>
                <h4>How Python got its name</h4>
                <p>
                    Guido named the language "Python" as a tribute to the British comedy group Monty Python.
                    He wanted the language to be fun and approachable, not just a serious tool for experts.
                </p>
                <h4>Key milestones in Python's growth</h4>
                <ul>
                    <li><strong>1994:</strong> Python 1.0 was released with core features and a growing community of users.</li>
                    <li><strong>2000:</strong> Python 2.0 introduced important features like list comprehensions and
                        a more advanced garbage collector to manage memory.</li>
                    <li><strong>2008:</strong> Python 3.0 was released to make the language cleaner and remove old features that
                        caused confusion. This version improved text handling and standardized several behaviors.</li>
                    <li><strong>2010s:</strong> Python grew quickly in popularity because of its use in web development,
                        data analysis, and scientific computing.</li>
                    <li><strong>Today:</strong> Python is one of the most popular programming languages in the world,
                        used by beginners, developers, researchers, and businesses alike.</li>
                </ul>
                <p>
                    Python's history is not just a list of versions. It is also a story about how a simple design idea
                    and a helpful community made programming more accessible. Each new version added tools while keeping
                    the language easy to read and learn.
                </p>
                <p>
                    The Python community also created many libraries and frameworks, such as Django for websites and
                    NumPy for scientific computing. These tools helped Python move from a teaching language to a powerful
                    tool used in real-world applications.
                </p>
                <p>
                    Because Python was designed with readability and simplicity in mind, it remains a strong choice for
                    new learners and experienced programmers.
                </p>
            </div>
        `,
        "Python Features": `
            <div class="lesson-section">
                <img src="${imagePaths.pythonFeatures}" alt="Python features" class="lesson-image">
                <h3>Python Features</h3>
                <p>
                    Python has many built-in qualities that make it a strong choice for learners and professionals.
                    Each feature combines to make programming faster, easier, and more powerful.
                </p>
                <h4>Readable code</h4>
                <p>
                    Python uses plain words, clear punctuation, and indentation to show how code is structured.
                    This readability helps new learners understand programs quickly and reduces mistakes.
                    For example, a Python function looks simple and clean, making it easy to follow the steps.
                </p>
                <h4>Interpreted language</h4>
                <p>
                    Python is interpreted, which means the Python interpreter reads your code and runs it immediately.
                    You do not need a separate compile step like some other languages. This makes testing small
                    changes faster and lets students see results quickly.
                </p>
                <h4>Object-oriented</h4>
                <p>
                    Python supports object-oriented programming, which means you can create classes and objects to
                    organize related data and behavior together. This feature is useful for building larger programs
                    and understanding how real-world systems work.
                </p>
                <h4>Large libraries</h4>
                <p>
                    Python includes a large standard library of ready-made tools for working with text, numbers,
                    files, dates, and network connections. In addition to the built-in library, thousands of extra
                    packages are available online for web development, data science, machine learning, and more.
                </p>
                <h4>Cross-platform</h4>
                <p>
                    Python runs on many operating systems without changing the code. Programs written on Windows often
                    work the same on Mac and Linux. This makes Python a good choice for sharing code with others and
                    using the same programs in different environments.
                </p>
                <h4>Dynamic typing</h4>
                <p>
                    In Python, variables do not need a fixed type. A variable can hold a number one moment and text the
                    next. This flexibility makes the language easier to use, especially for beginners learning how
                    variables work.
                </p>
                <h4>Strong community</h4>
                <p>
                    Python has a large and active community of learners, teachers, and developers. This means many
                    tutorials, examples, and answers are available online, which helps beginners learn faster and solve
                    problems more easily.
                </p>
                <p>
                    These features together make Python a powerful and approachable language for many kinds of projects,
                    from simple exercises to professional applications.
                </p>
            </div>
        `,
        "Python Syntax": `
            <div class="lesson-section">
                <img src="${imagePaths.pythonCode}" alt="Python code example" class="lesson-image">
                <h3>Python Syntax</h3>
                <p>
                    Syntax is the set of rules that tells Python how to read your code. In Python, lines of code are
                    grouped using indentation instead of curly braces or keywords.
                </p>
                <p>
                    This means the structure of the code is visible by the spaces at the beginning of each line.
                    When you write an if statement, a function, or a loop, the lines below it are indented to show
                    they belong together.
                </p>
                <h4>Simple Python syntax example</h4>
                <pre>name = "Anil"
age = 20
print("Hello", name)
if age >= 18:
    print("You are an adult")
</pre>
                <p>
                    The indented line after <code>if</code> belongs to the conditional block. This helps programmers
                    see the program flow clearly.
                </p>
            </div>
        `,
        "Variables": `
            <div class="lesson-section">
                <h3>Variables in Python</h3>
                <p>
                    A variable is a name that stores a value. You can think of it like a labeled box in which you keep
                    a number, a piece of text, or any other information your program needs.
                </p>
                <h4>How to assign values</h4>
                <p>
                    In Python, you assign a value to a variable using the equal sign <code>=</code>. You do not need to
                    tell Python what type of data it is before you assign it.
                </p>
                <pre>message = "Hello Python"
count = 10
price = 99.99
is_valid = True
</pre>
                <p>
                    Here, <code>message</code> stores text, <code>count</code> stores a whole number, <code>price</code>
                    stores a decimal number, and <code>is_valid</code> stores a true/false value.
                </p>
                <h4>Variable naming rules</h4>
                <ul>
                    <li>Names can include letters, numbers, and underscores: <code>age</code>, <code>user_name</code>.</li>
                    <li>Names must not start with a number: <code>123name</code> is not allowed.</li>
                    <li>Do not use spaces in variable names; use underscores instead: <code>first_name</code>.</li>
                    <li>Avoid using reserved words like <code>if</code>, <code>for</code>, <code>while</code>, and <code>def</code>.</li>
                </ul>
                <h4>Changing variable values</h4>
                <p>
                    You can change the value stored in a variable whenever you need to. The same variable name can hold
                    different kinds of values at different times.
                </p>
                <pre>score = 10
score = score + 5
print(score)  # 15

score = "high"
print(score)  # high
</pre>
                <p>
                    In this example, <code>score</code> first holds a number, and later it holds text. Python figures out
                    the type automatically.
                </p>
                <h4>Multiple assignment</h4>
                <p>
                    Python lets you assign several variables at once, which makes code shorter and easier to read.
                </p>
                <pre>a, b, c = 5, 10, 15
name, age = "Rina", 18
</pre>
                <p>
                    You can also swap values between variables without using a temporary box.
                </p>
                <pre>first = 1
second = 2
first, second = second, first
print(first, second)  # 2 1
</pre>
                <h4>Common variable types</h4>
                <p>
                    Variables can store many different kinds of values. Here are the most common ones:
                </p>
                <ul>
                    <li><strong>String:</strong> text inside quotes, for example <code>"Hello"</code>.</li>
                    <li><strong>Integer:</strong> whole numbers, for example <code>10</code>.</li>
                    <li><strong>Float:</strong> decimal numbers, for example <code>99.99</code>.</li>
                    <li><strong>Boolean:</strong> true or false values, written as <code>True</code> or <code>False</code>.</li>
                </ul>
                <h4>Example with different variable types</h4>
                <pre>name = "Anita"
age = 18
height = 5.4
is_student = True
print(name, age, height, is_student)
</pre>
                <p>
                    This example shows how variables can hold text, numbers, decimal values, and yes/no answers.
                </p>
                <h4>Useful variable practices</h4>
                <ul>
                    <li>Use clear names so your code is easy to read, for example <code>total_score</code> instead of <code>ts</code>.</li>
                    <li>Keep your values updated with meaningful changes, such as <code>count = count + 1</code>.
                    </li>
                    <li>Use uppercase names for values that should not change, like <code>MAX_SPEED = 100</code>.</li>
                </ul>
                <p>
                    Variables are one of the most important tools in Python. They let your program remember and work with
                    information as it runs.
                </p>
            </div>
        `,
        "Data Types": `
            <div class="lesson-section">
                <h3>Data Types</h3>
                <p>
                    Data types tell Python what kind of value is stored in a variable. Every value has a data type,
                    and Python uses these types to know how to work with the value.
                </p>
                <h4>Common basic data types</h4>
                <ul>
                    <li><strong>String:</strong> text inside quotes, for example <code>"Hello"</code>.</li>
                    <li><strong>Integer:</strong> whole numbers without decimals, for example <code>10</code>.</li>
                    <li><strong>Float:</strong> decimal numbers, for example <code>10.5</code>.</li>
                    <li><strong>Boolean:</strong> a value that is either <code>True</code> or <code>False</code>.</li>
                    <li><strong>None:</strong> a special value that means "no value" or "nothing".</li>
                </ul>
                <h4>Collection data types</h4>
                <ul>
                    <li><strong>List:</strong> an ordered collection of values, written with square brackets.</li>
                    <li><strong>Tuple:</strong> an ordered collection that cannot change after it is created.</li>
                    <li><strong>Dictionary:</strong> a collection of key-value pairs for storing related data.
                    </li>
                    <li><strong>Set:</strong> an unordered collection of unique values.</li>
                </ul>
                <h4>Examples of each type</h4>
                <pre>name = "Rina"                   # String
age = 18                         # Integer
price = 250.50                   # Float
is_student = True                # Boolean
nothing = None                   # NoneType
fruits = ["apple", "banana"]   # List
days = ("Mon", "Tue", "Wed") # Tuple
student = {"name": "Rina", "age": 18}  # Dictionary
numbers = {1, 2, 3, 3}           # Set
</pre>
                <p>
                    Each example shows a different type of data. Lists and tuples keep items in order, dictionaries
                    use keys to find values, and sets keep only unique values.
                </p>
                <h4>How to check a type</h4>
                <p>
                    You can use the built-in <code>type()</code> function to see the type of any value.
                </p>
                <pre>print(type(name))      # &lt;class 'str'&gt;
print(type(age))       # &lt;class 'int'&gt;
print(type(price))     # &lt;class 'float'&gt;
print(type(is_student))# &lt;class 'bool'&gt;
print(type(nothing))   # &lt;class 'NoneType'&gt;
</pre>
                <h4>Working with strings</h4>
                <p>
                    Strings are used for text. You can join strings together, change letters to upper or lower case,
                    and count how long the text is.
                </p>
                <pre>text = "Hello"
print(text + " Python")  # Hello Python
print(text.upper())       # HELLO
print(len(text))          # 5
</pre>
                <h4>Working with numbers</h4>
                <p>
                    Integers and floats are used for math. Use <code>int()</code> to convert text to whole numbers and
                    <code>float()</code> to convert text to decimal numbers.
                </p>
                <pre>a = 10
b = 3.5
print(a + b)   # 13.5
print(int(b))  # 3
print(float(a))# 10.0
</pre>
                <h4>Working with lists</h4>
                <p>
                    Lists store many values in order. You can add items, remove items, and find the length of a list.
                </p>
                <pre>fruits = ["apple", "banana", "mango"]
fruits.append("orange")
print(fruits[0])    # apple
print(len(fruits))  # 4
</pre>
                <h4>Working with tuples</h4>
                <p>
                    Tuples are like lists, but you cannot change their values after creation. This makes tuples useful for
                    data that should stay fixed.
                </p>
                <pre>colors = ("red", "green", "blue")
print(colors[1])    # green
</pre>
                <h4>Working with dictionaries</h4>
                <p>
                    Dictionaries store values with names called keys. This makes it easy to find values by key.
                </p>
                <pre>student = {"name": "Rina", "age": 18}
print(student["name"])  # Rina
student["grade"] = "A"
</pre>
                <h4>Working with sets</h4>
                <p>
                    Sets store unique values and remove duplicates automatically. They are useful for checking if a
                    value exists in the group.
                </p>
                <pre>numbers = {1, 2, 3, 3, 2}
print(numbers)          # {1, 2, 3}
print(2 in numbers)    # True
</pre>
                <h4>Converting between types</h4>
                <p>
                    Python lets you change values from one type to another using type conversion functions.
                </p>
                <pre>number_text = "100"
number = int(number_text)
print(number + 20)     # 120
text_value = str(123)
print(text_value + " is a number")
</pre>
                <p>
                    Understanding data types helps you write correct programs and avoid errors when Python expects one
                    kind of value but receives another.
                </p>
            </div>
        `,
        "Operators": `
            <div class="lesson-section">
                <h3>Operators</h3>
                <p>
                    Operators are special symbols or words that tell Python how to combine values, compare them,
                    and make decisions. They are the basic tools for doing math, checking conditions, and changing data.
                </p>
                <h4>Arithmetic operators</h4>
                <p>
                    Arithmetic operators perform math operations on numbers.
                </p>
                <ul>
                    <li><strong>+</strong> add two values</li>
                    <li><strong>-</strong> subtract one value from another</li>
                    <li><strong>*</strong> multiply values</li>
                    <li><strong>/</strong> divide values</li>
                    <li><strong>%</strong> remainder after division</li>
                    <li><strong>**</strong> power (exponentiation)</li>
                    <li><strong>//</strong> integer division (quotient without remainder)</li>
                </ul>
                <pre>a = 10
b = 3
print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.3333333333333335
print(a % b)   # 1
print(a ** b)  # 1000
print(a // b)  # 3
</pre>
                <h4>Comparison operators</h4>
                <p>
                    Comparison operators compare two values and return <code>True</code> or <code>False</code>.
                </p>
                <ul>
                    <li><strong>==</strong> equal to</li>
                    <li><strong>!=</strong> not equal to</li>
                    <li><strong>&gt;</strong> greater than</li>
                    <li><strong>&lt;</strong> less than</li>
                    <li><strong>&gt;=</strong> greater than or equal to</li>
                    <li><strong>&lt;=</strong> less than or equal to</li>
                </ul>
                <pre>x = 10
y = 5
print(x == y)   # False
print(x != y)   # True
print(x &gt; y)   # True
print(x &lt; y)   # False
print(x &gt;= 10) # True
print(y &lt;= 5)  # True
</pre>
                <h4>Logical operators</h4>
                <p>
                    Logical operators combine comparison results and help Python make decisions.
                </p>
                <ul>
                    <li><strong>and</strong> is true when both expressions are true</li>
                    <li><strong>or</strong> is true when at least one expression is true</li>
                    <li><strong>not</strong> reverses the result of a condition</li>
                </ul>
                <pre>a = 10
b = 5
print(a &gt; 0 and b &gt; 0)  # True
print(a &gt; 0 or b &lt; 0)   # True
print(not (a &lt; b))        # True
</pre>
                <h4>Assignment operators</h4>
                <p>
                    Assignment operators change the value of a variable while using the old value.
                </p>
                <ul>
                    <li><strong>=</strong> assigns a value</li>
                    <li><strong>+=</strong> adds and assigns</li>
                    <li><strong>-=</strong> subtracts and assigns</li>
                    <li><strong>*=</strong> multiplies and assigns</li>
                    <li><strong>/=</strong> divides and assigns</li>
                    <li><strong>%=</strong> remainder and assigns</li>
                </ul>
                <pre>count = 5
count += 2   # same as count = count + 2
count *= 3   # same as count = count * 3
print(count) # 21
</pre>
                <h4>Membership operators</h4>
                <p>
                    Membership operators check whether a value exists in a collection such as a list, tuple, or string.
                </p>
                <ul>
                    <li><strong>in</strong> is true if the value is found</li>
                    <li><strong>not in</strong> is true if the value is not found</li>
                </ul>
                <pre>fruits = ["apple", "banana", "mango"]
print("apple" in fruits)      # True
print("orange" not in fruits) # True
</pre>
                <h4>Identity operators</h4>
                <p>
                    Identity operators compare whether two variables point to the same object in memory.
                </p>
                <ul>
                    <li><strong>is</strong> is true if both are the same object</li>
                    <li><strong>is not</strong> is true if they are different objects</li>
                </ul>
                <pre>a = [1, 2, 3]
b = a
c = [1, 2, 3]
print(a is b)      # True
print(a is c)      # False
print(a == c)      # True (same content)
</pre>
                <h4>Example with multiple operator types</h4>
                <pre>score = 85
passed = score &gt;= 50
is_top_student = score &gt;= 90
print(passed)             # True
print(is_top_student)     # False
bonus = 10
score += bonus
print(score)              # 95
print(score &gt; 90 and "gold" in ["silver", "gold"])  # True
</pre>
                <p>
                    Operators are the building blocks for calculations, comparisons, and logical decisions.
                    Learning the different operator types helps you write stronger and more flexible Python programs.
                </p>
            </div>
        `,
        "Conditional Statements": `
            <div class="lesson-section">
                <h3>Conditional Statements</h3>
                <p>
                    Conditional statements help Python choose what to do when different situations occur.
                    They let the program make decisions and follow different paths depending on the values it has.
                </p>
                <h4>The <code>if</code> statement</h4>
                <p>
                    The <code>if</code> statement checks a condition. If the condition is true, Python runs the code
                    inside the indented block. If it is false, Python skips that block.
                </p>
                <pre>temperature = 30
if temperature &gt; 25:
    print("It is a hot day")
</pre>
                <p>
                    In this example, Python checks whether the temperature is higher than 25. If yes, it prints a message.
                </p>
                <h4>The <code>else</code> statement</h4>
                <p>
                    The <code>else</code> statement is used when the <code>if</code> condition is false. This block runs
                    only when the first test does not pass.
                </p>
                <pre>temperature = 20
if temperature &gt; 25:
    print("It is a hot day")
else:
    print("It is not a hot day")
</pre>
                <p>
                    Now the program gives a different message if the temperature is not greater than 25.
                </p>
                <h4>The <code>elif</code> statement</h4>
                <p>
                    The <code>elif</code> statement means "else if" and allows you to check more than one condition.
                    Python tests each condition in order until one is true.
                </p>
                <pre>score = 80
if score &gt;= 90:
    print("Excellent")
elif score &gt;= 70:
    print("Good")
else:
    print("Keep trying")
</pre>
                <p>
                    In this example, Python checks the first condition first. If it is false, it checks the second condition.
                    If neither is true, it runs the <code>else</code> block.
                </p>
                <h4>Nested conditionals</h4>
                <p>
                    You can put one conditional statement inside another. This is useful when you need more precise choices.
                </p>
                <pre>age = 18
if age &gt;= 18:
    print("You can vote")
    if age &gt;= 21:
        print("You can also drink in some countries")
    else:
        print("You are not old enough to drink in some places")
else:
    print("You are too young to vote")
</pre>
                <p>
                    Here, Python first checks whether the person can vote, and then checks a second condition inside the
                    same block.
                </p>
                <h4>Using comparisons with conditionals</h4>
                <p>
                    Conditional statements are often combined with comparison operators to compare values.
                </p>
                <pre>marks = 75
if marks &gt;= 90:
    grade = "A"
elif marks &gt;= 75:
    grade = "B"
elif marks &gt;= 60:
    grade = "C"
else:
    grade = "D"
print("Your grade:", grade)
</pre>
                <p>
                    This code assigns a grade based on the score and then prints the result.
                </p>
                <h4>Using logical operators with conditionals</h4>
                <p>
                    Logical operators like <code>and</code>, <code>or</code>, and <code>not</code> let you create more
                    complex conditions.
                </p>
                <pre>temperature = 22
is_raining = False
if temperature &gt;= 20 and not is_raining:
    print("Great day for a walk")
elif temperature &lt; 20 or is_raining:
    print("Better to stay inside")
else:
    print("The weather is okay")
</pre>
                <p>
                    This example uses two conditions together to decide the best message.
                </p>
                <h4>Common uses for conditionals</h4>
                <ul>
                    <li>Check whether a user entered the correct password.</li>
                    <li>Decide what to do based on a score or temperature.</li>
                    <li>Choose different actions for different input values.</li>
                    <li>Repeat tasks only while a condition stays true.</li>
                </ul>
                <p>
                    Conditional statements are essential for building programs that respond to different situations.
                    They make your code flexible and intelligent.
                </p>
                <h4>Example with full conditional flow</h4>
                <pre>age = 16
has_parent_permission = True
if age &gt;= 18:
    print("You can join the class")
elif age &gt;= 13 and has_parent_permission:
    print("You can join with parent permission")
else:
    print("You are too young to join")
</pre>
                <p>
                    This full example shows how <code>if</code>, <code>elif</code>, and <code>else</code> work together
                    to cover every possible choice.
                </p>
            </div>
        `,
        "Loops": `
            <div class="lesson-section">
                <h3>Loops</h3>
                <p>
                    Loops allow a program to repeat the same block of code multiple times. This is useful when you want
                    to perform a task again and again without writing the same lines over and over.
                </p>
                <h4>Why loops are important</h4>
                <p>
                    When you need to process many values, count items, or repeat a task until something changes,
                    loops make your program shorter and easier to understand.
                </p>
                <h4>For loop</h4>
                <p>
                    A <code>for</code> loop runs a block of code for each item in a sequence, such as a list, a string,
                    or a range of numbers.
                </p>
                <pre>for i in range(5):
    print(i)
</pre>
                <p>
                    This example prints numbers from 0 to 4. The <code>range(5)</code> function creates a sequence of five
                    numbers, and the loop repeats for each one.
                </p>
                <h4>For loop with a list</h4>
                <pre>fruits = ["apple", "banana", "mango"]
for fruit in fruits:
    print(fruit)
</pre>
                <p>
                    Here the loop runs once for each item in the list and prints the name of the fruit.
                </p>
                <h4>While loop</h4>
                <p>
                    A <code>while</code> loop repeats a block of code while a condition remains true. Use it when you do
                    not know exactly how many times the loop should run.
                </p>
                <pre>count = 0
while count < 5:
    print(count)
    count += 1
</pre>
                <p>
                    This loop keeps running until <code>count</code> becomes 5. The line <code>count += 1</code> increases
                    the value each time so the loop eventually stops.
                </p>
                <h4>Using <code>break</code> and <code>continue</code></h4>
                <p>
                    The <code>break</code> statement stops the loop completely, while <code>continue</code> skips the
                    rest of the current loop and goes to the next repetition.
                </p>
                <pre>for i in range(10):
    if i == 5:
        break
    print(i)

for i in range(5):
    if i == 2:
        continue
    print(i)
</pre>
                <p>
                    The first loop stops when <code>i</code> reaches 5. The second loop skips printing the number 2,
                    but continues with the rest of the numbers.
                </p>
                <h4>Loop example with user input</h4>
                <p>
                    Loops are often used to read many values or repeat a task until the user chooses to stop.
                </p>
                <pre>names = []
while True:
    name = input("Enter a name (or 'stop' to finish): ")
    if name.lower() == 'stop':
        break
    names.append(name)

print("Names entered:", names)
</pre>
                <p>
                    This example keeps asking for names until the user types <code>stop</code>. Then it ends the loop
                    and prints the collected list.
                </p>
                <h4>Practical loop use</h4>
                <p>
                    Loops are used for tasks such as processing every item in a list, repeating games, checking
                    values, and generating repeated output.
                </p>
                <p>
                    Understanding loops makes your programs more powerful because they can work with many values
                    automatically instead of using only one or two steps.
                </p>
            </div>
        `,
        "Lists": `
            <div class="lesson-section">
                <h3>Lists</h3>
                <p>
                    A list is a collection of ordered items stored together in one variable. Lists can contain numbers,
                    text, and even other lists. They are one of the most useful data types in Python.
                </p>
                <h4>How to create a list</h4>
                <p>
                    A list is created using square brackets <code>[]</code>. You can put any number of items inside,
                    separated by commas.
                </p>
                <pre>fruits = ["apple", "banana", "mango"]
numbers = [10, 20, 30, 40]
mixed = ["apple", 10, True]
</pre>
                <p>
                    A list can hold values of different types in the same collection. This is called a mixed list.
                </p>
                <h4>Accessing list items</h4>
                <p>
                    You can get an item by its position using an index. Python starts counting at 0.
                </p>
                <pre>print(fruits[0])   # apple
print(fruits[1])   # banana
</pre>
                <p>
                    Use negative numbers to count from the end. <code>-1</code> gives the last item.
                </p>
                <pre>print(fruits[-1])  # mango
</pre>
                <h4>Changing list items</h4>
                <p>
                    Lists are mutable, which means you can change items after the list is created.
                </p>
                <pre>fruits[1] = "orange"
print(fruits)  # ["apple", "orange", "mango"]
</pre>
                <h4>Common list methods</h4>
                <ul>
                    <li><strong>append(item):</strong> add a new item at the end of the list.</li>
                    <li><strong>insert(index, item):</strong> add an item at a specific position.</li>
                    <li><strong>remove(item):</strong> remove the first matching item from the list.</li>
                    <li><strong>pop():</strong> remove and return the last item from the list.</li>
                    <li><strong>extend(other_list):</strong> add all items from another list.</li>
                    <li><strong>sort():</strong> arrange the list items in order.</li>
                    <li><strong>reverse():</strong> reverse the order of items in the list.</li>
                    <li><strong>count(item):</strong> count how many times an item appears.</li>
                    <li><strong>index(item):</strong> find the position of the first matching item.</li>
                </ul>
                <pre>fruits.append("pear")
fruits.insert(1, "grape")
fruits.remove("apple")
last = fruits.pop()
print(fruits)
print(last)
</pre>
                <p>
                    These methods let you add, remove, and update list items quickly.
                </p>
                <h4>List length and slicing</h4>
                <p>
                    Use <code>len()</code> to count how many items are in a list. Slicing lets you get a part of the list.
                </p>
                <pre>print(len(fruits))      # number of items
print(fruits[0:2])        # first two items
print(fruits[1:])         # items from index 1 to the end
</pre>
                <h4>Nested lists</h4>
                <p>
                    A list can contain another list. This is useful for storing table-like data.
                </p>
                <pre>matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(matrix[1])        # [4, 5, 6]
print(matrix[1][2])     # 6
</pre>
                <h4>List comprehension</h4>
                <p>
                    List comprehension is a short way to create a new list from an existing one.
                </p>
                <pre>numbers = [1, 2, 3, 4, 5]
squares = [x * x for x in numbers]
print(squares)  # [1, 4, 9, 16, 25]
</pre>
                <h4>Common list features</h4>
                <ul>
                    <li>Ordered: items keep their position.</li>
                    <li>Mutable: items can be changed after the list is created.</li>
                    <li>Allow duplicates: the same value can appear more than once.</li>
                    <li>Indexable: you can access items by position using an index.</li>
                </ul>
                <h4>Example of list usage</h4>
                <pre>students = ["Rina", "Anil", "Tina"]
students.append("Sohan")
print("Students:", students)
print("First student:", students[0])
print("Total students:", len(students))
</pre>
                <p>
                    Lists are ideal for storing groups of values like names, scores, or any collection of related data.
                </p>
            </div>
        `,
        "Tuples": `
            <div class="lesson-section">
                <h3>Tuples</h3>
                <p>
                    A tuple is a collection of values just like a list, but once you create a tuple, its values cannot
                    be changed. This makes tuples ideal for storing information that should remain constant.
                </p>
                <h4>Creating tuples</h4>
                <p>
                    Tuples are created using parentheses <code>()</code> and values separated by commas.
                </p>
                <pre>colors = ("red", "green", "blue")
point = (10, 20)
info = ("Rina", 18, "student")
</pre>
                <h4>Single-item tuple</h4>
                <p>
                    When a tuple has only one item, you must include a comma after the value.
                </p>
                <pre>single = (5,)
print(type(single))  # &lt;class 'tuple'&gt;
</pre>
                <h4>Accessing tuple items</h4>
                <p>
                    Like lists, tuples are ordered and indexable. Use square brackets to get a value by position.
                </p>
                <pre>print(colors[1])   # green
print(colors[-1])  # blue
</pre>
                <h4>Immutability</h4>
                <p>
                    The key feature of tuples is that they are immutable. This means you cannot change, add,
                    or remove items after the tuple is created.
                </p>
                <pre># this will cause an error:
# colors[0] = "yellow"
</pre>
                <p>
                    Because tuples cannot change, they are safer for data that must stay fixed, such as dates,
                    coordinates, or settings.
                </p>
                <h4>Tuple packing and unpacking</h4>
                <p>
                    Python makes it easy to put values into a tuple and then take them out again into separate variables.
                </p>
                <pre>student = "Anil", 17, "male"   # tuple packing
name, age, gender = student      # tuple unpacking
print(name)  # Anil
print(age)   # 17
</pre>
                <h4>Tuple methods</h4>
                <p>
                    Tuples have fewer methods than lists because they cannot be modified. The most common tuple methods
                    are <code>count()</code> and <code>index()</code>.
                </p>
                <pre>numbers = (1, 2, 2, 3)
print(numbers.count(2))   # 2
print(numbers.index(3))   # 3
</pre>
                <h4>Why use tuples?</h4>
                <ul>
                    <li><strong>Immutability:</strong> tuples protect data from accidental changes.</li>
                    <li><strong>Faster:</strong> tuples can be slightly faster than lists for values that do not change.</li>
                    <li><strong>Use as keys:</strong> tuples can be used as dictionary keys when the values are fixed.</li>
                    <li><strong>Readable data:</strong> tuples are useful for fixed records like coordinates or a single user profile.</li>
                </ul>
                <h4>Tuple example</h4>
                <pre>location = (28.7041, 77.1025)   # latitude and longitude
print("Latitude:", location[0])
print("Longitude:", location[1])

person = ("Rita", 20, "female")
name, age, gender = person
print(f"Name: {name}, Age: {age}, Gender: {gender}")
</pre>
                <h4>Tuples versus lists</h4>
                <p>
                    Both tuples and lists store ordered values, but lists are mutable and tuples are immutable.
                    Choose tuples when your values should stay constant, and use lists when you need to add or change items.
                </p>
                <h4>Practical tuple use</h4>
                <p>
                    Tuples are often used to store coordinates, days of the week, or other fixed collections of values.
                    They are also useful for returning multiple values from a function.
                </p>
                <pre>def get_student():
    return "Deepti", 16, "B"

name, age, grade = get_student()
print(name, age, grade)
</pre>
                <p>
                    This example shows how tuples can return several values from a function in a clean and simple way.
                </p>
            </div>
        `,
        "Dictionaries": `
            <div class="lesson-section">
                <h3>Dictionaries</h3>
                <p>
                    A dictionary is a collection of data organized by <strong>keys</strong> and <strong>values</strong>. Each key points to a specific value, similar to a label or a name tag.
                </p>
                <h4>Dictionary structure</h4>
                <p>
                    Dictionaries use curly braces <code>{ }</code> with key-value pairs separated by colons. Keys must be unique and are usually strings, while values can be any Python object.
                </p>
                <pre>student = {
    "name": "Rohit",
    "age": 16,
    "grade": "A"
}
</pre>
                <h4>Accessing and changing values</h4>
                <pre>print(student["name"])    # Rohit
student["age"] = 17
student["city"] = "Mumbai"
print(student)
</pre>
                <p>
                    Use the key inside square brackets to read or update a value. You can also add new key-value pairs by assigning a value to a new key.
                </p>
                <h4>Common dictionary operations</h4>
                <ul>
                    <li><code>student.keys()</code> returns all keys</li>
                    <li><code>student.values()</code> returns all values</li>
                    <li><code>student.items()</code> returns all key-value pairs</li>
                    <li><code>student.get("name")</code> safely returns a value or <code>None</code></li>
                    <li><code>"name" in student</code> checks if a key exists</li>
                </ul>
                <pre>print(student.keys())
print(student.values())
print(student.items())
print(student.get("grade"))
print("city" in student)
</pre>
                <h4>Removing values</h4>
                <pre>del student["city"]
grade = student.pop("grade")
print(student)
print(grade)
</pre>
                <h4>Dictionary methods</h4>
                <ul>
                    <li><code>student.update(other_dict)</code> merges another dictionary</li>
                    <li><code>student.clear()</code> removes all items</li>
                    <li><code>student.copy()</code> creates a shallow copy</li>
                </ul>
                <h4>Looping over dictionaries</h4>
                <pre>for key, value in student.items():
    print(key, "=", value)
</pre>
                <p>
                    Looping with <code>.items()</code> gives both the key and the value. This is useful for printing or processing every item.
                </p>
                <h4>Nested dictionaries</h4>
                <pre>classroom = {
    "student1": {"name": "Rohit", "age": 16},
    "student2": {"name": "Anjali", "age": 15}
}
print(classroom["student1"]["name"])  # Rohit
</pre>
                <p>
                    Dictionaries can contain other dictionaries, which is useful for storing grouped information such as records or settings.
                </p>
                <h4>Why dictionaries are useful</h4>
                <p>
                    Dictionaries are perfect for data that has clear labels, like student profiles, product details, or configuration settings. They make lookups fast and the code easy to understand.
                </p>
            </div>
        `,
        "Sets": `
            <div class="lesson-section">
                <h3>Sets</h3>
                <p>
                    A set is a collection of unique values in Python. Sets automatically remove duplicate items and are useful when order does not matter.
                </p>
                <h4>Creating sets</h4>
                <pre>numbers = {1, 2, 3, 3, 2}
print(numbers)  # {1, 2, 3}

empty_set = set()
print(empty_set)  # set()</pre>
                <p>
                    Use curly braces <code>{ }</code> to create a set with values. Empty braces create a dictionary, so use <code>set()</code> for an empty set.
                </p>
                <h4>Set properties</h4>
                <ul>
                    <li>Sets contain only unique items.</li>
                    <li>Sets are unordered, so items do not have a fixed position.</li>
                    <li>Sets are mutable, but set elements must be immutable types like numbers and strings.</li>
                </ul>
                <h4>Adding and removing items</h4>
                <pre>fruits = {"apple", "banana", "mango"}
fruits.add("orange")
fruits.remove("banana")
print(fruits)

fruits.discard("pear")  # no error if item is missing
print(fruits)</pre>
                <p>
                    Use <code>add()</code> to insert a value. Use <code>remove()</code> to delete an item and get an error if it is missing. Use <code>discard()</code> to delete an item safely.
                </p>
                <h4>Common set operations</h4>
                <ul>
                    <li><code>a | b</code> or <code>a.union(b)</code> — values in either set</li>
                    <li><code>a & b</code> or <code>a.intersection(b)</code> — values in both sets</li>
                    <li><code>a - b</code> or <code>a.difference(b)</code> — values in the first set only</li>
                    <li><code>a ^ b</code> or <code>a.symmetric_difference(b)</code> — values in one set but not both</li>
                </ul>
                <pre>a = {1, 2, 3}
b = {2, 3, 4}
print(a | b)  # {1, 2, 3, 4}
print(a & b)  # {2, 3}
print(a - b)  # {1}
print(a ^ b)  # {1, 4}</pre>
                <h4>Set membership and iteration</h4>
                <pre>letters = {"a", "b", "c"}
print("a" in letters)   # True
print("d" in letters)   # False

for item in letters:
    print(item)
</pre>
                <p>
                    Use <code>in</code> to check whether a value exists in a set. Iterating over a set visits each item, but the order may vary.
                </p>
                <h4>Useful set methods</h4>
                <ul>
                    <li><code>len(s)</code> — number of items</li>
                    <li><code>set.copy()</code> — make a shallow copy</li>
                    <li><code>set.clear()</code> — remove all items</li>
                    <li><code>set.pop()</code> — remove and return an arbitrary item</li>
                </ul>
                <h4>Example with duplicates and membership</h4>
                <pre>names = ["Amit", "Priya", "Amit", "Sara"]
unique_names = set(names)
print(unique_names)  # {'Amit', 'Priya', 'Sara'}

print("Priya" in unique_names)  # True</pre>
                <h4>Why sets are useful</h4>
                <p>
                    Sets are ideal for removing duplicates, checking whether values exist, and performing fast mathematical operations like union and intersection.
                </p>
                <p>
                    Because sets do not keep order, they are not suitable when the position of items matters. Use lists or tuples when order is important.
                </p>
            </div>
        `,
        "Functions": `
            <div class="lesson-section">
                <h3>Functions</h3>
                <p>
                    A function is a named block of code that performs a specific task. Functions help you reuse code,
                    keep programs organized, and make complex programs easier to understand.
                </p>
                <h4>Defining a function</h4>
                <pre>def greet(name):
    message = "Hello " + name
    return message

print(greet("Anita"))
</pre>
                <p>
                    Use <code>def</code> to start a function. The value inside parentheses is called a parameter, and the
                    code inside the function runs when the function is called.
                </p>
                <h4>Parameters and arguments</h4>
                <pre>def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8
</pre>
                <p>
                    Parameters are variables inside the function. Arguments are the values you pass when you call the function.
                </p>
                <h4>Default values and keyword arguments</h4>
                <pre>def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Riya"))
print(greet("Riya", greeting="Hi"))
</pre>
                <p>
                    Default parameter values let you call a function with fewer arguments. Keyword arguments let you name
                    the values when calling the function.
                </p>
                <h4>Functions without return</h4>
                <pre>def show_message(text):
    print(text)

show_message("Welcome to Python")
</pre>
                <p>
                    A function can do work without returning a value. In that case, Python returns <code>None</code>.
                </p>
                <h4>Function documentation</h4>
                <pre>def multiply(a, b):
    """Return the product of a and b."""
    return a * b
</pre>
                <p>
                    A docstring is a short description inside triple quotes. It explains what the function does.
                </p>
                <h4>Why functions are useful</h4>
                <ul>
                    <li>Reuse code instead of repeating the same instructions.</li>
                    <li>Keep code organized and easier to read.</li>
                    <li>Split large problems into smaller steps.</li>
                </ul>
            </div>
        `,
        "Modules & Packages": `
            <div class="lesson-section">
                <h3>Modules & Packages</h3>
                <p>
                    A module is a Python file with useful tools, like functions and variables. A package is a folder that
                    contains many related modules.
                </p>
                <h4>Using built-in modules</h4>
                <pre>import math
print(math.sqrt(81))
print(math.pi)
</pre>
                <p>
                    Built-in modules like <code>math</code> give you ready-made tools so you do not need to write them yourself.
                </p>
                <h4>Importing specific items</h4>
                <pre>from math import ceil, floor
print(ceil(4.2))
print(floor(4.8))
</pre>
                <p>
                    You can import only certain functions or values from a module, which makes your code simpler.
                </p>
                <h4>Using aliases</h4>
                <pre>import datetime as dt
print(dt.datetime.now())
</pre>
                <p>
                    An alias gives a module a shorter name when you use it in your program.
                </p>
                <h4>Installing extra packages</h4>
                <pre>pip install requests
</pre>
                <p>
                    Packages from the internet can add new abilities. After installation, import them the same way as built-in modules.
                </p>
                <h4>Why modules and packages matter</h4>
                <ul>
                    <li>Reuse code made by others.</li>
                    <li>Organize larger programs into smaller pieces.</li>
                    <li>Use powerful tools without writing them from scratch.</li>
                </ul>
            </div>
        `,
        "Input & Output": `
            <div class="lesson-section">
                <h3>Input & Output</h3>
                <p>
                    Input is how Python receives information from the user, and output is how Python displays results on the screen.
                </p>
                <h4>Getting input</h4>
                <pre>name = input("Enter your name: ")
print("Hello", name)
</pre>
                <p>
                    The <code>input()</code> function waits for the user to type text and press Enter.
                </p>
                <h4>Converting input to numbers</h4>
                <pre>age_text = input("Enter your age: ")
age = int(age_text)
print("Next year you will be", age + 1)
</pre>
                <p>
                    Input is always text, so use <code>int()</code> or <code>float()</code> when you need numbers.
                </p>
                <h4>Formatted output</h4>
                <pre>name = "Anjali"
score = 90
print(f"{name} scored {score} marks")
</pre>
                <p>
                    Use f-strings to insert values inside text to make output clear and easy to read.
                </p>
                <h4>Print options</h4>
                <pre>print("Hello", "Python", sep=" - ")
print("First line", end=" ")
print("Second line")
</pre>
                <p>
                    The <code>sep</code> and <code>end</code> options change how <code>print()</code> combines values and ends the line.
                </p>
            </div>
        `,
        "File Handling": `
            <div class="lesson-section">
                <h3>File Handling</h3>
                <p>
                    File handling lets Python read data from files and save data to files. This is useful for saving work,
                    storing settings, and keeping information between program runs.
                </p>
                <h4>Writing to a file</h4>
                <pre>with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("Python is fun\n")
    file.write("Learning file handling")
</pre>
                <p>
                    The <code>with</code> statement opens the file and closes it automatically. The mode <code>"w"</code>
                    means write.
                </p>
                <h4>Reading from a file</h4>
                <pre>with open("notes.txt", "r", encoding="utf-8") as file:
    content = file.read()
print(content)
</pre>
                <p>
                    Use <code>"r"</code> mode to read the file contents. The <code>read()</code> method returns all text.
                </p>
                <h4>Appending to a file</h4>
                <pre>with open("notes.txt", "a", encoding="utf-8") as file:
    file.write("\nAdd a new line")
</pre>
                <p>
                    The <code>"a"</code> mode adds new text at the end of the file without removing existing data.
                </p>
                <h4>Other reading methods</h4>
                <pre>with open("notes.txt", "r", encoding="utf-8") as file:
    first_line = file.readline()
    lines = file.readlines()
</pre>
                <p>
                    <code>readline()</code> reads one line, while <code>readlines()</code> returns a list of all lines.
                </p>
            </div>
        `,
        "Error Handling": `
            <div class="lesson-section">
                <h3>Error Handling</h3>
                <p>
                    Error handling helps your program keep running even when it encounters a problem. Without error handling,
                    the program may stop suddenly.
                </p>
                <h4>Try and except</h4>
                <pre>try:
    number = int(input("Enter a number: "))
    print("You entered:", number)
except ValueError:
    print("Please enter a valid number")
</pre>
                <p>
                    The <code>try</code> block contains code that might fail. The <code>except</code> block runs if that error happens.
                </p>
                <h4>Handling different errors</h4>
                <pre>try:
    value = int(input("Enter a number: "))
    print(10 / value)
except ValueError:
    print("Enter a valid integer")
except ZeroDivisionError:
    print("Cannot divide by zero")
</pre>
                <h4>Else and finally</h4>
                <pre>try:
    file = open("notes.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found")
else:
    print(content)
finally:
    file.close()
</pre>
                <p>
                    <code>else</code> runs when no error occurs, and <code>finally</code> runs no matter what. This is useful
                    for closing files or cleaning up.
                </p>
                <h4>Why error handling is useful</h4>
                <ul>
                    <li>Prevents crashes from unexpected input or missing files.</li>
                    <li>Allows showing helpful messages to the user.</li>
                    <li>Makes programs more reliable and easier to maintain.</li>
                </ul>
            </div>
        `,
        "Python Applications": `
            <div class="lesson-section">
                <h3>Python Applications</h3>
                <p>
                    Python is used in many real-world applications because it is easy to read and has many powerful tools.
                </p>
                <h4>Web development</h4>
                <p>
                    Python is used to build websites and web services with frameworks like Flask and Django. These tools help
                    create web pages, handle forms, and connect to databases.
                </p>
                <h4>Data science</h4>
                <p>
                    Python is very popular for analyzing data, making charts, and finding useful patterns. Libraries like
                    pandas and matplotlib make data work easier.
                </p>
                <h4>Artificial intelligence and machine learning</h4>
                <p>
                    Python is the language of choice for AI and machine learning. It can train models to recognize images,
                    understand text, and make predictions.
                </p>
                <h4>Automation</h4>
                <p>
                    Python can automate repetitive tasks, such as renaming files, sending emails, or collecting data from the web.
                </p>
                <h4>Games and applications</h4>
                <p>
                    Python can also be used for simple games, desktop apps, and educational tools. Libraries like Pygame help
                    build interactive programs.
                </p>
                <p>
                    Learning Python opens doors to many kinds of projects: websites, data tools, automation scripts, AI systems,
                    and more. It is a strong skill for learning programming and creating useful software.
                </p>
            </div>
        `,
    },
    "C / C++": {
            "Overview": `
                <div class="lesson-section">
                    <h3>Overview of C and C++</h3>
                    <p>
                        C is a classic programming language designed for writing system software and working close to the computer's hardware.
                        It is procedural, which means the program is built from functions and instructions executed step by step.
                    </p>
                    <p>
                        C++ is a newer language that started as an extension of C. It keeps C's speed and control but adds object-oriented
                        programming features such as classes, objects, inheritance, and polymorphism.
                    </p>
                    <h4>Key strengths of C and C++</h4>
                    <ul>
                        <li><strong>Speed:</strong> compiled code runs fast because it becomes machine instructions.
                        </li>
                        <li><strong>Memory control:</strong> you can manage memory directly with pointers and allocate memory manually.
                        </li>
                        <li><strong>Portability:</strong> standards allow you to run programs on different operating systems with minimal changes.
                        </li>
                        <li><strong>Power:</strong> both are used for performance-critical software like games, operating systems, and embedded devices.
                        </li>
                    </ul>
                    <h4>C vs C++ in a sentence</h4>
                    <p>
                        C is best for simple, fast programs that use procedural steps. C++ is best when you need structured code using objects
                        and reusable software components.
                    </p>
                    <h4>How a C program works</h4>
                    <p>
                        A C program starts with <code>main()</code>. The compiler translates the source code into machine code, and the operating
                        system runs the resulting program.
                    </p>
                    <pre>#include &lt;stdio.h&gt;

int main() {
    printf("Hello from C!\n");
    return 0;
}
</pre>
                    <h4>How a C++ program works</h4>
                    <p>
                        A C++ program also starts with <code>main()</code>. In C++, you can use streams like <code>std::cout</code> for output instead
                        of the older C-style functions.
                    </p>
                    <pre>#include &lt;iostream&gt;

int main() {
    std::cout << "Hello from C++!" << std::endl;
    return 0;
}
</pre>
                    <h4>What these examples show</h4>
                    <ul>
                        <li>The <code>#include</code> line adds standard libraries for input and output.</li>
                        <li><code>main()</code> is the entry point where the program begins.</li>
                        <li><code>printf</code> is used in C to print text to the screen.</li>
                        <li><code>std::cout</code> is used in C++ and is part of the C++ standard library.
                        </li>
                    </ul>
                    <h4>Why C / C++ is important</h4>
                    <p>
                        Learning C and C++ gives you a strong understanding of how software works under the hood. These languages are
                        often the foundation for learning other programming languages and for building fast applications.
                    </p>
                    <h4>Example of a small task with both languages</h4>
                    <p>
                        Below is a short program that adds two numbers and prints the result. This shows how similar the two languages are,
                        while also showing their different style of output.
                    </p>
                    <pre>#include &lt;stdio.h&gt;

int main() {
    int a = 8;
    int b = 12;
    int sum = a + b;
    printf("Sum in C = %d\n", sum);
    return 0;
}
</pre>
                    <pre>#include &lt;iostream&gt;

int main() {
    int a = 8;
    int b = 12;
    int sum = a + b;
    std::cout << "Sum in C++ = " << sum << std::endl;
    return 0;
}
</pre>
                    <p>
                        These examples explain the same logic in both languages: declare variables, perform addition, and show the result.
                        This is the core of programming: telling the computer what steps to do.
                    </p>
                </div>
            `,
            "History of C & C++": `
                <div class="lesson-section">
                    <h3>History of C and C++</h3>
                    <p>
                        C was developed by Dennis Ritchie at Bell Labs in the early 1970s. It was created to write the Unix
                        operating system and became popular because it was fast, flexible, and close to the hardware.
                    </p>
                    <p>
                        C++ began as an extension of C created by Bjarne Stroustrup in the early 1980s. It added object-oriented
                        programming, classes, and other modern features while keeping the speed of C.
                    </p>
                    <h4>Key milestones</h4>
                    <ul>
                        <li><strong>1972:</strong> C is first developed.</li>
                        <li><strong>1978:</strong> The first edition of K&R C is published, the classic book on C programming.</li>
                        <li><strong>1983:</strong> C++ is named and the first C++ compiler appears.</li>
                        <li><strong>1990:</strong> The first edition of The C++ Programming Language book is published.</li>
                        <li><strong>1998:</strong> C++ is standardized by ISO, creating a stable modern version of the language.</li>
                    </ul>
                    <p>
                        Today, C and C++ remain essential languages for performance-critical software and are widely taught in
                        programming courses around the world.
                    </p>
                </div>
            `,
            "Basic Syntax": `
                <div class="lesson-section">
                    <h3>Basic Syntax</h3>
                    <p>
                        Syntax is the set of rules that defines how C and C++ programs are written. Every statement ends with a
                        semicolon, and the code is organized using blocks with curly braces <code>{ }</code>.
                    </p>
                    <h4>Include statements</h4>
                    <p>
                        In C, use <code>#include &lt;stdio.h&gt;</code> to access standard input and output functions. In C++, use
                        <code>#include &lt;iostream&gt;</code> for input and output.
                    </p>
                    <h4>C program structure</h4>
                    <pre>#include &lt;stdio.h&gt;

int main() {
    printf("Hello, C world!\n");
    return 0;
}
</pre>
                    <h4>C++ program structure</h4>
                    <pre>#include &lt;iostream&gt;

int main() {
    std::cout << "Hello, C++ world!" << std::endl;
    return 0;
}
</pre>
                    <h4>Comments</h4>
                    <pre>// Single-line comment
/*
   Multi-line comment
*/
</pre>
                    <p>
                        Comments are ignored by the compiler and are used to explain code.
                    </p>
                </div>
            `,
            "Variables & Data Types": `
                <div class="lesson-section">
                    <h3>Variables and Data Types</h3>
                    <p>
                        A variable stores a value that can change while the program runs. A data type defines what kind of
                        value a variable can hold.
                    </p>
                    <h4>Common C and C++ data types</h4>
                    <ul>
                        <li><code>int</code> — whole numbers like 10 or -5</li>
                        <li><code>float</code> — decimal numbers like 3.14</li>
                        <li><code>double</code> — larger decimal numbers</li>
                        <li><code>char</code> — a single character like 'A'</li>
                        <li><code>bool</code> — true or false values (C++ only)</li>
                    </ul>
                    <h4>Examples</h4>
                    <pre>int age = 20;
float weight = 55.5f;
double price = 299.99;
char grade = 'A';
bool isPassed = true;  // C++ only
</pre>
                    <p>
                        Use variables to store information that your program can use and change. The type determines how much
                        memory the variable uses and what operations are allowed.
                    </p>
                    <h4>Constants</h4>
                    <pre>#define PI 3.14159
const int MAX_VALUE = 100;
</pre>
                    <p>
                        Constants hold a value that does not change. Use <code>#define</code> or <code>const</code> to create constants.
                    </p>
                </div>
            `,
            "Operators": `
                <div class="lesson-section">
                    <h3>Operators</h3>
                    <p>
                        Operators perform actions on values and variables. They are used to do math, compare values, and make decisions.
                    </p>
                    <h4>Arithmetic operators</h4>
                    <ul>
                        <li><code>+</code> — addition</li>
                        <li><code>-</code> — subtraction</li>
                        <li><code>*</code> — multiplication</li>
                        <li><code>/</code> — division</li>
                        <li><code>%</code> — remainder</li>
                    </ul>
                    <h4>Relational operators</h4>
                    <ul>
                        <li><code>==</code> — equal to</li>
                        <li><code>!=</code> — not equal</li>
                        <li><code>&gt;</code> — greater than</li>
                        <li><code>&lt;</code> — less than</li>
                        <li><code>&gt;=</code> — greater or equal</li>
                        <li><code>&lt;=</code> — less or equal</li>
                    </ul>
                    <h4>Logical operators</h4>
                    <ul>
                        <li><code>&amp;&amp;</code> — and</li>
                        <li><code>||</code> — or</li>
                        <li><code>!</code> — not</li>
                    </ul>
                    <h4>Assignment and increment</h4>
                    <p>
                        Use <code>=</code> to assign a value. Use <code>++</code> and <code>--</code> to increase or decrease by one.
                    </p>
                    <pre>int a = 5;
a += 3;  // same as a = a + 3
int b = a * 2;
if (a > b || b == 16) {
    a++;
}
</pre>
                </div>
            `,
            "Control Statements": `
                <div class="lesson-section">
                    <h3>Control Statements</h3>
                    <p>
                        Control statements decide which code runs next. They let your program make choices and repeat actions.
                    </p>
                    <h4>If and else</h4>
                    <pre>int number = 10;
if (number &gt; 0) {
    printf("Positive\n");
} else {
    printf("Zero or negative\n");
}
</pre>
                    <h4>Switch statement</h4>
                    <pre>int day = 3;
switch (day) {
    case 1:
        printf("Monday\n");
        break;
    case 2:
        printf("Tuesday\n");
        break;
    default:
        printf("Other day\n");
}
</pre>
                    <h4>For loop</h4>
                    <pre>for (int i = 0; i &lt; 5; i++) {
    printf("i = %d\n", i);
}
</pre>
                    <h4>While and do-while</h4>
                    <pre>int count = 0;
while (count &lt; 3) {
    count++;
}
do {
    printf("Count = %d\n", count);
    count--;
} while (count &gt; 0);
</pre>
                </div>
            `,
            "Functions": `
                <div class="lesson-section">
                    <h3>Functions</h3>
                    <p>
                        A function is a named block of code that performs a task. Functions help you reuse code and keep the
                        program organized.
                    </p>
                    <h4>Function definition</h4>
                    <pre>int add(int x, int y) {
    return x + y;
}

int main() {
    int result = add(4, 5);
    printf("Result = %d\n", result);
    return 0;
}
</pre>
                    <h4>Function declaration and call</h4>
                    <p>
                        You can declare a function before <code>main()</code> or use a prototype so the compiler knows its return
                        type and parameters.
                    </p>
                    <pre>int multiply(int a, int b);

int main() {
    printf("%d\n", multiply(3, 4));
    return 0;
}

int multiply(int a, int b) {
    return a * b;
}
</pre>
                    <p>
                        Functions make your code easier to read and allow you to run the same logic many times.
                    </p>
                </div>
            `,
            "Pointers & Memory": `
                <div class="lesson-section">
                    <h3>Pointers and Memory</h3>
                    <p>
                        A pointer holds the memory address of another variable. Pointers let you work directly with memory,
                        which is a powerful feature of C and C++.
                    </p>
                    <h4>Pointer example</h4>
                    <pre>int value = 10;
int *ptr = &value;
printf("Value = %d\n", *ptr);
printf("Address = %p\n", (void*)ptr);
</pre>
                    <p>
                        The <code>&</code> operator gives the address of a variable. The <code>*</code> operator reads or changes
                        the value stored at that address.
                    </p>
                    <h4>Changing value through pointer</h4>
                    <pre>*ptr = 20;
printf("Updated value = %d\n", value);
</pre>
                    <p>
                        This example changes the original variable by using the pointer. Pointers are important for arrays,
                        functions, and dynamic memory.
                    </p>
                </div>
            `,
            "Arrays & Strings": `
                <div class="lesson-section">
                    <h3>Arrays and Strings</h3>
                    <p>
                        An array is a collection of values stored in consecutive memory locations. Strings are arrays of
                        characters that end with a special null character in C.
                    </p>
                    <h4>Array example</h4>
                    <pre>int numbers[5] = {1, 2, 3, 4, 5};
for (int i = 0; i &lt; 5; i++) {
    printf("%d \n", numbers[i]);
}
</pre>
                    <h4>String example in C</h4>
                    <pre>char name[10] = "Rina";
printf("Name: %s\n", name);
</pre>
                    <h4>String example in C++</h4>
                    <pre>#include &lt;string&gt;
#include &lt;iostream&gt;

int main() {
    std::string name = "Rina";
    std::cout << "Name: " << name << std::endl;
    return 0;
}
</pre>
                    <p>
                        In C++, <code>std::string</code> makes working with text easier than using character arrays.
                    </p>
                </div>
            `,
            "Structures & Unions": `
                <div class="lesson-section">
                    <h3>Structures and Unions</h3>
                    <p>
                        Structures group related variables under one name. Unions store different types in the same memory
                        location, saving space when only one value is used at a time.
                    </p>
                    <h4>Structure example</h4>
                    <pre>struct Student {
    char name[20];
    int age;
    float marks;
};

struct Student s1 = {"Amit", 18, 85.5};
printf("%s is %d years old\n", s1.name, s1.age);
</pre>
                    <h4>Union example</h4>
                    <pre>union Data {
    int i;
    float f;
    char str[20];
};

union Data d;
d.i = 10;
printf("d.i = %d\n", d.i);
</pre>
                    <p>
                        A union value can only hold one of its members at a time. This is useful when you need memory
                        efficiency.
                    </p>
                </div>
            `,
            "File Input/Output": `
                <div class="lesson-section">
                    <h3>File Input/Output</h3>
                    <p>
                        File I/O lets programs read from and write to files. In C, use <code>FILE *</code> and standard library
                        functions. In C++ you can also use <code>fstream</code> classes.
                    </p>
                    <h4>C file write example</h4>
                    <pre>FILE *file = fopen("data.txt", "w");
if (file != NULL) {
    fprintf(file, "Hello file!\n");
    fclose(file);
}
</pre>
                    <h4>C file read example</h4>
                    <pre>FILE *file = fopen("data.txt", "r");
char buffer[100];
if (file != NULL) {
    fgets(buffer, 100, file);
    printf("Read: %s", buffer);
    fclose(file);
}
</pre>
                    <h4>C++ file example</h4>
                    <pre>#include &lt;fstream&gt;
#include &lt;iostream&gt;

int main() {
    std::ofstream outFile("data.txt");
    outFile << "Hello C++ file!\n";
    outFile.close();

    std::ifstream inFile("data.txt");
    std::string line;
    std::getline(inFile, line);
    std::cout << line << std::endl;
    return 0;
}
</pre>
                </div>
            `,
            "Preprocessor & Macros": `
                <div class="lesson-section">
                    <h3>Preprocessor and Macros</h3>
                    <p>
                        The preprocessor runs before the compiler and handles instructions that start with <code>#</code>.
                        Macros are reusable pieces of code or values defined with <code>#define</code>.
                    </p>
                    <h4>Include example</h4>
                    <pre>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
</pre>
                    <h4>Macro example</h4>
                    <pre>#define PI 3.14159
#define MAX(a, b) ((a) &gt; (b) ? (a) : (b))

int main() {
    printf("PI = %f\n", PI);
    printf("Max = %d\n", MAX(4, 7));
    return 0;
}
</pre>
                    <p>
                        Macros let you give names to values and small code fragments. Use them carefully because they are handled
                        by the preprocessor before the compiler checks the code.
                    </p>
                </div>
            `,
            "Object-Oriented Concepts": `
                <div class="lesson-section">
                    <h3>Object-Oriented Concepts</h3>
                    <p>
                        C++ supports object-oriented programming, which helps organize code using classes and objects.
                        This is a key difference between C and C++.
                    </p>
                    <h4>Class and object example</h4>
                    <pre>#include &lt;iostream&gt;
#include &lt;string&gt;

class Person {
public:
    std::string name;
    int age;

    Person(std::string n, int a) {
        name = n;
        age = a;
    }

    void showInfo() {
        std::cout << name << " is " << age << " years old." << std::endl;
    }
};

int main() {
    Person p("Sara", 21);
    p.showInfo();
    return 0;
}
</pre>
                    <h4>Important OOP ideas</h4>
                    <ul>
                        <li><strong>Encapsulation:</strong> keep data and functions together in a class.</li>
                        <li><strong>Inheritance:</strong> create a new class from an existing class.</li>
                        <li><strong>Polymorphism:</strong> use the same interface for different behaviors.</li>
                    </ul>
                    <p>
                        OOP helps manage larger programs by grouping data and behavior into logical units.
                    </p>
                </div>
            `,
            "Standard Template Library": `
                <div class="lesson-section">
                    <h3>Standard Template Library (STL)</h3>
                    <p>
                        The STL is a collection of ready-made templates for common data structures and algorithms in C++.
                        It saves time and makes code more reliable.
                    </p>
                    <h4>Vector example</h4>
                    <pre>#include &lt;vector&gt;
#include &lt;algorithm&gt;
#include &lt;iostream&gt;

int main() {
    std::vector<int> numbers = {5, 2, 9, 1};
    std::sort(numbers.begin(), numbers.end());
    for (int value : numbers) {
        std::cout << value << " ";
    }
    std::cout << std::endl;
    return 0;
}
</pre>
                    <h4>Map example</h4>
                    <pre>#include &lt;map&gt;
#include &lt;iostream&gt;

int main() {
    std::map<std::string, int> scores;
    scores["Amit"] = 90;
    scores["Riya"] = 85;
    std::cout << "Amit's score = " << scores["Amit"] << std::endl;
    return 0;
}
</pre>
                    <p>
                        The STL includes containers like <code>vector</code>, <code>map</code>, and <code>set</code>, plus
                        algorithms like <code>sort</code>, <code>find</code>, and <code>reverse</code>.
                    </p>
                </div>
            `,
            "Differences Between C and C++": `
                <div class="lesson-section">
                    <h3>Differences Between C and C++</h3>
                    <p>
                        C is a procedural language, while C++ is a multi-paradigm language that supports both procedural
                        and object-oriented programming.
                    </p>
                    <h4>Main differences</h4>
                    <ul>
                        <li><strong>C:</strong> focuses on functions and procedures.</li>
                        <li><strong>C++:</strong> adds classes, objects, and templates.</li>
                        <li><strong>C:</strong> uses <code>printf</code> and <code>scanf</code> for console I/O.</li>
                        <li><strong>C++:</strong> uses <code>std::cout</code> and <code>std::cin</code> for console I/O.</li>
                        <li><strong>C:</strong> does not support exceptions or namespaces.</li>
                        <li><strong>C++:</strong> supports exception handling and namespaces.</li>
                    </ul>
                    <h4>When to use each language</h4>
                    <p>
                        Use C when you need small, fast programs and direct control over hardware. Use C++ when you want
                        more structure, object-oriented design, and access to the C++ standard library.
                    </p>
                    <h4>Similarities</h4>
                    <p>
                        Both languages share syntax, data types, and the same compilation model. Most valid C code is also
                        valid C++ code, but C++ adds many modern features.
                    </p>
                </div>
            `
        },
    "Database (MySQL)": {
        "Overview": `
            <div class="lesson-section">
                <img src="${imagePaths.mysqlOverviewImage}" alt="Database and MySQL overview" class="lesson-image" onerror="this.style.display='none'">
                <h3>Database (MySQL) - Overview</h3>
                <p>
                    A database is an organized place where data is stored, managed, searched, updated, and protected.
                    MySQL is one of the most popular database systems used in websites, software applications, schools,
                    offices, shops, banks, and many online services.
                </p>
                <p>
                    In simple words, a database helps us keep information in a structured format. Instead of writing student
                    records, product details, fees, marks, or customer information in many separate files, we store them in
                    tables. A table looks like a spreadsheet with rows and columns, but it is more powerful because we can
                    search, filter, connect, and secure the data using SQL commands.
                </p>
                <h4>All topics covered in this MySQL course</h4>
                <ul>
                    <li><strong>Database Basics:</strong> meaning of data, information, database, and real-life examples.</li>
                    <li><strong>DBMS and RDBMS:</strong> software used to manage databases and relational tables.</li>
                    <li><strong>MySQL Introduction:</strong> what MySQL is, why it is used, and where it is useful.</li>
                    <li><strong>Tables, Rows and Columns:</strong> how data is arranged inside a database.</li>
                    <li><strong>Data Types:</strong> choosing correct formats like numbers, text, dates, and decimals.</li>
                    <li><strong>Keys and Constraints:</strong> rules that keep data unique, correct, and connected.</li>
                    <li><strong>Create Database and Table:</strong> commands used to build a database structure.</li>
                    <li><strong>Insert Data:</strong> adding records into a table.</li>
                    <li><strong>Select Queries:</strong> reading and displaying data from tables.</li>
                    <li><strong>Where and Operators:</strong> filtering data using conditions.</li>
                    <li><strong>Update and Delete:</strong> changing and removing records safely.</li>
                    <li><strong>Order By and Limit:</strong> sorting results and showing selected rows.</li>
                    <li><strong>Aggregate Functions:</strong> counting, adding, averaging, and finding min or max values.</li>
                    <li><strong>Group By and Having:</strong> making summary reports from data.</li>
                    <li><strong>Joins:</strong> combining data from two or more related tables.</li>
                    <li><strong>Subqueries:</strong> using one query inside another query.</li>
                    <li><strong>Indexes:</strong> improving search speed in large tables.</li>
                    <li><strong>Views:</strong> saving useful query results as virtual tables.</li>
                    <li><strong>Backup and Restore:</strong> protecting data by creating and restoring database copies.</li>
                </ul>
                <h4>Example database idea</h4>
                <p>
                    Suppose a computer institute wants to manage students, courses, fees, and exam marks. MySQL can store
                    everything neatly in separate tables and connect them using IDs.
                </p>
                <pre>CREATE DATABASE computer_institute;
USE computer_institute;

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    mobile VARCHAR(15),
    course_name VARCHAR(80),
    admission_date DATE
);

INSERT INTO students (name, mobile, course_name, admission_date)
VALUES ('Amit Kumar', '9876543210', 'Database (MySQL)', '2026-05-06');

SELECT * FROM students;</pre>
                <p>
                    This small example creates a database, creates a table, adds one student, and displays the record.
                    The rest of this course explains each part step by step with more examples.
                </p>
            </div>
        `,
        "Database Basics": `
            <div class="lesson-section">
                <h3>Database Basics</h3>
                <p>
                    Data means raw facts. A student's name, roll number, phone number, marks, course name, and fee amount
                    are all examples of data. When data is organized and used for a purpose, it becomes information.
                </p>
                <p>
                    A database is a structured collection of related data. It helps us store data safely and find it quickly.
                    Without a database, large information becomes difficult to manage because records may be repeated,
                    lost, or saved in the wrong place.
                </p>
                <h4>Real-life examples</h4>
                <ul>
                    <li>A school database stores students, classes, subjects, teachers, marks, and fees.</li>
                    <li>A shop database stores products, customers, sales, bills, and stock quantity.</li>
                    <li>A bank database stores accounts, customers, deposits, withdrawals, and balances.</li>
                    <li>A website database stores users, passwords, posts, comments, orders, and payments.</li>
                </ul>
                <h4>Why databases are useful</h4>
                <ul>
                    <li><strong>Easy storage:</strong> data is kept in proper tables.</li>
                    <li><strong>Fast search:</strong> records can be found with conditions.</li>
                    <li><strong>Less duplication:</strong> repeated data can be reduced.</li>
                    <li><strong>Data security:</strong> access can be controlled by users and permissions.</li>
                    <li><strong>Reports:</strong> totals, counts, averages, and summaries can be created.</li>
                </ul>
                <h4>Simple example</h4>
                <pre>Student table

student_id | name        | course
1          | Riya Sharma | MS Office
2          | Aman Verma  | MySQL
3          | Neha Singh  | Python</pre>
                <p>
                    This table stores student data. Each row is one student's record, and each column stores one type of
                    information. This is the foundation of relational databases.
                </p>
            </div>
        `,
        "DBMS and RDBMS": `
            <div class="lesson-section">
                <h3>DBMS and RDBMS</h3>
                <p>
                    DBMS stands for Database Management System. It is software that helps users create, store, update,
                    delete, and manage databases. Examples include MySQL, Oracle, SQL Server, PostgreSQL, and SQLite.
                </p>
                <p>
                    RDBMS stands for Relational Database Management System. It stores data in tables and allows relationships
                    between tables. MySQL is an RDBMS because it stores data in rows and columns and supports keys, joins,
                    constraints, and SQL queries.
                </p>
                <h4>Difference between DBMS and RDBMS</h4>
                <div class="table-wrap">
                    <table class="comparison-table">
                        <thead>
                            <tr><th>Point</th><th>DBMS</th><th>RDBMS</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Storage</td><td>May store data as files</td><td>Stores data in tables</td></tr>
                            <tr><td>Relationship</td><td>Limited relation support</td><td>Strong relation support</td></tr>
                            <tr><td>Keys</td><td>May not use keys strongly</td><td>Uses primary and foreign keys</td></tr>
                            <tr><td>Example</td><td>File based systems</td><td>MySQL, Oracle, PostgreSQL</td></tr>
                        </tbody>
                    </table>
                </div>
                <h4>Example of relationship</h4>
                <pre>students table
student_id | name
1          | Riya
2          | Aman

marks table
mark_id | student_id | subject | marks
1       | 1          | MySQL   | 88
2       | 2          | MySQL   | 79</pre>
                <p>
                    The <code>marks</code> table uses <code>student_id</code> to connect marks with the correct student.
                    This is why relational databases are powerful for real applications.
                </p>
            </div>
        `,
        "MySQL Introduction": `
            <div class="lesson-section">
                <h3>MySQL Introduction</h3>
                <p>
                    MySQL is a relational database management system. It uses SQL, which stands for Structured Query Language.
                    SQL is used to create databases, create tables, insert records, search records, update data, delete data,
                    and make reports.
                </p>
                <h4>Why MySQL is popular</h4>
                <ul>
                    <li>It is widely used with websites and web applications.</li>
                    <li>It works well with programming languages like PHP, Python, Java, and JavaScript.</li>
                    <li>It supports large amounts of data.</li>
                    <li>It has commands that are easy to learn for beginners.</li>
                    <li>It supports users, passwords, permissions, backup, and restore.</li>
                </ul>
                <h4>Common MySQL tools</h4>
                <ul>
                    <li><strong>MySQL Server:</strong> stores and manages databases.</li>
                    <li><strong>MySQL Workbench:</strong> graphical tool for writing queries and designing tables.</li>
                    <li><strong>Command Line Client:</strong> terminal tool for running SQL commands.</li>
                    <li><strong>phpMyAdmin:</strong> browser-based tool commonly used on hosting panels.</li>
                </ul>
                <h4>Basic SQL commands</h4>
                <pre>CREATE DATABASE institute;
SHOW DATABASES;
USE institute;
SHOW TABLES;</pre>
                <p>
                    These commands create a database, show all databases, select one database for use, and display its tables.
                </p>
            </div>
        `,
        "Tables, Rows and Columns": `
            <div class="lesson-section">
                <h3>Tables, Rows and Columns</h3>
                <p>
                    In MySQL, data is stored in tables. A table is made of columns and rows. A column defines the type of
                    information, and a row stores one complete record.
                </p>
                <h4>Example table</h4>
                <pre>students

student_id | name       | course     | fees
1          | Riya       | MySQL      | 4500
2          | Aman       | Python     | 5000
3          | Simran     | MS Office  | 3500</pre>
                <ul>
                    <li><strong>Table name:</strong> students</li>
                    <li><strong>Columns:</strong> student_id, name, course, fees</li>
                    <li><strong>Rows:</strong> each student record</li>
                </ul>
                <h4>Create this table</h4>
                <pre>CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80),
    course VARCHAR(80),
    fees DECIMAL(10,2)
);</pre>
                <h4>Insert sample rows</h4>
                <pre>INSERT INTO students (name, course, fees)
VALUES
('Riya', 'MySQL', 4500),
('Aman', 'Python', 5000),
('Simran', 'MS Office', 3500);</pre>
                <p>
                    Good table design makes a database easy to understand. Table names should be clear, and columns should
                    store only one type of information.
                </p>
            </div>
        `,
        "Data Types": `
            <div class="lesson-section">
                <h3>Data Types</h3>
                <p>
                    A data type tells MySQL what kind of value a column can store. Choosing the correct data type is important
                    because it saves space, improves speed, and prevents wrong data.
                </p>
                <h4>Common MySQL data types</h4>
                <ul>
                    <li><code>INT</code>: whole numbers, such as student ID or quantity.</li>
                    <li><code>VARCHAR(size)</code>: variable length text, such as name or email.</li>
                    <li><code>TEXT</code>: long text, such as address or description.</li>
                    <li><code>DATE</code>: date value, such as admission date.</li>
                    <li><code>DATETIME</code>: date and time together.</li>
                    <li><code>DECIMAL(10,2)</code>: exact decimal numbers, such as fees or price.</li>
                    <li><code>BOOLEAN</code>: true or false style values.</li>
                </ul>
                <h4>Example</h4>
                <pre>CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL,
    duration_months INT,
    fees DECIMAL(10,2),
    start_date DATE,
    is_active BOOLEAN
);</pre>
                <p>
                    Here, names use <code>VARCHAR</code>, months use <code>INT</code>, fees use <code>DECIMAL</code>, and
                    dates use <code>DATE</code>. This keeps the table clean and meaningful.
                </p>
            </div>
        `,
        "Keys and Constraints": `
            <div class="lesson-section">
                <h3>Keys and Constraints</h3>
                <p>
                    Keys and constraints are rules that protect the quality of data. They help prevent duplicate records,
                    empty required values, wrong connections, and invalid information.
                </p>
                <h4>Important keys and constraints</h4>
                <ul>
                    <li><strong>Primary Key:</strong> uniquely identifies each row.</li>
                    <li><strong>Foreign Key:</strong> connects one table with another table.</li>
                    <li><strong>NOT NULL:</strong> column must have a value.</li>
                    <li><strong>UNIQUE:</strong> duplicate values are not allowed.</li>
                    <li><strong>DEFAULT:</strong> gives a default value when no value is entered.</li>
                    <li><strong>CHECK:</strong> validates a condition.</li>
                </ul>
                <h4>Example</h4>
                <pre>CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    email VARCHAR(120) UNIQUE,
    status VARCHAR(20) DEFAULT 'Active'
);

CREATE TABLE fees (
    fee_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    amount DECIMAL(10,2) NOT NULL,
    paid_date DATE,
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);</pre>
                <p>
                    In this example, every student has a unique ID. Email cannot be repeated. The fees table connects each
                    payment to a student using a foreign key.
                </p>
            </div>
        `,
        "Create Database and Table": `
            <div class="lesson-section">
                <h3>Create Database and Table</h3>
                <p>
                    Before storing data, we first create a database. Then we select that database and create tables inside it.
                    This is like creating a folder first and then creating organized files inside the folder.
                </p>
                <h4>Create and use a database</h4>
                <pre>CREATE DATABASE computer_course;
USE computer_course;</pre>
                <h4>Create tables</h4>
                <pre>CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    mobile VARCHAR(15),
    email VARCHAR(120),
    admission_date DATE
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL,
    fees DECIMAL(10,2)
);</pre>
                <h4>Check structure</h4>
                <pre>SHOW TABLES;
DESC students;
DESC courses;</pre>
                <p>
                    <code>SHOW TABLES</code> displays all tables in the current database. <code>DESC</code> shows the columns,
                    data types, keys, and rules of a table.
                </p>
            </div>
        `,
        "Insert Data": `
            <div class="lesson-section">
                <h3>Insert Data</h3>
                <p>
                    The <code>INSERT</code> command is used to add new records into a table. You can insert one row at a time
                    or many rows together.
                </p>
                <h4>Insert one record</h4>
                <pre>INSERT INTO students (name, mobile, email, admission_date)
VALUES ('Rohit Sharma', '9876543210', 'rohit@example.com', '2026-05-06');</pre>
                <h4>Insert multiple records</h4>
                <pre>INSERT INTO students (name, mobile, email, admission_date)
VALUES
('Anjali Verma', '9123456780', 'anjali@example.com', '2026-05-06'),
('Karan Singh', '9988776655', 'karan@example.com', '2026-05-07'),
('Neha Gupta', '9090909090', 'neha@example.com', '2026-05-08');</pre>
                <h4>Important points</h4>
                <ul>
                    <li>Text and dates are written inside quotes.</li>
                    <li>Numbers can be written without quotes.</li>
                    <li>If a column is auto increment, MySQL fills it automatically.</li>
                    <li>The order of values must match the order of columns.</li>
                </ul>
                <p>
                    After inserting records, use <code>SELECT</code> to check whether the data was saved correctly.
                </p>
            </div>
        `,
        "Select Queries": `
            <div class="lesson-section">
                <h3>Select Queries</h3>
                <p>
                    The <code>SELECT</code> command is used to read data from a table. It is one of the most important SQL
                    commands because most applications need to display stored data to users.
                </p>
                <h4>Select all columns</h4>
                <pre>SELECT * FROM students;</pre>
                <h4>Select specific columns</h4>
                <pre>SELECT name, mobile, email FROM students;</pre>
                <h4>Use column aliases</h4>
                <pre>SELECT name AS student_name, admission_date AS joining_date
FROM students;</pre>
                <h4>Remove duplicate values</h4>
                <pre>SELECT DISTINCT course_name FROM enrollments;</pre>
                <p>
                    The star symbol means all columns. In real projects, it is often better to select only the columns you
                    need because it is cleaner and faster.
                </p>
            </div>
        `,
        "Where and Operators": `
            <div class="lesson-section">
                <h3>Where and Operators</h3>
                <p>
                    The <code>WHERE</code> clause filters records. It shows only those rows that match a condition. Operators
                    help create conditions for numbers, text, dates, and patterns.
                </p>
                <h4>Comparison operators</h4>
                <pre>SELECT * FROM students WHERE student_id = 1;
SELECT * FROM courses WHERE fees > 4000;
SELECT * FROM courses WHERE fees <= 5000;</pre>
                <h4>Logical operators</h4>
                <pre>SELECT * FROM students
WHERE course_name = 'MySQL' AND status = 'Active';

SELECT * FROM students
WHERE course_name = 'MySQL' OR course_name = 'Python';</pre>
                <h4>LIKE, IN and BETWEEN</h4>
                <pre>SELECT * FROM students WHERE name LIKE 'A%';
SELECT * FROM courses WHERE course_name IN ('MySQL', 'Python', 'HTML');
SELECT * FROM courses WHERE fees BETWEEN 3000 AND 6000;</pre>
                <p>
                    <code>LIKE 'A%'</code> means names starting with A. <code>IN</code> checks multiple possible values.
                    <code>BETWEEN</code> checks a range.
                </p>
            </div>
        `,
        "Update and Delete": `
            <div class="lesson-section">
                <h3>Update and Delete</h3>
                <p>
                    <code>UPDATE</code> changes existing records. <code>DELETE</code> removes records. These commands must be
                    used carefully because they modify stored data.
                </p>
                <h4>Update one record</h4>
                <pre>UPDATE students
SET mobile = '9000011111'
WHERE student_id = 1;</pre>
                <h4>Update multiple columns</h4>
                <pre>UPDATE students
SET course_name = 'Advanced MySQL', status = 'Active'
WHERE student_id = 2;</pre>
                <h4>Delete one record</h4>
                <pre>DELETE FROM students
WHERE student_id = 3;</pre>
                <h4>Safety rule</h4>
                <p>
                    Always use <code>WHERE</code> with update and delete unless you intentionally want to affect all rows.
                    Before deleting, first run a select query with the same condition.
                </p>
                <pre>SELECT * FROM students WHERE student_id = 3;
DELETE FROM students WHERE student_id = 3;</pre>
            </div>
        `,
        "Order By and Limit": `
            <div class="lesson-section">
                <h3>Order By and Limit</h3>
                <p>
                    <code>ORDER BY</code> sorts query results. <code>LIMIT</code> controls how many rows are shown. These commands
                    are useful for reports, rankings, latest records, and pagination.
                </p>
                <h4>Sort ascending and descending</h4>
                <pre>SELECT * FROM students
ORDER BY name ASC;

SELECT * FROM courses
ORDER BY fees DESC;</pre>
                <h4>Show top records</h4>
                <pre>SELECT * FROM students
ORDER BY admission_date DESC
LIMIT 5;</pre>
                <h4>Pagination example</h4>
                <pre>SELECT * FROM students
ORDER BY student_id
LIMIT 10 OFFSET 20;</pre>
                <p>
                    The pagination example skips the first 20 rows and shows the next 10. Websites use this idea to show
                    page 1, page 2, page 3, and so on.
                </p>
            </div>
        `,
        "Aggregate Functions": `
            <div class="lesson-section">
                <h3>Aggregate Functions</h3>
                <p>
                    Aggregate functions calculate one result from many rows. They are used for reports such as total fees,
                    number of students, average marks, highest marks, and lowest fee.
                </p>
                <h4>Common aggregate functions</h4>
                <ul>
                    <li><code>COUNT()</code>: counts rows.</li>
                    <li><code>SUM()</code>: adds values.</li>
                    <li><code>AVG()</code>: calculates average.</li>
                    <li><code>MIN()</code>: finds smallest value.</li>
                    <li><code>MAX()</code>: finds largest value.</li>
                </ul>
                <h4>Examples</h4>
                <pre>SELECT COUNT(*) AS total_students FROM students;
SELECT SUM(amount) AS total_fee_collected FROM fees;
SELECT AVG(marks) AS average_marks FROM exam_results;
SELECT MIN(fees) AS lowest_fee FROM courses;
SELECT MAX(fees) AS highest_fee FROM courses;</pre>
                <p>
                    Aggregate functions are very useful in admin panels and dashboards because they turn raw data into
                    meaningful summary information.
                </p>
            </div>
        `,
        "Group By and Having": `
            <div class="lesson-section">
                <h3>Group By and Having</h3>
                <p>
                    <code>GROUP BY</code> groups rows that have the same value. It is commonly used with aggregate functions.
                    <code>HAVING</code> filters grouped results, while <code>WHERE</code> filters rows before grouping.
                </p>
                <h4>Group students by course</h4>
                <pre>SELECT course_name, COUNT(*) AS total_students
FROM students
GROUP BY course_name;</pre>
                <h4>Total fees by course</h4>
                <pre>SELECT course_name, SUM(fees) AS total_fees
FROM enrollments
GROUP BY course_name;</pre>
                <h4>Having example</h4>
                <pre>SELECT course_name, COUNT(*) AS total_students
FROM students
GROUP BY course_name
HAVING COUNT(*) >= 5;</pre>
                <p>
                    This query shows only those courses where five or more students are enrolled. Use <code>HAVING</code>
                    when the condition depends on a calculated group result.
                </p>
            </div>
        `,
        "Joins": `
            <div class="lesson-section">
                <h3>Joins</h3>
                <p>
                    Joins combine rows from two or more tables. They are one of the most important parts of relational
                    databases because real projects usually store related data in separate tables.
                </p>
                <h4>Example tables</h4>
                <pre>students: student_id, name
courses: course_id, course_name
enrollments: enrollment_id, student_id, course_id</pre>
                <h4>Inner join</h4>
                <pre>SELECT students.name, courses.course_name
FROM enrollments
INNER JOIN students ON enrollments.student_id = students.student_id
INNER JOIN courses ON enrollments.course_id = courses.course_id;</pre>
                <h4>Left join</h4>
                <pre>SELECT students.name, enrollments.course_id
FROM students
LEFT JOIN enrollments ON students.student_id = enrollments.student_id;</pre>
                <p>
                    <code>INNER JOIN</code> shows matching records from both tables. <code>LEFT JOIN</code> shows all records
                    from the left table and matching records from the right table. If no match is found, MySQL shows NULL.
                </p>
            </div>
        `,
        "Subqueries": `
            <div class="lesson-section">
                <h3>Subqueries</h3>
                <p>
                    A subquery is a query inside another query. It is useful when one result is needed to complete another
                    query. Subqueries can be used with <code>SELECT</code>, <code>WHERE</code>, <code>FROM</code>, and other clauses.
                </p>
                <h4>Find courses above average fee</h4>
                <pre>SELECT course_name, fees
FROM courses
WHERE fees > (SELECT AVG(fees) FROM courses);</pre>
                <h4>Find students enrolled in MySQL</h4>
                <pre>SELECT name
FROM students
WHERE student_id IN (
    SELECT student_id
    FROM enrollments
    WHERE course_id = 1
);</pre>
                <p>
                    Subqueries make complex searching easier. However, joins are often faster and clearer for connected
                    table data, so both techniques are important to learn.
                </p>
            </div>
        `,
        "Indexes": `
            <div class="lesson-section">
                <h3>Indexes</h3>
                <p>
                    An index helps MySQL find data faster. It works like an index at the back of a book. Instead of reading
                    every row, MySQL can use the index to reach matching records more quickly.
                </p>
                <h4>Create an index</h4>
                <pre>CREATE INDEX idx_student_name
ON students(name);</pre>
                <h4>Create a unique index</h4>
                <pre>CREATE UNIQUE INDEX idx_student_email
ON students(email);</pre>
                <h4>When indexes help</h4>
                <ul>
                    <li>Columns used often in <code>WHERE</code> conditions.</li>
                    <li>Columns used in joins.</li>
                    <li>Columns used in sorting.</li>
                    <li>Large tables with thousands or millions of records.</li>
                </ul>
                <p>
                    Indexes improve reading speed, but too many indexes can slow down insert and update operations because
                    MySQL must also update the indexes.
                </p>
            </div>
        `,
        "Views": `
            <div class="lesson-section">
                <h3>Views</h3>
                <p>
                    A view is a virtual table based on a saved query. It does not usually store separate data. Instead, it
                    shows data from one or more tables in a useful format.
                </p>
                <h4>Create a view</h4>
                <pre>CREATE VIEW student_course_view AS
SELECT students.name, courses.course_name
FROM enrollments
INNER JOIN students ON enrollments.student_id = students.student_id
INNER JOIN courses ON enrollments.course_id = courses.course_id;</pre>
                <h4>Use a view</h4>
                <pre>SELECT * FROM student_course_view;</pre>
                <h4>Benefits of views</h4>
                <ul>
                    <li>They simplify complex queries.</li>
                    <li>They can hide unnecessary columns from users.</li>
                    <li>They make reports easier to reuse.</li>
                    <li>They keep commonly used query logic in one place.</li>
                </ul>
                <p>
                    Views are helpful when the same joined or filtered result is needed many times in an application.
                </p>
            </div>
        `,
        "Backup and Restore": `
            <div class="lesson-section">
                <h3>Backup and Restore</h3>
                <p>
                    Backup means creating a copy of database data. Restore means bringing data back from a backup. This is
                    very important because data can be lost due to mistakes, hardware failure, software bugs, or accidental
                    deletion.
                </p>
                <h4>Why backup is important</h4>
                <ul>
                    <li>Protects important student, customer, and business records.</li>
                    <li>Helps recover data after accidental delete or update.</li>
                    <li>Allows moving a database from one computer or server to another.</li>
                    <li>Supports testing changes without risking original data.</li>
                </ul>
                <h4>Command line backup example</h4>
                <pre>mysqldump -u root -p computer_course > computer_course_backup.sql</pre>
                <h4>Command line restore example</h4>
                <pre>mysql -u root -p computer_course &lt; computer_course_backup.sql</pre>
                <h4>Good backup habits</h4>
                <ul>
                    <li>Take backups regularly.</li>
                    <li>Keep backups in a safe location.</li>
                    <li>Test restore process sometimes.</li>
                    <li>Do not keep the only backup on the same computer as the database.</li>
                </ul>
                <p>
                    A database is valuable only when its data is safe. Backup and restore are basic responsibilities for
                    anyone managing MySQL in real projects.
                </p>
            </div>
        `
    }
};

const databaseExtraContent = {
    "Overview": `
        <div class="lesson-section">
            <h4>Detailed learning path</h4>
            <p>
                MySQL learning should be done in order: first understand what data is, then understand tables, then learn
                SQL commands, and after that learn relationships, reports, indexes, views, and backup. This order is important
                because every advanced topic depends on the basic table structure.
            </p>
            <h4>Complete sample mini project: Computer institute database</h4>
            <p>
                A practical MySQL course becomes easier when every topic uses one connected example. In this course, imagine
                an institute that teaches Computer Basics, MS Office, Web Design, Python, and MySQL. The institute needs to
                store students, courses, enrollments, fees, and exam marks.
            </p>
            <pre>CREATE DATABASE institute_project;
USE institute_project;

CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL,
    duration_months INT NOT NULL,
    fees DECIMAL(10,2) NOT NULL
);

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    mobile VARCHAR(15) UNIQUE,
    city VARCHAR(60),
    admission_date DATE
);

CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enroll_date DATE NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);</pre>
            <p>
                This project structure is the base for almost every real application. A shop uses customers, products, and
                orders. A school uses students, classes, and marks. A hospital uses patients, doctors, and appointments.
            </p>
            <h4>Important exam points</h4>
            <ul>
                <li>Database stores related data in organized form.</li>
                <li>MySQL is an RDBMS because it stores data in relational tables.</li>
                <li>SQL is the language used to work with MySQL.</li>
                <li>Primary key identifies a row, and foreign key connects tables.</li>
                <li>CRUD means Create, Read, Update, and Delete.</li>
            </ul>
        </div>
    `,
    "Database Basics": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                Data can be small or large, but it must be accurate. If a student's mobile number is wrong, the institute
                cannot contact that student. If marks are stored under the wrong student, the report becomes incorrect.
                A database reduces these mistakes by storing data in a fixed structure.
            </p>
            <h4>Data, information, record, field and file</h4>
            <ul>
                <li><strong>Data:</strong> raw facts like 4500, Riya, MySQL.</li>
                <li><strong>Information:</strong> meaningful result like Riya paid 4500 for MySQL course.</li>
                <li><strong>Field:</strong> one column, such as mobile or name.</li>
                <li><strong>Record:</strong> one complete row about one person or item.</li>
                <li><strong>Table:</strong> collection of similar records.</li>
            </ul>
            <h4>Practice example</h4>
            <pre>CREATE TABLE student_basic (
    roll_no INT PRIMARY KEY,
    student_name VARCHAR(80),
    course VARCHAR(80),
    marks INT
);

INSERT INTO student_basic VALUES
(1, 'Riya Sharma', 'MySQL', 88),
(2, 'Aman Verma', 'Python', 76),
(3, 'Neha Singh', 'MS Office', 91);

SELECT student_name, course, marks FROM student_basic;</pre>
            <p>
                This example shows the complete basic cycle: create a table, insert records, and read information.
            </p>
        </div>
    `,
    "DBMS and RDBMS": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                A DBMS manages data, but an RDBMS manages data using relations. Relations mean tables can be connected.
                This is important because storing everything in one big table creates repeated data and confusion.
            </p>
            <h4>Why relation is needed</h4>
            <p>
                Suppose one student joins two courses. If we store course information inside the students table, the student's
                name and mobile may be repeated. A better design is to keep students in one table, courses in another table,
                and enrollments in a third table.
            </p>
            <pre>CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(80) NOT NULL
);

CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);</pre>
            <h4>Exam answer format</h4>
            <p>
                MySQL is an RDBMS because it stores data in tables, supports relationships, uses SQL, and maintains data
                integrity using keys and constraints.
            </p>
        </div>
    `,
    "MySQL Introduction": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                MySQL works as a database server. Applications send SQL queries to MySQL, MySQL processes those queries,
                and then returns results. A website login page, for example, checks whether the entered username and password
                match a record stored in a users table.
            </p>
            <h4>MySQL workflow</h4>
            <ul>
                <li>User or application sends a SQL query.</li>
                <li>MySQL checks the syntax and permissions.</li>
                <li>MySQL reads or changes the table data.</li>
                <li>MySQL returns the result or success message.</li>
            </ul>
            <h4>Useful beginner commands</h4>
            <pre>SELECT VERSION();
SHOW DATABASES;
CREATE DATABASE practice_db;
USE practice_db;
DROP DATABASE practice_db;</pre>
            <p>
                <code>DROP DATABASE</code> deletes a database, so use it carefully. In practice, always check the selected
                database before running delete or drop commands.
            </p>
        </div>
    `,
    "Tables, Rows and Columns": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                A good table should store one type of thing. A students table should store student information. A courses
                table should store course information. Mixing unrelated information in one table makes queries difficult.
            </p>
            <h4>Good column rules</h4>
            <ul>
                <li>Use clear names like <code>student_id</code>, <code>course_name</code>, and <code>paid_amount</code>.</li>
                <li>Do not store two values in one column, like name and mobile together.</li>
                <li>Use ID columns for stable identification.</li>
                <li>Use correct data types for each column.</li>
            </ul>
            <h4>Practice table design</h4>
            <pre>CREATE TABLE teachers (
    teacher_id INT PRIMARY KEY AUTO_INCREMENT,
    teacher_name VARCHAR(80) NOT NULL,
    subject VARCHAR(80),
    joining_date DATE
);

INSERT INTO teachers (teacher_name, subject, joining_date)
VALUES ('Suresh Sir', 'MySQL', '2026-05-06');</pre>
            <p>
                This table has one row per teacher. Each column has one clear purpose, making the table easy to maintain.
            </p>
        </div>
    `,
    "Data Types": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                Data type selection affects validation and storage. If fees are stored as text, MySQL cannot calculate total
                fees properly. If dates are stored as text, sorting by date may give wrong results. Correct data types make
                reports accurate.
            </p>
            <h4>More data type examples</h4>
            <pre>CREATE TABLE payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    amount DECIMAL(10,2),
    payment_mode ENUM('Cash', 'UPI', 'Card', 'Bank Transfer'),
    payment_time DATETIME,
    remarks TEXT
);</pre>
            <ul>
                <li><code>ENUM</code> allows only selected values.</li>
                <li><code>DATETIME</code> stores both date and time.</li>
                <li><code>TEXT</code> is useful for long notes.</li>
            </ul>
            <h4>Common mistake</h4>
            <p>
                Mobile numbers should usually be stored as <code>VARCHAR</code>, not <code>INT</code>, because mobile numbers
                may start with zero and are not used for mathematical calculation.
            </p>
        </div>
    `,
    "Keys and Constraints": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                Constraints protect data from common mistakes. For example, <code>NOT NULL</code> ensures that a required
                name is not empty. <code>UNIQUE</code> prevents duplicate mobile numbers. A foreign key prevents inserting
                fees for a student who does not exist.
            </p>
            <h4>Constraint practice</h4>
            <pre>CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'student',
    age INT CHECK (age >= 10)
);</pre>
            <h4>Primary key vs unique key</h4>
            <p>
                A primary key uniquely identifies each row and cannot be NULL. A unique key also prevents duplicate values,
                but a table can have multiple unique keys. For example, <code>student_id</code> can be primary key and
                <code>email</code> can be unique.
            </p>
        </div>
    `,
    "Create Database and Table": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                Creating a database structure is called schema design. Before writing SQL, decide what data you need, which
                tables are required, and how those tables connect. A clear design prevents future problems.
            </p>
            <h4>Complete schema example</h4>
            <pre>CREATE DATABASE coaching_center;
USE coaching_center;

CREATE TABLE batches (
    batch_id INT PRIMARY KEY AUTO_INCREMENT,
    batch_name VARCHAR(50) NOT NULL,
    start_time TIME,
    end_time TIME
);

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    batch_id INT,
    FOREIGN KEY (batch_id) REFERENCES batches(batch_id)
);</pre>
            <h4>Alter table examples</h4>
            <pre>ALTER TABLE students ADD COLUMN email VARCHAR(120);
ALTER TABLE students MODIFY COLUMN name VARCHAR(100) NOT NULL;
ALTER TABLE students DROP COLUMN email;</pre>
            <p>
                <code>ALTER TABLE</code> changes an existing table structure. Use it carefully when data already exists.
            </p>
        </div>
    `,
    "Insert Data": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                Insert commands should match table rules. If a column has <code>NOT NULL</code>, you must provide a value.
                If a column is <code>AUTO_INCREMENT</code>, you normally skip it because MySQL generates the value.
            </p>
            <h4>Insert with selected columns</h4>
            <pre>INSERT INTO courses (course_name, duration_months, fees)
VALUES ('Database (MySQL)', 2, 4500.00);</pre>
            <h4>Insert from another table</h4>
            <pre>CREATE TABLE active_students AS
SELECT student_id, name, mobile
FROM students
WHERE status = 'Active';</pre>
            <h4>Check inserted data</h4>
            <pre>SELECT * FROM courses;
SELECT * FROM students ORDER BY student_id DESC LIMIT 5;</pre>
            <p>
                After inserting data, always verify the result. This habit helps catch typing mistakes early.
            </p>
        </div>
    `,
    "Select Queries": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                Select queries are used for displaying data in reports, dashboards, search pages, invoices, marksheets,
                and admin panels. A good select query shows exactly the columns needed by the user.
            </p>
            <h4>Calculated columns</h4>
            <pre>SELECT course_name, fees, fees * 0.10 AS discount
FROM courses;</pre>
            <h4>Concatenate text</h4>
            <pre>SELECT CONCAT(name, ' - ', mobile) AS student_contact
FROM students;</pre>
            <h4>Date functions</h4>
            <pre>SELECT name, admission_date, YEAR(admission_date) AS admission_year
FROM students;</pre>
            <p>
                Select queries can show original columns, calculated values, formatted text, and date information.
            </p>
        </div>
    `,
    "Where and Operators": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                Conditions make queries useful. Instead of reading all rows, you can read only active students, only unpaid
                fees, only courses above a certain amount, or only admissions from a specific month.
            </p>
            <h4>NULL checking</h4>
            <pre>SELECT * FROM students WHERE email IS NULL;
SELECT * FROM students WHERE email IS NOT NULL;</pre>
            <h4>Not equal and not in</h4>
            <pre>SELECT * FROM courses WHERE course_name <> 'MySQL';
SELECT * FROM students WHERE city NOT IN ('Delhi', 'Mumbai');</pre>
            <h4>Date condition</h4>
            <pre>SELECT * FROM students
WHERE admission_date BETWEEN '2026-05-01' AND '2026-05-31';</pre>
            <p>
                <code>WHERE</code> is also very important for update and delete commands because it controls which rows are changed.
            </p>
        </div>
    `,
    "Update and Delete": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                Updating and deleting data are powerful actions. In real projects, many teams use soft delete, where data is
                not removed permanently. Instead, a status column is changed to inactive or deleted.
            </p>
            <h4>Soft delete example</h4>
            <pre>ALTER TABLE students ADD COLUMN status VARCHAR(20) DEFAULT 'Active';

UPDATE students
SET status = 'Deleted'
WHERE student_id = 5;</pre>
            <h4>Safe update steps</h4>
            <pre>SELECT * FROM students WHERE student_id = 5;
UPDATE students SET mobile = '9999999999' WHERE student_id = 5;
SELECT * FROM students WHERE student_id = 5;</pre>
            <p>
                First check the row, then update it, and then check again. This simple habit prevents many database mistakes.
            </p>
        </div>
    `,
    "Order By and Limit": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                Sorting is used in almost every application. Students can be sorted by name, courses by fees, payments by date,
                and marks by highest score. Limit is useful when the table has many records.
            </p>
            <h4>Multiple column sorting</h4>
            <pre>SELECT * FROM students
ORDER BY city ASC, name ASC;</pre>
            <h4>Top 3 highest fees courses</h4>
            <pre>SELECT course_name, fees
FROM courses
ORDER BY fees DESC
LIMIT 3;</pre>
            <h4>Latest admissions</h4>
            <pre>SELECT name, admission_date
FROM students
ORDER BY admission_date DESC, student_id DESC
LIMIT 10;</pre>
            <p>
                When two rows have the same date, sorting by ID also gives a stable and predictable result.
            </p>
        </div>
    `,
    "Aggregate Functions": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                Aggregate functions convert many rows into useful numbers. These are needed for dashboards like total students,
                total fee collection, average marks, highest fee, lowest marks, and unpaid amount.
            </p>
            <h4>Report examples</h4>
            <pre>SELECT COUNT(*) AS total_courses FROM courses;

SELECT
    COUNT(*) AS total_payments,
    SUM(amount) AS collected_amount,
    AVG(amount) AS average_payment,
    MIN(amount) AS minimum_payment,
    MAX(amount) AS maximum_payment
FROM payments;</pre>
            <h4>Count with condition</h4>
            <pre>SELECT COUNT(*) AS active_students
FROM students
WHERE status = 'Active';</pre>
            <p>
                Aggregate functions ignore NULL values in many cases, so understand your data before preparing final reports.
            </p>
        </div>
    `,
    "Group By and Having": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                Grouping is used when we need category-wise reports. For example, number of students in each course, total
                fee collected by each month, or average marks by subject.
            </p>
            <h4>Monthly fee report</h4>
            <pre>SELECT
    YEAR(paid_date) AS year_no,
    MONTH(paid_date) AS month_no,
    SUM(amount) AS monthly_collection
FROM fees
GROUP BY YEAR(paid_date), MONTH(paid_date)
ORDER BY year_no, month_no;</pre>
            <h4>Course report with having</h4>
            <pre>SELECT course_name, COUNT(*) AS total_students
FROM students
GROUP BY course_name
HAVING total_students > 10;</pre>
            <p>
                Use <code>WHERE</code> before grouping to filter raw rows. Use <code>HAVING</code> after grouping to filter summary rows.
            </p>
        </div>
    `,
    "Joins": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                Joins are used because normalized databases keep data in separate tables. A student name is stored in the
                students table, course name in the courses table, and enrollment connection in the enrollments table. Joins
                bring this related data together.
            </p>
            <h4>Join with aliases</h4>
            <pre>SELECT s.name, c.course_name, e.enroll_date
FROM enrollments e
INNER JOIN students s ON e.student_id = s.student_id
INNER JOIN courses c ON e.course_id = c.course_id;</pre>
            <h4>Find students without enrollment</h4>
            <pre>SELECT s.student_id, s.name
FROM students s
LEFT JOIN enrollments e ON s.student_id = e.student_id
WHERE e.enrollment_id IS NULL;</pre>
            <p>
                Aliases like <code>s</code>, <code>c</code>, and <code>e</code> make join queries shorter and easier to read.
            </p>
        </div>
    `,
    "Subqueries": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                A subquery can return one value, one column, or a temporary table. It is useful when a condition depends on
                another query result. Beginners should first understand simple subqueries, then compare them with joins.
            </p>
            <h4>Single value subquery</h4>
            <pre>SELECT name
FROM students
WHERE student_id = (
    SELECT student_id
    FROM fees
    ORDER BY amount DESC
    LIMIT 1
);</pre>
            <h4>Subquery in FROM</h4>
            <pre>SELECT course_name, total_students
FROM (
    SELECT course_name, COUNT(*) AS total_students
    FROM students
    GROUP BY course_name
) AS course_summary
WHERE total_students >= 5;</pre>
            <p>
                Subqueries are powerful, but they should stay readable. If a query becomes too complex, a join or view may be better.
            </p>
        </div>
    `,
    "Indexes": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                Indexes improve speed for searching, sorting, and joining. But indexes also use extra storage. A table with
                frequent inserts and updates should not have unnecessary indexes.
            </p>
            <h4>Composite index</h4>
            <pre>CREATE INDEX idx_city_name
ON students(city, name);</pre>
            <h4>Check indexes</h4>
            <pre>SHOW INDEX FROM students;</pre>
            <h4>Remove index</h4>
            <pre>DROP INDEX idx_city_name ON students;</pre>
            <p>
                A composite index is useful when queries often filter or sort using the same group of columns together.
            </p>
        </div>
    `,
    "Views": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                Views are useful for reports and security. For example, an admin may see all student details, but a teacher
                may only need student name, course, and marks. A view can show only selected columns.
            </p>
            <h4>Marks report view</h4>
            <pre>CREATE VIEW marks_report AS
SELECT s.name, c.course_name, r.subject, r.marks
FROM exam_results r
INNER JOIN students s ON r.student_id = s.student_id
INNER JOIN courses c ON r.course_id = c.course_id;

SELECT * FROM marks_report WHERE marks >= 80;</pre>
            <h4>Update a view</h4>
            <pre>CREATE OR REPLACE VIEW active_students AS
SELECT student_id, name, mobile
FROM students
WHERE status = 'Active';</pre>
            <p>
                Not every view can be updated directly, especially views with joins or aggregate functions. But views are very
                helpful for reading and reporting.
            </p>
        </div>
    `,
    "Backup and Restore": `
        <div class="lesson-section">
            <h4>Detailed notes</h4>
            <p>
                Backup is a habit, not a one-time task. A database used by students, customers, or a business should have a
                regular backup plan. Before making risky changes, take a backup first.
            </p>
            <h4>Backup selected database</h4>
            <pre>mysqldump -u root -p institute_project > institute_project.sql</pre>
            <h4>Backup all databases</h4>
            <pre>mysqldump -u root -p --all-databases > all_databases.sql</pre>
            <h4>Restore into a new database</h4>
            <pre>CREATE DATABASE institute_project_copy;
mysql -u root -p institute_project_copy &lt; institute_project.sql</pre>
            <h4>Backup checklist</h4>
            <ul>
                <li>Take backup before delete, drop, or big update commands.</li>
                <li>Store backup outside the main computer or server.</li>
                <li>Name backup files with date, such as <code>backup_2026_05_06.sql</code>.</li>
                <li>Test restore so you know the backup really works.</li>
            </ul>
        </div>
    `
};

Object.keys(databaseExtraContent).forEach((topic) => {
    if (contentData["Database (MySQL)"]?.[topic]) {
        contentData["Database (MySQL)"][topic] += databaseExtraContent[topic];
    }
});

contentData["Full Stack Development"] = {
    "Overview": `
        <div class="lesson-section">
            <h3>Full Stack Development - Overview</h3>
            <p>
                Full stack development means building both parts of a web application: the frontend and the backend.
                The frontend is what users see and use in the browser. The backend runs on the server, handles logic,
                connects with the database, checks users, and sends data back to the frontend.
            </p>
            <p>
                A full stack developer understands how a complete application works from start to finish. For example,
                when a student fills an admission form on a website, the frontend collects the data, the backend receives
                the form, validates it, stores it in the database, and then sends a success response.
            </p>
            <h4>Main parts of full stack development</h4>
            <ul>
                <li><strong>Frontend:</strong> HTML, CSS, JavaScript, responsive UI, forms, buttons, navigation.</li>
                <li><strong>Backend:</strong> server-side code, routes, business logic, APIs, validation.</li>
                <li><strong>Database:</strong> stores users, courses, orders, marks, fees, and other records.</li>
                <li><strong>API:</strong> connection between frontend and backend using requests and responses.</li>
                <li><strong>Deployment:</strong> publishing the app so real users can open it online.</li>
            </ul>
            <h4>Complete flow example</h4>
            <pre>User clicks "Register"
Frontend sends form data
Backend checks the data
Database saves the student
Backend sends success message
Frontend displays confirmation</pre>
            <h4>Simple full stack example idea</h4>
            <pre>Frontend: admission.html
Backend: Flask / Node / Django route
Database: students table
Feature: Add student, view students, update details, delete record</pre>
            <p>
                Full stack development is not only about learning many tools. It is about understanding how those tools
                work together to solve real problems.
            </p>
        </div>
    `,
    "Web Development Basics": `
        <div class="lesson-section">
            <h3>Web Development Basics</h3>
            <p>
                Web development is the process of creating websites and web applications. A simple website may only show
                information, but a web application can accept input, store data, display dashboards, manage users, and
                perform business tasks.
            </p>
            <h4>Website vs web application</h4>
            <ul>
                <li><strong>Website:</strong> mainly displays information, like a course page or portfolio.</li>
                <li><strong>Web application:</strong> allows interaction, like login, registration, shopping cart, or exam panel.</li>
            </ul>
            <h4>How the web works</h4>
            <p>
                A browser sends a request to a server. The server processes the request and sends a response. The response
                can be HTML, CSS, JavaScript, JSON data, images, or files.
            </p>
            <pre>Browser Request:
GET /courses

Server Response:
HTML page or JSON data</pre>
            <h4>Important terms</h4>
            <ul>
                <li><strong>Browser:</strong> software like Chrome, Edge, or Firefox that opens websites.</li>
                <li><strong>Server:</strong> computer or program that serves web pages and data.</li>
                <li><strong>URL:</strong> address of a web resource.</li>
                <li><strong>Domain:</strong> website name like example.com.</li>
                <li><strong>Hosting:</strong> service where website files and backend run online.</li>
            </ul>
            <p>
                Full stack development starts with this simple request-response idea. Every advanced concept builds on it.
            </p>
        </div>
    `,
    "Frontend Development": `
        <div class="lesson-section">
            <h3>Frontend Development</h3>
            <p>
                Frontend development means creating the visible part of a website or application. It includes layout,
                colors, text, forms, menus, buttons, images, animations, and user interactions. The main frontend languages
                are HTML, CSS, and JavaScript.
            </p>
            <h4>Frontend responsibilities</h4>
            <ul>
                <li>Create clean page structure with HTML.</li>
                <li>Style the page using CSS.</li>
                <li>Make the page interactive using JavaScript.</li>
                <li>Make the layout work on mobile, tablet, and desktop.</li>
                <li>Send user input to the backend using forms or API calls.</li>
            </ul>
            <h4>Example frontend form</h4>
            <pre>&lt;form id="studentForm"&gt;
    &lt;input type="text" id="name" placeholder="Student name"&gt;
    &lt;input type="text" id="course" placeholder="Course name"&gt;
    &lt;button type="submit"&gt;Register&lt;/button&gt;
&lt;/form&gt;</pre>
            <h4>Frontend quality points</h4>
            <ul>
                <li>Text should be readable.</li>
                <li>Buttons should clearly show actions.</li>
                <li>Forms should show helpful validation messages.</li>
                <li>Navigation should be simple.</li>
                <li>Pages should load quickly.</li>
            </ul>
            <p>
                A good frontend is not just beautiful. It should be easy, fast, accessible, and useful for the target user.
            </p>
        </div>
    `,
    "HTML Structure": `
        <div class="lesson-section">
            <h3>HTML Structure</h3>
            <p>
                HTML stands for HyperText Markup Language. It creates the structure of a web page. Headings, paragraphs,
                images, links, lists, tables, forms, and sections are all created using HTML tags.
            </p>
            <h4>Basic HTML page</h4>
            <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Student Portal&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Computer Course Site&lt;/h1&gt;
    &lt;/header&gt;
    &lt;main&gt;
        &lt;section&gt;
            &lt;h2&gt;Available Courses&lt;/h2&gt;
            &lt;p&gt;Choose a course and start learning.&lt;/p&gt;
        &lt;/section&gt;
    &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
            <h4>Semantic HTML</h4>
            <p>
                Semantic tags describe meaning. Examples include <code>header</code>, <code>nav</code>, <code>main</code>,
                <code>section</code>, <code>article</code>, and <code>footer</code>. These tags make pages easier to understand
                for browsers, search engines, and screen readers.
            </p>
            <h4>Form example</h4>
            <pre>&lt;label for="email"&gt;Email&lt;/label&gt;
&lt;input id="email" type="email" required&gt;</pre>
            <p>
                HTML is the skeleton of the website. CSS adds design, and JavaScript adds behavior.
            </p>
        </div>
    `,
    "CSS Styling": `
        <div class="lesson-section">
            <h3>CSS Styling</h3>
            <p>
                CSS stands for Cascading Style Sheets. It controls the visual design of a page: colors, spacing, fonts,
                borders, layout, hover effects, and responsive behavior. Without CSS, HTML content looks plain.
            </p>
            <h4>Basic CSS example</h4>
            <pre>body {
    font-family: Arial, sans-serif;
    background: #eef4f8;
    color: #1f2933;
}

.card {
    background: white;
    border: 1px solid #dbe9f2;
    border-radius: 8px;
    padding: 20px;
}

.primary-btn {
    background: #0f6cbd;
    color: white;
    border: none;
    padding: 10px 16px;
}</pre>
            <h4>Important CSS concepts</h4>
            <ul>
                <li><strong>Selectors:</strong> choose which elements to style.</li>
                <li><strong>Box model:</strong> content, padding, border, and margin.</li>
                <li><strong>Flexbox:</strong> one-dimensional layout for rows or columns.</li>
                <li><strong>Grid:</strong> two-dimensional layout for complex designs.</li>
                <li><strong>Media queries:</strong> responsive design for different screen sizes.</li>
            </ul>
            <h4>Responsive card grid</h4>
            <pre>.course-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
}</pre>
            <p>
                Good CSS makes the website professional, readable, and comfortable to use.
            </p>
        </div>
    `,
    "JavaScript Interactivity": `
        <div class="lesson-section">
            <h3>JavaScript Interactivity</h3>
            <p>
                JavaScript makes web pages interactive. It can respond to clicks, validate forms, change content, open
                modals, fetch API data, show alerts, calculate results, and update the page without reloading.
            </p>
            <h4>Button click example</h4>
            <pre>&lt;button id="saveBtn"&gt;Save&lt;/button&gt;
&lt;p id="message"&gt;&lt;/p&gt;

&lt;script&gt;
document.getElementById("saveBtn").addEventListener("click", () => {
    document.getElementById("message").innerText = "Saved successfully";
});
&lt;/script&gt;</pre>
            <h4>Form validation example</h4>
            <pre>function validateStudent(name, mobile) {
    if (!name.trim()) {
        return "Name is required";
    }
    if (mobile.length < 10) {
        return "Enter valid mobile number";
    }
    return "OK";
}</pre>
            <h4>Why JavaScript is important in full stack</h4>
            <ul>
                <li>It connects frontend to backend APIs.</li>
                <li>It updates UI after user actions.</li>
                <li>It improves user experience with instant feedback.</li>
                <li>It can be used on the backend too with Node.js.</li>
            </ul>
            <p>
                JavaScript is the behavior layer of the web. HTML gives structure, CSS gives style, and JavaScript gives action.
            </p>
        </div>
    `,
    "Responsive Design": `
        <div class="lesson-section">
            <h3>Responsive Design</h3>
            <p>
                Responsive design means a website should work properly on mobile, tablet, laptop, and desktop screens.
                Since many users browse on phones, a full stack developer must know how to create flexible layouts.
            </p>
            <h4>Responsive techniques</h4>
            <ul>
                <li>Use flexible widths like percentages and <code>minmax</code>.</li>
                <li>Use CSS grid and flexbox instead of fixed layouts.</li>
                <li>Use images with <code>max-width: 100%</code>.</li>
                <li>Use media queries for smaller screens.</li>
                <li>Make buttons and form fields easy to tap on mobile.</li>
            </ul>
            <h4>Media query example</h4>
            <pre>.layout {
    display: grid;
    grid-template-columns: 280px 1fr;
}

@media (max-width: 800px) {
    .layout {
        grid-template-columns: 1fr;
    }
}</pre>
            <h4>Responsive testing checklist</h4>
            <ul>
                <li>No text should overflow outside buttons or cards.</li>
                <li>Navigation should fit on small screens.</li>
                <li>Images should not stretch badly.</li>
                <li>Forms should be usable with touch.</li>
            </ul>
            <p>
                Responsive design improves usability and makes the application suitable for real users.
            </p>
        </div>
    `,
    "Backend Development": `
        <div class="lesson-section">
            <h3>Backend Development</h3>
            <p>
                Backend development means writing server-side code. The backend receives requests, applies logic, talks to
                the database, handles authentication, and sends responses to the frontend.
            </p>
            <h4>Backend responsibilities</h4>
            <ul>
                <li>Create routes such as <code>/students</code>, <code>/login</code>, and <code>/courses</code>.</li>
                <li>Validate user input before saving it.</li>
                <li>Read and write database records.</li>
                <li>Protect private data.</li>
                <li>Return HTML pages or JSON API responses.</li>
            </ul>
            <h4>Simple Flask backend route</h4>
            <pre>from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/api/students", methods=["POST"])
def add_student():
    data = request.get_json()
    name = data.get("name")
    course = data.get("course")

    if not name or not course:
        return jsonify({"error": "Name and course are required"}), 400

    return jsonify({"message": "Student saved", "student": data}), 201</pre>
            <p>
                This example receives JSON data, validates it, and returns a response. In a real application, the backend
                would also save the data into a database.
            </p>
        </div>
    `,
    "Server and HTTP": `
        <div class="lesson-section">
            <h3>Server and HTTP</h3>
            <p>
                HTTP stands for HyperText Transfer Protocol. It is the communication system used between browser and server.
                Every web page, API call, image request, and form submission uses HTTP or HTTPS.
            </p>
            <h4>Common HTTP methods</h4>
            <ul>
                <li><code>GET</code>: read data, like showing a course list.</li>
                <li><code>POST</code>: create new data, like student registration.</li>
                <li><code>PUT</code> or <code>PATCH</code>: update existing data.</li>
                <li><code>DELETE</code>: remove data.</li>
            </ul>
            <h4>Status codes</h4>
            <ul>
                <li><code>200</code>: success.</li>
                <li><code>201</code>: created successfully.</li>
                <li><code>400</code>: bad request or validation error.</li>
                <li><code>401</code>: user is not logged in.</li>
                <li><code>404</code>: resource not found.</li>
                <li><code>500</code>: server error.</li>
            </ul>
            <h4>Example request and response</h4>
            <pre>GET /api/courses HTTP/1.1

Response:
200 OK
[
  {"id": 1, "title": "Computer Basics"},
  {"id": 2, "title": "Full Stack Development"}
]</pre>
            <p>
                Understanding HTTP helps you debug frontend-backend communication clearly.
            </p>
        </div>
    `,
    "APIs and JSON": `
        <div class="lesson-section">
            <h3>APIs and JSON</h3>
            <p>
                API stands for Application Programming Interface. In full stack development, an API allows the frontend
                and backend to communicate. JSON is the most common data format used in modern APIs.
            </p>
            <h4>JSON example</h4>
            <pre>{
  "student_id": 1,
  "name": "Riya Sharma",
  "course": "Full Stack Development",
  "active": true
}</pre>
            <h4>Fetch API example</h4>
            <pre>async function loadCourses() {
    const response = await fetch("/api/courses");
    const courses = await response.json();
    console.log(courses);
}</pre>
            <h4>POST data example</h4>
            <pre>async function saveStudent() {
    const response = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: "Riya Sharma",
            course: "Full Stack Development"
        })
    });

    const result = await response.json();
    console.log(result);
}</pre>
            <p>
                APIs separate frontend and backend cleanly. The frontend does not need to know how data is stored; it only
                needs to call the correct API.
            </p>
        </div>
    `,
    "Databases in Full Stack": `
        <div class="lesson-section">
            <h3>Databases in Full Stack</h3>
            <p>
                A database stores application data permanently. Without a database, data entered by users would disappear
                when the page reloads or the server restarts. Full stack applications use databases for users, products,
                courses, orders, posts, marks, fees, and settings.
            </p>
            <h4>Relational database example</h4>
            <pre>CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    email VARCHAR(120) UNIQUE,
    course VARCHAR(100),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);</pre>
            <h4>Backend query idea</h4>
            <pre>SELECT student_id, name, email, course
FROM students
WHERE course = 'Full Stack Development'
ORDER BY created_at DESC;</pre>
            <h4>Database responsibilities</h4>
            <ul>
                <li>Store clean and structured data.</li>
                <li>Protect data using constraints.</li>
                <li>Support fast searching with indexes.</li>
                <li>Connect related tables with keys.</li>
                <li>Support reporting with SQL queries.</li>
            </ul>
            <p>
                A full stack developer should understand basic database design, CRUD operations, joins, and safe data handling.
            </p>
        </div>
    `,
    "CRUD Operations": `
        <div class="lesson-section">
            <h3>CRUD Operations</h3>
            <p>
                CRUD stands for Create, Read, Update, and Delete. These four operations are the foundation of most web
                applications. Student management, product management, notes apps, blogs, and admin panels all use CRUD.
            </p>
            <h4>CRUD mapping</h4>
            <ul>
                <li><strong>Create:</strong> add a new record using POST and INSERT.</li>
                <li><strong>Read:</strong> show records using GET and SELECT.</li>
                <li><strong>Update:</strong> edit records using PUT/PATCH and UPDATE.</li>
                <li><strong>Delete:</strong> remove records using DELETE and DELETE SQL.</li>
            </ul>
            <h4>API route design</h4>
            <pre>GET    /api/students       -> list students
GET    /api/students/5     -> show one student
POST   /api/students       -> add student
PATCH  /api/students/5     -> update student
DELETE /api/students/5     -> delete student</pre>
            <h4>SQL examples</h4>
            <pre>INSERT INTO students (name, course) VALUES ('Aman', 'Full Stack');
SELECT * FROM students;
UPDATE students SET course = 'Full Stack Development' WHERE student_id = 1;
DELETE FROM students WHERE student_id = 1;</pre>
            <p>
                If you can build CRUD properly, you can build many real-world applications.
            </p>
        </div>
    `,
    "Authentication and Authorization": `
        <div class="lesson-section">
            <h3>Authentication and Authorization</h3>
            <p>
                Authentication means checking who the user is. Authorization means checking what the user is allowed to do.
                Example: login verifies the student identity; permissions decide whether the user can open admin pages.
            </p>
            <h4>Authentication flow</h4>
            <pre>User enters username and password
Backend checks the database
If valid, backend creates a session or token
Frontend stores login state
Protected pages become available</pre>
            <h4>Important security rule</h4>
            <p>
                Never store plain passwords in a real application. Passwords should be hashed using secure hashing methods.
                A hash is a protected form of the password, not the original text.
            </p>
            <h4>Role example</h4>
            <pre>CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(80) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'student'
);</pre>
            <h4>Authorization examples</h4>
            <ul>
                <li>Student can view lessons and exam results.</li>
                <li>Teacher can update marks.</li>
                <li>Admin can manage users, courses, fees, and reports.</li>
            </ul>
            <p>
                Login systems must be handled carefully because they protect private user data.
            </p>
        </div>
    `,
    "MVC and Project Structure": `
        <div class="lesson-section">
            <h3>MVC and Project Structure</h3>
            <p>
                Project structure keeps code organized. As a project grows, putting all code in one file becomes confusing.
                MVC is a common pattern that separates data, logic, and user interface.
            </p>
            <h4>MVC meaning</h4>
            <ul>
                <li><strong>Model:</strong> handles data and database logic.</li>
                <li><strong>View:</strong> handles UI templates and displayed pages.</li>
                <li><strong>Controller:</strong> handles requests, decisions, and responses.</li>
            </ul>
            <h4>Example project structure</h4>
            <pre>course-site/
    app.py
    models/
        student.py
        course.py
    routes/
        student_routes.py
        auth_routes.py
    templates/
        index.html
        dashboard.html
    static/
        style.css
        script.js</pre>
            <h4>Why structure matters</h4>
            <ul>
                <li>Code becomes easier to find.</li>
                <li>Features can be added safely.</li>
                <li>Testing becomes easier.</li>
                <li>Team members can work on separate files.</li>
            </ul>
            <p>
                A good structure saves time and prevents messy code as the application becomes bigger.
            </p>
        </div>
    `,
    "Version Control with Git": `
        <div class="lesson-section">
            <h3>Version Control with Git</h3>
            <p>
                Version control tracks changes in code. Git helps developers save project history, compare changes, create
                branches, and work in teams. GitHub, GitLab, and Bitbucket are platforms that host Git repositories online.
            </p>
            <h4>Basic Git commands</h4>
            <pre>git init
git status
git add .
git commit -m "Add student registration"
git log</pre>
            <h4>Branch workflow</h4>
            <pre>git checkout -b feature-login
git add .
git commit -m "Build login UI"
git checkout main
git merge feature-login</pre>
            <h4>Why Git is important</h4>
            <ul>
                <li>You can return to older versions.</li>
                <li>You can see what changed and when.</li>
                <li>Multiple developers can collaborate.</li>
                <li>Branches allow safe feature development.</li>
            </ul>
            <p>
                Full stack developers use Git daily. It is a professional habit, not an optional extra.
            </p>
        </div>
    `,
    "Testing and Debugging": `
        <div class="lesson-section">
            <h3>Testing and Debugging</h3>
            <p>
                Testing checks whether an application works correctly. Debugging means finding and fixing problems. A full
                stack developer must debug frontend, backend, API, database, and deployment issues.
            </p>
            <h4>Common bugs</h4>
            <ul>
                <li>Button click does nothing because event listener is missing.</li>
                <li>API returns 404 because route path is wrong.</li>
                <li>Database insert fails because required field is missing.</li>
                <li>Login fails because password check is incorrect.</li>
                <li>Mobile layout breaks because CSS is not responsive.</li>
            </ul>
            <h4>Debugging tools</h4>
            <ul>
                <li>Browser console for JavaScript errors.</li>
                <li>Network tab for API requests and responses.</li>
                <li>Server logs for backend errors.</li>
                <li>Database query tools for SQL checking.</li>
            </ul>
            <h4>Simple test cases for student form</h4>
            <pre>1. Empty name should show error.
2. Valid name and course should save.
3. Duplicate email should show warning.
4. Student list should update after save.
5. Delete button should remove only selected student.</pre>
            <p>
                Good testing prevents small mistakes from becoming big problems.
            </p>
        </div>
    `,
    "Deployment and Hosting": `
        <div class="lesson-section">
            <h3>Deployment and Hosting</h3>
            <p>
                Deployment means publishing an application so users can access it online. During development, the app runs
                on your local computer. During deployment, it runs on a server or cloud platform.
            </p>
            <h4>Deployment needs</h4>
            <ul>
                <li>Application code.</li>
                <li>Server or hosting platform.</li>
                <li>Database server.</li>
                <li>Environment variables for secrets.</li>
                <li>Domain name and HTTPS certificate.</li>
            </ul>
            <h4>Environment variable example</h4>
            <pre>DATABASE_URL=mysql://user:password@host:3306/app_db
SECRET_KEY=change-this-secret
DEBUG=False</pre>
            <h4>Deployment checklist</h4>
            <ul>
                <li>Turn off debug mode.</li>
                <li>Use secure database passwords.</li>
                <li>Check all static files load correctly.</li>
                <li>Run database migrations or setup scripts.</li>
                <li>Test login, forms, and main pages after deployment.</li>
            </ul>
            <p>
                Deployment is the step where a project becomes a real application for users.
            </p>
        </div>
    `,
    "Security Basics": `
        <div class="lesson-section">
            <h3>Security Basics</h3>
            <p>
                Security protects users and data. Full stack applications handle personal details, passwords, payments,
                files, and private records, so security must be considered from the beginning.
            </p>
            <h4>Important security practices</h4>
            <ul>
                <li>Hash passwords instead of storing plain text passwords.</li>
                <li>Validate all user input on backend.</li>
                <li>Use HTTPS in production.</li>
                <li>Protect admin routes with authorization.</li>
                <li>Use parameterized queries to prevent SQL injection.</li>
                <li>Do not expose secret keys in frontend code.</li>
            </ul>
            <h4>SQL injection unsafe example</h4>
            <pre>query = "SELECT * FROM users WHERE username = '" + username + "'"</pre>
            <h4>Safer idea</h4>
            <pre>cursor.execute(
    "SELECT * FROM users WHERE username = %s",
    (username,)
)</pre>
            <p>
                Security is not only for large companies. Even a small student portal should protect login data and records.
            </p>
        </div>
    `,
    "Performance Basics": `
        <div class="lesson-section">
            <h3>Performance Basics</h3>
            <p>
                Performance means how fast and smoothly an application works. Users leave slow websites, so a full stack
                developer should understand both frontend and backend performance.
            </p>
            <h4>Frontend performance</h4>
            <ul>
                <li>Compress and resize images.</li>
                <li>Load only required JavaScript and CSS.</li>
                <li>Avoid unnecessary animations.</li>
                <li>Use lazy loading for heavy media.</li>
                <li>Keep layout simple and stable.</li>
            </ul>
            <h4>Backend performance</h4>
            <ul>
                <li>Write efficient database queries.</li>
                <li>Use indexes on frequently searched columns.</li>
                <li>Return only required data from APIs.</li>
                <li>Cache repeated results when suitable.</li>
                <li>Avoid doing heavy work inside every request.</li>
            </ul>
            <h4>Bad vs better query</h4>
            <pre>-- Bad when table has many columns
SELECT * FROM students;

-- Better
SELECT student_id, name, course FROM students;</pre>
            <p>
                Performance improves user experience and reduces server load.
            </p>
        </div>
    `,
    "Full Stack Project Roadmap": `
        <div class="lesson-section">
            <h3>Full Stack Project Roadmap</h3>
            <p>
                The best way to learn full stack development is to build complete projects. Start small, then add features.
                A student management system is a perfect beginner project because it includes forms, validation, database,
                CRUD, login, dashboard, and reports.
            </p>
            <h4>Project: Computer Course Management System</h4>
            <ul>
                <li><strong>Home page:</strong> show courses and learning details.</li>
                <li><strong>Student registration:</strong> add student with name, mobile, course, and date.</li>
                <li><strong>Student list:</strong> show all registered students.</li>
                <li><strong>Edit student:</strong> update mobile, course, or status.</li>
                <li><strong>Delete student:</strong> remove or deactivate a record.</li>
                <li><strong>Login:</strong> protect admin dashboard.</li>
                <li><strong>Reports:</strong> count students by course and show fee collection.</li>
            </ul>
            <h4>Step-by-step roadmap</h4>
            <pre>1. Create HTML pages.
2. Add CSS layout and responsive design.
3. Add JavaScript form validation.
4. Build backend routes.
5. Create database tables.
6. Connect backend with database.
7. Implement CRUD APIs.
8. Add login and permissions.
9. Test all features.
10. Deploy the project online.</pre>
            <h4>Final practice task</h4>
            <p>
                Build one complete feature first: student registration. After it works end to end, add student list, edit,
                delete, search, and reports. This method makes learning practical and less confusing.
            </p>
        </div>
    `
};

const fullStackExtraContent = {
    "Overview": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                Full stack development is the complete process of building a working software product for the web. A beginner
                often thinks that a website is only a page with text and buttons, but a real web application has many layers.
                The browser layer shows the interface, the server layer handles logic, the database layer stores information,
                and the deployment layer makes the application available to real users.
            </p>
            <p>
                Example: in a course website, the user can see lessons, select topics, attempt exams, register an account,
                and view results. The frontend displays the course screens. The backend decides what data should be saved
                or returned. The database stores users, courses, questions, answers, and scores. Full stack development
                connects all these parts into one usable system.
            </p>
            <h4>Frontend vs backend vs database</h4>
            <div class="table-wrap">
                <table class="comparison-table">
                    <thead>
                        <tr><th>Layer</th><th>Main work</th><th>Example</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Frontend</td><td>User interface</td><td>Course cards, exam modal, login form</td></tr>
                        <tr><td>Backend</td><td>Business logic</td><td>Validate login, calculate result, save record</td></tr>
                        <tr><td>Database</td><td>Permanent storage</td><td>Students table, courses table, results table</td></tr>
                    </tbody>
                </table>
            </div>
            <h4>Mini architecture diagram</h4>
            <pre>Browser
  |
  | HTTP request
  v
Backend server
  |
  | SQL query
  v
Database
  |
  | data result
  v
Backend server
  |
  | JSON or HTML response
  v
Browser</pre>
            <h4>What a student should learn first</h4>
            <ul>
                <li>Start with HTML and learn page structure.</li>
                <li>Learn CSS layout, spacing, colors, and responsive design.</li>
                <li>Learn JavaScript basics and DOM manipulation.</li>
                <li>Learn backend routes and request-response flow.</li>
                <li>Learn database tables and CRUD operations.</li>
                <li>Build small projects instead of only reading theory.</li>
            </ul>
        </div>
    `,
    "Web Development Basics": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                Web development is based on clients and servers. The client is usually a browser. The server is a program
                that waits for requests and sends responses. When you type a URL, the browser finds the server, requests
                a page, downloads files, and displays the result.
            </p>
            <h4>Types of websites</h4>
            <ul>
                <li><strong>Static website:</strong> same files are served to every user. Example: simple portfolio.</li>
                <li><strong>Dynamic website:</strong> content changes based on database or user. Example: student dashboard.</li>
                <li><strong>Single page app:</strong> one page updates content using JavaScript. Example: modern dashboards.</li>
                <li><strong>Server-rendered app:</strong> backend creates HTML pages. Example: Flask/Jinja website.</li>
            </ul>
            <h4>Request details</h4>
            <pre>URL: https://example.com/courses?category=programming
Protocol: https
Domain: example.com
Path: /courses
Query string: category=programming</pre>
            <h4>Practice task</h4>
            <p>
                Create three pages: home, courses, and contact. Link them using anchor tags. Then style navigation using CSS.
                This small task teaches URLs, pages, navigation, structure, and styling together.
            </p>
        </div>
    `,
    "Frontend Development": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                Frontend development focuses on user experience. A frontend developer must think about clarity, speed,
                accessibility, layout, feedback, and error handling. Users should understand what to do without reading
                a manual. If a form fails, the message should explain the problem clearly.
            </p>
            <h4>Frontend file responsibilities</h4>
            <pre>index.html  -> structure and content
style.css   -> design and responsive layout
script.js   -> interactions and API calls
images/     -> visual assets</pre>
            <h4>Example: show validation message</h4>
            <pre>&lt;input id="studentName" placeholder="Student name"&gt;
&lt;button onclick="saveStudent()"&gt;Save&lt;/button&gt;
&lt;p id="errorBox"&gt;&lt;/p&gt;

&lt;script&gt;
function saveStudent() {
    const name = document.getElementById("studentName").value.trim();
    if (!name) {
        document.getElementById("errorBox").innerText = "Student name is required";
        return;
    }
    document.getElementById("errorBox").innerText = "Student saved";
}
&lt;/script&gt;</pre>
            <h4>Professional checklist</h4>
            <ul>
                <li>Use meaningful headings and labels.</li>
                <li>Keep buttons consistent across the app.</li>
                <li>Show loading and success states.</li>
                <li>Never hide important errors.</li>
                <li>Test keyboard navigation and mobile layout.</li>
            </ul>
        </div>
    `,
    "HTML Structure": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                HTML should describe the meaning of content. A page should have one main heading, clear sections, labels
                for form fields, and useful alternative text for images. Good HTML improves accessibility and makes CSS
                and JavaScript easier to write.
            </p>
            <h4>Student registration page structure</h4>
            <pre>&lt;main&gt;
    &lt;section aria-labelledby="registerTitle"&gt;
        &lt;h1 id="registerTitle"&gt;Student Registration&lt;/h1&gt;
        &lt;form&gt;
            &lt;label for="name"&gt;Name&lt;/label&gt;
            &lt;input id="name" name="name" required&gt;

            &lt;label for="course"&gt;Course&lt;/label&gt;
            &lt;select id="course" name="course"&gt;
                &lt;option&gt;Full Stack Development&lt;/option&gt;
                &lt;option&gt;Database (MySQL)&lt;/option&gt;
            &lt;/select&gt;

            &lt;button type="submit"&gt;Submit&lt;/button&gt;
        &lt;/form&gt;
    &lt;/section&gt;
&lt;/main&gt;</pre>
            <h4>Important HTML attributes</h4>
            <ul>
                <li><code>id</code> uniquely identifies an element.</li>
                <li><code>class</code> groups elements for CSS or JavaScript.</li>
                <li><code>name</code> helps submit form data.</li>
                <li><code>required</code> makes input mandatory.</li>
                <li><code>alt</code> describes images for accessibility.</li>
            </ul>
        </div>
    `,
    "CSS Styling": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                CSS is not only decoration. It controls hierarchy and readability. A good design helps the user understand
                which action is important, which content belongs together, and where attention should go next.
            </p>
            <h4>Form styling example</h4>
            <pre>.form-panel {
    max-width: 520px;
    margin: 0 auto;
    padding: 24px;
    background: #ffffff;
    border: 1px solid #dbe9f2;
    border-radius: 8px;
}

.form-panel label {
    display: block;
    margin-bottom: 6px;
    font-weight: 700;
}

.form-panel input,
.form-panel select {
    width: 100%;
    min-height: 44px;
    margin-bottom: 14px;
    padding: 10px 12px;
    border: 1px solid #c9d6df;
    border-radius: 8px;
}</pre>
            <h4>Design consistency rules</h4>
            <ul>
                <li>Use a small set of colors repeatedly.</li>
                <li>Keep spacing consistent.</li>
                <li>Use the same button styles for similar actions.</li>
                <li>Make errors visually different from success messages.</li>
            </ul>
        </div>
    `,
    "JavaScript Interactivity": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                JavaScript can read page elements, listen to events, change HTML, update CSS classes, store temporary data,
                and communicate with APIs. In full stack projects, JavaScript often becomes the bridge between the user
                interface and backend data.
            </p>
            <h4>Render list example</h4>
            <pre>const students = [
    { name: "Riya", course: "Full Stack" },
    { name: "Aman", course: "MySQL" }
];

const list = document.getElementById("studentList");
list.innerHTML = students.map((student) => {
    return "&lt;li&gt;" + student.name + " - " + student.course + "&lt;/li&gt;";
}).join("");</pre>
            <h4>Event types</h4>
            <ul>
                <li><code>click</code>: button or link clicked.</li>
                <li><code>submit</code>: form submitted.</li>
                <li><code>input</code>: value changes while typing.</li>
                <li><code>change</code>: select, checkbox, or input changes.</li>
                <li><code>DOMContentLoaded</code>: page HTML is ready.</li>
            </ul>
        </div>
    `,
    "Responsive Design": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                Responsive design should be planned from the beginning. Do not design only for desktop and then try to
                force it onto mobile. Use flexible components that naturally adjust to available space.
            </p>
            <h4>Mobile-first example</h4>
            <pre>.dashboard {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}

@media (min-width: 900px) {
    .dashboard {
        grid-template-columns: 280px 1fr;
    }
}</pre>
            <h4>Responsive mistakes to avoid</h4>
            <ul>
                <li>Fixed widths like 1000px on main containers.</li>
                <li>Small buttons that are hard to tap.</li>
                <li>Text that overflows cards.</li>
                <li>Images without max-width.</li>
                <li>Navigation that disappears or overlaps.</li>
            </ul>
        </div>
    `,
    "Backend Development": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                Backend code is responsible for rules. If the frontend sends invalid data, the backend must reject it.
                Frontend validation improves user experience, but backend validation protects the system. Never trust
                only frontend checks because users can bypass browser code.
            </p>
            <h4>Backend validation example</h4>
            <pre>def validate_student(data):
    errors = []
    if not data.get("name"):
        errors.append("Name is required")
    if not data.get("course"):
        errors.append("Course is required")
    if len(data.get("mobile", "")) < 10:
        errors.append("Valid mobile number is required")
    return errors</pre>
            <h4>Backend layers</h4>
            <ul>
                <li><strong>Routes:</strong> receive requests.</li>
                <li><strong>Services:</strong> contain business logic.</li>
                <li><strong>Models:</strong> represent data and database tables.</li>
                <li><strong>Utilities:</strong> shared helper functions.</li>
            </ul>
        </div>
    `,
    "Server and HTTP": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                HTTP is stateless. This means every request is independent. The server does not automatically remember
                the previous request. Login systems use sessions or tokens to remember who the user is across requests.
            </p>
            <h4>HTTP request parts</h4>
            <ul>
                <li><strong>Method:</strong> GET, POST, PATCH, DELETE.</li>
                <li><strong>Path:</strong> the resource URL, like <code>/api/students</code>.</li>
                <li><strong>Headers:</strong> metadata such as content type or authorization.</li>
                <li><strong>Body:</strong> data sent with POST or PATCH.</li>
            </ul>
            <h4>JSON POST request</h4>
            <pre>POST /api/students
Content-Type: application/json

{
  "name": "Riya Sharma",
  "course": "Full Stack Development"
}</pre>
        </div>
    `,
    "APIs and JSON": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                A good API should be predictable. Route names should be clear, response formats should be consistent, and
                errors should explain what went wrong. This makes frontend development easier.
            </p>
            <h4>Good API response examples</h4>
            <pre>{
  "success": true,
  "data": [
    { "id": 1, "title": "HTML" },
    { "id": 2, "title": "CSS" }
  ]
}</pre>
            <pre>{
  "success": false,
  "error": "Course name is required"
}</pre>
            <h4>API design tips</h4>
            <ul>
                <li>Use nouns in route names, like <code>/api/students</code>.</li>
                <li>Use HTTP methods to show action.</li>
                <li>Return useful status codes.</li>
                <li>Keep response structure consistent.</li>
            </ul>
        </div>
    `,
    "Databases in Full Stack": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                Database design affects the whole application. If tables are badly designed, backend code becomes complex
                and reports become difficult. Before creating tables, identify entities and relationships.
            </p>
            <h4>Entities for course app</h4>
            <ul>
                <li><strong>User:</strong> login account.</li>
                <li><strong>Student:</strong> learner details.</li>
                <li><strong>Course:</strong> course name, duration, fees.</li>
                <li><strong>Lesson:</strong> topic content under course.</li>
                <li><strong>ExamResult:</strong> score, date, selected answers.</li>
            </ul>
            <h4>Relationship example</h4>
            <pre>One course has many lessons.
One student can join many courses.
One student can have many exam results.</pre>
        </div>
    `,
    "CRUD Operations": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                CRUD is the backbone of admin panels. Any management screen usually needs a list page, add form, edit form,
                delete action, search, and sometimes filters. Once you understand CRUD, many projects become easier.
            </p>
            <h4>Student CRUD UI</h4>
            <pre>Add student form
Student table/list
Edit button for each row
Delete or deactivate button
Search by name or mobile
Filter by course</pre>
            <h4>Backend CRUD pseudocode</h4>
            <pre>create_student(data)
    validate data
    insert into database
    return created student

get_students()
    read rows from database
    return list

update_student(id, data)
    check student exists
    update database
    return updated student

delete_student(id)
    check student exists
    delete or deactivate
    return success</pre>
        </div>
    `,
    "Authentication and Authorization": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                Authentication answers: who are you? Authorization answers: what are you allowed to do? A user may be
                logged in but still not allowed to open admin settings. This separation is important in real applications.
            </p>
            <h4>Session vs token</h4>
            <ul>
                <li><strong>Session:</strong> server stores login data and browser stores session ID.</li>
                <li><strong>Token:</strong> client stores a signed token and sends it with API requests.</li>
            </ul>
            <h4>Protected route idea</h4>
            <pre>if user is not logged in:
    redirect to login page

if user role is not admin:
    show access denied

show admin dashboard</pre>
            <p>
                Always protect important actions on the backend. Hiding a button on the frontend is not enough security.
            </p>
        </div>
    `,
    "MVC and Project Structure": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                MVC is useful because each part has a clear job. When bugs happen, you know where to look. If data saving
                fails, check model/database code. If page display is wrong, check view/template code. If request flow is
                wrong, check controller/route code.
            </p>
            <h4>Small Flask-style structure</h4>
            <pre>app.py                 -> app creation
routes/courses.py      -> course routes
routes/auth.py         -> login routes
services/exam.py       -> exam result logic
models/student.py      -> student database functions
templates/             -> HTML pages
static/                -> CSS, JS, images</pre>
            <h4>Rule of thumb</h4>
            <p>
                If a file is becoming too long and contains many unrelated responsibilities, split it into smaller files.
                Clean structure makes future upgrades easier.
            </p>
        </div>
    `,
    "Version Control with Git": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                Git is like a history notebook for code. Every commit should represent a meaningful change. Instead of
                making one huge commit for many unrelated features, make small commits such as "Add login form" or
                "Fix course image path".
            </p>
            <h4>Good commit messages</h4>
            <pre>Add Full Stack course topics
Fix MySQL overview image path
Improve mobile layout for exam modal
Validate student registration form</pre>
            <h4>Common Git workflow</h4>
            <pre>git status
git add static/script.js
git commit -m "Add Full Stack course content"
git push origin main</pre>
        </div>
    `,
    "Testing and Debugging": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                Debugging should be systematic. Do not guess randomly. First reproduce the problem. Then check browser
                console, network request, backend logs, database records, and recent code changes.
            </p>
            <h4>Debugging flow</h4>
            <pre>Problem: student form does not save
1. Check browser console errors.
2. Check Network tab request.
3. Check backend route received data.
4. Check validation errors.
5. Check database insert query.
6. Check response shown in UI.</pre>
            <h4>Testing levels</h4>
            <ul>
                <li><strong>Unit testing:</strong> test one function.</li>
                <li><strong>Integration testing:</strong> test API with database.</li>
                <li><strong>UI testing:</strong> test user flow in browser.</li>
                <li><strong>Manual testing:</strong> use the app like a real user.</li>
            </ul>
        </div>
    `,
    "Deployment and Hosting": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                Deployment is different from local development. Locally, you may use debug mode and local files. In production,
                you need stable server settings, secure secrets, database backups, and error logging.
            </p>
            <h4>Production concerns</h4>
            <ul>
                <li>Use <code>DEBUG=False</code>.</li>
                <li>Keep secret keys outside code.</li>
                <li>Use a real database backup plan.</li>
                <li>Serve static files correctly.</li>
                <li>Monitor errors after release.</li>
            </ul>
            <h4>Release checklist</h4>
            <pre>Run tests
Check environment variables
Check database connection
Check login
Check main forms
Check static images
Check mobile layout
Deploy
Test live URL</pre>
        </div>
    `,
    "Security Basics": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                Security must be applied at every layer. Frontend should guide the user, backend should enforce rules,
                database should use constraints, and deployment should protect secrets and use HTTPS.
            </p>
            <h4>Common attacks</h4>
            <ul>
                <li><strong>SQL injection:</strong> attacker changes query using malicious input.</li>
                <li><strong>XSS:</strong> attacker injects script into a page.</li>
                <li><strong>CSRF:</strong> attacker tricks logged-in user into submitting unwanted request.</li>
                <li><strong>Brute force:</strong> attacker repeatedly tries passwords.</li>
            </ul>
            <h4>Basic protections</h4>
            <ul>
                <li>Escape user-generated HTML.</li>
                <li>Use parameterized SQL queries.</li>
                <li>Hash passwords.</li>
                <li>Limit login attempts.</li>
                <li>Check authorization on backend routes.</li>
            </ul>
        </div>
    `,
    "Performance Basics": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                Performance problems can happen in frontend, backend, or database. A beautiful page can still feel bad
                if images are too large. A good backend can still be slow if queries read too many rows.
            </p>
            <h4>Performance examples</h4>
            <pre>Frontend issue: 5 MB image on home page
Fix: compress image and use proper size

Backend issue: API returns 10,000 records
Fix: add pagination

Database issue: searching without index
Fix: create index on searched column</pre>
            <h4>Pagination query</h4>
            <pre>SELECT student_id, name, course
FROM students
ORDER BY student_id DESC
LIMIT 20 OFFSET 0;</pre>
        </div>
    `,
    "Full Stack Project Roadmap": `
        <div class="lesson-section">
            <h4>Deep explanation</h4>
            <p>
                A roadmap should turn learning into real output. The best beginner path is to build one feature at a time
                and connect it fully from frontend to database. Do not start with a huge project. Start with student
                registration, then add list, search, edit, delete, login, and reports.
            </p>
            <h4>Phase-wise project plan</h4>
            <ul>
                <li><strong>Phase 1:</strong> static pages with HTML and CSS.</li>
                <li><strong>Phase 2:</strong> JavaScript validation and UI interactions.</li>
                <li><strong>Phase 3:</strong> backend routes for pages and APIs.</li>
                <li><strong>Phase 4:</strong> database tables and CRUD operations.</li>
                <li><strong>Phase 5:</strong> login, roles, and protected dashboard.</li>
                <li><strong>Phase 6:</strong> reports, testing, deployment, and backup.</li>
            </ul>
            <h4>Final project database tables</h4>
            <pre>users
students
courses
enrollments
fees
exam_questions
exam_results</pre>
            <p>
                After completing this roadmap, a student will understand how a real full stack application is planned,
                built, tested, and published.
            </p>
        </div>
    `
};

Object.keys(fullStackExtraContent).forEach((topic) => {
    if (contentData["Full Stack Development"]?.[topic]) {
        contentData["Full Stack Development"][topic] += fullStackExtraContent[topic];
    }
});

let homeMarkup = "";

function setActiveNav(course) {
    document.querySelectorAll(".course-nav-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.courseTitle === course);
    });
}

function updateSidebarMeta(title, helpText, count) {
    const sidebarTitle = document.getElementById("sidebarTitle");
    const sidebarHelp = document.getElementById("sidebarHelp");
    const topicCount = document.getElementById("topicCount");

    if (sidebarTitle) {
        sidebarTitle.innerText = title;
    }

    if (sidebarHelp) {
        sidebarHelp.innerText = helpText;
    }

    if (topicCount) {
        topicCount.innerText = count;
    }
}

function goHome() {
    if (homeMarkup) {
        document.getElementById("content").innerHTML = homeMarkup;
    }
    document.getElementById("topicList").innerHTML = "<li class='empty-topic'>Select a course</li>";
    document.querySelectorAll(".course-nav-btn").forEach((btn) => btn.classList.remove("active"));
    updateSidebarMeta(
        "Topics",
        "Choose a course from the top menu to see its lessons here.",
        0
    );
}

function loadCourse(course, event) {
    if (event && event.currentTarget?.dataset?.courseTitle) {
        setActiveNav(event.currentTarget.dataset.courseTitle);
    } else {
        setActiveNav(course);
    }

    const topics = topicsData[course] || [];
    const topicList = document.getElementById("topicList");
    topicList.innerHTML = "";
    updateSidebarMeta(
        course,
        "Use the lesson list below to move through the course topics.",
        topics.length
    );

    if (!topics.length) {
        topicList.innerHTML = "<li class='empty-topic'>No topics available</li>";
        loadContent(course, "Overview");
        return;
    }

    topics.forEach((topic, index) => {
        const li = document.createElement("li");
        li.innerText = topic;

        li.onclick = () => {
            document.querySelectorAll(".sidebar ul li").forEach((el) => el.classList.remove("active"));
            li.classList.add("active");
            loadContent(course, topic);
        };

        topicList.appendChild(li);

        if (index === 0) {
            li.classList.add("active");
            loadContent(course, topic);
        }
    });
}

function loadContent(course, topic) {
    const text = contentData[course]?.[topic] || `
        <div class="lesson-section">
            <p>Content for <strong>${topic}</strong> will be added soon.</p>
        </div>
    `;

    const content = document.getElementById("content");
    if (content) {
        content.innerHTML = `
            <section class="lesson-view">
                <button type="button" class="back-btn" onclick="goHome()">Back</button>
                <h2>${course} - ${topic}</h2>
                ${text}
            </section>
        `;
        content.scrollTop = 0;
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const modeText = document.getElementById("modeText");
    const icon = document.getElementById("modeIcon");

    if (document.body.classList.contains("dark-mode")) {
        if (modeText) modeText.innerText = "Switch Light Mode";
        if (icon) icon.innerText = "Sun";
    } else {
        if (modeText) modeText.innerText = "Switch Dark Mode";
        if (icon) icon.innerText = "Moon";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const homeContent = document.getElementById("homeContent");
    if (homeContent) {
        homeMarkup = homeContent.outerHTML;
    }
    updateSidebarMeta(
        "Topics",
        "Choose a course from the top menu to see its lessons here.",
        0
    );
});
