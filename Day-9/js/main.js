let showText = document.querySelector(".data-tables-footer p");
let tbody = document.querySelector(".tbody");
let nextPage = document.querySelector(".next-page");
let prePage = document.querySelector(".prev-page");
let perPageCount = document.querySelector("#per-page-count");
let pages = document.querySelector(".pages");

let pageEvent = null;
let perPage = 10;
let currentPage = 1;
printTable(perPage, currentPage);

perPageCount.addEventListener("change", function () {
  perPage = Number(perPageCount.value);
  currentPage = 1;
  printTable(perPage, currentPage);
});

nextPage.addEventListener("click", function () {
  pageEvent = 1;
  currentPage++;
  printTable(perPage, currentPage);
});

prePage.addEventListener("click", function () {
  pageEvent = 0;
  currentPage--;
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
  setPages(currentPage);

  // if we want to cut array ==> slice(startIndex,endIndex+1);
  // MATHs ==> ceil --> 4.1 ==> 5
  // MATHs ==> floor --> 4.1 ==> 4

  // printData

  // 70/3 ==> 23.33 --> 24
}

function setPages(currentPage) {
  if (pageEvent === 1) {
    if ((currentPage - 1) % 6 === 0) {
      let start = currentPage;
      let end = currentPage + 6;

      let liList = `<li class="prev-page">Pre</li>`;
      for (start; start < end; start++) {
        liList += `<li>${start}</li>`;
      }
      liList += `<li class="next-page">Next</li>`;
      pages.innerHTML = liList;
      setEvents();
    }
  } else {
    if (currentPage % 6 === 0) {
      let start = currentPage;
      let end = currentPage - 6;
      let count = currentPage + 1 - 6;

      let liList = `<li class="prev-page">Pre</li>`;
      for (start; start > end; start--) {
        liList += `<li>${count}</li>`;
        count++;
      }
      liList += `<li class="next-page">Next</li>`;
      pages.innerHTML = liList;
      setEvents();
    }
  }
  // console.log(currentPage);

  resetLi();
}

function resetLi() {
  // re-setting lis
  let lis = document.querySelectorAll(`.pages li`);
  lis.forEach(function (value, index) {
    if (index > 0 && index < 7) {
      value.classList.remove("active");
    }
  });

  // update ui
  let nthPage = currentPage % 6;
  nthPage = nthPage === 0 ? 6 : nthPage;

  let cPageLi = document.querySelector(`.pages li:nth-child(${nthPage + 1})`);
  cPageLi.classList.add("active");
}
function setEvents() {
  let nextPage = document.querySelector(".next-page");
  let prePage = document.querySelector(".prev-page");
  nextPage.addEventListener("click", function () {
    pageEvent = 1;
    currentPage++;
    printTable(perPage, currentPage);
  });

  prePage.addEventListener("click", function () {
    pageEvent = 0;
    currentPage--;
    printTable(perPage, currentPage);
  });
}
