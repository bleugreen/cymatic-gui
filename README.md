## System Dependencies

- [Shairport Sync](https://github.com/mikebrady/shairport-sync)
  - Flags: metadata, mqtt interface, mqtt client
- [Mosquitto](https://github.com/eclipse/mosquitto)

## Install

Clone the repo and install dependencies:

```bash
git clone https://github.com/Mitchell57/cymatic-gui.git
cd cymatic-gui
npm install
```

Start the app in the `dev` environment:

```bash
npm start
```

## Packaging for Production

To package apps for the local platform:

```bash
npm run package
```

