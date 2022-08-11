class UI  {
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    showProfile(user) {
        this.clearAlert()
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" class="img-fluid mb-2">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <div class="my-3">
                            <span class="my-1 badge badge-primary">Public Repos: ${user.public_repos}</span>
                            <span class="my-1 badge badge-secondary">Public Gists: ${user.public_gists}</span>
                            <span class="my-1 badge badge-success">Followers: ${user.followers}</span>
                            <span class="my-1 badge badge-info">Following: ${user.following}</span>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }

    clearProfile() {
        this.profile.innerHTML = ''
    }

    showAlert(message, className) {
        this.clearProfile();
        this.clearAlert();
        let div = document.createElement('div')
        div.className = className
        div.appendChild(document.createTextNode(message))
        let container = document.querySelector('.search-container')
        let search = document.querySelector('.search');
        container.insertBefore(div, search);
    }

    clearAlert() {
        let currentAlert = document.querySelector('.alert')
        if(currentAlert) {
            currentAlert.remove()
        }
    }
}