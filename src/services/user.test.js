/* eslint-env mocha */
/* eslint-disable no-undef */

const userService = require('./user')

const chai = require('chai')

const should = chai.should()
const expect = chai.expect
const server = require('../../index')

let chaiHttp = require('chai-http')

const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised).should()

chai.use(chaiHttp)

const knex = require('../../db/knex')

describe('userService.js', function () {
  it('getAll()', async function () {
    let getAll = await userService.getAll()

    expect(getAll).to.be.an('array')
  })

  it('store()', async function () {
    let store = await userService.store(
      {
        body: {
          'name': 'req.body.name',
          'last_name': 'req.body.last_nameu',
          'email': 'testing emailfdgfdg'
        }
      }
    )

    expect(store).to.be.an('array')
  })

  it('update()', async function () {
    let update = await userService.update(
      {
        body: {
          'name': 'req.body.name',
          'last_name': 'req.body.last_name',
          'email': 'testing email6654654',
          'team_id': '1'
        },
        params: {
          id: 1
        }
      }
    )

    expect(update).to.be.an('array')
  })

  it('delete()', async function () {
    let remove = await userService.delete(
      {
        params: {
          id: 1
        }
      }
    )

    expect(remove).to.be.an('array')
  })
})
