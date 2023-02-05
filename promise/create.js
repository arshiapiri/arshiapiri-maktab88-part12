$(function () {
  let lastId;
  let avatar;
  let fname;
  let lname;
  let email;

  $("#avatar_input").change(function (e) {
    e.preventDefault();
    avatar = e.target.value.replace("C:\\fakepath\\", "");
  });

  $("#fname_input").keyup(function (e) {
    fname = e.target.value;
  });

  $("#lname_input").keyup(function (e) {
    lname = e.target.value;
  });

  $("#email_input").change(function (e) {
    email = e.target.value;
  });

  $("#createUserBtn").click(function (e) {
    addUserToCreatedList({
      email,
      last_name: lname,
      first_name: fname,
      id: lastId,
      avatar,
    });
    window.location.href = "index.html";
  });

  const requestHandeler = () => {
    fetch(`https://reqres.in/api/users`,
      {
        method: "get"
      }).then((response) => {
        return response.json()
      }).then((body) => {
        lastId =+ body.total + 1;
        console.log(lastId)
      }).catch((err) => {
        console.log(err);
        alert("Something went wrong.");
      })
  }
  requestHandeler()
});