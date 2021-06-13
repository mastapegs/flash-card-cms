export const flashCard = {
  name: "flashCard",
  title: "Flash Card",
  type: "document",
  jsonType: "object",
  fields: [
    {
      name: "frontSide",
      type: "object",
      fields: [
        {
          name: "question",
          title: "Question",
          description: "This flash-card's question",
          type: "string",
        },
      ],
    },
    {
      name: "backSide",
      type: "object",
      fields: [
        {
          name: "answer",
          type: "string",
          description: "This flash-card's answer",
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
