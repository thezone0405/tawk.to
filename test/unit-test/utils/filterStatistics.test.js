import filterStatistics from 'utils/filterStatistics'

const stats = [
  {
    "websiteId": "1",
    "date": "2019-04-02T00:00:00.000Z",
    "chats": 1,
    "missedChats": 0
  },
  {
    "websiteId": "1",
    "date": "2019-04-10T00:00:00.000Z",
    "chats": 6,
    "missedChats": 2
  },
  {
    "websiteId": "2",
    "date": "2019-04-03T00:00:00.000Z",
    "chats": 4,
    "missedChats": 1
  },
  {
    "websiteId": "2",
    "date": "2019-04-08T00:00:00.000Z",
    "chats": 3,
    "missedChats": 0
  },
  {
    "websiteId": "3",
    "date": "2019-05-27T00:00:00.000Z",
    "chats": 3,
    "missedChats": 0
  },
  {
    "websiteId": "3",
    "date": "2019-05-28T00:00:00.000Z",
    "chats": 7,
    "missedChats": 0
  },
  {
    "websiteId": "3",
    "date": "2019-05-29T00:00:00.000Z",
    "chats": 3,
    "missedChats": 1
  },
  {
    "websiteId": "1",
    "date": "2019-05-29T00:00:00.000Z",
    "chats": 5,
    "missedChats": 1
  },
]


test( 'Returns every statistics without range parameter', () => {
  const statistics = filterStatistics(stats)
	expect( statistics.length ).toBe( 8 )
})

test( 'Returns every matched statistics by given date range paramer', () => {
  const statistics = filterStatistics(stats, "2019-04-01", "2019-04-20")
	expect( statistics.length ).toBe( 4 )
})
