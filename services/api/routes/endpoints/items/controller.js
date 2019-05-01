import { wrapAsyncFunc } from "../../../utils/wrap-async-route";

export default class ItemsController {
  constructor(router) {
    router.get("/", wrapAsyncFunc(this.getAllItems));
  }

  async getAllItems(req, res) {
    const { items } = req.body;
    const results = await getAllItems;
    res.send({ results });
  }
}
