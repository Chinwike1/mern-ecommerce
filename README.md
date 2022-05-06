Currently building Traversy Media's [MERN Ecommerce app](https://github.com/bradtraversy/proshop_mern), but with Redux Toolkit & React Router 6.

####Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

####Install Dependencies (frontend & backend)

```bash
npm install
cd frontend
npm install
```
####Run

```bash
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```
####Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```bash
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

####Build & Deploy

```bash
# Create frontend prod build

cd frontend
npm run build
```