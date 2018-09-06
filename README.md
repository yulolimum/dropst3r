# Dropst3r

Do you use Droplr, Dropbox, Evernote, Etc for sharing files with your clients or team members but want just a little bit more control over how they are presented or stored?

Do you want to embed a video into your Github pull request or bulletin board post but instead end up linking to it with text?

Do you want to share a nsfw meme with your colleague two cubicles down but your Slack and Dropbox are being tracked?

__Dropst3r is the solution you have been waiting for! It is a customizable theme to be used with Amazon S3 (and optionally Monosnap) to nicely wrap your media/files and present them in a profressional manner.__

---

#### Behold, screenshots:

| Image Preview | Video Preview | Audio Preview |
| :---:         |     :---:      |          :---: |
| ![](https://user-images.githubusercontent.com/1775841/45134519-c75b9200-b14f-11e8-9aa2-ede6795b33f4.png)   | ![](https://user-images.githubusercontent.com/1775841/45134754-fe7e7300-b150-11e8-8a96-09ed4dce3ca3.png)     | ![](https://user-images.githubusercontent.com/1775841/45134797-2cfc4e00-b151-11e8-8816-2ffaaeda2f66.png)    |

| PDF, Word, Excel Preview | Archive Preview | Generic Preview |
| :---:         |     :---:      |          :---: |
| ![](https://user-images.githubusercontent.com/1775841/45134931-c7f52800-b151-11e8-8ce9-37d1eb72e8ef.png)   | ![](https://user-images.githubusercontent.com/1775841/45135069-54074f80-b152-11e8-9018-7cf4725d929c.png)     | ![](https://user-images.githubusercontent.com/1775841/45135031-3934db00-b152-11e8-831f-0a84a3a64bf5.png)    |

---

#### Embedding:

| Embeds Panel | Markdown Video Example | BBCode Excel Example |
| :---:         |     :---:      |          :---: |
| ![](https://user-images.githubusercontent.com/1775841/45136027-207af400-b157-11e8-8742-3b505ec268ed.png)   | ![](https://user-images.githubusercontent.com/1775841/45138626-efec8780-b161-11e8-937c-70c6ca26289d.png)     | ![](https://user-images.githubusercontent.com/1775841/45138834-b9fbd300-b162-11e8-8d50-47de629216b3.png)    |

---


#### Theming:

| Default Dark Theme | Configurable Options | Re-skinning via CLIs  |
| :---:         |     :---:      |          :---: |
| ![](https://user-images.githubusercontent.com/1775841/45139428-946fc900-b164-11e8-8e8e-fa1bff4bda32.png)   | ![](https://user-images.githubusercontent.com/1775841/45139358-58d4ff00-b164-11e8-9b36-865f0d46132e.png)     | ![](https://user-images.githubusercontent.com/1775841/45139894-1f9d8e80-b166-11e8-92eb-8c88f0c4fb5c.png)    |

---

### Motivation

The initial reasoning for Dropst3r was to replace the many tools used for screenshot/video capturing, annotation, and storage. Although it is a simple theme for S3 files, it was built around the screenshot/video capture tool - [Monosnap](https://monosnap.com/welcome). Although Monosnap offers a similar solution for displaying media, some prefer to host the files themselves (for reasons of  security, privacy, whitelabeling, etc). As development continued, a few simple yet convenient features were built in: theming, embedding options, and social sharing.

_It is up to you how you upload media/files to S3; however, Monosnap is highly recommended as it is the most convenient._

### Future

There are a few things missing from the current release. Some will be added in the near future while others if there is public need (reported via Issues).
- support FTP/SFTP servers
- support for custom fonts
- easier theming for non-developers
- more preview types (code, markdown, etc)
- an index page that lists out all of the files
- easier deployment for non-developers
- more pre-built themes

---

# HowTos

The below instructions that involve using the command line are listed for those that have experience using it. If you're not comfortable, please create an Issue with a color palette and I can build a theme for you. You will still have to follow the steps to setup Monosnap, Amazon S3.

### Amazon S3 Setup

_todo_

### Theming

_todo_

### Deployment

_todo_

---

### Legal:

We are not affiliated, associated, authorized, endorsed by or in any way officially connected to Monosnap or Amazon.

<!--

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
- todo -->