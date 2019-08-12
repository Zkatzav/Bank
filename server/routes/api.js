const express = require('express')
const router = express.Router()
const Transaction = require('../model/Transaction')


router.get('/transactions', function(req, res){
  Transaction.find({}, function(err, trans){
    res.send(trans)
  })
})

router.post('/transaction', function(req, res){
  const trans = new Transaction(req.body)
  trans.save()
  res.send()
})

module.exports = router