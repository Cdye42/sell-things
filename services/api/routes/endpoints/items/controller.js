import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { fetchItems, fetchDetails } from "../../commands/items";

export default class ItemsController {
  constructor(router) {
    router.get("/", wrapAsyncFunc(this.getAllItems));
    router.get("/:id", wrapAsyncFunc(this.getItemDetails));
  }

  async getAllItems(req, res) {
    console.log("HERE WE ARE");
    const items = await fetchItems();
    res.send({ items });
  }
  async getItemDetails(req, res) {
    const { id } = req.params;
    const item = await fetchDetails(id);
    res.send({ item });
  }
}
