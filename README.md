# speedline-solution-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Step 1

#### Develop a plan to create a proof of concept for this project.
    1. Does our proposed "mushup" seem feasible?
    2. Briefly describe the key pieces of functionality that we'd need in the final product
        Example: "I need to be able to display arbitrary data on an embedded Google Map"
    3. Briefly describe the tools, technologies and platforms that you plan on using for your proof of concept.
    4. Would the tools, technologies and platforms that you would use for your proof of concept be appropriate to use in production? What limitations might they have?
    5. Briefly describe how you would evaluate each "key piece of functionality" above.
    6. Estimate how far you think you could get in your proof of concept in the allotted time.
    
#### Answer

    1. Yes, the "mushup" is feasible. I could reach it by using Google Maps API and getting resource from Environment Canada. 
    
    2. Key Functions:
    
        a. The most important key function is maps, the function could shows the Google Map on the front end, and the target cities should be marked.
        
        b. Then it should have the function shows the weathers once user clike the marked cities.
    
    3. Project Technologies: 
    
        a. Using Vue.js as my framework for doing the web application. 
        
        b. Using the Google Maps API. 
        
        c. Implementation for methods for get the weather informations by connecting Environment Canada.
        
        d. Front-End work out using simple CSS.
        
    4. Production for Vue.js and Limitation: 
    
        a. Yes, Vue.js is useful for many industry production.
        
        b. Vue.js is a lightweight framework, it might not useful for the large industrial product. 
        
    5. Evaluations: 
    
        a. Since this project is a simple project, I will evaluate on 3 aspects: 
        
            i. Accuracy for showing the location on the maps and weather. 
            
            ii. Interactions for the user could be able to interact with the web app (Click, Drag, Zoom, etc.).
            
            iii. Performance of the application such as latency for users doing the operations.
            
        b. Also, I could try to use unit test cases for checking the data is correct. 
        
    6. Time to finish: 
    
        a. I believe I could finish it within 24 hours (work time) if everything goes correct.
        
        b. I confident that I would finish it in the allotted time.    

### Step 2

    1. Implement a proof of concept. 
    2. Follow your plan or change it as necessary. 
    3. If you take shortcuts in your proof of concept, please include highlights of those shortcuts (by adding comments in the code when possible) and explain any changes that would need to be made to make the code production quality.

### Step 3

#### Provide feedback on following:
    1. What architecture and design changes would you make for the project to move from prototype to production? 
    2. How would you make the code more maintainable if the project were to move from prototype to production?


