import { memo } from 'react'
import styled from 'styled-components'

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
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>)

  return (
    <section className={className}>
      <ul>{mealsList}</ul>
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

Styled.displayName = 'HeaderCartButton'
export default Styled
