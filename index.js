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
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjlGREMwMUE1NTdFNEE4RjdFMTBCRjNGRTA3RkI2RTBGNDI0RTEzNzhSUzI1NiIsIng1dCI6Im45d0JwVmZrcVBmaENfUC1CX3R1RDBKT0UzZyIsInR5cCI6ImF0K2p3dCJ9.eyJpc3MiOiJodHRwczovL3Nzby5icm94ZWwuY29tL1Rlc3RJZGVudGl0eSIsIm5iZiI6MTcyOTI3NzcxNywiaWF0IjoxNzI5Mjc3NzE3LCJleHAiOjE3MjkyODEzMTcsImF1ZCI6WyJFYXN5QmlsbFBheS1hcGkiLCJodHRwczovL3Nzby5icm94ZWwuY29tL1Rlc3RJZGVudGl0eS9yZXNvdXJjZXMiXSwic2NvcGUiOlsiRWFzeUJpbGxQYXktYXBpIl0sImFtciI6WyJwd2QiXSwiY2xpZW50X2lkIjoiRWFzeUJpbGxQYXlOb05vQXBwRGV2IiwiY3VzdG9tLmJyb3hlbHVzZXJpZCI6IjBkZjgyNmZiZmI1YmI4M2ExODZjMzExYWJiZWZkOTdlIiwiY3VzdG9tLmVtYWlsIjoic2Jlbml0ZXpwZXJ6QGdtYWlsLmNvbSIsInN1YiI6ImI1MjAzMzg5LTdmZGEtNDI2NC04NjYzLWU1M2I3N2RiMGFkYyIsImF1dGhfdGltZSI6MTcyOTI3NzcxNywiaWRwIjoibG9jYWwiLCJuYW1lIjoiTm9Ob0FwcCJ9.OUKY07kjAMOr9IPuxWL5YZACrlDigIgJNSk7h724FfAegfbb_LV0emvX5okqanDOE4l00MFY6gZeAGg8WkyREehpfAkHUSQghgmTsmL7Qhea9keziHSP3OjkEinO_1t6igMS2aWH4udoouwuw5VmI7S-V0r86Bg0ZJ8WtDwkwJvXKZCksdDkPJydtBGsBPV-6lilzAnXAnfJE7KcWDk4ILPDaMaEP5stH4SdOvj9HXrEZ3B1gAt11uCECACrOsd-48dD0xQLIcnSI9tKQ6Q-WYptRlCw0pQTUePHU5-xO-YK0FsE4yCsH0exbFB3pZPtJ1-5REl5IspLSE6Lk-qbPA'
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