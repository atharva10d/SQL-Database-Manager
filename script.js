document.addEventListener('DOMContentLoaded', initialize);
function initialize() {
    console.log("INITIALIZE FUNCTION IS RUNNING");
    const darkModeToggle = document.getElementById('darkModeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const body = document.body;
    const landingSection = document.getElementById('landingSection');
    const addValuesBox = document.getElementById('addValuesBox');
    const viewTableBox = document.getElementById('viewTableBox');
    const tableListSection = document.getElementById('tableListSection');
    const viewTableSection = document.getElementById('viewTableSection');
    const backToLandingFromTableList = document.getElementById('backToLandingFromTableList');
    const backToLandingFromViewTable = document.getElementById('backToLandingFromViewTable');
    const tableListDropdownForAddValue = document.getElementById('tableListDropdownForAddValue');
    const tableDropdown = document.getElementById('tableDropdown');
    const tableViewSection = document.getElementById('tableViewSection');
    const tableView = document.getElementById('tableView');
    const backToTableSelect = document.getElementById('backToTableSelect');
    const addValueFormSection = document.getElementById('addValueFormSection');
    const backToTableList = document.getElementById('backToTableList');
    const addValueForm = document.getElementById('addValueForm');
    const addValueFormTitle = document.getElementById('addValueFormTitle');
    const addValueStatus = document.getElementById('addValueStatus');
    const backToAddTableList = document.getElementById('backToAddTableList');
    const backToViewTableSelect = document.getElementById('backToViewTableSelect');
    const submitTableViewButton = document.getElementById('submitTableView');
    const submitTableListForAddValue = document.getElementById('submitTableListForAddValue');
    const tables = [
        "Admin", "Shopping_Website", "Supplier", "Supplier_Address",
        "Product_Category", "Category_Target_Audience", "Product", "Cart",
        "Consumer", "Consumer_Contact", "Orders", "Order_Details",
        "Tracking_Details", "Payment"
    ];
    console.log("Tables array initialized:", tables);
    // In-memory database to store all data including newly added values
    let databaseData = {};
    // Helper Functions (Data Simulation and Delay)
    function simulateTableData(tableName) {
        const data = {
            "Admin": [
                { Admin_ID: "ADM001", First_Name: "Adwait", Middle_Name: "A.", Last_Name: "Kamble", Team_Size: 10, Admin_Role: "Manager", Salary: 75000.00 },
                { Admin_ID: "ADM002", First_Name: "Aryan", Middle_Name: "A.", Last_Name: "Aradhye", Team_Size: 8, Admin_Role: "Assistant Manager", Salary: 65000.00 },
                { Admin_ID: "ADM003", First_Name: "Ankit", Middle_Name: "R.", Last_Name: "Gupta", Team_Size: 5, Admin_Role: "Supervisor", Salary: 55000.00 },
                { Admin_ID: "ADM004", First_Name: "Neha", Middle_Name: "S.", Last_Name: "Verma", Team_Size: 6, Admin_Role: "HR", Salary: 50000.00 },
                { Admin_ID: "ADM005", First_Name: "Vikram", Middle_Name: "D.", Last_Name: "Singh", Team_Size: 7, Admin_Role: "Operations Head", Salary: 80000.00 },
                { Admin_ID: "ADM006", First_Name: "Kiran", Middle_Name: "P.", Last_Name: "Yadav", Team_Size: 4, Admin_Role: "Finance Head", Salary: 72000.00 },
                { Admin_ID: "ADM007", First_Name: "Sunil", Middle_Name: "M.", Last_Name: "Chopra", Team_Size: 3, Admin_Role: "Technical Lead", Salary: 68000.00 }
            ],
            "Shopping_Website": [
                { Website_ID: "WEB001", Website_Name: "ShopEase", Website_URL: "https://www.shopease.com", Admin_ID: "ADM001" },
                { Website_ID: "WEB002", Website_Name: "QuickBuy", Website_URL: "https://www.quickbuy.com", Admin_ID: "ADM002" },
                { Website_ID: "WEB003", Website_Name: "MegaMart", Website_URL: "https://www.megamart.com", Admin_ID: "ADM003" },
                { Website_ID: "WEB004", Website_Name: "FastCart", Website_URL: "https://www.fastcart.com", Admin_ID: "ADM004" },
                { Website_ID: "WEB005", Website_Name: "DailyDeals", Website_URL: "https://www.dailydeals.com", Admin_ID: "ADM005" },
                { Website_ID: "WEB006", Website_Name: "BuyItNow", Website_URL: "https://www.buyitnow.com", Admin_ID: "ADM006" },
                { Website_ID: "WEB007", Website_Name: "ShopNow", Website_URL: "https://www.shopnow.com", Admin_ID: "ADM007" }
            ],
            "Supplier": [
                { Supplier_ID: "SUP001", First_Name: "Atharva", Middle_Name: "G.", Last_Name: "Zope", Category: "Electronics" },
                { Supplier_ID: "SUP002", First_Name: "Sonia", Middle_Name: "R.", Last_Name: "Kapoor", Category: "Clothing" },
                { Supplier_ID: "SUP003", First_Name: "Vikas", Middle_Name: "M.", Last_Name: "Jain", Category: "Furniture" },
                { Supplier_ID: "SUP004", First_Name: "Amit", Middle_Name: "L.", Last_Name: "Kumar", Category: "Grocery" },
                { Supplier_ID: "SUP005", First_Name: "Pooja", Middle_Name: "S.", Last_Name: "Sharma", Category: "Toys" },
                { Supplier_ID: "SUP006", First_Name: "Dinesh", Middle_Name: "P.", Last_Name: "Verma", Category: "Footwear" },
                { Supplier_ID: "SUP007", First_Name: "Manisha", Middle_Name: "T.", Last_Name: "Roy", Category: "Accessories" }
            ],
            "Supplier_Address": [
                { Supplier_ID: "SUP001", Address: "Mumbai, Maharashtra" },
                { Supplier_ID: "SUP002", Address: "Delhi, India" },
                { Supplier_ID: "SUP003", Address: "Bangalore, Karnataka" },
                { Supplier_ID: "SUP004", Address: "Chennai, Tamil Nadu" },
                { Supplier_ID: "SUP005", Address: "Kolkata, West Bengal" },
                { Supplier_ID: "SUP006", Address: "Hyderabad, Telangana" },
                { Supplier_ID: "SUP007", Address: "Pune, Maharashtra" }
            ],
            "Product_Category": [
                { Category_ID: "CAT001", Category_Name: "Mobile Phones", Average_Profit: 5000.00, Price_Range: "5000-50000", Supplier_ID: "SUP001" },
                { Category_ID: "CAT002", Category_Name: "Men Clothing", Average_Profit: 1500.00, Price_Range: "500-5000", Supplier_ID: "SUP002" },
                { Category_ID: "CAT003", Category_Name: "Sofas", Average_Profit: 8000.00, Price_Range: "5000-40000", Supplier_ID: "SUP003" },
                { Category_ID: "CAT004", Category_Name: "Daily Groceries", Average_Profit: 200.00, Price_Range: "50-500", Supplier_ID: "SUP004" },
                { Category_ID: "CAT005", Category_Name: "Kids Toys", Average_Profit: 1000.00, Price_Range: "300-5000", Supplier_ID: "SUP005" },
                { Category_ID: "CAT006", Category_Name: "Running Shoes", Average_Profit: 2000.00, Price_Range: "1000-10000", Supplier_ID: "SUP006" },
                { Category_ID: "CAT007", Category_Name: "Sunglasses", Average_Profit: 2500.00, Price_Range: "1000-8000", Supplier_ID: "SUP007" }
            ],
            "Category_Target_Audience": [
                { Category_ID: "CAT001", Target_Audience: "Rich" }, { Category_ID: "CAT001", Target_Audience: "Middle" }, { Category_ID: "CAT001", Target_Audience: "Poor" },
                { Category_ID: "CAT002", Target_Audience: "Middle" }, { Category_ID: "CAT002", Target_Audience: "Poor" },
                { Category_ID: "CAT003", Target_Audience: "Rich" }, { Category_ID: "CAT003", Target_Audience: "Middle" },
                { Category_ID: "CAT004", Target_Audience: "Middle" }, { Category_ID: "CAT004", Target_Audience: "Poor" },
                { Category_ID: "CAT005", Target_Audience: "Middle" }, { Category_ID: "CAT005", Target_Audience: "Poor" },
                { Category_ID: "CAT006", Target_Audience: "Rich" }, { Category_ID: "CAT006", Target_Audience: "Middle" },
                { Category_ID: "CAT007", Target_Audience: "Rich" }, { Category_ID: "CAT007", Target_Audience: "Middle" }, { Category_ID: "CAT007", Target_Audience: "Poor" }
            ],
            "Product": [
                { Product_ID: "PROD001", Product_Name: "iPhone 12", Product_Status: "In Stock", Rating: 4.5, Stocking_Period: 30, Sales: 100, Category_ID: "CAT001" },
                { Product_ID: "PROD002", Product_Name: "Samsung Galaxy S21", Product_Status: "In Stock", Rating: 4.6, Stocking_Period: 30, Sales: 150, Category_ID: "CAT001" },
                { Product_ID: "PROD003", Product_Name: "Levi's Jeans", Product_Status: "In Stock", Rating: 4.2, Stocking_Period: 60, Sales: 200, Category_ID: "CAT002" },
                { Product_ID: "PROD004", Product_Name: "Wooden Sofa Set", Product_Status: "Out of Stock", Rating: 4.8, Stocking_Period: 90, Sales: 50, Category_ID: "CAT003" },
                { Product_ID: "PROD005", Product_Name: "Organic Vegetables", Product_Status: "In Stock", Rating: 4.9, Stocking_Period: 7, Sales: 300, Category_ID: "CAT004" },
                { Product_ID: "PROD006", Product_Name: "Lego Building Blocks", Product_Status: "In Stock", Rating: 4.7, Stocking_Period: 15, Sales: 120, Category_ID: "CAT005" },
                { Product_ID: "PROD007", Product_Name: "Nike Running Shoes", Product_Status: "In Stock", Rating: 4.3, Stocking_Period: 30, Sales: 80, Category_ID: "CAT006" },
                { Product_ID: "PROD008", Product_Name: "Ray-Ban Sunglasses", Product_Status: "In Stock", Rating: 4.4, Stocking_Period: 60, Sales: 110, Category_ID: "CAT007" }
            ],
            "Cart": [
                { Cart_ID: "CART001", Size: "Small", Quantity: 2 },
                { Cart_ID: "CART002", Size: "Medium", Quantity: 5 },
                { Cart_ID: "CART003", Size: "Large", Quantity: 1 }
            ],
            "Consumer": [
                { Consumer_ID: "CON001", First_Name: "CHAUDHARI", Middle_Name: "SHREYASH", Last_Name: "MANOJ", Type: "Normal", House_No: "123", Pincode: "400001", City: "Mumbai", State: "Maharashtra" },
                { Consumer_ID: "CON002", First_Name: "DAMEDHAR", Middle_Name: "ANIKET", Last_Name: "SUNIRAO", Type: "Subscribed", House_No: "456", Pincode: "110001", City: "Delhi", State: "Delhi" },
                { Consumer_ID: "CON003", First_Name: "DHAME", Middle_Name: "VIJAY", Last_Name: "DATTATRAY", Type: "Normal", House_No: "789", Pincode: "560001", City: "Bangalore", State: "Karnataka" }
            ],
            "Consumer_Contact": [
                { Consumer_ID: "CON001", Contact_Number: "9876543210" },
                { Consumer_ID: "CON001", Contact_Number: "8765432109" },
                { Consumer_ID: "CON002", Contact_Number: "7654321098" },
                { Consumer_ID: "CON003", Contact_Number: "6543210987" }
            ],
            "Orders": [
                { Order_ID: "ORD001", Order_Status: "Delivered", Order_Date: "2023-01-15", Shipment_Date: "2023-01-17", Consumer_ID: "CON001", Payment_ID: "PAY001" },
                { Order_ID: "ORD002", Order_Status: "In Progress", Order_Date: "2023-02-10", Shipment_Date: "2023-02-12", Consumer_ID: "CON002", Payment_ID: "PAY002" },
                { Order_ID: "ORD003", Order_Status: "Cancelled", Order_Date: "2023-03-05", Shipment_Date: null, Consumer_ID: "CON003", Payment_ID: "PAY003" }
            ],
            "Order_Details": [
                { Order_ID: "ORD001", Product_ID: "PROD001", Quantity: 1, Price: 45000.00, Discount: 2000.00 },
                { Order_ID: "ORD001", Product_ID: "PROD007", Quantity: 2, Price: 6000.00, Discount: 500.00 },
                { Order_ID: "ORD002", Product_ID: "PROD003", Quantity: 3, Price: 4500.00, Discount: 450.00 },
                { Order_ID: "ORD003", Product_ID: "PROD005", Quantity: 5, Price: 500.00, Discount: 50.00 }
            ],
            "Tracking_Details": [
                { Tracking_ID: "TRK001", Current_Location: "Mumbai", Estimated_Arrival: "2023-01-18", Order_ID: "ORD001" },
                { Tracking_ID: "TRK002", Current_Location: "Delhi", Estimated_Arrival: "2023-02-14", Order_ID: "ORD002" }
            ],
            "Payment": [
                { Payment_ID: "PAY001", Mode_Of_Payment: "Credit Card", Status: "Completed", Amount: 48500.00 },
                { Payment_ID: "PAY002", Mode_Of_Payment: "Debit Card", Status: "Completed", Amount: 4050.00 },
                { Payment_ID: "PAY003", Mode_Of_Payment: "UPI", Status: "Refunded", Amount: 450.00 }
            ]
        };
        
        return data[tableName] || [];
    }
    // Initialize database with sample data
    tables.forEach(table => {
        databaseData[table] = simulateTableData(table);
    });
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    // Table Schema Information
    const tableSchemas = {
        "Admin": [
            { name: "Admin_ID", type: "text", required: true },
            { name: "First_Name", type: "text", required: true },
            { name: "Middle_Name", type: "text", required: false },
            { name: "Last_Name", type: "text", required: true },
            { name: "Team_Size", type: "number", required: true },
            { name: "Admin_Role", type: "text", required: true },
            { name: "Salary", type: "number", required: true }
        ],
        "Shopping_Website": [
            { name: "Website_ID", type: "text", required: true },
            { name: "Website_Name", type: "text", required: true },
            { name: "Website_URL", type: "text", required: true },
            { name: "Admin_ID", type: "text", required: true }
        ],
        "Supplier": [
            { name: "Supplier_ID", type: "text", required: true },
            { name: "First_Name", type: "text", required: true },
            { name: "Middle_Name", type: "text", required: false },
            { name: "Last_Name", type: "text", required: true },
            { name: "Category", type: "text", required: true }
        ],
        "Supplier_Address": [
            { name: "Supplier_ID", type: "text", required: true },
            { name: "Address", type: "text", required: true }
        ],
        "Product_Category": [
            { name: "Category_ID", type: "text", required: true },
            { name: "Category_Name", type: "text", required: true },
            { name: "Average_Profit", type: "number", required: true },
            { name: "Price_Range", type: "text", required: true },
            { name: "Supplier_ID", type: "text", required: true }
        ],
        "Category_Target_Audience": [
            { name: "Category_ID", type: "text", required: true },
            { name: "Target_Audience", type: "text", required: true }
        ],
        "Product": [
            { name: "Product_ID", type: "text", required: true },
            { name: "Product_Name", type: "text", required: true },
            { name: "Product_Status", type: "text", required: true },
            { name: "Rating", type: "number", required: true },
            { name: "Stocking_Period", type: "number", required: true },
            { name: "Sales", type: "number", required: true },
            { name: "Category_ID", type: "text", required: true }
        ],
        "Cart": [
            { name: "Cart_ID", type: "text", required: true },
            { name: "Size", type: "text", required: true },
            { name: "Quantity", type: "number", required: true }
        ],
        "Consumer": [
            { name: "Consumer_ID", type: "text", required: true },
            { name: "First_Name", type: "text", required: true },
            { name: "Middle_Name", type: "text", required: false },
            { name: "Last_Name", type: "text", required: true },
            { name: "Type", type: "text", required: true },
            { name: "House_No", type: "text", required: true },
            { name: "Pincode", type: "text", required: true },
            { name: "City", type: "text", required: true },
            { name: "State", type: "text", required: true }
        ],
        "Consumer_Contact": [
            { name: "Consumer_ID", type: "text", required: true },
            { name: "Contact_Number", type: "text", required: true }
        ],
        "Orders": [
            { name: "Order_ID", type: "text", required: true },
            { name: "Order_Status", type: "text", required: true },
            { name: "Order_Date", type: "date", required: true },
            { name: "Shipment_Date", type: "date", required: false },
            { name: "Consumer_ID", type: "text", required: true },
            { name: "Payment_ID", type: "text", required: true }
        ],
        "Order_Details": [
            { name: "Order_ID", type: "text", required: true },
            { name: "Product_ID", type: "text", required: true },
            { name: "Quantity", type: "number", required: true },
            { name: "Price", type: "number", required: true },
            { name: "Discount", type: "number", required: false }
        ],
        "Tracking_Details": [
            { name: "Tracking_ID", type: "text", required: true },
            { name: "Current_Location", type: "text", required: true },
            { name: "Estimated_Arrival", type: "date", required: true },
            { name: "Order_ID", type: "text", required: true }
        ],
        "Payment": [
            { name: "Payment_ID", type: "text", required: true },
            { name: "Mode_Of_Payment", type: "text", required: true },
            { name: "Status", type: "text", required: true },
            { name: "Amount", type: "number", required: true }
        ]
    };
    // Theme toggling
    function toggleDarkMode() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
        
        // Toggle visibility of sun/moon icons
        if (newTheme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
    darkModeToggle.addEventListener('click', toggleDarkMode);
    // Populate the dropdown lists with table names
    function populateTableDropdowns() {
        // Clear existing options first
        tableListDropdownForAddValue.innerHTML = '<option value="">Select a table</option>';
        tableDropdown.innerHTML = '<option value="">Select a table to view</option>';
        
        // Add options based on the tables array
        tables.forEach(table => {
            const option1 = document.createElement('option');
            option1.value = table;
            option1.textContent = table.replace(/_/g, ' ');
            tableListDropdownForAddValue.appendChild(option1);
            
            const option2 = document.createElement('option');
            option2.value = table;
            option2.textContent = table.replace(/_/g, ' ');
            tableDropdown.appendChild(option2);
        });
    }
    // Navigation event listeners
    addValuesBox.addEventListener('click', () => {
        landingSection.style.display = 'none';
        tableListSection.style.display = 'block';
        populateTableDropdowns();
    });
    viewTableBox.addEventListener('click', () => {
        landingSection.style.display = 'none';
        viewTableSection.style.display = 'block';
        populateTableDropdowns();
    });
    backToLandingFromTableList.addEventListener('click', () => {
        tableListSection.style.display = 'none';
        landingSection.style.display = 'block';
    });
    backToLandingFromViewTable.addEventListener('click', () => {
        viewTableSection.style.display = 'none';
        landingSection.style.display = 'block';
    });
    backToTableList.addEventListener('click', () => {
        addValueFormSection.style.display = 'none';
        tableListDropdownForAddValue.value = '';
    });
    backToTableSelect.addEventListener('click', () => {
        tableViewSection.style.display = 'none';
        tableDropdown.value = '';
    });
    // Table viewing logic
    submitTableView.addEventListener('click', async () => {
        const selectedTable = tableDropdown.value;
        if (!selectedTable) {
            alert('Please select a table to view');
            return;
        }
        // Show table view section and update title
        tableViewSection.style.display = 'block';
        document.getElementById('tableViewTitle').textContent = `Table: ${selectedTable.replace(/_/g, ' ')}`;
        // Display the data from our in-memory database
        createTableFromData(selectedTable, databaseData[selectedTable]);
    });
    // Dynamic table creation
    function createTableFromData(tableName, data) {
        if (!data || data.length === 0) {
            tableView.innerHTML = '<p>No data available for this table.</p>';
            return;
        }
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        
        // Create header row
        const headerRow = document.createElement('tr');
        const columns = Object.keys(data[0]);
        
        columns.forEach(column => {
            const th = document.createElement('th');
            th.textContent = column.replace(/_/g, ' ');
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        
        // Create data rows
        data.forEach(row => {
            const tr = document.createElement('tr');
            
            columns.forEach(column => {
                const td = document.createElement('td');
                td.textContent = row[column] === null ? 'NULL' : row[column];
                tr.appendChild(td);
            });
            
            tbody.appendChild(tr);
        });
        
        table.appendChild(thead);
        table.appendChild(tbody);
        
        // Clear existing content and add new table
        tableView.innerHTML = '';
        tableView.appendChild(table);
    }
    // Add value form generation and submission
    submitTableListForAddValue.addEventListener('click', () => {
        const selectedTable = tableListDropdownForAddValue.value;
        if (!selectedTable) {
            alert('Please select a table to add values');
            return;
        }
        // Show form section and update title
        addValueFormSection.style.display = 'block';
        addValueFormTitle.textContent = `Add Values to Table: ${selectedTable.replace(/_/g, ' ')}`;
        
        // Generate form fields based on table schema
        generateAddValueForm(selectedTable);
    });
    function generateAddValueForm(tableName) {
        const schema = tableSchemas[tableName];
        if (!schema) {
            addValueForm.innerHTML = '<p>Schema not found for this table.</p>';
            return;
        }
        // Set data-table attribute to use in form submission
        addValueForm.setAttribute('data-table', tableName);
        addValueForm.innerHTML = '';
        
        schema.forEach(field => {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';
            
            const label = document.createElement('label');
            label.setAttribute('for', field.name);
            label.textContent = field.name.replace(/_/g, ' ');
            
            const input = document.createElement('input');
            input.setAttribute('id', field.name);
            input.setAttribute('name', field.name);
            input.setAttribute('type', field.type === 'number' ? 'number' : field.type === 'date' ? 'date' : 'text');
            
            if (field.required) {
                input.setAttribute('required', 'required');
                label.innerHTML += ' <span style="color: red;">*</span>';
            }
            
            formGroup.appendChild(label);
            formGroup.appendChild(input);
            addValueForm.appendChild(formGroup);
        });
    }
    addValueForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const tableName = addValueForm.getAttribute('data-table');
        const formData = new FormData(addValueForm);
        const formValues = {};
        
        for (const [key, value] of formData.entries()) {
            // Convert numbers to actual number type
            if (key.includes('Size') || key.includes('Quantity') || key.includes('Rating') || 
                key.includes('Period') || key.includes('Profit') || key.includes('Salary') || 
                key.includes('Sales') || key.includes('Price') || key.includes('Discount') || 
                key.includes('Amount')) {
                formValues[key] = parseFloat(value) || 0;
            } else {
                formValues[key] = value;
            }
        }
        
        addValueStatus.innerHTML = '<p>Processing your request...</p>';
        
        try {
            // Simulate a delay for processing
            await delay(1000);
            
            // Add the new data to our in-memory database
            if (!databaseData[tableName]) {
                databaseData[tableName] = [];
            }
            
            databaseData[tableName].push(formValues);
            
            addValueStatus.innerHTML = '<p style="color: green;">Value added successfully!</p>';
            addValueForm.reset();
            
            // Show the back to table list button
            backToAddTableList.style.display = 'inline-block';
        } catch (error) {
            addValueStatus.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        }
    });
    // Extra back button functionality
    backToAddTableList.addEventListener('click', () => {
        addValueFormSection.style.display = 'none';
        backToAddTableList.style.display = 'none';
        addValueStatus.innerHTML = '';
    });
    backToViewTableSelect.addEventListener('click', () => {
        tableViewSection.style.display = 'none';
    });
}
