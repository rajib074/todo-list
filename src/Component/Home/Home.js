import React from 'react';
import ToDo from '../To-Do/ToDo';
import Calendar from '../Calendar/Calendar';
import Completed from '../Completed/Completed';

const Home = () => {
    return (
        <div>
            <Calendar />
            <ToDo />
            <Completed />
        </div>
    );
};

export default Home;