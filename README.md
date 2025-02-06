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

# Frontend Display

## Home Page
![Screenshot 2025-02-06 at 16-33-50 Vite React TS](https://github.com/user-attachments/assets/031db18f-dca7-45d9-bae5-d147f47fa6e0)

## Menu Page
![Screenshot 2025-02-06 at 17-00-38 Vite React TS](https://github.com/user-attachments/assets/ab93a60c-a53c-4caa-aff6-8d788ef24e5e)

## Login Page
![Screenshot 2025-02-06 at 17-01-13 Vite React TS](https://github.com/user-attachments/assets/90ee37b4-fbed-436f-981a-844ca5b5939c)

## Register Page
![Screenshot 2025-02-06 at 17-01-41 Vite React TS](https://github.com/user-attachments/assets/aa97c4ab-268f-4f83-8e90-d82cbc4cd513)

