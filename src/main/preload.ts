import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

import { test } from 'services/redis-service';
export type Channels = 'ipc-example'|'get-track'|'get-artist'|'get-cover'|'get-album'|'remote'|'play-end'|'play-resume'

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
  getTrack(trackid:string){
    //test().then(()=>{console.log(trackid)})
  }
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
