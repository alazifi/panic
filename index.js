const express = require("express");
const app = express();
const port = 3000;

// Middleware untuk parsing JSON (POST request)
app.use(express.json());

// Endpoint GET
app.get("/panic", (req, res) => {
  const id = req.params.id;
  res.json({
    id: id,
    title: "Sample Post",
    body: "This is a sample response for the post.",
  });
});

// Endpoint POST
app.post("/posts", (req, res) => {
  const { title, body } = req.body;
  res.json({
    message: "Post created successfully!",
    post: { title, body },
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
