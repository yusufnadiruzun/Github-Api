//elementleri seçme

const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");


eventListeners();

const ui = new UI();
const github = new Github();



function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);

}

function getData(e){
    let username = nameInput.value.trim();
    
    if(username ===""){
        alert("lutfen geçerli bir kullanıcı adı giriniz");
    }
    else{
            console.log("deneme");
            github.getGithubData(username).then(response => {
            if(response.user.message === "Not Found"){console.log("hata")
                ui.showError("kullanıcı bulunamadı");
        }
           
            else{
                ui.addSearchedUserToStorage(username);
                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(response.user); 
                ui.showRepoInfo(response.repo);
            }
        });
        
    
    ui.clearInput();
    e.preventDefault();
}
}

function clearAllSearched(){
    if(confirm("emin misiniz ?")){
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedFromUI();
    }

}

function getAllSearched(){

    let users = Storage.getSearchedUsersFromStorage();

    let result = "";
    users.forEach(user =>{
        result += `<li class="list-group-item">${user}</li>`;
        });

    lastUsers.innerHTML = result;


}
