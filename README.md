# Electron React Typescript Starter

Minimal starting point so you can add the tools of your choice easily.

## Getting started

1. Clone the repo: `git clone git@github.com:juliankrispel/electron-react-typescript.git`
2. Install dependencies: `npm install`
3. `npm run dev`

### Folder structure

- `./electron/index.ts` - compiles to our electron script. This is the entry point of our electron application. Keep all related files in the `electron` folder
- `./src/index.ts` - entry point for our frontend, keep all your frontend code in the same folder.

### Scripts

- `npm run start` - automatically compiles files in `src` and `electron`
- `npm run build` - build both electron script and react frontend
- `npm run watch` - watch and compile all files in `electron` and `src` folders
- `npm run electron` - start electron
- `npm run watch:node` - watch and compile all files in `electron`
- `npm run watch:browser` - watch and compile all files in `src`
- `npm run build:node` - compile all files in `electron`
- `npm run build:browser` - compile all files in `src`

Any questions? Reach [out on twitter](https://twitter.com/juliandoesstuff)
