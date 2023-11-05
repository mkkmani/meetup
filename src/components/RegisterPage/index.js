import Context from '../../context/Context'
import Header from '../Header'
import {
  Container,
  RegisterContainer,
  Image,
  FormContainer,
  Form,
  Label,
  Input,
  RegisterNowButton,
  ErrorText,
  Select,
  Option,
  Heading,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const RegisterPage = () => (
  <Context.Consumer>
    {context => {
      const {
        onEnterName,
        onSelectTopic,
        onClickRegisterNow,
        showErr,
        name,
        topic,
      } = context

      const onChangeName = event => {
        onEnterName(event.target.value)
      }

      const onChangeOption = event => {
        onSelectTopic(event.target.value)
      }

      const onClickRegister = event => {
        event.preventDefault()
        onClickRegisterNow()
      }

      return (
        <>
          <Header />
          <Container>
            <RegisterContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <FormContainer>
                <Heading>Let us join</Heading>
                <Form onSubmit={onClickRegister}>
                  <Label htmlFor="name">NAME</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={onChangeName}
                    placeholder="Enter your name"
                  />
                  <Label htmlFor="topics">TOPICS</Label>
                  <Select value={topic} onChange={onChangeOption}>
                    {topicsList.map(each => (
                      <Option key={each.id} value={each.displayText}>
                        {each.displayText}
                      </Option>
                    ))}
                  </Select>
                  <RegisterNowButton type="submit">
                    Register Now
                  </RegisterNowButton>
                </Form>
                {showErr && <ErrorText>Please enter your name</ErrorText>}
              </FormContainer>
            </RegisterContainer>
          </Container>
        </>
      )
    }}
  </Context.Consumer>
)

export default RegisterPage
