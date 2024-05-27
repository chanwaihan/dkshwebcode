const changeChart = (chart) => {
   if (chart === "Apis") {
      let chart_html = `<iframe title="API_summary" width="1800" height="700.25" src="https://app.powerbi.com/reportEmbed?reportId=f7d1c17d-09f9-4d1a-b23f-58c7fdc594d3&autoAuth=true&ctid=fe9c4641-3b53-43d0-af72-8f3e64d3aa05" frameborder="0" allowFullScreen="true"></iframe>`;
      document.getElementById("api-analytics-frame").innerHTML = chart_html;
      document.getElementById("Apis").style.background = "#EF233C";
      document.getElementById("Applications").style.background = "#ebebeb";
   } else {
      let chart_html = `<iframe title="ApplicationSummary" width="1800" height="700.25" src="https://app.powerbi.com/reportEmbed?reportId=85f7cfd0-95ca-4b3f-b43a-bf1b6ccf14d3&autoAuth=true&ctid=fe9c4641-3b53-43d0-af72-8f3e64d3aa05" frameborder="0" allowFullScreen="true"></iframe>`;
      document.getElementById("api-analytics-frame").innerHTML = chart_html;
      document.getElementById("Applications").style.background = "#EF233C";
      document.getElementById("Apis").style.background = "#ebebeb";
   }
};

changeChart("Apis");




