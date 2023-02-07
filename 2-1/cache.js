let removedUsers = []
let createdUsers = []
let removedUsersKey = "removedUsers"
let createdUsersKey = "createdUsers"

const parseLocalStorage = () => {
 const removeUsersTemp =  localStorage.getItem(removedUsersKey);
if(!!removeUsersTemp ){
  removedUsers = removeUsersTemp .split("|").filter((el) => !!el.trim())
  console.log(removedUsers);
}
const createdUsersTemp =  localStorage.getItem(createdUsersKey);
if(!!createdUsersTemp?.trim()){
  removedUsers = JSON.parse(createdUsersTemp) 
  console.log(createdUsers);
}
}
const addUserToRemoveList = (id) => {
  removedUsers.push(id)
    localStorage.setItem(removedUsersKey,removedUsers.join("|"))
}
const addUserToCreateList = (user) => {
  removedUsers.push(user)
    localStorage.setItem(createdUsersKey, JSON.stringify(createdUsers))
}
parseLocalStorage()