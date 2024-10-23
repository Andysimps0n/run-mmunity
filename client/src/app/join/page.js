"use client"

import React, { useEffect } from 'react';
import Map from '../components/Map';
import { Provider } from 'react-redux';
import store from '../store';
function Page() {

  return (
    <Provider store={store}>
        <Map></Map>
    </Provider>
  );
}

export default Page;
