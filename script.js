```javascript
let students = JSON.parse(localStorage.getItem("students")) || [];

// -----------------------------
// Grade Calculator
// -----------------------------

function calculateResult() {

    const marks = [
        Number(document.getElementById("ds").value) || 0,
        Number(document.getElementById("oop").value) || 0,
        Number(document.getElementById("cn").value) || 0,
        Number(document.getElementById("dbms").value) || 0,
        Number(document.getElementById("math").value) || 0
    ];

    const total = marks.reduce((sum, mark) => sum + mark, 0);

    const percentage = total / 5;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B+";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else if (percentage >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    const status = percentage >= 40 ? "Pass" : "Fail";

    document.getElementById("previewPercentage").textContent =
        percentage.toFixed(2) + "%";

    document.getElementById("previewGrade").textContent = grade;

    document.getElementById("previewStatus").textContent = status;

    return {
        marks,
        total,
        percentage,
        grade,
        status
    };
}


// Automatically calculate while entering marks

["ds", "oop", "cn", "dbms", "math"].forEach(id => {

    document.getElementById(id).addEventListener("input", calculateResult);

});


// -----------------------------
// Add Student
// -----------------------------

document.getElementById("studentForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const result = calculateResult();

    const student = {

        id: Date.now(),

        name: document.getElementById("name").value,

        roll: document.getElementById("roll").value,

        email: document.getElementById("email").value,

        course: document.getElementById("course").value,

        semester: document.getElementById("semester").value,

        phone: document.getElementById("phone").value,

        marks: {

            ds: result.marks[0],

            oop: result.marks[1],

            cn: result.marks[2],

            dbms: result.marks[3],

            math: result.marks[4]

        },

        total: result.total,

        percentage: result.percentage,

        grade: result.grade,

        status: result.status

    };

    students.push(student);

    saveStudents();

    displayStudents();

    updateDashboard();

    this.reset();

    document.getElementById("previewPercentage").textContent = "0%";

    document.getElementById("previewGrade").textContent = "-";

    document.getElementById("previewStatus").textContent = "-";

    alert("Student added successfully!");

});


// -----------------------------
// Save Data
// -----------------------------

function saveStudents() {

    localStorage.setItem("students", JSON.stringify(students));

}


// -----------------------------
// Display Students
// -----------------------------

function displayStudents() {

    const table = document.getElementById("studentTable");

    const search = document
        .getElementById("search")
        .value
        .toLowerCase();

    table.innerHTML = "";

    const filteredStudents = students.filter(student =>

        student.name.toLowerCase().includes(search) ||

        student.roll.toLowerCase().includes(search) ||

        student.course.toLowerCase().includes(search)

    );

    if (filteredStudents.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="8" style="text-align:center;padding:30px;">
                    No students found
                </td>
            </tr>
        `;

        return;
    }

    filteredStudents.forEach(student => {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${student.roll}</td>

            <td>
                <strong>${student.name}</strong>
            </td>

            <td>${student.course}</td>

            <td>${student.semester}</td>

            <td>
                ${student.percentage.toFixed(2)}%
            </td>

            <td>
                <span class="grade">
                    ${student.grade}
                </span>
            </td>

            <td>

                <span class="badge ${
                    student.status === "Pass"
                    ? "pass"
                    : "fail"
                }">

                    ${student.status}

                </span>

            </td>

            <td>

                <button
                    class="action-btn view-btn"
                    onclick="viewStudent(${student.id})">

                    👁 View

                </button>

                <button
                    class="action-btn delete-btn"
                    onclick="deleteStudent(${student.id})">

                    🗑 Delete

                </button>

            </td>
        `;

        table.appendChild(row);

    });

}


// -----------------------------
// Dashboard
// -----------------------------

function updateDashboard() {

    const total = students.length;

    const passed = students.filter(
        student => student.status === "Pass"
    ).length;

    const failed = students.filter(
        student => student.status === "Fail"
    ).length;

    let average = 0;

    if (total > 0) {

        average =
            students.reduce(
                (sum, student) => sum + student.percentage,
                0
            ) / total;

    }

    document.getElementById("totalStudents").textContent = total;

    document.getElementById("passedStudents").textContent = passed;

    document.getElementById("failedStudents").textContent = failed;

    document.getElementById("averagePercentage").textContent =
        average.toFixed(2) + "%";

}


// -----------------------------
// View Student
// -----------------------------

function viewStudent(id) {

    const student = students.find(
        student => student.id === id
    );

    if (!student) return;

    document.getElementById("studentDetails").innerHTML = `

        <div class="detail-row">
            <strong>Name:</strong>
            ${student.name}
        </div>

        <div class="detail-row">
            <strong>Roll Number:</strong>
            ${student.roll}
        </div>

        <div class="detail-row">
            <strong>Email:</strong>
            ${student.email}
        </div>

        <div class="detail-row">
            <strong>Phone:</strong>
            ${student.phone || "Not provided"}
        </div>

        <div class="detail-row">
            <strong>Course:</strong>
            ${student.course}
        </div>

        <div class="detail-row">
            <strong>Semester:</strong>
            ${student.semester}
        </div>

        <div class="detail-row">
            <strong>Data Structures:</strong>
            ${student.marks.ds}
        </div>

        <div class="detail-row">
            <strong>OOP:</strong>
            ${student.marks.oop}
        </div>

        <div class="detail-row">
            <strong>Computer Networks:</strong>
            ${student.marks.cn}
        </div>

        <div class="detail-row">
            <strong>DBMS:</strong>
            ${student.marks.dbms}
        </div>

        <div class="detail-row">
            <strong>Mathematics:</strong>
            ${student.marks.math}
        </div>

        <div class="detail-row">
            <strong>Total Marks:</strong>
            ${student.total}/500
        </div>

        <div class="detail-row">
            <strong>Percentage:</strong>
            ${student.percentage.toFixed(2)}%
        </div>

        <div class="detail-row">
            <strong>Grade:</strong>
            ${student.grade}
        </div>

        <div class="detail-row">
            <strong>Status:</strong>
            ${student.status}
        </div>

    `;

    document.getElementById("modal").style.display = "flex";

}


// -----------------------------
// Close Modal
// -----------------------------

function closeModal() {

    document.getElementById("modal").style.display = "none";

}


// -----------------------------
// Delete Student
// -----------------------------

function deleteStudent(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    students = students.filter(
        student => student.id !== id
    );

    saveStudents();

    displayStudents();

    updateDashboard();

}


// -----------------------------
// Dark Mode
// -----------------------------

function toggleTheme() {

    document.body.classList.toggle("dark");

    const darkMode =
        document.body.classList.contains("dark");

    localStorage.setItem("darkMode", darkMode);

    document.getElementById("themeBtn").textContent =
        darkMode
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";

}


// Load saved theme

if (localStorage.getItem("darkMode") === "true") {

    document.body.classList.add("dark");

    document.getElementById("themeBtn").textContent =
        "☀️ Light Mode";

}


// -----------------------------
// Export CSV
// -----------------------------

function exportCSV() {

    if (students.length === 0) {

        alert("No student records available.");

        return;

    }

    let csv =
        "Roll No,Name,Email,Course,Semester,Percentage,Grade,Status\n";

    students.forEach(student => {

        csv +=
            `"${student.roll}",` +
            `"${student.name}",` +
            `"${student.email}",` +
            `"${student.course}",` +
            `"${student.semester}",` +
            `"${student.percentage.toFixed(2)}%",` +
            `"${student.grade}",` +
            `"${student.status}"\n`;

    });

    const blob = new Blob(
        [csv],
        { type: "text/csv" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "student-records.csv";

    link.click();

    URL.revokeObjectURL(url);

}


// -----------------------------
// Initial Load
// -----------------------------

displayStudents();

updateDashboard();
```
