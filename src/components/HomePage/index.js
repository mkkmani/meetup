import {Link} from 'react-router-dom'
import Context from '../../context/Context'
import Header from '../Header'

import {
  Container,
  Heading,
  Desc,
  RegisterButton,
  Image,
} from './styledComponents'

const HomePage = () => (
  <Context.Consumer>
    {context => {
      const {isRegistered, name, topic} = context

      const headingText = isRegistered ? `Hello ${name}` : 'Welcome to Meetup'
      const descText = isRegistered ? topic : 'Please Register for the Topic'
      const headingColor = isRegistered ? '#3b82f6' : '#475569'

      return (
        <>
          <Header />
          {isRegistered ? (
            <Container>
              <Heading color={headingColor}>{headingText}</Heading>
              <Desc>{descText}</Desc>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </Container>
          ) : (
            <Container>
              <Heading>{headingText}</Heading>
              <Desc>{descText}</Desc>
              <Link to="/register" className="link-item">
                <RegisterButton type="button">Register</RegisterButton>
              </Link>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </Container>
          )}
        </>
      )
    }}
  </Context.Consumer>
)

export default HomePage
