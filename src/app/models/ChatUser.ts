export interface ChatUser {
  name: string,
  active: boolean,
  messagesReceived: string[]
  messagesSent: string[],
  lastSeen: string
}
