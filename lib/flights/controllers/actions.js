/* jshint -W079 */
const Promise = require('bluebird')
    , config = require('config')
    , log = require('metalogger')()
    , representor = require('kokua')
    , _ = require('lodash');

const actions = {};

const responseMediaType = 'application/hal+json';

actions.getSeatMap = async function(req, res, next) {

  const response = {"status" : "ok"};
  response.req = req.body;
  res.status(200).json(response);
};

actions.getFlightInfo = async function(req, res, next) {
    const response = {
      "flight_id" : "edcc03a4-7f4e-40d1-898d-bf84a266f1b9",
      "origin_code" : "LAX",
      "destination_code" : "DCA"
    };
    //response.req = req.body;
    res.status(200).json(response);
};

module.exports = actions;
