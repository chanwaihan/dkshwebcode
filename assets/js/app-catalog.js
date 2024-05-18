let catalogue;

const getCatalog = async () => {
   const response = await fetch("./assets/data/catalog-data.json");
   const catalog = await response.json();
   return catalog;
};

const filter_btn = (text) =>
   `<button type="button" class="btn btn-light btn-lg" onclick="getFilteredCatalogue(this)">${text}</button>`;

(async () => {
   catalogue = await getCatalog();

   let filter_parent = document.getElementById("filter-btns");
   const category_names = [
      ...new Set(catalogue.map(({ category_name }) => category_name)),
   ];
   category_names.forEach((category_name) => {
      filter_parent.innerHTML += filter_btn(category_name);
   });

   getFilteredCatalogue({ innerText: "All" });
})();

const catalog_item = (
   filter_name,
   description,
   item,
   url
) => `<div class="case-two__item" onclick="window.location.href = './${url.trim(
   " "
)}'">
                            <div class="case-two__description">
                                <p>${description}</p>
                            </div>
                            <div class="image case-two__image">
                                <img src="assets/images/api/${item}.jpg" alt="image">
                            </div>
                            <div class="case-two__content">
                            <span>${filter_name}</span>
                                <h4 class="text-white">${item}</h4>
                            </div>
                            <a href="${url}" class="case-two__btn">
                                <i class="fa-regular fa-arrow-right"></i>
                            </a>
                        </div>`;

function goto(url) {
   console.log(url);
}

async function getFilteredCatalogue(e) {
   if (!catalogue) {
      catalogue = await getCatalog();
   }
   const filter_name = e.innerText;
   const catalogue_item_parent = document.getElementById("catalog-items");
   catalogue_item_parent.innerHTML = "";

   const all_btns = document.querySelectorAll("#filter-btns button");
   all_btns.forEach((btn) => {
      if (btn.innerText === filter_name) {
         btn.style.background = "#EF233C";
      } else {
         btn.style.background = "#EBEBEB";
      }
   });

   if (filter_name === "All") {
      catalogue.forEach(({ category_name, title, description, url }) => {
         let e = document.createElement("div");
         e.classList = "col-xl-4 col-lg-6 col-md-6";
         e.innerHTML = catalog_item(category_name, description, title, url);
         catalogue_item_parent.appendChild(e);
      });
   } else {
      const api_list = catalogue.filter(
         ({ category_name }) => category_name === filter_name
      );

      api_list.forEach((item) => {
         let e = document.createElement("div");
         e.classList = "col-xl-4 col-lg-6 col-md-6";
         e.innerHTML = catalog_item(
            item.category_name,
            item.description,
            item.title,
            item.url
         );
         catalogue_item_parent.appendChild(e);
      });
   }
}

async function getSearchedAPIs(e) {
   if (!catalogue) catalogue = await getCatalog();
   const search_term = e.value;

   const api_list = catalogue.filter(({ title }) =>
      title.toLowerCase().includes(search_term.toLowerCase())
   );

   const catalogue_item_parent = document.getElementById("catalog-items");
   catalogue_item_parent.innerHTML = "";

   api_list.forEach((item) => {
      let e = document.createElement("div");
      e.classList = "col-xl-4 col-lg-6 col-md-6";
      e.innerHTML = catalog_item(
         item.category_name,
         item.description,
         item.title,
         item.url
      );
      catalogue_item_parent.appendChild(e);
   });
}
