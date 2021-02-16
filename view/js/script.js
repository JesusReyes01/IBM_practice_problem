
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
        document.getElementById('summaryTable').appendChild(cellRow)
        
        nameInput.value = '';
        mobileInput.value = '';
        emailInput.value = '';
        error.style.display = 'none';
    }
    

}

document.getElementById('submit')
.addEventListener('click', addContact)