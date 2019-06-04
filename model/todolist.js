// module.exports = {
//     name: 'storages',
//     fields: [
//       {
//         name: 'set',
//         type: 'String',
//         length: 256,
//         not_null: true
//       },
//       {
//         name: 'owner',
//         type: 'String',
//         length: 50,
//         not_null: true,
//       }
//     ]
//   }


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
      type: 'Number',
      default: 0
    },

    {
      name: 'taskDescription',
      type: 'String',
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
