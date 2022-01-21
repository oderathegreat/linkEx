let save_Input = document.getElementById('saveInput');
const myLeads = [];
const inputEL = document.getElementById('inputEl');
const ulEl = document.getElementById('ul-el');


//saving user data into local storage
let leadsStrogae = JSON.parse(localStorage.getItem('myLeads'));

//check if user data is passed

if(leadsStrogae) {
myLeads = localStorage;
renderLeads();

}


//on click listerner for save Input element
save_Input.addEventListener('click', function() {
 //document.getElementById("msg").value = ""; 
      myLeads.push(inputEL.value);

      //local storage of our array items
localStorage.setItem('myLeads', JSON.stringify(myLeads));

       renderLeads();     
});

//render leads function

    function renderLeads() {
     
                let listItems = "";
                for(let i=0; i < myLeads.length; i+=1){


                listItems += `<li><a target='_blank' href=' ${myLeads[i]}  '> ${myLeads[i]}   </a></li>`; 


                }
            
                ulEl.innerHTML = listItems;
                //Clear out input field
                document.getElementById('inputEl').value = "";
        
    }