import {Flags} from '@oclif/core'

import {TeamCompletion} from '../completions'

export const team = Flags.custom({
  char: 't',
  options: TeamCompletion.options,
  description: 'team to use',

  default: async ({flags}) => {
    const {HEROKU_ORGANIZATION: org, HEROKU_TEAM: team} = process.env
    if (flags.org) return flags.org
    if (team) return team
    if (org) return org
  },
})
