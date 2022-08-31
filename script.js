let mycalc = document.querySelector("#calc");

mycalc.addEventListener("click", function () {
    // GETTING THE VALUE
    let math = document.querySelector("#math").value;
    let eng = document.querySelector("#eng").value;
    let bio = document.querySelector("#bio").value;
    let chem = document.querySelector("#chem").value;

    /* Converting the string to integer. */
    math_marks = parseInt(math);
    eng_marks = parseInt(eng);
    bio_marks = parseInt(bio);
    chem_marks = parseInt(chem);

    // giving the report
    let obtaine_marks = document.querySelector("#obtaine_marks");
    let grade = document.querySelector("#grade");
    let remarks = document.querySelector("#remarks");



    let sum = math_marks + eng_marks + bio_marks + chem_marks;
    obtaine_marks.innerHTML = sum;

    setTimeout(() => {
        if (sum >= 390) {
            grade.innerHTML = "A++";
            remarks.innerHTML = "Excellent";
            remarks.style.color = "white"
            remarks.style.background = "RED"
        }
        else if (sum >= 360) {
            grade.innerHTML = "A+";
            remarks.innerHTML = "Very Good";
        }
        else if (sum >= 340) {
            grade.innerHTML = "A";
            remarks.innerHTML = "Best";
        }
        else if (sum >= 300) {
            grade.innerHTML = "B";
            remarks.innerHTML = "Well done";
        }
        else if (sum >= 250) {
            grade.innerHTML = "C";
            remarks.innerHTML = "Good";
        }
        else if (sum >= 220) {
            grade.innerHTML = "D";
            remarks.innerHTML = "Pass";
        }
        else {
            grade.innerHTML = "E";
            remarks.innerHTML = "Fail Try Again...";
            remarks.style.color = "RED"
        }
    }, 2000)

})
