import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import { SchemaDef } from "@sanity/schema/lib/sanity/typedefs";
import { flashCard } from "./flashCard";

const SanitySchema: SchemaDef = {
  name: "default",
  types: schemaTypes.concat([flashCard]),
};

export default createSchema(SanitySchema);
