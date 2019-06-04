'use strict';

module.exports = {
  getBalance: {
    type: 'object',
    properties: {
      address: {
        type: 'string',
        minLength: 1
      }
    },
    required: ['address']
  },
  open: {
    type: 'object',
      properties: {
        secret: {
          type: "string",
          minLength: 1,
          maxLength: 100
        }
      },
      required: ['secret']
  }
};

// 'use strict';

// var constants = require('../utils/constants.js');

// module.exports = {
//   getBalance: {
//     type: 'object',
//     properties: {
//       dappId: {
//         type: "string",
//         format: "publicKey"
//       },
//       address: {
//         type: 'string',
//         minLength: 1
//       }
//     },
//     required: ['dappId', 'address']
//   },
//   open: {
//     type: 'object',
//       properties: {
//         dappId: {
//           type: "string",
//           format: "publicKey"
//         },
//         secret: {
//           type: "string",
//           minLength: 1,
//           maxLength: 100
//         },
//         countryCode: {
//           type: 'string',
//           minLength: 2,
//           maxLength: 2
//         }
//       },
//       required: ['dappId', 'secret', 'countryCode']
//   }
// };
