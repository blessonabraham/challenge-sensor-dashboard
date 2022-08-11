# **Sensor Dashboard**
Dashboard to View, Add, Edit, and delete sensor device details.
## **Quick start**
1. Make sure that you have Node.js and npm installed.
1. Clone this repo using git clone https://github.com/blessonabraham/challenge-sensor-dashboard.git
1. Move to the appropriate directory: cd <PROJECT\_NAME>.
1. Run *npm run install* to install dependencies and *npm run start* to start the project.
1. At this point, you can see the app launched at [http://localhost:3000](http://localhost:3000/).
1. Make sure the Mock API server is up and running at port 3009 before starting the app. If it's running in some other port or URL then change the base URL from src > Shared > Constants > Constants.ts > BASE\_URL
## **Unit Tests**
Unit test has been added to make sure things don't break and it's working as expected. The project has a code coverage of 60+ percent for now and 100% is the target.

- run *npm run test* to run all tests 
- and *npm run test-coverage* to get the coverage report

## **Configurations**
**Webpack:** Project is completely configured in the Webpack for extensive control and optimization. (Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, etc.) 

**Typescript:** Typescript is the key to scalability. Build self-documented code, and easy-to-debug code and create maintainable large applications and codebases with a highly productive development experience. 

**Jest & RTL:** Jest and React Testing Library is used for unit testing the project
