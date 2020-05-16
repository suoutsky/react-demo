import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
// v16.0
import RenderNew from './view/V16.0/render-new';
import Portal from './view/V16.0/portal';
// v16.2
import Fragement from './view/V16.2/fragment';
// v16.3
import ContextApi from './view/V16.3/context-api';
import CreateRefApi from './view/V16.3/createRef-api';
import ForwardRefApi from './view/V16.3/forwardRef-api';
// v16.6
import Memo from './view/v16.6/memo';
import Lazysuspense from './view/v16.6/lazysuspense';
import DerivedStateFromError from './view/v16.6/derivedStateFromError';
// react-hooks
import StateDemo from './view/react-hooks/1-basic/01-state';
import EffectDemo from './view/react-hooks/1-basic/02-effect';
import UseEffectDemo from './view/react-hooks/1-basic/02-effect/useEffect';
import LifeCycleDemo from './view/react-hooks/2-migration/01-life-cycle';
import UseReducerDemo from './view/react-hooks/1-basic/03-useReducer/index';
// context
import ContextDemo from './view/react-hooks/2-migration/03-context/context.jsx';
import UseContext from './view/react-hooks/2-migration/03-context/use-context.jsx';
// react-redux
import ReduxDemo from './view/react-hooks/3-redux/index';
import ReactHooksRedux from './view/react-hooks/3-redux/react-hooks-redux/index';
// 自定义
import UseDarkMode from './view/react-hooks/4-cus-hooks/index';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <div className="app-content">
          <div className="meun">
            <div className="title">V16.0</div>
            <ul>
              <li>
                <Link to="/">render-new</Link>
              </li>
              <li>
                <Link to="/portal">portal</Link>
              </li>
            </ul>
            <div className="title">V16.2</div>
            <ul>
              <li>
                <Link to="/fragement">RenderFragment</Link>
              </li>
            </ul>
            <div className="title">V16.3</div>
            <ul>
              <li>
                <Link to="/context">context-api</Link>
              </li>
              <li>
                <Link to="/createref">createRef-api</Link>
              </li>
              <li>
                <Link to="/forwardrefApi">forwardRef-api</Link>
              </li>
              <li>
                <Link to="/memo">memo-api</Link>
              </li>
              <li>
                <Link to="/lazysuspense">lazysuspense-api</Link>
              </li>
              <li>
                <Link to="/derivedStateFromError">derivedStateFromError-api</Link>
              </li>
            </ul>
            <div className="title">react-hooks-basic</div>
            <ul>
              <li>
                <Link to="/stateDemo">StateDemo</Link>
              </li>
              <li>
                <Link to="/effectDemo">EffectDemo</Link>
              </li>
              <li>
                <Link to="/useEffectDemo">UseEffectDemo vs UseLayoutEffect</Link>
              </li>
              <li>
                <Link to="/lifeCycleDemo">LifeCycleDemo</Link>
              </li>
              <li>
                <Link to="/useReducerDemo">UseReducerDemo</Link>
              </li>
            </ul>
            <div className="title">react-hooks-context</div>
             <ul>
               <li>
                <Link to="/contextDemo">contextDemo</Link>
               </li>
               <li>
                <Link to="/useContext">useContext</Link>
               </li>
             </ul>
             <div className="title">react-hooks-redux</div>
             <ul>
             <li>
                <Link to="/reduxDemo">ReactReduxDemo</Link>
              </li>
              <li>
                <Link to="/reactHooksRedux">ReactHooksRedux</Link>
              </li>
             </ul>
             <div className="title">react-hooks-自定义</div>
             <ul>
              <li>
                <Link to="/useDarkMode">UseDarkMode</Link>
              </li>
             </ul>
          </div>
          <div className="content">
            <Route exact path="/" component={RenderNew} />
            <Route exact path="/portal" component={Portal} />
            <Route exact path="/fragement" component={Fragement} />
            <Route exact path="/context" component={ContextApi} />
            <Route exact path="/createref" component={CreateRefApi} />
            <Route exact path="/forwardrefApi" component={ForwardRefApi} />
            <Route exact path="/memo" component={Memo} />
            <Route exact path="/lazysuspense" component={Lazysuspense} />
            <Route exact path="/derivedStateFromError" component={DerivedStateFromError} />
            <Route exact path="/stateDemo" component={StateDemo} />
            <Route exact path="/effectDemo" component={EffectDemo} />
            <Route exact path="/lifeCycleDemo" component={LifeCycleDemo} />
            <Route exact path="/reduxDemo" component={ReduxDemo} />
            <Route exact path="/reactHooksRedux" component={ReactHooksRedux} />
            <Route exact path="/useDarkMode" component={UseDarkMode} />
            <Route exact path="/useContext" component={UseContext} />
            <Route exact path="/contextDemo" component={ContextDemo} />
            <Route exact path="/useEffectDemo" component={UseEffectDemo} />
            <Route exact path="/useReducerDemo" component={UseReducerDemo} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
