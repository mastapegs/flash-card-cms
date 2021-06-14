export const flashCard = {
  name: "flashCard",
  type: "document",
  title: "Flash Card",
  jsonType: "object",
  fields: [
    {
      name: "frontSide",
      type: "object",
      fields: [
        {
          name: "question",
          type: "array",
          title: "Question",
          description: "This flash-card's question",
          of: [{ type: "block" }],
        },
      ],
    },
    {
      name: "backSide",
      type: "object",
      fields: [
        {
          name: "answer",
          type: "array",
          description: "This flash-card's answer",
          of: [{ type: "block" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "frontSide.question",
      subtitle: "backSide.answer",
    },
  },
};
