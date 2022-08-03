const Item = require("../models/items.js");

const create_index_get = (req, res) => {
  res.render("create", { title: "Create Item" });
};

const create_post = (req, resp) => {
  const item = new Item(req.body);
  console.log(req.body);

  item
    .save()
    .then((res) => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};

module.exports = {
  create_index_get,
  create_post,
};
