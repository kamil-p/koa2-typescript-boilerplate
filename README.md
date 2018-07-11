# Koa2 TypeScript Boilerplate


The main purpose of this repository is to show a good end-to-end project setup and workflow for writing Node code in TypeScript.
I will try to keep this as up-to-date as possible, but community contributions and recommendations for improvements are encouraged and will be most welcome. 


# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/) v8.9.4
- Install [PHPStorm/WebStorm/Intellij](https://www.jetbrains.com/)

# Getting started
- Clone the repository
```
git clone https://github.com/kamil-p/koa2-typescript-boilerplate.git <project_name>
```
- Install dependencies
```
cd <project_name>
yarn install
```
- Build and run the project
```
npm run build
npm start
```


## Project Structure

The full folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `npm run build`

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **dist**                 | Contains the distributable (or output) from your TypeScript build. This is the code you ship  |
| **node_modules**         | Contains all your npm dependencies                                                            |
| **src**                  | Contains your source code that will be compiled to the dist dir                               |
| **src/controller**       | Controllers define functions that respond to various http requests                            |
| **src/module**           | For now it contain only routing  |
| **src**/app.ts           | Entry point to your express app                                                               |
| package.json             | File that contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)                          |
| tsconfig.json            | Config settings for compiling server code written in TypeScript                               |
| tslint.json              | Config settings for TSLint code style checking                                                |


# Run/debug configuration

Personally, I am working on Windows. But for development, I use VirtualBox + Ubuntu Server where inside I installed node. Using samba I shared a disk from Linux to Windows. Base on my configuration I have set up Run/Debug Configuration which you can find below. The only think what I need to do is to press the debug button and send a request to the server.  
This configuration is the best if you like Windows and Linux working together but I can imagine that it could be quite complex for someone who never did it so I don't recommend it. 

If you don't use it set my configuration you can simply look to the packages.json - script and run whatever you want.

![image](https://uc9cb30759c32749a9fb8434651e.dl.dropboxusercontent.com/p/thumb/AAF13aUbS4WUasJmd5gVL76-tPcxvNaV4e1RPF_K_DCDu9Nxuyx3UMzxSSw9hZgg77y5NlWBoWh86DjZLB1BQrAR_TRB1IoHDrUvRMw5kdzKr0xnDAuwg5wTqG88evPwp8I2YvWWajjIte_peL_c84j85tDX3Kb7ujocCAYJdpGPtwZvXTlQALEvwFvfFZOXKd9XIR-4YzpPzRw9FV0jSu3FjO2uPiiHEb2iBy6c33BMew/p.png?preserve_transparency=1&size=1280x960&size_mode=3)
