import React from 'react';
import { NavLink } from 'react-router-dom';

const Subnavbar = () => {
    
    return (
        <>
         <ul className="tabs historyul d-flex flex-wrap gap-1 list-unstyled mt-4 mb-4 ms-3 me-2">
                <li className='mb-3'><NavLink id="tab_1" to='/history1' className="text-decoration-none">History 1</NavLink></li>
                <li className='mb-3'><NavLink to="/history2" id="tab_2" className="text-decoration-none">History 2</NavLink></li>
                <li className='mb-3'><NavLink to="/medications" id="tab_4" className="text-decoration-none">Medications</NavLink></li>
                <li className='mb-3'><NavLink to="/reviewsystem1" id="tab_5" className="text-decoration-none">Review of Systems - 1</NavLink></li>
                <li className='mb-3'><NavLink to="/reviewsystem2" id="tab_6" className="text-decoration-none">Review of Systems - 2</NavLink></li>
                <li className='mb-3'><NavLink to="/reviewsystem3" id="tab_7" className="text-decoration-none">Review of Systems - 3</NavLink></li>
                <li className='mb-3'><NavLink to="/physicalexam1" id="tab_8" className="text-decoration-none">Physical Exam - 1</NavLink></li>
                <li className='mb-3'><NavLink to="/physicalexam2" id="tab_9" className="text-decoration-none">Physical Exam - 2</NavLink></li>
                <li className='mb-3'><NavLink to="/assessments" id="tab_10" className="text-decoration-none">Assessment</NavLink></li>
            </ul>
            
        </>
    );
};

export default Subnavbar;