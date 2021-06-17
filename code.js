// STEP ONE - Create your Data Model.
let dataModel = [
    {name: "Taro", breed: "Husky", age: 4, likesTreats: true},
    {name: "Puffball", breed: "Pomeranian", age: 8, likesTreats: false},
    {name: "Kaiya", breed: "Shiba Inu", age: 1, likesTreats: true}
]; 

// Variables
  let nameInput = document.querySelector("#name_input");  
  let breedInput = document.querySelector("#breed_input");
  let ageInput = document.querySelector("#age_input");
  let treatsCheckbox = document.querySelector("#treats_input");
  let list = document.querySelector("#dog_list");
  let button = document.querySelector("#submit_button");

// a dog object, and add the dog object to the data model array.
function handleSubmit (event) {
  event.preventDefault();

  let name = nameInput.value;
  let breed = breedInput.value;
  let age = ageInput.value;
  let likesTreats = treatsCheckbox.checked;
  
  // Guarge clause
  if (name === "" || breed === "" || age === "") {  
    alert("Please fill out all of the fields!");
    return; 
  }

  // STEP TWO - Create a "dog" variable. A new "dog" object, containing the values from above:name, breed, age, likeTreats. Add this object to your data model array.

  let newDog = 
    {name: name, 
     breed: breed, 
     age: age, 
     likesTreats: likesTreats
    }
dataModel.push(newDog);

// Render the data model
  renderDogList(); 

// Reset the form
  nameInput.value = "";
  breedInput.value = "";
  ageInput.value = "";
  treatsCheckbox.checked = false;
}


// Add list to the page
// STEP THREE
function renderDogList() {
  // If no dogs render "No Dogs!"
  if (dataModel.length === 0) {
    list.innerHTML = "<li>No Dogs!</li>"
  } else {
    list.innerHTML = ""
  }

  
  for (let i = 0; i < dataModel.length; i += 1){
    let dogInput = dataModel[i]
    let li = document.createElement('li')
    li.innerHTML = `${dogInput.name}! Is a ${dogInput.age} years old ${dogInput.breed}${dogInput.likesTreats ? " who likes treats": ""}. &nbsp;&nbsp;`

    list.append(li)

    // button to remove dog
    let sendHomeButton = document.createElement('button')
    sendHomeButton.append("Send Home")
    sendHomeButton.addEventListener("click", function() {
    removeDog(dogInput)
  })
  li.append(sendHomeButton)
  }
 
}
 
// Remove dog Function
function removeDog(dog) {
  let dogIndex = dataModel.indexOf(dog);
  dataModel.splice(dogIndex, 1);

  renderDogList();
}

button.addEventListener("click", handleSubmit);

/* This function call will take place when the page loads, in order to render the dog list for the very first time.*/
renderDogList();
