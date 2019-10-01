export default async (stats) => {
  let grouped = {}
  stats.map((stat)=>{
    if(!grouped[stat.websiteId]){
      grouped[stat.websiteId] = {
        websiteId: stat.websiteId,
        chats: stat.chats,
        missedChats: stat.missedChats
      }
    }else{
      grouped[stat.websiteId].chats += stat.chats
      grouped[stat.websiteId].missedChats += stat.missedChats
    }
  })
  return Object.values(grouped)
}
