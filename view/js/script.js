
function addContact() {
    const nameInput = document.getElementById('name')
    const mobileInput = document.getElementById('mobile')
    const emailInput = document.getElementById('email')
    const error = document.getElementById('error')
    const name = nameInput.value
    const mobile = mobileInput.value
    const email = emailInput.value
    console.log(name.length)
    if(name.length > 20 || name.length !== 0){
        error.style.display = 'block'
    }
    if(mobile.length !==10 ){
        error.style.display = 'block'
    }
    if(email.length > 40 || email.length !== 0 || email.includes('@') === false){
        error.style.display = 'block'
    }
    if(name.length < 20 && name.length > 0 && mobile.length === 10 && email.length < 40 && email.length > 0 && email.includes('@')){
        const cellRow = document.createElement('tr')
        const nameCell = document.createElement('td')
        const nameText = document.createTextNode(name)
        nameCell.appendChild(nameText)
        const mobileCell = document.createElement('td')
        const mobileText = document.createTextNode(mobile)
        mobileCell.appendChild(mobileText)
        const emailCell = document.createElement('td')
        const emailText = document.createTextNode(email)
        emailCell.appendChild(emailText)
        cellRow.appendChild(nameCell)
        cellRow.appendChild(mobileCell)
        cellRow.appendChild(emailCell)
        document.getElementsByTagName('tbody')[0].appendChild(cellRow)
        
        nameInput.value = '';
        mobileInput.value = '';
        emailInput.value = '';
        error.style.display = 'none';
    }
}

function sortContacts() {
    
    let rows;
    let i, shouldSwitch, switchCount = 0;
    let contacts = document.getElementById("summaryTable");
    let switching = true;
    let dir = "asc"; 
    while (switching) {
      switching = false;
      rows = contacts.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        let x = rows[i].getElementsByTagName("TD")[0];
        let y = rows[i + 1].getElementsByTagName("TD")[0];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchCount ++;      
      } else {
        if (switchCount === 0 && dir === "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

document.getElementById('submit')
.addEventListener('click', addContact)

document.getElementById('nameColumn')
.addEventListener('click', sortContacts)