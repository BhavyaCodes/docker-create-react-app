FROM node:16-alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# 2nd phase

FROM nginx

# everything else will be deleted from first phase
COPY --from=builder /app/build /usr/share/nginx/html

