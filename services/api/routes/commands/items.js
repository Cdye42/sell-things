import { StatusError } from "../../utils/errors";

let loggedIn = true;

export async function getAllItems(items) {
  console.log("New item I am trying to get", items);
  if (loggedIn)
    return {
      items: [
        ({ id: "01", name: "2QNS", price: "$129.99" },
        { id: "02", name: "1QNS", price: "$109.99" })
      ]
    };
  else {
    throw new StatusError({ msg: "Please provide an item", status: 400 });
  }
}
//call the repo
