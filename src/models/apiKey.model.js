'use strict'

// const { model, Schema } = require('mongoose') // Erase if already required
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

const apiKey = sequelize.define(
  'APIKEY', //model name
  {
    // Model attributes are defined here
    key: {
      type: DataTypes.TEXT,
      required: true,
      unique: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      default: true,
    },
    permissions: {
      type: [DataTypes.TEXT],
      required: true,
      enum: ['0000', '1111', '2222'],
    },
  },
  // Other model options go here
  {
    timestamps: true,
  },
)

//Export the model
module.exports = apiKey
