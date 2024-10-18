// Import the necessary modules
const express = require('express');

// Create an instance of an Express application
const app = express();

app.use(express.json())

// Set up a basic route to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
 
app.post('/nono/tapi/recargas', async (req, res) => {

  const { companyCode } = req.query
    const response = await fetch('https://bxlservices.com/dev/ebp/nonoapp/api/v1/Companies/recharges?Category=TELEFONIA', {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjlGREMwMUE1NTdFNEE4RjdFMTBCRjNGRTA3RkI2RTBGNDI0RTEzNzhSUzI1NiIsIng1dCI6Im45d0JwVmZrcVBmaENfUC1CX3R1RDBKT0UzZyIsInR5cCI6ImF0K2p3dCJ9.eyJpc3MiOiJodHRwczovL3Nzby5icm94ZWwuY29tL1Rlc3RJZGVudGl0eSIsIm5iZiI6MTcyOTI3NTQ0MCwiaWF0IjoxNzI5Mjc1NDQwLCJleHAiOjE3MjkyNzkwNDAsImF1ZCI6WyJFYXN5QmlsbFBheS1hcGkiLCJodHRwczovL3Nzby5icm94ZWwuY29tL1Rlc3RJZGVudGl0eS9yZXNvdXJjZXMiXSwic2NvcGUiOlsiRWFzeUJpbGxQYXktYXBpIl0sImFtciI6WyJwd2QiXSwiY2xpZW50X2lkIjoiRWFzeUJpbGxQYXlOb05vQXBwRGV2IiwiY3VzdG9tLmJyb3hlbHVzZXJpZCI6IjBkZjgyNmZiZmI1YmI4M2ExODZjMzExYWJiZWZkOTdlIiwiY3VzdG9tLmVtYWlsIjoic2Jlbml0ZXpwZXJ6QGdtYWlsLmNvbSIsInN1YiI6ImI1MjAzMzg5LTdmZGEtNDI2NC04NjYzLWU1M2I3N2RiMGFkYyIsImF1dGhfdGltZSI6MTcyOTI3NTQ0MCwiaWRwIjoibG9jYWwiLCJuYW1lIjoiTm9Ob0FwcCJ9.FqC7SAQB_RZOx5sf3YvoIFmzk4M38jCxQ18IOLg6Yyho5WU91A5QBfbRIURqWHQxffvf7k0qArcrcFkXlg9N13rW1Uu-iIfyhwabE-1u8eRrrtzu4eH5hJ4v0NftTGwmTQc9YdriKNJNzjNpQVtSDyqnSAUHt7YmIeFkJeg29PjeVJZ5Um61ciD-VdTE033oRJSlk88CsI_BYLF68t1Q0F86puLlUiKbZGLmsxtoA5QAGmVCqQ4tZ-iAXqgnr3L9kEZQhusv4QqwaWYDvoDpC5qlyfqJlfnArUSpcDIB2qArIipkhZtP6fUbHzLuASdIMN3KAJpyPG32Hz5udovMNQ'
        }      
    });
    
    const data = await response.json();

    const { content } = data

    companyCodes = ["MX-R-00007", "MX-R-00008", "MX-R-00028"]

    const findCompany = rc => {
      return companyCodes.includes(rc.code)
    }

    filteredRechargeCompanies = content.rechargeCompanies.filter(rc => findCompany(rc))

    if(companyCode) {
      filteredRechargeCompanies = filteredRechargeCompanies.find(rc => rc.code == companyCode)
    }

    res.json(filteredRechargeCompanies); // Optionally send data back as response
});


// Start the server and listen on a specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});