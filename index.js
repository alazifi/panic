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
  id: 2025,
  name : "default name",
  addr : "default address",
  loc : "default location"
};

// Endpoint GET
app.get("/panic", (req, res) => {
  // Mengembalikan nilai parameter yang terakhir diset
  res.json({
    id: postData.id,
    name: postData.name,
    addr: postData.addr,
    loc: postData.loc
  });
});

// Endpoint POST
app.post("/panic", (req, res) => {
  const { id, name, addr, loc } = req.body;

  // Update nilai parameter yang disimpan
  if (id) postData.id = id;
  if (name) postData.name = name;
  if (addr) postData.addr = addr;
  if (loc) postData.loc = loc;

  res.json({
    message: "Post updated successfully!",
    post: { id: postData.id, name: postData.name, addr: postData.addr, loc: postData.loc }
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
