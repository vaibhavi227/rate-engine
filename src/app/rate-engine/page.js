import * as React from 'react';
import {RateEngine,RateEngineChild,BasicTabs} from "../components/page"; 
import FormComponent from "../components/rate-engine-details/page"
export default function Home() {

    return (
      <main>
        <div>
         
          <RateEngine></RateEngine>
          <RateEngineChild></RateEngineChild>
          <FormComponent></FormComponent>
          <BasicTabs></BasicTabs>
          </div>
          </main>
    )
};

