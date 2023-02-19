//QUESTION 3

let classGroup = "Arts";


let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
let artsSubjects = 'Government, Economics, Literature, History';
let generalSubjects = 'English, Mathematics';


if (classGroup == "Arts") {
    console.log(artsSubjects + ", " + generalSubjects);
} else if(classGroup == "Science"){
    console.log(scienceSubjects + ", " + generalSubjects);
} else if(classGroup == "Social science"){
    console.log(socialScienceSubjects + ", " + generalSubjects)
} else {
    console.log(generalSubjects);
}





//QUESTION 5

let num = 35;

let pwr = Math.pow(2, Math.round(Math.log2(num)));
console.log("The number " + pwr + " is the power of 2 nearest to " + num);
