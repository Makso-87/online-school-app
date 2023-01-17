import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { TeacherAccount } from '../components/TeacherAccount/TeacherAccount';
import { Profile } from '../pages/profile/Profile';
import { Pupils } from '../pages/pupils/Pupils';
import { Parents } from '../pages/parents/Parents';
import { CreatePupil } from '../pages/pupils/createPupil/CreatePupil';
import { Pupil } from '../pages/pupils/pupil/Pupil';
import { CreateParent } from '../pages/parents/createParent/CreateParent';
import { Parent } from '../pages/parents/parent/Parent';

export const TeacherRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='teacher' element={<TeacherAccount />} />
        <Route path='teacher/profile' element={<Profile />} />
        <Route path='teacher/pupils' element={<Pupils />} />
        <Route path='teacher/pupils/createPupil' element={<CreatePupil />} />
        <Route path='teacher/pupils/pupil/:id' element={<Pupil />} />
        <Route path='teacher/parents' element={<Parents />} />
        <Route path='teacher/parents/createParent' element={<CreateParent />} />
        <Route path='teacher/parents/parent' element={<Parent />} />
        <Route path='*' element={<TeacherAccount />} />
      </Route>
      <Route path='/teacher' />
    </Routes>
  );
};
