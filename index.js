const express = require("express");
const app = express();
const port = 3000;

// Middleware untuk parsing JSON (POST request)
app.use(express.json());

//  Data sementara yang menyimpan title dan body
let data = {
  id: 2025,
  name : "nama",
  addr : "alamat",
  loc : "lokasi",
  id_device : "Pamengkang-01"
};

// Endpoint GET
app.get("/panic", (req, res) => {
  // Mengembalikan nilai parameter yang terakhir diset
  res.json({
    id: data.id,
    name: data.name,
    addr: data.addr,
    loc: data.loc,
    id_device: data.id_device
  });
});

// Endpoint POST
app.post("/panic", (req, res) => {
  const { id, name, addr, loc, id_device } = req.body;

  // Update nilai parameter yang disimpan
  if (id) data.id = id;
  if (name) data.name = name;
  if (addr) data.addr = addr;
  if (loc) data.loc = loc;
  if (id_device) data.id_device = id_device;

  res.json({
    message: "Post updated successfully!",
    post: { id: data.id, name: data.name, addr: data.addr, loc: data.loc, id_device: data.id_device }
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
