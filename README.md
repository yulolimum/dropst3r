# WIP

---

# Theming
#### Using Yarn or NPM (installs all dependencies)
- Install all dependencies via terminal: `yarn` or `npm install`
- In a text editor, update your `.env`
- In terminal: `yarn build` or `npm run build`

#### Using selected CLI tools (installs a few dependencies)
- Install a few packages via terminal: `yarn global add dotenv-export replace-in-file convert-svg-to-jpeg`
- In a text editor, update your `.env`
- In terminal: `source <(dotenv-export)`
- Build your theme: `replace-in-file --configFile ./env.js; convert-svg-to-jpeg build/assets/static/placeholder.*.svg`

---

# Deployment
#### Simple
- Install the deployment CLI tool via terminal: `yarn global add s3-easy-deploy`
- Using a text editor, set your deployment keys in `.env` (`AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`)
- In terminal: `source <(dotenv-export)`
- Deploy (replace BUCKET_NAME with your actual bucket name): `s3-easy-deploy --public-root ./build --bucket BUCKET_NAME`

#### Manual
- todo
