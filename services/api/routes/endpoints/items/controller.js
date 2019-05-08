import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { fetchItems } from "../../commands/items";

export default class ItemsController {
  constructor(router) {
    router.get("/", wrapAsyncFunc(this.getAllItems));
  }

  async getAllItems(req, res) {
    console.log("HERE WE ARE");
    const items = await fetchItems();
    res.send({ items });
  }
}
