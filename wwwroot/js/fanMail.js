//Define button variable for click event
var calculate = document.getElementById("submitButton");

//Submit button event
calculate.addEventListener("click", function () {
    //Define variables & get input
    var fAssignments = parseFloat(document.getElementById("assignments").value);
    var fGroupProject = parseFloat(document.getElementById("group project").value);
    var fQuizzes = parseFloat(document.getElementById("quizzes").value);
    var fExams = parseFloat(document.getElementById("exams").value);
    var fIntex = parseFloat(document.getElementById("intex").value);
    var fFinalScore;
    var sLetterGrade = "";

    fFinalScore = fAssignments * .5 + fGroupProject * .1 + fQuizzes * .1 + fExams * .2 + fIntex * .1;
    if (fFinalScore >= .94)
        sLetterGrade = "A";
    else if (fFinalScore >= .9)
        sLetterGrade = "A-";
    else if (fFinalScore >= .87)
        sLetterGrade = "B+";
    else if (fFinalScore >= .84)
        sLetterGrade = "B";
    else if (fFinalScore >= .8)
        sLetterGrade = "B-";
    else if (fFinalScore >= .77)
        sLetterGrade = "C+";
    else if (fFinalScore >= .74)
        sLetterGrade = "C";
    else if (fFinalScore >= .7)
        sLetterGrade = "C-";
    else if (fFinalScore >= .67)
        sLetterGrade = "D+";
    else if (fFinalScore >= .64)
        sLetterGrade = "D";
    else
        sLetterGrade = "D-";
    fFinalScore = fFinalScore * 100;
    alert("Your final score is " + fFinalScore.toString() + " and your letter grade is " + sLetterGrade);
});
