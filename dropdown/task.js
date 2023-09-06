const dropdownValue = document.querySelector(".dropdown__value");
//console.log(dropdownValue);
const dropdownList = document.querySelector(".dropdown__list");
//console.log(dropdownList);

dropdownValue.addEventListener("click", () => {
  dropdownList.classList.toggle("dropdown__list_active");
})

function select(event) {
    //console.log(dropdownValue.textContent); 
	dropdownValue.textContent = event.target.textContent;
    //console.log(event.target.textContent);
	dropdownList.classList.remove("dropdown__list_active");
	event.preventDefault();
}

dropdownList.addEventListener("click", select);