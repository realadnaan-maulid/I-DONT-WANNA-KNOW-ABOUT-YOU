export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  image: string;
    
}

const messages: Message[] = [
  {
    fromName: 'Matt Chorsey',
    subject: 'New event: Trip to Vegas',
    date: '9:32 AM',
    id: 0,
    image: ''
  },
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
