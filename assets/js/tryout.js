let try_catalog;

const getCatalog = async () => {
   const response = await fetch("./assets/data/try-out-data.json");
   const catalog = await response.json();
   return catalog;
};

const loadAPI = (e) => {
   const api_name = e.innerText;
   const api = try_catalog.filter((api) => api.title === api_name)[0];
   const category_name = api.category_name;
   const url = api.api_url;
   const description = api.description;

   document.getElementById("status-badge").style.display = "none";
   document.getElementById("api-request-body").value = "";

   const response_element = document.getElementById("api-response");

   response_element.innerHTML = "Click Run to get a response";
   document.getElementById("api-title").innerText = api_name;
   document.getElementById("api-url").innerText = url;
   document.getElementById("api-description").innerText = description;
};

const try_btn = (category, text) =>
   `<button onclick="loadAPI(this)" data-category="${category}">${text}</button>`;

(async () => {
   try_catalog = await getCatalog();

   const try_out_list = document.getElementById("try-out-apis");
   for (let i = 0; i < try_catalog.length; i++) {
      const item = try_catalog[i];
      const li = document.createElement("li");
      li.innerHTML = try_btn(item.category_name, item.title);
      try_out_list.appendChild(li);
   }

   loadAPI({ innerText: try_catalog[0].title });
})();

const showResponse = (data) => {
   const html = jsontohtml(data, {
      space_from_left: "10px",
      space: "15px",
      fontSize: "12px",
      line_numbers: { show: false },
      retractors: { space_from_left: "0px" },
      comments: { show: false },
   });
   const response_element = document.getElementById("api-response");
   response_element.innerHTML = html;
   document.getElementById("status-badge").style.display = "block";
};

const handleRun = () => {
   const api_title = document.getElementById("api-title").innerText;
   const api = try_catalog.filter(({ title }) => title === api_title)[0];
   const api_request_body =
      document.getElementById("api-request-body").value || "{}";
   let response = {};
   if (
      JSON.stringify(JSON.parse(api_request_body)) ===
      JSON.stringify(api.request_body[0].body)
   ) {
      response = api.response;
   } else {
      response = {
         success: false,
         message: "Subscription is Required for further use of the API.",
         process: "Contact the service provider",
      };
   }
   showResponse(response);
};

const loadSampleRequestBody = () => {
   const api_title = document.getElementById("api-title").innerText;

   const request_body = try_catalog.filter(
      ({ title }) => title === api_title
   )[0].request_body[0].body;

   const request_string = JSON.stringify(request_body, null, 4);
   document.getElementById("api-request-body").value = request_string;
};
