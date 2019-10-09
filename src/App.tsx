import React, {FC} from 'react';
import styles from './App.module.css';
import { Container1 } from './containers/Container1'

export const App: FC = () => {
  return (
    <div>
      App Wrapper
      <Container1 />
    </div>
  );
}

