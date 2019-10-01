export default (stats, fromDate = "", toDate = "") => {
  if(!fromDate.trim() || !toDate.trim()){
    return stats
  }
  const from = new Date(fromDate)
  const to = new Date(toDate)
  const filtered = stats.filter( stat => {
    const statDate = new Date(stat.date)
    if( statDate >= from && statDate <= to){
      return stat
    }
  })
  return filtered
}
