## Using custom file name to build image

```
docker build -f Dockerfile.dev .
```

## running image using volume and ignoring node_modules to be used as volume

```
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app f50e4b8c12
```

ignore /app/node_modules binding but bind rest (pwd = working directory address)

## running tests

```
docker run -it 6603d31e8274e npm run test
```

# Testing methods

##### Does not hot reload

1. `Docker run -it sfyh3497hf npm run test` // image id

##### hot reload working

2. `Docker exec -it <containerid> npm run test` //
3. using docker compose but we don't get interactivity

### Running production server (default nginx port = 80)

docker run -p 8080:80 52dec9af

# Docker Compose

docker compose up

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
