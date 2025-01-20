const express = require("express");
const app = express();
const port = 3000;

// Middleware untuk parsing JSON (POST request)
app.use(express.json());

// Data sementara yang menyimpan title dan body
let data = {
  id: 2025,
  name : "default name",
  addr : "default address",
  loc : "default location"
};

// Endpoint GET
app.get("/panic", (req, res) => {
  // Mengembalikan nilai parameter yang terakhir diset
  res.json({
    id: data.id,
    name: data.name,
    addr: data.addr,
    loc: data.loc
  });
});

// Endpoint POST
app.post("/panic", (req, res) => {
  const { id, name, addr, loc } = req.body;

  // Update nilai parameter yang disimpan
  if (id) data.id = id;
  if (name) data.name = name;
  if (addr) data.addr = addr;
  if (loc) data.loc = loc;

  res.json({
    message: "Post updated successfully!",
    post: { id: data.id, name: data.name, addr: data.addr, loc: data.loc }
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
