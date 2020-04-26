# speedline-solution-project

## You could reach my project on the website: www.usask.ca

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

    1. Yes, the "mushup" is feasible. I could reach it by using Google Maps API and getting resources from Environment Canada. 
    
    2. Key Functions:
    
        a. The most important key function is the map, the function could show the Google Map on the front end, and the target cities should be marked.
        
        b. Then it should have the function show the weather once user click the marked cities.
    
    3. Project Technologies: 
    
        a. Using Vue.js as my framework for doing the web application. 
        
        b. Using the Google Maps API. 
        
        c. Implementation for getting the weather information by connecting Environment Canada.
        
        d. Front-End work out using simple CSS.
        
    4. Production for Vue.js and Limitation: 
    
        a. Yes, Vue.js is useful for many industrial productions.
        
        b. Vue.js is a lightweight framework, it might not be useful for large industrial products. 
        
    5. Evaluations: 
    
        a. Since this project is a simple project, I will evaluate on 3 aspects: 
        
            i. Accuracy for showing the location on the maps and weather. 
            
            ii. Interactions for the user could be able to interact with the web app (Click, Drag, Zoom, etc.).
            
            iii. Performance of the application such as latency for users doing the operations.
            
        b. Also, I could try to use unit test cases for checking the data is correct. 
        
    6. Time to finish: 
            
        a. I confident that I would finish it in the allotted time.    

### Step 2

    1. Implement a proof of concept. 
    2. Follow your plan or change it as necessary. 
    3. If you take shortcuts in your proof of concept, please include highlights of those shortcuts (by adding comments in the code when possible) and explain any changes that would need to be made to make the code production quality.
    
#### Project Implementation (Process)

    1. Install Vue Cli framework and put it on my GitHub.
    2. Implementated my plan.
    3. Using Google Map API which is the 'vue2-google-maps'
    4. From the API document, I did GMap component on the GoogleMaps respository.
    5. Finished the map and markers parts now. 
    6. Initialize the map center in the Abbotsford, then added all requirment markers on the map.
    7. Get information from Environment Canada: `https://weather.gc.ca/business/index_e.html`
    8. Finished the wehater part from the Environemnt Canada.
    9. Finished the function to transport information between layers
    10. Adding comments 
    11. Used CSS, and Vue Routers made a simple website, and it should reach the problem requirements.
    12. Test the required funtions (markers, maps, and weahters), they are all correct. 
    13. Deploy it on the AWS S3
  

### Step 3

#### Provide feedback on following:

    1. What architecture and design changes would you make for the project to move from prototype to production? 
    2. How would you make the code more maintainable if the project were to move from prototype to production?

#### Solutions:

    1. Architecture and design changes: 
    
        a. I used the Vue.js framework, in the prototype, we could use native Vue.js for desgin the website, but in the production, we might use the Bootstrp or Vuetify for the frontend.
        
        b. At the backend, we might use vuex with mongoDB, or MySQL for storing the datas
        
        c. The Vue.js architecture is MVVM, now, it is goog enough, but for handling the large-scale project, I might prefer the MVC
    
    2. Making the code maintainable 
    
        a. If the project is only for doing the weather informaton, I will store the locations in the JOSN format for data safty. 
    
        b. If the project will be use for pizza ordering, menus, etc, I will connect a database such as MySQL or MongoDB for storing the user informations, store numbers, etc. 
        
