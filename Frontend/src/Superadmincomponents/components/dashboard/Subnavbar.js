import React from 'react';
import { NavLink, Outlet, useParams  } from 'react-router-dom';

const Subnavbar = () => {
  const {id} = useParams();
    return (
        <>
         <ul className="tabs historyul d-flex flex-wrap gap-1 list-unstyled mt-4 mb-4 ms-3 me-2">
                <li className='mb-3'><NavLink id="tab_1" to={"/viewemr/history1/"+id} className="text-decoration-none">History 1</NavLink></li>
                <li className='mb-3'><NavLink to={"/viewemr/history2/"+id} id="tab_2" className="text-decoration-none">History 2</NavLink></li>
                <li className='mb-3'><NavLink to={"/viewemr/medications/"+id} id="tab_4" className="text-decoration-none">Medications</NavLink></li>
                <li className='mb-3'><NavLink to={"/viewemr/reviewsystem1/"+id} id="tab_5" className="text-decoration-none">Review of Systems - 1</NavLink></li>
                <li className='mb-3'><NavLink to={"/viewemr/reviewsystem2/"+id} id="tab_6" className="text-decoration-none">Review of Systems - 2</NavLink></li>
                <li className='mb-3'><NavLink to={"/viewemr/reviewsystem3/"+id} id="tab_7" className="text-decoration-none">Review of Systems - 3</NavLink></li>
                <li className='mb-3'><NavLink to={"/viewemr/physicalexam1/"+id} id="tab_8" className="text-decoration-none">Physical Exam - 1</NavLink></li>
                <li className='mb-3'><NavLink to={"/viewemr/physicalexam2/"+id} id="tab_9" className="text-decoration-none">Physical Exam - 2</NavLink></li>
                <li className='mb-3'><NavLink to={"/viewemr/assessments/"+id} id="tab_10" className="text-decoration-none">Assessment</NavLink></li>
            </ul>
      <Outlet/>
            
        </>
    );
};

export default Subnavbar;