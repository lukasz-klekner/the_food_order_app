import { memo } from 'react'
import styled from 'styled-components'

import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  )
}

const Memoized = memo(Meals)
const Styled = styled(Memoized)``

Styled.displayName = 'Meals'
export default Styled
