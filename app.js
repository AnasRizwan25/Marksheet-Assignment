let marks = [];
let subject = ['Discrete Structure','Digital Logic Design','Applied Physics','Data Structure','Organizational Behavior'];
let userName = prompt('Enter The Name'); 
let userRoll = prompt('Enter The Roll No'); 
document.getElementById('js-name').innerHTML = userName;
function percentage(marks){
  let totalMarks = marks.length * 100;
  let obtainedMarks = 0;
  marks.forEach(i => {
    obtainedMarks +=i;
  });
  let percent = (obtainedMarks * 100) / totalMarks;
return percent;
}
function totalMarks(marks){
  let totalMarks = marks.length * 100;
return totalMarks;
}
function obtainedMarks(marks){
  let obtainedMarks = 0;
  marks.forEach(i => {
    obtainedMarks +=i;
  });
return obtainedMarks;
}
for(let i = 0;i < 5;i++){
  let input;
  console.log(input);
  while(isNaN(input) || input < 0 || input > 100){//This isNaN check if the number is not Number
    input = prompt(`Enter the marks for ${subject[i]} (0-100)`);
    input = Number(input); 
  }
  marks.push(input);
}

let percent = percentage(marks);
let obtainedMark = obtainedMarks(marks);
let totalMark = totalMarks(marks); 

function grading(percent){
  if(percent > 84 && percent <=100) return 'A';
  if(percent > 69 ) return 'B'
  if(percent > 59) return 'C';
  if(percent > 45) return 'D';
return 'F';
}
let grade = grading(percent);

function scholarS(grade){
  if(grade == 'A') return '75% Scholarship';
  if(grade == 'B') return '55% Scholarship';
  if(grade == 'C') return '15% Scholarship';
  return 'No Scholarship';
}
let scholarship = scholarS(grade);
console.log(percent,grade,scholarship);

let html = 
`
    <tr>
      <th class="th1">Roll No</th>
      <th class="th1">Subject</th>
      <th>Marks</th>
      <th>Obtained Marks</th>
      <th>Total Marks</th>
      <th>Grade</th>
      <th>Percentage</th>
      <th>Scholarship</th>
    </tr>
    `;
    
    subject.forEach((a,i) =>{
      html += `
      <tr>
      <td class="a${i+5}">${userRoll}</td>
      <td>${a}</td>
      <td class="marks">${marks[i]}</td>
      <td class="a${i}">${obtainedMark}</td>
      <td class="a${i}">${totalMark}</td>
      <td class="a${i}">${grade}</td>
      <td class="a${i}">${percent}%</td>
      <td class="a${i}">${scholarship}</td>
      </tr>
  `;
});
document.querySelector('.main').innerHTML = html;