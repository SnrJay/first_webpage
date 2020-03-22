let name = "Jude Omo-Irabor";

let courses = ["html/css", "javascript", "design", "coding"];

let result = [];

function oddresult(arr) {
    for (let i=1; i<=200; i++) {
        if (i%2 === 0) {
            result.push(i);
        }
    } 
    return result;
}

console.log(oddresult(courses));