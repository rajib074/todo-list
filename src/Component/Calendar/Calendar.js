import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Calendar = () => {
    const [selected, setSelected] = useState(new Date());
    
    return (
        <div className='m-auto w-80'>
            <DayPicker
            className='m-auto'
                mode="single"
                selected={selected}
                onSelect={setSelected}                
            />
            <p>you have selected:{format(selected, 'PP')}</p>
        </div>
    );
};

export default Calendar;