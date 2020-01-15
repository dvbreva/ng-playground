# angular playground

This repository contains small projects (or some more complex ones) I'm building while learning about Angular.

## prerequisites  
Always make sure to run npm install first before proceeding with anything in order to restore the dependencies in the local node_modules folder. After that you're ready to go with npm start or ng serve of your desired port.  

## contents  
- **chat**  - contains simple chat application that is messenger-like; trying out component communication
- **uni-courses**   - contains crud operations implemented in simple asp.net core web api with angular 8. I've built a Web API project in Asp.Net Core (/ElectiveCourses) with the required methods at server side using Entity Framework Core and SQL Server as database storage. Then the Angular 8 Project (/ElectiveCoursesAngular) consumes those methods from the client side.
- **movie-catalog** - used the movie db open api, custom event emmitters and some filtering logic 
- **foot-court**  - app using angular's in memory web api to implement Redux pattern; strongly typing state/actions, using effects (also some effects error handling implemented) everything is done following folder by feature architectural style guide  
- **wishlist** - app that is like a wishlist for your 2020 goals; you may add or update them; using asp.net core web api for the back end logic mostly and angular 8 spa app for the front end; the idea here was to try the other approach towards Redux; everything is done using the latest factory methods which come from ngrx/store and ngrx/effects such as createAction/createEffect etc  

## goals roadmap  
HttpClientModule  
Routing/Navigation/Guards  
Reactive forms  
Template driven forms  
Dynamic forms  
Observables & RxJs  
Custom directives & Pipes  
Animations  
Redux pattern (@ngRx/store/effects/data)  
NGXS  
Complex component communication  
Angular materials  
Race conditions  
Unit testing  
JWT  

> **Note:** most of this might be be refactored
