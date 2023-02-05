$(function () {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");
    let userData;
  
    const avatarContainer = $("#avatarContainer");
    const infoContainer = $("#infoContainer");
    const removeUserBtn = $("#removeUserBtn");

    removeUserBtn.on("click", function() {
        addUserToRemoveList(userId);
    })

    const userProfileRenderer = () => {
      avatarContainer.html(
        `<img src="${userData.avatar}" class="w-100 img-fluid rounded"/>`
      );
      infoContainer.html(`
      <p>UID: ${userId}</p>
      <p>Firstname: ${userData.first_name}</p>
      <p>Lastname: ${userData.last_name}</p>
      <p>Email: ${userData.email}</p>
      `);
    };

    const requestHandeler = () => {
      fetch(`https://reqres.in/api/users/${userId}`,
          {
              method: "get"
          }).then((response) => {
              return response.json()
          }).then((body) => {
            userData = body.data;
            if(removedUsers.includes(userId)) {
              infoContainer.html(`
              <p>User not found</p>
              `);
            }
            else{
              userProfileRenderer();
            }
          }).catch((err) => {
            if (err.status === 404) {
              infoContainer.html(`
              <p>User not found</p>
              `);
            } else {
              alert("Something went wrong.");
            }
          })
  }
  
    requestHandeler();
  });
