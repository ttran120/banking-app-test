# BankingApp

Use the command `npm i` to install the appropriate node modules.  Then run `ng serve` to see the application in your browser.

## Development server

Run `ng serve` to run the application.  It will be on localhost:4200.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Architecture
Right now the application is focused around the feature components that get their data from the appropriate services.  Most of the logic is handled in the services.  It would be good to add routing, and have the transactions page on a transactions route so other enhancements can be made in the future (new feature pages).  In the future would like to separate out feature modules to make code more modular and support lazy loading.
