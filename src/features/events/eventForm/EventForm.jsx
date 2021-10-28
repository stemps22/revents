import React from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm() {
    return (
        <Segment clearing>
            <Header content='Create New Event' />
            <Form>
                <Form.Field>
                    <input type="text" palceholder="Event Title" />
                    <input type="text" palceholder="Category" />
                    <input type="text" palceholder="Description" />
                    <input type="text" palceholder="City" />
                    <input type="text" palceholder="Venue" />
                    <input type="date" palceholder="DAte" />
                </Form.Field>
                <Button type='submit' floated='right' positive content="Submit" />
                <Button type='submit' floated='right' content="Cacnel" />
            </Form>
        </Segment>
    )
}