## Using custom file name to build image

```
docker build -f Dockerfile.dev .
```

## running image using volume and ignoring node_modules to be used as volume

```
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app f50e4b8c12b336269200662d370035cc878626b5ef544bec1f9f63053042bba5
```

ignore /app/node_modules binding but bind rest (pwd = working directory address)

# Docker Compose

docker compose up

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
