const express = require('express');
const app = express();

app.use(express.json());

// TODO: Add routes and middleware here
app.get('/', (req, res) => {
  res.send('Express ToDo App Template');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
}); 