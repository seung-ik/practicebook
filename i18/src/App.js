import './App.css';
import { Suspense, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ReactHtmlParser from 'react-html-parser'
import {Button} from '@material-ui/core'

function HeaderComponent (){
  const {t, i18n} = useTranslation('common');

  return (
    <div>
      <h1>{t('welcome.title', {framework:'React'})}</h1>
      <button onClick={()=> i18n.changeLanguage('de')}>de</button>
      <button onClick={()=> i18n.changeLanguage('en')}>en</button>
      <button onClick={()=> i18n.changeLanguage('ko')}>ko</button>
    </div>
  )
}

const SpecialButton = ({children,color}) =>{
  return <button style={{color}}>{children}</button>
}

const htmlFromCMS = `
  <div>HI,
    <SpecialButton color="red">My Button</SpecialButton>
  </div>
`

function App() {
  const inputRef = useRef();
  return (
    <Suspense fallback="loading">
      <div className="App">
        <HeaderComponent />
      </div>

      <div>{ReactHtmlParser(htmlFromCMS)}</div>

      <Button variant="text" component="label">
        파일 찾기
        <input accept="image/*" type="file" hidden />
      </Button>

      <button component="label" onClick={()=>inputRef.current.click()}> 
          파일 찾기
          <input accept="image/*" type="file" hidden ref={inputRef}/>
      </button>

    </Suspense>
  );
}

export default App;
