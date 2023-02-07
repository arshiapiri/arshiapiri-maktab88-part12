$(function () {
  const cardContainer = $("#cardContainer");
  const paginationContent = $("#paginationContent")
  let page = 1
  let perPage = null;
  let totalPages = null;
  let users = []
  let presentedUser = []
  let defaultUsers = []
  let searchValue;

  const cardGenerator = (user) => {
    return `     
     <div class="col-lg-4 col-mg-4 col-sm-6">
    <div class="card shadow p-2">
      <img src="${user.avatar}" class="card-img-top" alt="...">
      <div class="card-body px=0">
        <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
        <p class="card-text">
          <p>UID: ${user.id}</p>
          <p>Email: ${user.email}</p>
        </p>
        <a href="./profile.html?id=${user.id}" class="w-100 btn btn-primary">Show Profile</a>
      </div>
    </div>
  </div>`
  }

  const cardsRender = () => {
    let html = "";
    for (const user of users) {
      if (removedUsers.includes(String(user.id))) continue;
      html += cardGenerator(user)
    }
    if(!!createdUsers && createdUsers.length !== 0 ){
      for (const user of createdUsers) {
        if (presentedUser.includes(String(user.id))) continue;
        html += cardGenerator(user);
        presentedUser.push(user.id)
      }
    }
    cardContainer.html(html)
  }

  this.handelOnclickNewPage = (newPage) => {
    page = newPage;
    requestHandeler(page);
  }

  const paginationcontentButtons = () => {
    let html = "";
    for (let index = 1; index <= totalPages; index++) {
      html += `<li onclick = "handelOnclickNewPage(${index})" class="page-item ${index == page ? "active" : ""}">
        <a class="page-link">${index}</a></li>`
    }
    return html;
  }

  const paginationContentRenderer = () => {
    paginationContent.html(
      `          
  <li class="page-item">
  <a class="page-link" href="#" aria-label="Previous">
    <span aria-hidden="true">&laquo;</span>
  </a>
  </li>
   ${paginationcontentButtons()}
   <li class="page-item">
  <a class="page-link" href="#" aria-label="Next">
    <span aria-hidden="true">&raquo;</span>
  </a>
  </li>
`
    )

  }

  $("#searchForm").on("submit", function (e) {
    e.preventDefault()
    searchValue = $("#searchInput").val().toLowerCase()
    if (!!searchValue?.trim()) {
      users = defaultUsers.filter(
        (el) =>
        el.first_name.toLowerCase().includes(searchValue) ||
        el.last_name.toLowerCase().includes(searchValue) ||
        el.email.toLowerCase().includes(searchValue)
      )
    }else{
      users = [...defaultUsers]
    }
    cardsRender()
  })
  const requestHandeler = (page) => {
    fetch(`https://reqres.in/api/users?page=${page}`,
      {
        method: "get"
      }).then((response) => {
        return response.json()
      }).then((body) => {
        perPage = body.per_page;
        totalPages = body.total_pages;
        users = [...body.data];
        defaultUsers = [...body.data]
        cardsRender();
        paginationContentRenderer()
      }).catch((err) => {
        console.log(err);
      })
  }
  requestHandeler()
})



