import React from 'react';

const bodyParser = require ("body-parser")
const express = require('express')
const app = express()
const port = 3001

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello Kimbo!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

export const getItems = () => newPromise ((resolve, reject) => {
    fetch("http://localhost:3001"
    .then(cart => {
      resolve (cart.json())
    }) .catch(reject)
   )}
  )

  export const getCart = () => newPromise ((resolve, reject) => {
    fetch("http://localhost:3001"
    .then(cart=> {
      resolve(cart.json())
    }) .catch(reject)
   )}
  )