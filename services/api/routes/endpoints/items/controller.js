import { wrapAsyncFunc } from "../../../utils/wrap-async-route";

export default class ItemsController {
  constructor(router) {
    router.get("/", wrapAsyncFunc(this.getAllItems));
  }

  async getAllItems(req, res) {
    const { items } = req.body;
    const results = await items[
      ({ id: "01", name: "hat", price: "$19.99" },
      { id: "02", name: "shoes", price: "$119.99" })
    ];
    res.send({ results });
  }
}
