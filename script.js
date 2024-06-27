document.getElementById('recipe-form').addEventListener('submit', async function(e) {
     e.preventDefault();
     const query = document.getElementById('recipe-input').value;
     const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
     
     try {
         const response = await fetch(apiUrl);
         const data = await response.json();
         displayRecipes(data.meals);
     } catch (error) {
         console.error('Error fetching data:', error);
         displayError('Unable to fetch recipes. Please try again later.');
     }
 });
 
 function displayRecipes(recipes) {
     const recipeResults = document.getElementById('recipe-results');
     recipeResults.innerHTML = '';
 
     if (!recipes) {
         displayError('No recipes found.');
         return;
     }
 
     recipes.forEach(recipe => {
         const recipeDiv = document.createElement('div');
         recipeDiv.className = 'recipe';
 
         const recipeImage = document.createElement('img');
         recipeImage.src = recipe.strMealThumb;
         recipeImage.alt = recipe.strMeal;
 
         const recipeInfo = document.createElement('div');
         const recipeTitle = document.createElement('h3');
         recipeTitle.textContent = recipe.strMeal;
 
         const recipeLink = document.createElement('a');
         recipeLink.href = recipe.strSource || '#';
         recipeLink.textContent = 'View Recipe';
         recipeLink.target = '_blank';
 
         recipeInfo.appendChild(recipeTitle);
         recipeInfo.appendChild(recipeLink);
         recipeDiv.appendChild(recipeImage);
         recipeDiv.appendChild(recipeInfo);
 
         recipeResults.appendChild(recipeDiv);
     });
 }
 
 function displayError(message) {
     const recipeResults = document.getElementById('recipe-results');
     recipeResults.innerHTML = `<p>${message}</p>`;
 }
 

 var sentence = "Welcome to Abraham's Recipe Finder";
 var index = 0;

 function displayNextLetter() {
     if (index < sentence.length) {
         document.getElementById("welcome-text").textContent += sentence[index];
         index++;
         setTimeout(displayNextLetter, 500); 
     }
 }

 displayNextLetter(); // Start displaying letters
 var dynamicText = document.getElementById('dynamicText');
 var sentences = ["learn new cooking techniques","become efficient in meal preparation","have nutritional awareness","in cost management","have consistent cooking results"];
 var sentenceIndex = 0; // Index to track the current sentence
 var letterIndex = 0; // Index to track the current letter

 // Function to change the text dynamically
 function changeText() {
   var currentSentence = sentences[sentenceIndex];
   var newText = ''; // Initialize the new text
   for (var i = 0; i <= letterIndex; i++) {
     newText += currentSentence[i]; // Add each letter up to the current index
   }
   dynamicText.textContent = newText; 
   letterIndex++; 
   if (letterIndex >= currentSentence.length) {
     letterIndex = 0;
     sentenceIndex = (sentenceIndex + 1) % sentences.length;
     setTimeout(changeText, 2000); 
   } else {
     setTimeout(changeText, 200); 
   }
 }
 changeText();

 