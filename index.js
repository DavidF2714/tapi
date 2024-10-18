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
  const tkn = req.body.tkn
  console.log("received token: ", tkn)
  console.log("data type: ", typeof(tkn))
  const { companyCode } = req.query
    const response = await fetch('https://bxlservices.com/dev/ebp/nonoapp/api/v1/Companies/recharges?Category=TELEFONIA', {
        headers: {
            'Authorization': `Bearer ${tkn}` // Replace YOUR_TOKEN_HERE with the actual token
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