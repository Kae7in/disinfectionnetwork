import React, {useEffect, useState} from 'react';

const Distilleries = () => {
  const [distilleries, setDistilleries] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/distilleries')
      .then(res => res.json())
      .then(json => {
        const dist = json && json.data && json.data.records
        console.log(json)
        if (dist) {
          setDistilleries(dist)
        }
        if (json.data && json.data.error) {
          throw json.data.error.message
        }
      })
      .catch(err => console.error(err));
  }, [])
  return (
    <div>
      <ul>
        {(distilleries.length > 0) ? distilleries.map((distillery, idx) => {
            return <li key={`dist-${idx}`}>{distillery.fields['Distillery Name']}</li>
          }) : null
        }
      </ul>
    </div>
  )
}

export default Distilleries;