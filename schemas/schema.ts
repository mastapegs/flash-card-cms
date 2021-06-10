import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import { flashCard } from "./flashCard";

const SanitySchema = {
  name: "default",
  types: schemaTypes.concat([flashCard]),
};

export default createSchema(SanitySchema);
