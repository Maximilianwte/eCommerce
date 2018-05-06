module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Server Start Online.')
  })
  
  app.post("/api/data", (req, res) => {
    
  });
};
