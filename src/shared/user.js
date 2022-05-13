import localStorage from 'localStorage';

export const getUser = () => {
    const user = localStorage.getItem("user");
    if(user) return user;
}

export const getUserID = () => {
    const user = localStorage.getItem("user");
    const id = JSON.parse(user)?.id
    if(id) return id;
}