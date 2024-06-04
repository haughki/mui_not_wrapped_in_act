import React from 'react'
import { render } from '@testing-library/react'
import MuiTableWithActProblem from '../MuiTableWithActProblem'


test('Produces act error', async () => {
  render(
    <MuiTableWithActProblem />
  )
})

