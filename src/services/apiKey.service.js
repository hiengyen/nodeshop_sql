'use strict'

const apiKey = require('../models/apiKey.model')
const crypto = require('crypto')

const findById = async key => {
  // Create new API key
  const newKey = await apiKey.create({
    key: crypto.randomBytes(64).toString('hex'),
    permissions: ['0000'],
  })
  console.log(newKey)
  // const objkey = await apikeymodel.findone({ key, status: true }).lean()
  // return objkey
}

module.exports = {
  findById,
}
