// السؤال الاؤل

console.log(
  " :مرحباً بك في برنامج توظيف المبرمجين👩‍💻👨‍💻، يُرجى الإجابة عن الأسئلة التالية"
);
skills = ["HTML", "CSS", "JavaScript", "PHP", "Swift", "Java"];
wanted_skill = 0;

cv = {};
cv["name"] = prompt(" ما اسمك؟");
cv["age"] = prompt(" كم عمرك؟");
cv["experience"] = prompt(" كم عدد سنوات الخبرة لديك؟");

console.log("\n");
console.log(" :لغات البرمجة");
console.log("1. " + skills[0]);
console.log("2. " + skills[1]);
console.log("3. " + skills[2]);
console.log("4. " + skills[3]);
console.log("5. " + skills[4]);
console.log("6. " + skills[5]);

console.log("\n");
cv["skills"] = [];

let skill = prompt("اختر لغة تتقنها من لغات البرمجة المذكورة بإدخال رقمها");
cv["skills"].push(skills[parseInt(skill) - 1]);

skill = prompt("اختر لغة برمجة أخرى");
cv["skills"].push(skills[parseInt(skill) - 1]);

if (
  parseInt(cv["age"]) > 25 &&
  parseInt(cv["age"]) < 40 &&
  parseInt(cv["experience"]) > 3 &&
  (cv["skills"][0] == skills[wanted_skill]) |
    (cv["skills"][1] == skills[wanted_skill])
) {
  console.log("تهانينا، تم قبولك يا" + " " + cv["name"]);
} else {
  console.log(".نأسف، أنت لست رائعاً بالشكل الكافي لتعمل معنا");
}


// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.

// السؤال الثاني

// const logger = function (array) {
//   array.forEach((temp) => console.log(temp));
// };
const logger = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
// ------------------------------------------------------------------
// const toCelsius = function (temperatures) {
//   return temperatures.map((t) => parseInt((t - 32) * (5 / 9)));
// };
const toCelsius = function (temperatures) {
  for (let i = 0; i < temperatures.length; i++) {
    cel_temp_array.push(
      (temperatures[i] = parseInt((temperatures[i] - 32) * (5 / 9)))
    );
  }
  return cel_temp_array;
};
// ------------------------------------------------------------------
// const hottestDays = function (temperatures, threshold) {
//   return temperatures.filter((t) => t > threshold);
// };
const hottestDays = function (temperatures, threshold) {
  for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > threshold) {
      temp_gt_th.push(temperatures[i]);
    }
  }
  return temp_gt_th;
};
// ------------------------------------------------------------------
// const logHottestDays = function (temperatures, threshold) {
//   logger(toCelsius(hottestDays(temperatures, threshold)));
// };
const logHottestDays = function (temperatures, threshold) {
  logger(toCelsius(hottestDays(temperatures, threshold), cel_temp_array));
};
// ------------------------------------------------------------------
// example
let feh_temp_array = [32, 70, 99, 106];
// let threshold = 30;
let threshold = 70;
let cel_temp_array = [];
let temp_gt_th = [];
console.log("مثال باستخدام الدالة الأخيرة فقط");
console.log("مصفوفة درجات الحرارة بالفهرنهايت", feh_temp_array);
console.log("القيمة المبدئية بالفهرنهايت", threshold);
console.log("--------------------------------------------");
// logger(feh_temp_array);
// console.log("--------------------------------------------");
// console.log(toCelsius(feh_temp_array));
// console.log("--------------------------------------------");
// console.log(hottestDays(cel_temp_array, threshold));
// console.log("--------------------------------------------");
// Bonus - Some of the above console.logs will change in bonus case
// logger(toCelsius(hottestDays(feh_temp_array, threshold)));
logger(toCelsius(hottestDays(feh_temp_array, threshold), cel_temp_array));

// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
// السؤال الثالث
function calculauion (){
  let input1= document.getElementById("ingrade1").value ;
  let input2= document.getElementById("ingrade2").value ;
  let input3= document.getElementById("ingrade3").value ;
  let input4= document.getElementById("ingrade4").value ;
  let resault = parseFloat(input1)+parseFloat(input2)+parseFloat(input3)+parseFloat(input4);
  console.log(resault);



  let total = (document.getElementById("numeric").innerHTML+=parseFloat(input1)+parseFloat(input2)+parseFloat(input3)+parseFloat(input4))
//document.getElementById("numeric").innerHTML+"text ";


//let resault
if( resault>90 )
{document.getElementById('letter').innerHTML+="A";}

else if (resault  > 80 )
{ document.getElementById('letter').innerHTML+="B";}

else if (resault > 70  )
{ document.getElementById('letter').innerHTML+="C";}

else if ( resault > 60) 
{ document.getElementById('letter').innerHTML+="D";}


else 
{document.getElementById('letter').innerHTML+="F";}
}