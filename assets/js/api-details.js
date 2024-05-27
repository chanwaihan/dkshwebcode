let catalogue;

const getCatalog = async () => {
   const response = await fetch("../assets/data/catalog-data.json");
   const catalog = await response.json();
   return catalog;
};

const option = (value) => `<option value="${value}">${value}</option>`;

const json_options = {
   colors: { background: "#41444e" },
   comments: {
      show: false
   }
};

const displayRequestExample = async (api_name, option) => {
   const api = catalogue.filter((item) => item.title === api_name)[0];
   const request = api.request_body.filter((body) => body.name === option)[0];
   const request_body = request.body;
   const response = request.response;

   const request_panel = document.getElementById("request-body-example");
   request_panel.innerHTML = jsontohtml(request_body, json_options);

   if (response) {
      showReponse(response);
   }
};

const handleOptionOnChange = () => {
   const api_name = document.getElementById("api_name").innerText;
   const option_panel = document.getElementById("example-options");

   displayRequestExample(api_name, option_panel.value);
};

const showReponse = (res) => {
   const response_panel = document.getElementById("response-example");
   const api_name = document.getElementById("api_name").innerText;

   const api = catalogue.filter((item) => item.title === api_name)[0];
   const response = api.response || api.request_body[0].response;

   if (!res) response_panel.innerHTML = jsontohtml(response, json_options);
   else response_panel.innerHTML = jsontohtml(res, json_options);
};

(async () => {
   catalogue = await getCatalog();
   handleOptionOnChange();
   showReponse();
})();
