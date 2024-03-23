#
## Simple Food API with Authentication


This is a simple API in which we can Create,Edit,Delete and Update food Menu with Authentication .



## Features

- We can create a User, login with those crendtial, here i have used JWT Token for Authentication
- Once logged in we can create a product , 
- Each product which is created is set to a perticular user using a mongo DB method poulate
- I have used swagger tools for API documentation 


## Tech

Food API uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework 

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh

npm i
npm start
```



#### Building for source

For production release:

```sh
npm build --prod
```

Generating pre-built zip archives for distribution:

```sh
npm build dist --prod
```

## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
## Images of Project
#### Swagger API Documentation
![image](https://github.com/jmPramod/Nodejs-API/assets/107529743/fab472d1-ec90-4083-b1a9-2f88efa5d305)
