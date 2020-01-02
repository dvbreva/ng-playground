# angular playground

This repository contains small projects (or some more complex ones) I'm building while learning about Angular.

## prerequisites  
Always make sure to run npm install first before proceeding with anything in order to restore the dependencies in the local node_modules folder. After that you're ready to go with npm start or ng serve of your desired port.  

## contents  
- **chat**  - contains simple chat application that is messenger like
- **uni-courses**   - contains crud operations implemented in simple asp.net core web api with angular 7. I've built a Web API project in Asp.Net Core (/ElectiveCourses) with the required methods at server side using Entity Framework Core and SQL Server as database storage. Then the Angular 7 Project (/ElectiveCoursesAngular) consumes those methods from the client side.
- **movie-catalog** - used the movie db open api, custom event emmitters and some filtering logic 
- **foot-court**  - simple app using angular's in memory web api to implement Redux pattern; strongly typing state/actions, using effects (also some effects error handling implemented) everything is done following folder by feature architectural style guide

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

> **Note:** most of this code will be refactored
