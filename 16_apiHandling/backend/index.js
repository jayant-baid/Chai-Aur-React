import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table wooden",
      price: 200,
      image:
        "https://images.pexels.com/photos/23656954/pexels-photo-23656954/free-photo-of-scratched-wooden-table-top-in-the-light-of-the-setting-sun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 1,
      name: "table glass",
      price: 200,
      image:
        "https://images.pexels.com/photos/23644647/pexels-photo-23644647/free-photo-of-coffee-on-a-table-at-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  // http://localhost:3000/api/products?search=glass

  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );

    res.send(filterProducts);

    return;
  }
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
