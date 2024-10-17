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
  console.log(tkn)
    const response = await fetch('https://bxlservices.com/dev/ebp/nonoapp/api/v1/Companies/recharges?Category=TELEFONIA', {
        headers: {
            'Authorization': `Bearer ${tkn}` // Replace YOUR_TOKEN_HERE with the actual token
        }      
    });
    
    const data = await response.json();

    const { content } = data

    console.log("this contenct: ", content)

    companyCodes = ["MX-R-00007", "MX-R-00008", "MX-R-00028"]

    const findCompany = rc => {
      return companyCodes.includes(rc.code)
    }

    filteredRechargeCompanies = content.rechargeCompanies.filter(rc => findCompany(rc))

    res.json(filteredRechargeCompanies); // Optionally send data back as response
});


// Start the server and listen on a specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});