import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const itemDTOMapper = row => ({
  itemHandle: row.item_handle,
  name: row.name,
  price: price
});

export async function fetchItemsFromDB() {
  const query = sql`select * from items;`;
  return await PGWrapper.sqlAndMap(query, itemDTOMapper);
}
