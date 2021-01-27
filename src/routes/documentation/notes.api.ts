export const AddOrderNoteSchema = {
  description: 'Create a new Order Note',
  tags: ['notes'],
  summary: 'Creates new order note with given values',
  body: {
    type: 'object',
    properties: {
      text: { type: 'string' },
      is_started: { type: 'boolean' },
      order_id: { type: 'string' },
      created_at: { type: 'string' },
      created_by: { type: 'string' },
      updated_at: { type: 'string' },
      updated_by: { type: 'string' },
      deleted_at: { type: 'string' },
      deleted_by: { type: 'string' },
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        id: { type: 'string' },
        text: { type: 'string' },
        is_started: { type: 'boolean' },
        order_id: { type: 'string' },
        created_at: { type: 'string' },
        created_by: { type: 'string' },
        updated_at: { type: 'string' },
        updated_by: { type: 'string' },
        deleted_at: { type: 'string' },
        deleted_by: { type: 'string' },
      },
    },
  },
};
