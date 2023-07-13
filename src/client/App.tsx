import React, { useEffect } from 'react';
import '../client/css/normalize.css';
import '../client/css/globals.css';
import '../client/css/fonts.css';
import '../client/css/styleVariables.scss';
import authStore from './store/authStore';
import { useCheckAuth } from './hooks/checkAuth.hook';
import { AppRoutes } from './components/AppRoutes/AppRoutes';
import { Audio, Watch } from 'react-loader-spinner';
import { observer } from 'mobx-react';

const App = observer(() => {
  const { isReady } = useCheckAuth();
  // console.log('app');
  // console.log('token', authStore.token);
  //
  // useEffect(() => {
  //   console.log('app отрисовалось');
  // }, []);
  //
  // if (!isReady) {
  //   return (
  //     <Watch
  //       height='80'
  //       width='80'
  //       radius='48'
  //       color='#647db7'
  //       ariaLabel='watch-loading'
  //       wrapperClass='loader-container'
  //       visible={true}
  //     />
  //   );
  // }

  return <AppRoutes />;
});

export default App;
