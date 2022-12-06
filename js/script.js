// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-07-JS/sw.js", {
    scope: "/ICS2O-Unit5-07-JS/",
  })
}

function update() {
  console.log("update")
  
  // input
  const number = parseInt(document.getElementById("number").value)
  console.log("number : " + number)

  // process
  let answer = 0

  for (let count = 0; count < number + 1; count++) {
    answer = answer + count
    console.log("answer : " + answer)
    console.log("count : " + count)
  }

  // output
  document.getElementById("answer").innerHTML = answer
  
  console.log("end")
}
