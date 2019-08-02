import React from 'react';
import { Checkbox, CheckboxGroup } from './UI/Checkbox';

function App() {
  const [checked, setChecked] = React.useState(true);
  const [checkeds, setSheckeds] = React.useState(['2']);
  return (
    <div className="App">
      <Checkbox>勾选</Checkbox>
      <Checkbox
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
        name="checkbox1"
      >
        勾选{String(checked)}
      </Checkbox>
      <br />
      {checkeds.join(',')}
      <CheckboxGroup
        name="checkbox1"
        value={checkeds}
        onChange={setSheckeds}
      >
        <Checkbox value='1'>a</Checkbox>
        <Checkbox value='2'>b</Checkbox>
        <Checkbox value='3'>c</Checkbox>
      </CheckboxGroup>
    </div>
  );
}

export default App;
