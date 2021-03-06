import { memo } from 'react'
import styled from 'styled-components'

import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
]

const AvailableMeals = ({ className }) => {
  const mealsList = DUMMY_MEALS.map(({ id, name, description, price }) => (
    <MealItem key={id} name={name} description={description} price={price} />
  ))

  return (
    <section className={className}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

const Memoized = memo(AvailableMeals)
const Styled = styled(Memoized)`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;

  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

Styled.displayName = 'AvailableMeals'
export default Styled
