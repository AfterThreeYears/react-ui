import React from 'react';
import { Checkbox, CheckboxGroup } from './UI/Checkbox';
import { Modal } from './UI/Modal';

function App() {
  const [checked, setChecked] = React.useState(false);
  const [checkeds, setSheckeds] = React.useState(['2']);
  function handleClick() {
    Modal.confirm({
      content: 'xxxx',
      onOk: async () => {
        console.log('ok');
        return Promise.reject();
      },
      onCancel: () => {
        console.log('onCancel')
      },
    });
  }
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
        显示模态框{String(checked)}
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
      <br />
      <Modal
        visible={checked}
        onCancel={() => setChecked(false)}
        onOk={() => setChecked(false)}
      >
        ajdkas
      </Modal>
      <button onClick={handleClick}>confirm</button>
    </div>
  );
}

export default App;
