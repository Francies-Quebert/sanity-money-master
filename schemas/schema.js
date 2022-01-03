// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import * as plugs from './plugs'
import * as objects from "./objects";
import * as documents from "./documents";
import * as structures from './structures'

const allPlugs = Object.values(plugs).map((plugs) => {
  return { ...plugs, fields: plugs.fields };
});

const allObjects = Object.values(objects).map((object) => {
  return { ...object, fields: object.fields };
});

const allDocuments = Object.values(documents).map((document) => {
  return { ...document, fields: document.fields };
});

const allStructures = Object.values(structures).map((structure) => {
  return { ...structure, fields: structure.fields };
});
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "ikai-schema",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat(allStructures).concat(allDocuments).concat(allObjects).concat(allPlugs),
});
