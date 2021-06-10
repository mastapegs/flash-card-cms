import { TypeDef } from "@sanity/schema/lib/sanity/typedefs";

interface FlashCardsSchema extends TypeDef {
  fields: TypeDef[];
}

export const flashCard: FlashCardsSchema = {
  name: "flashCard",
  title: "Flash Card",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
    },
  ],
};
