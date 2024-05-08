const long_desc = [
   {
      api_name: "Customer Get Product Detail",
      category_name: "Customer",
      long_description: `The data return in this API includes:
•	Product Details Stock
•	Product Details UOM
•	Product Details Price General
•	Product Details Price General Scale
•	Product Details FOC
•	Product Details FOC Scale
`,
   },
   {
      api_name: "Customer Sales Order Simulation",
      category_name: "Customer",
      long_description: `The data return in this API includes:
•	Sales Order Simulate Item
•	Sales Order Simulate FOC
•	Sales Order Simulate Header FOC
•	Sales Order Simulate Pricing
•	Sales Order Simulate Stock
`,
   },
   {
      api_name: "Customer Sales Order Create",
      category_name: "Customer",
      long_description: `The following are sales order types that can be created using this API.
•	Standard Order
•	One Time Customer
•	Create with reference to Quotation
•	Create with reference to Sales Order Number
•	Consignment Sales Order
•	Credit Return Sales Order

Refer to the standard segment SalesOrderHeader, SalesOrderItem and SalesOrderParty that are required for sales order creation.

This API allows to create a single sales order per call.
`,
   },
   {
      api_name: "Customer Master Get Detail",
      category_name: "Customer",
      long_description: `The data return in this API include:
•	Customer General Data
•	Customer Credit Data
•	Customer Sales Organization Data
•	Customer Partner Data
PartnerFunction = AG ; BPCustomerNumber = Sold To Party
PartnerFunction = RG ; BPCustomerNumber = Payer
PartnerFunction = WE ; BPCustomerNumber = Ship-to party
PartnerFunction = RE ; BPCustomerNumber = Bill-to party
`,
   },
   {
      api_name: "Customer Product Master Get Price",
      category_name: "Customer",
      long_description: `The data return in this API include:
•	Product Details Price General
•	Product Details Price General Scale
•	Product Details FOC
•	Product Details FOC Scale
`,
   },
   {
      api_name: "Customer Create Sales Quotation",
      category_name: "Customer",
      long_description: `•	This API covers 2 types of sales quotation:
-	Standard
-	One Time Customer
•	Please refer below for the standard segment SalesQuotationHeader, SalesQuotationItem and SalesQuotationParty that are required for sales quotation creation.
•	This API allows to create a single sales quotation per call.
`,
   },
   {
      api_name: "Customer Product Master Get Stock",
      category_name: "Customer",
      long_description: `The data returned in this API includes:
•	Product Details Stock
•	Product Details Stock Count
`,
   },
   {
      api_name: "Customer Retrieve Material",
      category_name: "Customer",
      long_description: `The data returned in this API include:
•	Customer Material Details
•	Customer Material Count
`,
   },
   {
      api_name: "Customer Condition Record in Pricing Sales",
      category_name: "Customer",
      long_description: `•	This API allows to create a single or multiple price update per call.`,
   },
   {
      api_name: "Customer Get Credit Master Detail",
      category_name: "Customer",
      long_description: ``,
   },
   {
      api_name: "Customer Update Material Information",
      category_name: "Customer",
      long_description: `•	This API allows to input a multiple material and distribution chain combination per customer in a single call.`,
   },
   {
      api_name: "Customer Get Company Code Detail",
      category_name: "Customer",
      long_description: ``,
   },
   {
      api_name: "Customer Get Sales Org Data",
      category_name: "Customer",
      long_description: ``,
   },
   {
      api_name: "Customer Get General Data Details",
      category_name: "Customer",
      long_description: ``,
   },
   {
      api_name: "Customer Change Sales Order",
      category_name: "Customer",
      long_description: `Change Sales Order API updates Sales Order Header and Item level information. While changing Item level information, it can cover following scenarios:
•	Update Line Item
•	Insert New Item
•	Delete Line Item
`,
   },
   {
      api_name: "Customer Get Sales Order List",
      category_name: "Customer",
      long_description: ``,
   },
   {
      api_name: "Customer Get Credit Exposure",
      category_name: "Customer",
      long_description: `The data returned by this API includes:
•	Credit Limit Details
`,
   },
   {
      api_name: "Product Get Purchase Order Detail",
      category_name: "Product",
      long_description: `The data returned by this API includes:
•	Purchase Order Header Details
•	Purchase Order Items Details
•	Purchase Order Item Schedules
•	Purchase Order Item History Totals
`,
   },
   {
      api_name: "Product Get Full Product Detail",
      category_name: "Product",
      long_description: `The data return in this API include:
•	Product Detail
•	Product Detail Class
•	Product Detail Basic Text
•	Product Stock Detail
•	Product Moving Average Price (MAP) Detail
Note: The Product MAP Detail data will only be returned in the response structure upon approval from the API Team.
`,
   },
   {
      api_name: "Product Get Full Product List",
      category_name: "Product",
      long_description: `The data return in this API includes:
•	Product List
`,
   },
   {
      api_name: "Product Get Product Stock Detail",
      category_name: "Product",
      long_description: `The data returned in this API include:
•	Product Detail
•	Product Stock Detail
•	Product Moving Average Price (MAP) Detail
•	Vendor Consignment Stock Detail
•	Sales Order Detail
•	Purchase Order Detail
Note:
•	The Product MAP Detail data will only be returned in the response structure upon approval from the API Team.
•	The PurchaseOrderNetPrice and Currency fields under Purchase Order Detail are only returned in the response structure upon approval from the API Team.
`,
   },
   {
      api_name: "Product Get Stock Movement Detail",
      category_name: "Product",
      long_description: ``,
   },
   {
      api_name: "Product Create Update Purchase Order",
      category_name: "Product",
      long_description: `This API covers below example schema:
•	Create Purchase Order
•	Update Purchase Order
`,
   },
   {
      api_name: "Warehouse Create Goods Receiving",
      category_name: "Warehouse",
      long_description: ``,
   },
   {
      api_name: "Warehouse Create Stock Transfer",
      category_name: "Warehouse",
      long_description: ``,
   },
   {
      api_name: "Warehouse Post Stock Balance",
      category_name: "Warehouse",
      long_description: ``,
   },
   {
      api_name: "Warehouse Create Goods Receipt",
      category_name: "Warehouse",
      long_description: ``,
   },
   {
      api_name: "Payment Retrieve Information",
      category_name: "Payment",
      long_description: `The data return in this API include:
•	Payment Retrieve Item Detail
`,
   },
   {
      api_name: "Payment Posting Create",
      category_name: "Payment",
      long_description: ``,
   },
   {
      api_name: "Payment Get SOA Ref. Data Detail",
      category_name: "Payment",
      long_description: ``,
   },
   {
      api_name: "Payment Post Attachment",
      category_name: "Payment",
      long_description: ``,
   },
   {
      api_name: "Payment Create Update Invoice",
      category_name: "Payment",
      long_description: ``,
   },
   {
      api_name: "Payment Get IBAN Details",
      category_name: "Payment",
      long_description: ``,
   },
   {
      api_name: "Trace Order Get Status",
      category_name: "Track & Trace",
      long_description: ``,
   },
   {
      api_name: "Trace Order List",
      category_name: "Track & Trace",
      long_description: ``,
   },
   {
      api_name: "Supplier Create Update Supplier",
      category_name: "Supplier",
      long_description: ``,
   },
];
