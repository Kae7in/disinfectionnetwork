import React, {useEffect, useState} from 'react';
import { filter } from 'lodash'

import DisinfectService from '../services/services'

const Distilleries = () => {
  const [distilleries, setDistilleries] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    DisinfectService.getAllDistilleries()
      .then(json => {
        const dist = json && json.data && json.data.records
        console.log('fetched all distilleries:', json)
        if (dist) {
          setDistilleries(dist)
        }
        if (json.data && json.data.error) {
          throw json.data.error.message
        }
      })
      .catch(err => console.error(err));
  }, [])

  const handleTextChange = () => (e) => {
    const newVal = e.target.value 
    setSearchTerm(newVal)
    if (newVal.length > 1) {
      const res = filter(distilleries, (dist) => {
        return (
          dist.fields['Owner Name'].toLowerCase().includes(newVal.toLowerCase()) || 
          dist.fields['State'].toLowerCase().includes(newVal.toLowerCase()) || 
          dist.fields['Zip Code'].toString().includes(newVal.toLowerCase())
          )
      })
      setSearchResults(res)
    } else if (newVal.length === 0) {
      setSearchResults([])
    }
  }
  return (
    <div>
      <h3>Search</h3>
      <p>on Name, State (abbreviation), or Zip Code</p>
      <input type="text" value={searchTerm} onChange={handleTextChange()}/>
      <ul>
        {(searchResults.length > 0) ? searchResults.map((distillery, idx) => {
            return <li key={`dist-${idx}`}>{distillery.fields['Owner Name']} ({distillery.fields['State']} - {distillery.fields['Zip Code']})</li>
          }) : null
        }
      </ul>
    </div>
  )
}

export default Distilleries;