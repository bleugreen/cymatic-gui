import { createRoot } from 'react-dom/client';
import App from './App';


const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);
//ttt

// calling IPC exposed from preload script
window.electron.ipcRenderer.on('get-track', (arg) => {
  // eslint-disable-next-line no-console
  const title = document.getElementById('title');
  if(title){
    title.innerText = arg as string;
  }
});
window.electron.ipcRenderer.on('get-artist', (arg) => {
  // eslint-disable-next-line no-console
  const title = document.getElementById('artist');
  if(title){
    title.innerText = arg as string;
  }
});
window.electron.ipcRenderer.on('get-album', (arg) => {
  // eslint-disable-next-line no-console
  const title = document.getElementById('album');
  if(title){
    title.innerText = arg as string;
  }
});

window.electron.ipcRenderer.on('get-cover', (arg) => {
  // eslint-disable-next-line no-console
  const cover = document.getElementById('cover') as HTMLImageElement
  if(cover){
    cover.src = arg as string;
  }
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);


window.electron.getTrack('waaaahawfrstoeirnstoiesrnTA')