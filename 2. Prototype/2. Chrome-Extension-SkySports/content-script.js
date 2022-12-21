chrome.runtime.sendMessage({ greeting: "results" }, function (response) {

  const listItems = document.getElementsByClassName('fixres__item');

  for (let i = 0; i < listItems.length; i++) {

    const url = listItems[i].children[0].href;
    const teams = url.split('/')[4].split('-vs-');

    const home_team = teams[0].replaceAll("-", " ");
    const away_team = teams[1].replaceAll("-", " ");

    for (var result of response) {
      if ((home_team == result.Home_Team.toLowerCase()) && (away_team == result.Away_Team.toLowerCase())) {
        if (result.FTR == result.Prediction) {
          listItems[i].children[0].style.backgroundColor = "Green";
        } else {
          listItems[i].children[0].style.backgroundColor = "Red";
        }
      }
    }

  }

});



chrome.runtime.sendMessage({ greeting: "fixtures" }, function (response) { 

  const listItems = document.getElementsByClassName('fixres__item');

  for (let i = 0; i < listItems.length; i++) {

    const url = listItems[i].children[0].href;
    const teams = url.split('/')[4].split('-vs-');

    const home_team = teams[0].replaceAll("-", " ");
    const away_team = teams[1].replaceAll("-", " ");

    for (var fixture of response) {
      if ((home_team == fixture.Home_Team.toLowerCase()) && (away_team == fixture.Away_Team.toLowerCase())) {
        if(fixture.Prediction == "H") {
          listItems[i].children[0].children[0].textContent = "Home Win";
          listItems[i].children[0].children[0].style.backgroundColor = "Green"
          listItems[i].children[0].children[0].style.fontWeight = "bold"
          listItems[i].children[0].children[0].style.textAlign = "center"
        } else {
          listItems[i].children[0].children[4].textContent = "Not Home Win";
          listItems[i].children[0].children[4].style.backgroundColor = "Red"
          listItems[i].children[0].children[4].style.fontWeight = "bold"
          listItems[i].children[0].children[4].style.textAlign = "center"
        }
    }

  }

}});