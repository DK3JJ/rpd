import {setGuiMode, GuiMode} from './gui';

import { mount } from 'svelte'
import App from './App.svelte'

document.addEventListener('DOMContentLoaded', async () => {
  mount(App, {
    target: document.getElementById('app')!,
  })
  setGuiMode(GuiMode.NotConnected);
});
