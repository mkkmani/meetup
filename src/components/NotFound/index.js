import {Container, Image, Title, Desc} from './styledComponents'

const NotFound = () => (
  <Container>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Title>Page Not Found</Title>
    <Desc>We are sorry, the page you requested could not be found.</Desc>
  </Container>
)

export default NotFound
