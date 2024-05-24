let try_catalog;

const getCatalog = async () => {
   const response = await fetch("./assets/data/try-out-data.json");
   const catalog = await response.json();
   return catalog;
};

const li = (text) => `<li>${text}</li>`;

const getOptions = (options) => {
   let res = {};
   let html = "";
   options.forEach((option) => {
      Object.entries(option.onchange).forEach(([key, value]) => {
         if (!res[key]) res[key] = [];
         res[key].push(...value);
      });
   });
   Object.entries(res).forEach(([key, value]) => {
      res[key] = [...new Set(res[key])];
      html += li(
         key + ": " + [...res[key].map((val) => `<b>"${val}"</b>`)].join(", ")
      );
   });
   return html;
};

const loadAPI = (e) => {
   const api_name = e.innerText;
   const api = try_catalog.filter((api) => api.title === api_name)[0];
   const url = api.api_url;
   const options = getOptions(api.req_res);

   document.getElementById("status-badge").style.display = "none";
   document.getElementById("api-request-body").value = "";

   const response_element = document.getElementById("api-response");
   const paramerter_options = document.getElementById("parameter-options");

   response_element.innerHTML = "Click Run to get a response";
   document.getElementById("api-title").innerText = api_name;
   document
      .getElementById("api-title")
      .parentNode.setAttribute(
         "href",
         `/apis/${api_name.toLowerCase().replaceAll(" ", "-")}.html`
      );
   document.getElementById("api-url").innerText = url;
   paramerter_options.innerHTML = options;

   const all_btns = document.querySelectorAll("#try-out-apis li button");
   all_btns.forEach((btn) => {
      if (btn.innerText === api_name) {
         btn.style.background = "#EBEBEB";
      } else {
         btn.style.background = "unset";
      }
   });

   loadSampleRequestBody()
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
      colors:{
         background: "#1a1a1a"
      }
   });
   const response_element = document.getElementById("api-response");
   response_element.innerHTML = html;
   document.getElementById("status-badge").style.display = "block";
};

function findVal(object, key) {
   var value;
   Object.keys(object).some(function (k) {
      if (k === key) {
         value = object[k];
         return true;
      }
      if (object[k] && typeof object[k] === "object") {
         value = findVal(object[k], key);
         return value !== undefined;
      }
   });
   return value;
}

const getResponse = (req, api) => {
   const allowed = api.req_res;
   let response;
   allowed.forEach((a) => {
      let flag = true;
      Object.entries(a.onchange).forEach(([key, value]) => {
         if (!value.includes(findVal(req, key) || "")) {
            flag = false;
         }
      });
      if (flag) {
         response = JSON.parse(
            JSON.stringify(a.response).replaceAll(
               /{{([\w+\s?]+)}}/g,
               (_, group1) => findVal(req, group1) || ""
            )
         );
      }
   });
   return response;
};

const handleRun = () => {
   const api_title = document.getElementById("api-title").innerText;
   const api = try_catalog.filter(({ title }) => title === api_title)[0];
   const api_request_body = JSON.parse(
      document.getElementById("api-request-body").value || "{}"
   );
   let response = getResponse(api_request_body, api) || {
      message: "For full API access and functionality, request for API access on Nova.",
   };

   showResponse(response);
};

const loadSampleRequestBody = () => {
   const api_title = document.getElementById("api-title").innerText;

   const request_body = try_catalog.filter(
      ({ title }) => title === api_title
   )[0].req_res[0].request_body;

   const request_string = JSON.stringify(request_body, null, 4);
   document.getElementById("api-request-body").value = request_string;
};
