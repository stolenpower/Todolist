module.exports = {
    name: 'todolists',
    fields: [
      {
        name: 'taskName',
        type: 'String',
        length: 256,
        not_null: true
      },
      {
        name: 'taskStatus',
        type: 'bool',
        length: 256,
        not_null: true
      },
      
      {
        name: 'taskDescription',
        type: 'string',
        length: 256,
        not_null: true
      },
      {
        name: 'owner',
        type: 'String',
        length: 50,
        not_null: true,
      }
    ]
  }
