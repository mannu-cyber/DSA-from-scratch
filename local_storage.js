const studentBioData = {
  name: "Abhimanyu Sahani",
  class: "2nd year bcom",
  backGround: " non Tech",
};

const addBtn = document.querySelector("#button1");
const getBtn = document.querySelector("#button2");
const removeBtn = document.querySelector("#button3");

addBtn.addEventListener("click", () => {
  localStorage.setItem('studentsData',JSON.stringify(studentBioData));
  console.log("hellow");
});

getBtn.addEventListener("click", () => {
  localStorage.getItem('studentsData',JSON.parse(studentBioData));
});

removeBtn.addEventListener("click", () => {
  localStorage.removeItem('studentsData',studentBioData);
});
