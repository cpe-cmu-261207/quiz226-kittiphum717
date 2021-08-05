const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
count_click = 0
btn_toggle.onclick = () => {
  calculation.value = 630610717 - length.value
  if(count_click === 0){
    author.innerHTML = calculation.value
    btn_toggle.innerHTML = "Show Author"
    count_click = 1
  }
  else{
    author.innerHTML = "630610717 KITTIPHUM SANIT"
    btn_toggle.innerHTML = "Show Calculation"
    count_click = 0
  }
}

// more codes for Search and Reset buttons here

