## API
NodeJs, Express

### Install and Build (if packages updated)
`fig build nodejs`

`./nodejs/npm install` (because we need VSCODE to have node_modules also, despite the working ones are in docker container )

### Run
`fig up nodejs`

### Debug

#### VSCODE Docker
1) Run app (from docker repository with `fig up nodejs`)
2) Start debug from VSCODE: `Docker: NodeJs`

#### VSCODE No Docker
1) Run with `npm start`
2) Start debug from VSCODE......

### Test
`npm run test`


# Run Prettier Batch
(shouldnt be needed but if we paste code from somewhere else)

(web and node)

`npx prettier --write .`