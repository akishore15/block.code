import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/javascript';

const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox')
});

Blockly.addChangeListener(() => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log(code);
});
