// remote
import {ux} from '@oclif/core'
import HTTP = require('http-call')
import netrc = require('netrc-parser')

import apiClient = require('./api-client')
import file = require('./file')
import flags = require('./flags')
import git = require('./git')
import mutex = require('./mutex')
import yubikey = require('./yubikey')

export const deps = {
  // remote
  get cli(): typeof ux {
    return fetch('@oclif/core').ux
  },
  get HTTP(): typeof HTTP {
    return fetch('http-call')
  },
  get netrc(): typeof netrc.default {
    return fetch('netrc-parser').default
  },

  // local
  get Mutex(): typeof mutex.Mutex {
    return fetch('./mutex').Mutex
  },
  get yubikey(): typeof yubikey.yubikey {
    return fetch('./yubikey').yubikey
  },
  get APIClient(): typeof apiClient.APIClient {
    return fetch('./api-client').APIClient
  },
  get file(): typeof file {
    return fetch('./file')
  },
  get flags(): typeof flags {
    return fetch('./flags')
  },
  get Git(): typeof git.Git {
    return fetch('./git').Git
  },
}

const cache: any = {}

function fetch(s: string) {
  if (!cache[s]) {
    cache[s] = require(s)
  }

  return cache[s]
}

export default deps
