import axios from 'axios'

test( 'GET ALL STATISTICS',  async () => {
  const response = await axios.get( `http://192.168.99.100:3030/chat/chat-statistics/0/0` )
  expect( response.status ).toEqual( 200 )
  expect( response.data ).toBeTruthy()
  expect( response.data[0].chats ).toEqual(1568)
})
test( 'GET ALL STATISTICS BY DATE RANGE FILTER',  async () => {
  const response = await axios.get( `http://192.168.99.100:3030/chat/chat-statistics/2019-04-03/2019-04-04` )
  expect( response.status ).toEqual( 200 )
  expect( response.data[0] ).toBeTruthy()
  expect( response.data[0].chats ).toEqual(277)
})
