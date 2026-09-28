
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NeonSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = NeonSDK.test()
    equal(testsdk instanceof NeonSDK, true,
      'NeonSDK.test() must return a client synchronously')
  })

})
