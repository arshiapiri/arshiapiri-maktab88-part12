async function getUser() {
    const res = await fetch('https://reqres.in/api/users?page=1')
    users = await res.json();
    users = users.data
    console.log(users)
}
getUser()