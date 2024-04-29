const catalogue = [
   {
      api_list_name: "Customer",
      api_list: [
         "Customer Get Product Detail",
         "Customer Sales Order Simulation",
         "Customer Retrieve Material",
         "Customer Sales Order Get List",
         "Customer Sales Order Get Detail",
         "Customer Product Master Get Stock",
         "Customer Product Master Get Price",
         "Customer Master Get Detail",
         "Customer Update Material Information",
         "Customer Get Sales Org Data",
         "Customer Get General Data",
         "Customer Get Credit Master",
         "Customer Get Company Code",
         "Customer Create Sales Quotation",
         "Customer Sales Order Create",
         "Customer Sales Order Change",
         "Customer Credit Exposure Get",
         "Customer Condition Record Pricing in Sales",
      ],
   },
   {
      api_list_name: "Product",
      api_list: [
         "Product Get Product Stock Detail",
         "Product Get Full Product Detail",
         "Product Get Full Product List",
         "Product Get Purchase Order Detail",
         "Product Create Update Purchase Order API",
      ],
   },
   {
      api_list_name: "Payment",
      api_list: [
         "Payment Retrieve Information",
         "Payment Posting Create",
         "Payment Get SOA Reference Detail",
         "Payment IBAN Get Details",
         "Payment Post Attachment API",
         "Payment Create Update Invoice API",
      ],
   },
   {
      api_list_name: "Supplier",
      api_list: ["Supplier Create Update Supplier API"],
   },
   {
      api_list_name: "Track & Trace",
      api_list: ["Track Order Get Status", "Trace Order Get List"],
   },
   {
      api_list_name: "Warehouse",
      api_list: [
         "Warehouse Stock Transfer",
         "Warehouse Stock Balance Post",
         "Warehouse Goods Receipt Create",
      ],
   },
];

const filter_btn = (text) =>
   `<button type="button" class="btn btn-light btn-lg" onclick="getFilteredCatalogue(this)">${text}</button>`;

(() => {
   let filter_parent = document.getElementById("filter-btns");
   catalogue.forEach(({ api_list_name }) => {
      let e = document.createElement("div");
      e.innerHTML = filter_btn(api_list_name);
      filter_parent.appendChild(e);
   });
})();

const catalog_item = (filter_name, item) => `<div class="case-two__item">
                            <div class="image case-two__image">
                                <img src="assets/images/case/case-two-image1.jpg" alt="image">
                            </div>
                            <div class="case-two__content">
                                <h4><a href="case-details.html" class="text-white">${item}</a></h4>
                                <span>${filter_name}</span>
                            </div>
                            <a href="case-details.html" class="case-two__btn">
                                <i class="fa-regular fa-arrow-right"></i>
                            </a>
                        </div>`;

function getFilteredCatalogue(e) {
   const filter_name = e.innerText;
   const catalogue_item_parent = document.getElementById("catalog-items");
   catalogue_item_parent.innerHTML = "";

   if (filter_name === "All") {
      catalogue.forEach((cat_item) => {
         cat_item.api_list.forEach((item) => {
            let e = document.createElement("div");
            e.classList = "col-xl-4 col-lg-6 col-md-6";
            e.innerHTML = catalog_item(cat_item.api_list_name, item);
            catalogue_item_parent.appendChild(e);
         });
      });
   } else {
      const api_list = catalogue.filter(
         ({ api_list_name }) => api_list_name === filter_name
      )[0].api_list;

      api_list.forEach((item) => {
         let e = document.createElement("div");
         e.classList = "col-xl-4 col-lg-6 col-md-6";
         e.innerHTML = catalog_item(filter_name, item);
         catalogue_item_parent.appendChild(e);
      });
   }
}

getFilteredCatalogue({ innerText: "All" });
