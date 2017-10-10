import { schema } from "normalizr";

const createEntity = (key, definition = {}, options = {}, ...args) => {
  return new schema.Entity(key, definition, { idAttribute: "id", ...options }, ...args);
};
export default createEntity;
