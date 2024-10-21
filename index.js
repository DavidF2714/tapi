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
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjlGREMwMUE1NTdFNEE4RjdFMTBCRjNGRTA3RkI2RTBGNDI0RTEzNzhSUzI1NiIsIng1dCI6Im45d0JwVmZrcVBmaENfUC1CX3R1RDBKT0UzZyIsInR5cCI6ImF0K2p3dCJ9.eyJpc3MiOiJodHRwczovL3Nzby5icm94ZWwuY29tL1Rlc3RJZGVudGl0eSIsIm5iZiI6MTcyOTUyMzkyNCwiaWF0IjoxNzI5NTIzOTI0LCJleHAiOjE3Mjk1Mjc1MjQsImF1ZCI6WyJFYXN5QmlsbFBheS1hcGkiLCJodHRwczovL3Nzby5icm94ZWwuY29tL1Rlc3RJZGVudGl0eS9yZXNvdXJjZXMiXSwic2NvcGUiOlsiRWFzeUJpbGxQYXktYXBpIl0sImFtciI6WyJwd2QiXSwiY2xpZW50X2lkIjoiRWFzeUJpbGxQYXlOb05vQXBwRGV2IiwiY3VzdG9tLmJyb3hlbHVzZXJpZCI6IjBkZjgyNmZiZmI1YmI4M2ExODZjMzExYWJiZWZkOTdlIiwiY3VzdG9tLmVtYWlsIjoiZGF2aWQuZmxvcmVzLmdvLjE2MTZAZ21haWwuY29tIiwic3ViIjoiYjUyMDMzODktN2ZkYS00MjY0LTg2NjMtZTUzYjc3ZGIwYWRjIiwiYXV0aF90aW1lIjoxNzI5NTIzOTI0LCJpZHAiOiJsb2NhbCIsIm5hbWUiOiJOb05vQXBwIn0.EGsmEnckS0bZ3HqaSaKJI9GQ5GxIeD6pVKbyVB4QkjkFS1kPxNi30HJS6ZFdMMIeWcl1kQPndXjKMm0DiP0wo3pbf1RjXfi8Sc-9Eeybcl49iMO7usmzcFRGnnhtxw6iKI-ec0ondBapmRjI_cMgIpPa04oRRar7NB_Hn-sh2vijKsqYXdJfn7Kc_t8LbIJ4UtEP6oItMzNH64PHUsQNP98Qv40O5afdZaBqJwr8C8Y0Y0LBYGyU_5420akhY976Ahz9SVdAex_Byh9yWNmXptFiX-BUSB-Xw_fJlpgd42d3p4mtrR9G-Wfw6wD_eN-aHeJ8CbR7P1NqUww1-_GeKA'
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