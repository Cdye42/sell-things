import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const itemDTOMapper = row => ({
  itemHandle: row.item_handle,
  name: row.name,
  price: row.price
});
const itemDetailDTOMapper = row => ({
  itemHandle: row.item_handle,
  name: row.name,
  price: row.price,
  description: row.description
});

export async function fetchItemsFromDB() {
  console.log("HERE WE ARE 3");
  const query = sql`select * from items;`;
  const results = await PGWrapper.sqlAndMap(query, itemDTOMapper);
  console.log("RESULTS", results);
  return results;
}
export async function fetchItemDetailsFromDB(id) {
  const query = sql`select * from items where item_handle= ${id}`;
  return (await PGWrapper.sqlAndMap(query, itemDetailDTOMapper))[0];
}
