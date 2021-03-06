import { load as configLoader } from "../config"


const config = configLoader()

export function init(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', config.origin)
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Authentication-Token, Access-Control-Request-Method")

  return next()
}
