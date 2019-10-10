import React, { FC } from 'react';
import styles from './Container1.module.css';
import { Component1 } from '../components/Component1';
import {Component2} from '../components/Component2'
export const Container1: FC = () => {
  return (
    <div>
      Container1
      <Component1 />
      <Component2/>
    </div>
  );
}
