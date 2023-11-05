import React from 'react'

const Context = React.createContext({
  name: '',
  topic: '',
  isRegistered: false,
  showErr: false,
  onClickRegisterNow: () => {},
  onEnterName: () => {},
  onSelectTopic: () => {},
})

export default Context
