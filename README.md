# Creative Tensions Website

## Stack
- Contentful CMS
- Express.js Server
- React.js Frtontend

## Configuration
- `webpack.*.config.js` configures the front-end build
- `config.js` configures Contentful CMS connection
- `ecosystem.config.js` configures `pm2` [see Deployment below]

## Development
- `> npm install` or `> yarn`
- `> node app.js`
- Open your browser and naviagte to `http://localhost:3000`

## Deployment
- This site is currently deployed on an AWS EC2 instance. To gain SSH access to this Ubuntu machine, write to [Mani Nilchiani](mnilchiani@ideo.com) or [Ian Thompson](ithompson@ideo.com)
- The `node.js` server process is initialized and watched by `pm2`. To install this process manager, you'll need `node.js` and `npm` installed. Then: `> npm install pm2 -g` or `yarn glonal add pm2`
- Run `> npm run build-production` or `> yarn build-production` to build the front-end CSS & JS assets.
- Once `npm` dependencies are installed and `pm2` is installed globally, run `> ./init.sh`. Inspect the contenst of this file to see what it does. But it basically applies the settings described in `ecosystem.config.js` and starts `pm2` with these settings. Once the server is running, execute `pm2 ls` to see your app running and datapoins about it.

