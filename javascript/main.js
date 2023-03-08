fetch("../data/tasks.json")
  .then((response) => {
    return response.json();
  })
  .then((tasks) => {
    for (let val of tasks) {
      document.getElementById(
        "tasks"
      ).innerHTML += `<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12"><div id="cardTemplate" class="m-4 mb-5 card bg-dark" style="width: 18rem;">
    <img src="${val.image}" class="card-img-top" alt="${val.taskName}">
    <div class="card-body bg-dark">
    <h5 class="card-title text-light">${val.taskName}</h5>
    <p class="card-text text-light">${val.description}
    </p>
    <p class="text-light important">${val.importance}</p>
    <button class="btn btn-light importanceBtn">Importance</button>
    <a class="btn btn-success importantColor">Not Important</a>
    </div>
    </div>
    </div>`;
    }
    let btns = document.getElementsByClassName("importanceBtn");
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        tasks[i].importance++;
        document.getElementsByClassName("important")[i].innerHTML =
          tasks[i].importance;
      });
    }
  });
