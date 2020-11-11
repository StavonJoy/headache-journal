const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const headacheSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      max: 50
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    painLevel: {
      type: Number,
      required: true,
      min: 0,
      max: 10
    },
    medsUsed: [String],
    length: Number,
    description: String,
},
{
  timestamps: true,
});

module.exports = mongoose.model('Headache', headacheSchema)