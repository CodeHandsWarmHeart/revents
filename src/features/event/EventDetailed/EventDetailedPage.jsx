import React from 'react';
import EventDetaildHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';
import EventDetailedChat from './EventDetailedChat';
import { Grid } from 'semantic-ui-react';


const EventDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetaildHeader/>
        <EventDetailedInfo/>
        <EventDetailedChat/>
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar/>
      </Grid.Column>
    </Grid>
  )
}

export default EventDetailedPage
