class Storage{

    static getSearchedUsersFromStorage(){
        // tum kullanıcıları al 

        let users;

        if(localStorage.getItem("searched") === null){
            users =[];
        }else{
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }
    static addSearchedUserToStorage(username){
        // kullanıcıEkle
        let users = this.getSearchedUsersFromStorage();
        //indexof
        if(users.indexOf(username)== -1){
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));

    }
    static clearAllSearchedUsersFromStorage(){
        //tum kullanicilari sil
        localStorage.removeItem("searched");
    }

}