import * as React from 'react';
import {RateEngine,RateEngineChild,BasicTabs} from "../components/page";

export default function Home() {

    return (
      <main>
        <div>
         
          <RateEngine></RateEngine>
          <RateEngineChild></RateEngineChild>
          <BasicTabs></BasicTabs>
          </div>
          </main>
    )
};

