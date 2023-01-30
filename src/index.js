// In src/index.js 

const express = require("express"); 
const app = express(); 

const PORT = process.env.PORT || 3002; 

// For testing purposes 
app.get("/", (req, res) => { 
    res.send('{working}');
});

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});
