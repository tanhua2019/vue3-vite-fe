
import express from 'express'
import imgDate from "./img.js"
import categoryDate from "./category.js"
import Mock from 'mockjs'
const app = express();
const port = 9999;

app.get("/pexels/list", (req, res) => {
  const data = Mock.mock({
    data: {
      "list|20": [
        {
          author: "@cname()",
          "photo|+1": imgDate,
          title: "@cword(4, 7)",
          photoWidth: 500,
          photoHeight: "@integer(200,800)",
          avatar:
            "https://images.pexels.com/users/avatars/92376376/lenar-382.jpeg",
          _id: "@id",
        },
      ],
      page: 1,
      size: 20,
      total: 533,
    },
    code: 200,
    message: "success",
    success: true,
  });
  return res.json(data);
});

app.get("/category", (req, res) => {
  const data = Mock.mock({
    data: {
      "categorys|30": [
        {
          id: "@id",
          "name|+1": categoryDate,
        },
      ],
    },
    code: 200,
    message: "success",
    success: true,
  });
  return res.json(data);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
