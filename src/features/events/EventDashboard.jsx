import React, {useState} from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventForm from './eventForm/EventForm';
import EventList from './EventList';
import {sampleData} from '../../app/api/SampleData';

export default function EventDashboard({formOpen, setFormOpen}) {
    const [events, setEvents] = useState(sampleData);

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={sampleData} />
            </Grid.Column>
            <GridColumn width={6}>
                {formOpen &&
                <EventForm setFormOpen={setFormOpen} />}
            </GridColumn>
        </Grid>
    )
}