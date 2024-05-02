const dropbtn = document.getElementById('dropbtn');
dropbtn.addEventListener('click', async () => {
  event.preventDefault();})

const dropdownBtn = document.querySelector('.dropdown button');
const dropdownContent = document.querySelector('.dropdown-content');
const dataTextarea = document.getElementById('data');
let requestOptionSelect = "";
const button = document.getElementById('button');
const formattedResponseElement = document.getElementById('formatted-response');

// Update Request Data based on option selected
dropdownContent.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default behavior
  const selectedOption = event.target;
  requestOptionSelect = selectedOption.getAttribute('value');

  // Update textarea content based on selected option (modify the content as needed)
  let updatedData = "";
  switch (requestOptionSelect) {
    case "option1":
      updatedData = `{
"Plant": "TH02",
"StorageLocation": "1151",
"MovementType": "601",
"PostingDatefrom": "2022-09-02",
"LanguageKey": "EN"
}`;
      break;

    case "option2":
      // Update data for option2 (modify the content as needed)
      updatedData = `{
"CompanyCode": "MY88",
"CustomerNumber": "0101000000",
"OpenItemsKeyDate": "",
"BillingDocumentNumber": ""
}`;
      break;
    default:
      // Handle unexpected selection or no selection
      updatedData = "";
  }

  dataTextarea.value = updatedData;
});

// Update Response Data after clicking Simulate Response button
// Based on option selected
button.addEventListener('click', async () => {
  event.preventDefault(); // Prevent default behavior
  try {
    let responseData;
    if (requestOptionSelect === 'option1') {
      // Use existing response data for option 1
      responseData = {
        "GetStockMovementDetails": [
          {
            "Material": "100454283",
            "MaterialDescription": "900001",
            "Plant": "TH02",
            "Name1": "112005797",
            "StorageLocation": "1151",
            "MovementType": "411",
            "MaterialDocument": "4900002257",
            "DocumentDate": "2023-01-18",
            "Item": "1",
            "PostingDate": "2023-01-18",
            "Time": "10:03:51",
            "QtyinUnE": "400",
            "Eun": "PC",
            "Batch": "2410",
            "CustomerCode": "",
            "PurchaseOrder": "",
            "Reference": ""
          },
          {
            "Material": "100454286",
            "MaterialDescription": "900001",
            "Plant": "TH02",
            "Name1": "112005797",
            "StorageLocation": "1151",
            "MovementType": "411",
            "MaterialDocument": "4900002257",
            "DocumentDate": "2023-01-18",
            "Item": "1",
            "PostingDate": "2023-01-18",
            "Time": "10:05:51",
            "QtyinUnE": "-200",
            "Eun": "PC",
            "Batch": "2410",
            "CustomerCode": "",
            "PurchaseOrder": "",
            "Reference": ""
          }
          ]
        }
      }
    if (requestOptionSelect === 'option2') {
      responseData = {
        "result": {
          "PaymentRetrieveItemDetail": [
            {
              "CompanyCode": "MY88",
              "AccountingDocumentNumber": "0100000008",
              "FiscalYear": "2017",
              "AccountingDocumentItemNumber": "001",
              "AssignmentNumber": "1170000013",
              "DocumentDate": "2017-10-25",
              "NetDueDate": "2017-10-25",
              "CustomerNumber": "0101000000",
              "Name1": "MINES METRO OPT CTR C/O M/DESI",
              "Name2": "MINES METRO KAJANG",
              "Name3": "",
              "Name4": "",
              "CurrencyKey": "MYR",
              "BusinessArea": "MY51",
              "CreditControlArea": "MFMG",
              "DocumentHeaderText": "",
              "ReferenceDocumentNumber": "PDF E-INVOICE",
              "Amount": "500.0",
              "NetAmount": "500.0",
              "ShipToParty": "0121092345",
              "ShipToPartyName": "VINMART TIMES CITY",
              "ShipmentNumber": "",
              "Plant": "VN16",
              "SalesOrganization": "VN03",
              "DistributionChannel": "01",
              "Type": "S",
              "Message": "Document 1170000013 found"
            }
          ]
        },
        "resultCount": "1"
      }
    }

    // Format the response data (adjust based on your needs)
    let formattedResponse = "";
    if (requestOptionSelect === "") {
      formattedResponse = 'Please choose an API.';
    }
    else {
      formattedResponse = 'API Response Data ';
      formattedResponse += JSON.stringify(responseData, null, 2);
    }
    formattedResponseElement.textContent = formattedResponse;

  } catch (error) {
    console.error(error);
    formattedResponseElement.textContent = 'Error loading response data.';
  }

});