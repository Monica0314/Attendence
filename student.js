document.getElementById("form1").addEventListener("submit", submitFun1);

var studentDataArr = JSON.parse(localStorage.getItem("studentData")) || [];


function submitFun1(e) {
    document.querySelector("#tbody").innerHTML = "";
    e.preventDefault();
    var dept = document.querySelector("#dept").value;
    var year = document.querySelector("#year").value;
    var section = document.querySelector("#section").value;
    var rollNo = document.querySelector("#rollNo").value;

    var studentObj = {
        dept: dept,
        year: year,
        section: section,
        rollNo: rollNo
    }

    studentDataArr.push(studentObj);
    localStorage.setItem("studentData", JSON.stringify(studentDataArr));
    document.querySelector("#form1").reset();
    alert("Student Added Successfully");

    displayFun(studentDataArr);
}


function displayFun(studentDataArr) {
    var count = 1;
    studentDataArr.map(function (item) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerHTML = count++;
        var td2 = document.createElement("td");
        td2.innerHTML = item.dept;
        var td3 = document.createElement("td");
        td3.innerHTML = item.year;
        var td4 = document.createElement("td");
        td4.innerHTML = item.section;
        var td5 = document.createElement("td");
        td5.innerHTML = item.rollNo;
        var td6 = document.createElement("td");
        var btn1 = document.createElement("button");
        btn1.innerHTML = "P";
        btn1.addEventListener("click", function () {
            td6.innerHTML = "<button>Present</button>";
        });
        var btn2 = document.createElement("button");
        btn2.innerHTML = "A";
        btn2.addEventListener("click", function () {
            td6.innerHTML = "<button id='absent'>Absent</button>";
        });
        var btn3 = document.createElement("button");
        btn3.innerHTML = "OD";
        btn3.addEventListener("click", function () {
            td6.innerHTML = "<button>Present</button>";
        });
        td6.classList.add("td6");
        td6.append(btn1, btn2, btn3);

        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("#tbody").append(tr);
    });
}

displayFun(studentDataArr);

// Add event listener to the Clear button
document.getElementById("clearBtn").addEventListener("click", function () {
    // Clear the localStorage
    localStorage.removeItem("studentData");
    
    // Clear the array holding the student data
    studentDataArr = [];
    
    // Clear the table contents
    document.querySelector("#tbody").innerHTML = "";
    
    alert("All student details cleared.");
});