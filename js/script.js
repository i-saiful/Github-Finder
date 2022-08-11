const searchUser = document.querySelector('#search-user');
const searchBtn = document.querySelector('#search-btn');
const ui = new UI()

searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;
    if(userText) {
        fetch(`https://api.github.com/users/${userText}`)
            .then(response => response.json())
            .then(data => {
                if(data.message === 'Not Found'){
                    ui.showAlert('User not found!', 'alert alert-danger')
                } else {
                    ui.showProfile(data);
                }
            })
            .catch(error => console.error(error.message))
    } else {
        ui.clearProfile()
    }
})