import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AdminPanel } from '../pages/adminPanel/AdminPanel';
import { useEffect } from 'react';
import { Layout } from '../components/Layout/Layout';
import { Teachers } from '../pages/teachers/Teachers';
import { Pupils } from '../pages/pupils/Pupils';
import { Parents } from '../pages/parents/Parents';
import { CreateTeacher } from '../pages/teachers/createTeacher/CreateTeacher';
import { Teacher } from '../pages/teachers/teacher/Teacher';
import { Profile } from '../pages/profile/Profile';
import { CreatePupil } from '../pages/pupils/createPupil/CreatePupil';
import { Pupil } from '../pages/pupils/pupil/Pupil';
import { CreateParent } from '../pages/parents/createParent/CreateParent';
import { Parent } from '../pages/parents/parent/Parent';
import { Schedules } from '../pages/schedules/Schedules';
import { Schedule } from '../pages/schedules/schedule/Schedule';
import { CreateSchedule } from '../pages/schedules/createSchedule/createSchedule';
import { Diaries } from '../pages/diaries/Diaries';
import { Diary } from '../pages/diary/Diary';
import { CreateDiary } from '../pages/diary/createDiary/CreateDiary';

export const AdminRoutes = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === '/' ? '/admin' : pathname;
    navigate(path, { replace: true });
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='admin' element={<AdminPanel />} />
        <Route path='admin/teachers' element={<Teachers />} />
        <Route path='admin/profile' element={<Profile />} />
        <Route path='admin/teachers/createTeacher' element={<CreateTeacher />} />
        <Route path='admin/teachers/teacher/:id' element={<Teacher />} />
        <Route path='admin/pupils' element={<Pupils />} />
        <Route path='admin/pupils/createPupil' element={<CreatePupil />} />
        <Route path='admin/pupils/pupil/:id' element={<Pupil />} />
        <Route path='admin/schedules' element={<Schedules />} />
        <Route path='admin/schedules/createSchedule' element={<CreateSchedule />} />
        <Route path='admin/schedules/schedule/:id' element={<Schedule />} />
        <Route path='admin/diaries' element={<Diaries />} />
        <Route path='admin/diaries/diary/:id' element={<Diary />} />
        <Route path='admin/diaries/createDiary' element={<CreateDiary />} />
        <Route path='admin/parents' element={<Parents />} />
        <Route path='admin/parents/createParent' element={<CreateParent />} />
        <Route path='admin/parents/parent/:id' element={<Parent />} />
        <Route path='*' element={<AdminPanel />} />
      </Route>
    </Routes>
  );
};
