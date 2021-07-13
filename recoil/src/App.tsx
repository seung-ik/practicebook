import React from 'react';
import Left from './components/Left'
import Right from './components/Right'
import {useRecoilValue, useSetRecoilState} from 'recoil'
import {CountState} from './recoil'


function App() {

  const getCount:number = useRecoilValue(CountState)
  const setCount = useSetRecoilState(CountState)

  return (
    <div className="App">
      <Left/>
      <Right/>
      <button onClick={()=>{
        const newVal = getCount + 1
        setCount(newVal)
      }}>
        plus
      </button>
      <button onClick={()=>{
        const newVal = getCount -1
        setCount(newVal)
      }}>
        마이나스
      </button>
    </div>

  );
}

export default App;
