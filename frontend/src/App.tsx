import { MouseEvent, useCallback, useState } from 'react';
import './App.css';
import styles from './App.module.css';
import { useAppDispatch, useAppSelector } from './redux/reducer';
import { decrement, increment } from './redux/uiSlice';
import { useFetchCatsQuery } from './redux/catApiSlice';
import { Calendar } from './components/Calendar/Calendar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.ui.count);
  const handleCounterClick = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const handleContextMenu = useCallback(
    (evt: MouseEvent<HTMLButtonElement>) => {
      dispatch(decrement());
      evt.preventDefault();
    },
    [dispatch],
  );

  const [today, _] = useState(new Date());
  const cats = useFetchCatsQuery(count);
  const catUrl = cats.data ? cats.data[0]?.url : undefined;
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<div>test</div>} />
          <Route path="/story" element={<div />} />
        </Routes>
      </BrowserRouter>

    {/* <Routes>
                    <Route path="/" element={<div>test</div>}/>
                    <Route path="/story" element={<StoryLayout/>}/>
                </Routes> */}
      <Calendar
        currentDate={today}
        viewType="switcher"
        schedulerData={[
          {
            startDate: new Date('2018-11-01T09:45'),
            endDate: new Date('2018-11-01T11:00'),
            title: 'Meeting',
          },
          {
            startDate: new Date('2018-11-01T12:00'),
            endDate: new Date('2018-11-01T13:30'),
            title: 'Go to a gym',
          },
          {
            startDate: new Date('2018-11-01T11:32'),
            endDate: new Date('2018-11-01T12:29'),
            title: 'Drink with friends 🍻',
          },
          {
            startDate: new Date('2018-11-01T11:32'),
            endDate: new Date('2018-11-02T11:31'),
            title: 'Drinks 🍻',
          },
        ]}
      />
      <div className={styles.card}>
        <button onClick={handleCounterClick} onContextMenu={handleContextMenu}>
          count is {count}
        </button>
        {catUrl && <img src={catUrl} />}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
