import express from 'express'
import axios from 'axios'
import groupWebsites from '../../utils/groupWebsites'
import filterStatistics from '../../utils/filterStatistics'

const app = express.Router()

const response = ( status, data, res ) => {
	res.status( status )
	res.send( JSON.stringify( data ) )
}

app.get('/chat-statistics/:fromDate/:toDate', async (req, res) => {
  const {fromDate, toDate} = req.params
  const from = ( +fromDate == 0 || +toDate == 0)? "" : fromDate
  const to = ( +fromDate == 0 || +toDate == 0)? "" : toDate

  const fullStatistics = await axios.get('https://bitbucket.org/!api/2.0/snippets/tawkto/aA8zqE/4f62624a75da6d1b8dd7f70e53af8d36a1603910/files/webstats.json')

  const filteredStats = await filterStatistics(fullStatistics.data, from, to)
  if(filteredStats.length){
    const groupStats = await groupWebsites(filteredStats)
    response( 200, groupStats, res)
  }else{
    response( 404, {error: "No result found"}, res)
  }

})

export default app
