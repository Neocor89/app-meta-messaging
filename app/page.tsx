import React from 'react'
import ChatInput from './ChatInput'
import MessageList from './MessageList'

function HomePage() {
  return (
    <main className="">
      <MessageList />
      <ChatInput />
    </main>
  )
}

export default HomePage