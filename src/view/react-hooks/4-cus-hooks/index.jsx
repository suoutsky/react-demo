import React from 'react';
import useDarkMode from './use-dark-mode';
import { Switch } from 'antd';
import './index.css';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Switch checked={darkMode.value} onChange={darkMode.toggle}  checkedChildren="开" unCheckedChildren="关" />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;