# japanfood-react-nest-graphql

## Description

This Food Pedia using stack
* vite - React Js (Frontend)
* Nest Js + Prisma  (Backend)
* graphql 

## Requirement

* database
* nodejs

Heres the step u need to run this project

## Frontend

First go to frontend folder
```bash
cd japanfood-fe/
```

1. Install all Depedency
```bash
npm i
```

2. Edit .env.example to .env and change the backend url
```bash
VITE_API_URL=http://localhost:3000/graphql
```

3. run the react-vite
```bash
npm run dev
```

## Backend
First go to backend folder
```bash
cd japanfood-nest/
```

1. Install all Depedency
```bash
npm i
```

2. Edit .env.example to .env and change the database url
```bash
DATABASE_URL="mysql://root:@localhost:3306/japanshop-se"
```

3. Run the database migrate
```bash
npx prisma migrate dev --name init
```

4. Run the db seed to seeding data
```bash
npx prisma db seed
```

5. run the nest js
```bash
npm run start:dev
```