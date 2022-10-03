# 4-4chan

4chan is a simple text-based bulletin board where anyone can post comments and share images. There are boards dedicated to a variety of topics, from Japanese animation and culture to videogames, music, and photography. Users do not need to register an account before participating in the community. Feel free to click on a board below that interests you and jump right in!

_NOTE : please do not create any violating contents here as is this database is publicly visible and i'm not responsibe for any violating content_

## Demo Video:

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/Be8o9KWezCw/0.jpg)](https://www.youtube.com/watch?v=Be8o9KWezCw)

## Get Started

Clone the repo to your local machine

```bash
git git@github.com:chann44/4-4chan.git
```

### NPM Commands

Install all the dependencies

```bash
cd client
yarn
```

Start the client on localhost:5173

```bash
cd client
yarn dev
```

Install all server side dependencies

```bash
cd server
yarn
```

create a .env file and add a DATABASE_URL variable and put your postgres db url there

create and seed the db

```bash
cd server
npx prisma migrate dev

npx prisma db seed
```

Start the server on localhost:5000

```bash
cd server
yarn dev
```

## Tools Used

- [React](https://reactjs.org)
- [Vite](https://vitejs.dev/)
- [Nodejs](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)
- [Prisma](https://www.prisma.io/)
- [Postgres](https://www.postgresql.org/)
- [Tailwind](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)

Made with :heart: and Typescript
