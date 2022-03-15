import type { NextPage } from 'next'
import { UtmForm } from '../components/UtmForm'

const Home: NextPage = () => {
  return (
    <div>
      <h1>UTM Builder</h1>
      <UtmForm />
    </div>
  )
}

export default Home
