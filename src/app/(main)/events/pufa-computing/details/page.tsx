import EventDetails from '@/components/event/EventDetails'
import React from 'react'

export default function page() {

  const contents = `Open Registration Competition Compsphere 2023
  
  Open Registration Competition Compsphere 2023

  Open Registration Competition Compsphere 2023






  
  Open Registration Competition Compsphere 2023
  
  Open Registration Competition Compsphere 2023`

  return (
    <div>
        <EventDetails
        image="/events/compsphere_2023.png"
        title='Open Registration Competition Compsphere 2023'
        content={contents}/>
    </div>
  )
}
