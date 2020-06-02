/* jshint -W079 */
const Promise = require('bluebird')
    , config = require('config')
    , log = require('metalogger')()
    , representor = require('kokua')
    , _ = require('lodash');

const actions = {};

const responseMediaType = 'application/hal+json';

actions.getSeatMap = async function(req, res, next) {

  let response = {"status" : "ok"};
  response.req = req.body;
  res.status(200).json(response);
};

actions.getFlightInfo = async function(req, res, next) {
    const response = {"status" : "ok"};
    response.req = req.body;
    res.status(200).json(response);
};

module.exports = actions;
