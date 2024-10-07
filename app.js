let marks = [];
let subject = ['Discrete Structure','Digital Logic Design','Applied Physics','Data Structure','Organizational Behavior'];
let userName = prompt('Enter The Name'); 
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

function grading(percent){
  if(percent > 84 && percent <=100) return 'A';
  if(percent > 69 ) return 'B'
  if(percent > 59) return 'C';
  if(percent > 49) return 'D';
  if(percent > 39) return 'D';
return 'F';
}
let grade = grading(percent);

function scholarS(grade){
  if(grade == 'A') return '75% Scholarship';
  if(grade == 'B') return '55% Scholarship';
  if(grade == 'C') return '30% Scholarship';
  return 'No Scholarship';
}
let scholarship = scholarS(grade);
console.log(percent,grade,scholarship);

let html = 
`
    <tr>
      <th class="th1">Subject</th>
      <th>Marks</th>
      <th>Grade</th>
      <th>Percentage</th>
      <th>Scholarship</th>
    </tr>
    `;
    
    subject.forEach((a,i) =>{
      html += `
      <tr>
      <td class="sub">${a}</td>
      <td class="marks">${marks[i]}</td>
      <td class="a${i}">${grade}</td>
      <td class="a${i}">${percent}%</td>
      <td class="a${i}">${scholarship}</td>
      </tr>
  `;
});


document.querySelector('.main').innerHTML = html;