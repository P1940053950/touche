/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/reducer';
import { Calendar } from './components/Calendar/Calendar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { updateAppointments } from './redux/uiSlice';
import Beds from './components/Beds/Bed';
import styles from './App.module.css';
import MenuAppBar from './components/menu/MenuAppbar.tsx';
import annotations from './components/Beds/Annotation';

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
        <MenuAppBar></MenuAppBar>

        <Routes>
          <Route path="/" element={<div className={styles.mainPage}></div>} />
          <Route
            path="/calendar"
            element={
              <Calendar
                currentDate={today}
                viewType="switcher"
                schedulerData={appointments}
                onCommitChanges={handleAppointmentsEdit}
              />
            }
          />
          <Route path="/beds" element={<Beds annotations={annotations} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
