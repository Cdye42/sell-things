import { ErrorWithStatus } from "../../utils/errors";

export async function getAllItems(items) {
  console.log("New item I am trying to get", items);
  if (!items) {
    throw new ErrorWithStatus({ msg: "Please provide an item", status: 400 });
  }
}
//call the repo
