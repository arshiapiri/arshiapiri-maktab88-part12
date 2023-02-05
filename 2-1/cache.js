let removedUsers = []

let removedUsersKey = "removedUsers"

const parseLocalStorage = () => {
 const list =  localStorage.getItem(removedUsersKey);
if(!!list){
  removedUsers = list.split("|").filter((el) => !!el.trim())
  console.log(removedUsers);
}
}
const addUserToRemoveList = (id) => {
  removedUsers.push(id)
    localStorage.setItem(removedUsersKey,removedUsers.join("|"))
}
parseLocalStorage()