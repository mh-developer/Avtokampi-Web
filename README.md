# Web app for camping

<p align="center">
  <img src="https://github.com/mh-developer/Avtokampi-Web/blob/master/code/Avtokampi-Web/src/assets/images/logo/ikona.png?raw=true"/>
</p>

This is a web camping app written in Angular for a school term paper/seminar assignment.

Table of contents
=================

- [Prerequisites](#prerequisites)
- [Installation and running](#installation-and-running)
- [Purpose of the app](#purpose-of-the-app)

## Prerequisites

To properly run the application from Visual Studio Code you have to install the
following:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js 12.x](https://nodejs.org/)

## Installation and running

When you have installed dev tools, run following commands:
- `cd code/Avtokampi-Web/`
- `npm install -g @angular/cli`
- `npm audit fix`
- `ng config -g cli.warnings.versionMismatch false`
- `npm install`
- `ng serve`

## Purpose of the app

The purpose of this application and repository is to create a DEMO web app for camping that would
provide the following pages:

- user login and registration
- list view of several camping venues with some information
- view of camps on Google Maps
- reservation of camps and camping spaces
- adding your personal opinion based on your stay in camps
- adding a new camp for camping owners
- modifying and erasing camps for camping owners
- adding, modifying and deleting camping spaces
