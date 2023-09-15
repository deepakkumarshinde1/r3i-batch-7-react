let showText = document.querySelector(".data-tables-footer p");
let tbody = document.querySelector(".tbody");
let nextPage = document.querySelector(".next-page");

let perPage = 10;
let currentPage = 1;
printTable(perPage, currentPage);

nextPage.addEventListener("click", function () {
  currentPage++;
  printTable(perPage, currentPage);
});

function printTable(perPage, currentPage) {
  let totalPages = Math.ceil(users.length / perPage);
  showText.innerHTML = `Showing page ${currentPage} of ${totalPages}`;
  let start = currentPage * perPage - perPage;
  let end = perPage * currentPage;
  let perPageList = users.slice(start, end);

  let list = perPageList.map(function (user, index) {
    return `<tr>
            <td>${user.id}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</td>
            <td>${user.gender}</td>
            <td>${user.ip_address}</td>
            </tr>`;
  });

  //convert array to string ---> join()
  tbody.innerHTML = list.join("");

  // if we want to cut array ==> slice(startIndex,endIndex+1);
  // MATHs ==> ceil --> 4.1 ==> 5
  // MATHs ==> floor --> 4.1 ==> 4

  // printData

  // 70/3 ==> 23.33 --> 24
}
