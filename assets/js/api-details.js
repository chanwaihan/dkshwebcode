let catalogue;

const getCatalog = async () => {
   const response = await fetch("../assets/data/catalog-data.json");
   const catalog = await response.json();
   return catalog;
};

const option = (value) => `<option value="${value}">${value}</option>`;

const displayRequestExample = async (api_name, option) => {
   const api = catalogue.filter((item) => item.title === api_name)[0];
   const request_body = api.request_body.filter(
      (body) => body.name === option
   )[0].body;
   const request_panel = document.getElementById("request-body-example");
   request_panel.innerHTML = jsontohtml(request_body);
};

const handleOptionOnChange = () => {
   const api_name = document.getElementById("api_name").innerText;
   const option_panel = document.getElementById("example-options");

   displayRequestExample(api_name, option_panel.value);
};

const showReponse = () => {
   const response_panel = document.getElementById("response-example");
   const api_name = document.getElementById("api_name").innerText;

   const api = catalogue.filter((item) => item.title === api_name)[0];
   const response = api.response;

   response_panel.innerHTML = jsontohtml(response);
};

(async () => {
   catalogue = await getCatalog();
   handleOptionOnChange();
   showReponse();
})();
