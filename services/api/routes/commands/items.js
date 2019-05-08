import { StatusError } from "../../utils/errors";
import { fetchItemsFromDB } from "../repositories/items";

let loggedIn = true;

export async function fetchItems() {
  if (loggedIn) {
    try {
      console.log("HERE WE ARE 2");
      const results = await fetchItemsFromDB();
      return results;
    } catch (err) {
      throw new StatusError({ msg: " DB error ", status: 500 });
    }
  } else {
    throw new StatusError({ msg: "User is not logged in", status: 400 });
  }
}
