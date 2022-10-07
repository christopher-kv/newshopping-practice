FROM node:18.3-alpine3.15 as node

WORKDIR /App

COPY .. .

RUN apk add git openrc openssh\
    && npm create vite@latest -y newshopping-practice -- --template react-ts\
    && cd newshopping-practice && npm install\
    && npm install react-router-dom bootstrap react-bootstrap\
    && npm install --save typescript @types/node @types/react @types/react-dom @types/jest

WORKDIR /App/newshopping-practice

CMD [ "npm", "run dev -- --host" ]
