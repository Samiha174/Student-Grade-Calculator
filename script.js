function calculateGPA(){
    
    const gradeSelects = document.querySelectorAll('select[name = "gradePoint"]');

    let totalCredits = 0;
    let totalWeightedPoints = 0;  /* totalWeightedPoints = (grade*credit), to calculate gpa */

    gradeSelects.forEach(select => {
    
    const grade = parseFloat(select.value);
    const credit = parseFloat(select.getAttribute('data-credit'));

    if(!isNaN(grade) && !isNaN(credit)){
        totalCredits += credit;
        totalWeightedPoints += grade * credit;
    }
    })

    if(totalCredits == 0){
        document.getElementById("output").textContent = "Please select Grade Points";
        return;
    }
    

    const gpa = (totalWeightedPoints / totalCredits).toFixed(2);
    document.getElementById("output").textContent = "GPA: " + gpa;

}


