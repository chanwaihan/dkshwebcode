const changeChart = (chart) => {
   if (chart === "Apis") {
      let chart_html = `<iframe title="API_summary" width="1800" height="700.25" src="https://app.powerbi.com/reportEmbed?reportId=755839ca-0b55-4032-ad5a-737715b06073&autoAuth=true&ctid=fe9c4641-3b53-43d0-af72-8f3e64d3aa05" frameborder="0" allowFullScreen="true"></iframe>`;
      document.getElementById("api-analytics-frame").innerHTML = chart_html;
      document.getElementById("Apis").style.background = "#EF233C";
      document.getElementById("Applications").style.background = "#ebebeb";
   } else {
      let chart_html = `<iframe title="ApplicationSummary" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=0f8e6ded-e5f0-44bb-90fa-fbbca3f4ccdb&autoAuth=true&ctid=fe9c4641-3b53-43d0-af72-8f3e64d3aa05" frameborder="0" allowFullScreen="true"></iframe>`;
      document.getElementById("api-analytics-frame").innerHTML = chart_html;
      document.getElementById("Applications").style.background = "#EF233C";
      document.getElementById("Apis").style.background = "#ebebeb";
   }
};

changeChart("Apis");
