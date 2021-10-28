//import 'app/layout/styles.css';
import React, {useState} from 'react';
import { Container } from 'semantic-ui-react';
//import { Button } from 'semantic-ui-react';
import EventDashboard from '../../features/events/EventDashboard';
import NavBar from '../../features/nav/NavBar';

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  
  return (
    <>
    <NavBar setFormOpen={setFormOpen} />
    <Container className='main'>
    <EventDashboard formOpen={formOpen} setFormOpen={formOpen} />
    </Container>
    </>
  );
}