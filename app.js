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
let a = 4;
console.log(typeof(a))
for(let i = 0;i < 5;i++){
  let input = +prompt(`Enter The Marks Of ${subject[i]}`);
  if(input < 101){
    marks.push(input);
  } else{
    alert('Number between 1 to 101');
  }
}

let percent = percentage(marks);

function grading(percent){
  let grade = '';
  if(percent > 84 && percent <=100){
    grade = 'A';
  } else if(percent > 69 ){
    grade = 'B';
  } else if(percent > 59){
    grade = 'C';
  }else if(percent > 49){
    grade = 'D';
  }else if(percent > 39){
    grade = 'D';
  }else{
    grade = 'F';
  }
return grade;
}
let grade = grading(percent);

function scholarS(grade){
  let sch = '';
  if(grade == 'A'){
    sch = '75% Scholarship';
  }else if(grade == 'B'){
    sch = '55% Scholarship';
  }else if(grade == 'C'){
    sch = '30% Scholarship';
  }else{
    sch = 'No Scholarship';
  }
return sch;
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