/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/reducer';
import { Calendar } from './components/Calendar/Calendar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { updateAppointments } from './redux/uiSlice';
import Beds from './components/Beds/Bed';
import MenuAppBar from './components/menu/MenuAppbar.tsx';
import annotations from './components/Beds/Annotation';
import { Page2by2 } from './components/Page/Page2by2.tsx';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme.ts';
import { UserSearchBox } from './components/Beds/UserSearch.tsx';
import { SchedulePage } from './components/Page/SchedulePage.tsx';
import { UtilizationPage } from './components/Page/UtilizationPage.tsx';
import "./bg.png"

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
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MenuAppBar></MenuAppBar>

        <Routes>
          <Route
            path="/"
            element={
              <Page2by2
                topLeft={
                  <div>
                    <UserSearchBox />
                  </div>
                }
                topRight={<Beds annotations={annotations} />}
                bottomLeft={<div>bottom left</div>}
                bottomRight={
                  <Calendar
                    currentDate={today}
                    viewType="switcher"
                    schedulerData={appointments}
                    onCommitChanges={handleAppointmentsEdit}
                  />
                }
              />
            }
          />
          <Route
            path="/calendar"
            element={
              <SchedulePage>
                <Calendar
                  currentDate={today}
                  viewType="switcher"
                  schedulerData={appointments}
                  onCommitChanges={handleAppointmentsEdit}
                />
              </SchedulePage>
            }
          />
          <Route path="/utilization" element={<UtilizationPage />} />
          <Route path="/beds" element={<Beds annotations={annotations} />} />
        </Routes>
      </BrowserRouter>
        <div
            unselectable={true}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: "url('bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: 0.4,
                zIndex: 9999,
                pointerEvents: "none", // Make it not interactable
            }}
        ></div>

    </ThemeProvider>
  );
}

export default App;
