const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const headacheSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    painLevel: {
      type: Number,
      required: true
    },
    medsUsed: {
      type: String
    },
    length: {
      type: Number,
    },
    description: {
      type: String
    },
},
{
  timestamps: true,
});

module.exports = mongoose.model('Headache', headacheSchema)