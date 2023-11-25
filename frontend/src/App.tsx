/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/reducer';
import { Calendar } from './components/Calendar/Calendar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { updateAppointments } from './redux/uiSlice';
import Beds from './components/Beds/Bed';
import { annotations } from './components/Beds/Bed.stories';
import styles from './App.module.css';

function App() {
  const dispatch = useAppDispatch();
  const appointments = useAppSelector((state) => state.ui.appointments);
  const handleAppointmentsEdit = useCallback(
    (appointmentsChange: any) => {
      dispatch(updateAppointments(appointmentsChange));
    },
    [dispatch],
  );

  const [today, _] = useState(new Date());
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className={styles.mainPage}>
                <Link to={'/beds'}>Beds</Link>
                <Link to={'/schedule'}>Scheduler</Link>
              </div>
            }
          />
          <Route
            path="/schedule"
            element={
              <>
                <Link to={'/'} className={styles.topNav}>
                  Home
                </Link>
                <Calendar
                  currentDate={today}
                  viewType="switcher"
                  schedulerData={appointments}
                  onCommitChanges={handleAppointmentsEdit}
                />
              </>
            }
          />
          <Route
            path="/beds"
            element={
              <>
                <Link to={'/'} className={styles.topNav}>
                  Home
                </Link>
                <Beds annotations={annotations} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
