// const express = require("express");
// const app = express();
// const port = 3000;

// // Middleware untuk parsing JSON (POST request)
// app.use(express.json());

// // Endpoint GET
// app.get("/panic", (req, res) => {
//   const id = req.params.id;
//   res.json({
//     id: id,
//     title: "Sample Post",
//     body: "This is a sample response for the post.",
//   });
// });

// // Endpoint POST
// app.post("/posts", (req, res) => {
//   const { title, body } = req.body;
//   res.json({
//     message: "Post created successfully!",
//     post: { title, body },
//   });
// });

// // Jalankan server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

const express = require("express");
const app = express();
const port = 3000;

// Middleware untuk parsing JSON (POST request)
app.use(express.json());

// Data sementara yang menyimpan title dan body
let postData = {
  title: "Default Title",
  body: "This is the default body of the post."
};

// Endpoint GET
app.get("/panic", (req, res) => {
  // Mengembalikan nilai parameter yang terakhir diset
  res.json({
    title: postData.title,
    body: postData.body
  });
});

// Endpoint POST
app.post("/panic", (req, res) => {
  const { title, body } = req.body;

  // Update nilai parameter yang disimpan
  if (title) postData.title = title;
  if (body) postData.body = body;

  res.json({
    message: "Post updated successfully!",
    post: { title: postData.title, body: postData.body }
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
