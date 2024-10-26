// Register the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful:', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

// Initialize global variables
let calorieGoal = 0;
let totalCalories = 0;
let totalCarbs = 0;
let totalProtein = 0;
let totalFats = 0;
let meals = [];

// Function to update the displayed calorie goal
function updateCalorieGoalDisplay() {
    document.getElementById('calorie-goal-display').innerText = calorieGoal;
    updateProgressBar();
}

// Function to update the progress bar based on calories consumed
function updateProgressBar() {
    const progress = (totalCalories / calorieGoal) * 100;
    document.getElementById('calorie-progress').style.width = `${progress}%`;
}

// Function to set the calorie goal
document.getElementById('set-goal-btn').addEventListener('click', () => {
    const goalInput = document.getElementById('calorie-goal-input').value;
    calorieGoal = goalInput ? parseInt(goalInput) : calorieGoal;
    updateCalorieGoalDisplay();
});

// Function to add a meal
document.getElementById('add-meal-btn').addEventListener('click', () => {
    const mealName = document.getElementById('meal-name').value;
    const mealCalories = parseInt(document.getElementById('meal-calories').value);
    const mealCarbs = parseInt(document.getElementById('meal-carbs').value);
    const mealProtein = parseInt(document.getElementById('meal-protein').value);
    const mealFats = parseInt(document.getElementById('meal-fats').value);

    if (mealName && mealCalories) {
        // Add meal data to arrays
        meals.push({
            name: mealName,
            calories: mealCalories,
            carbs: mealCarbs,
            protein: mealProtein,
            fats: mealFats,
        });

        // Update total values
        totalCalories += mealCalories;
        totalCarbs += mealCarbs;
        totalProtein += mealProtein;
        totalFats += mealFats;

        // Update the daily summary display
        updateSummaryDisplay();
        updateMealList();
        updateProgressBar();

        // Clear input fields
        clearInputFields();
    } else {
        alert("Please enter a meal name and calories.");
    }
});

// Function to update the daily summary display
function updateSummaryDisplay() {
    document.getElementById('total-calories').innerText = totalCalories;
    document.getElementById('total-carbs').innerText = totalCarbs;
    document.getElementById('total-protein').innerText = totalProtein;
    document.getElementById('total-fats').innerText = totalFats;
}

// Function to update the meal list display
function updateMealList() {
    const mealList = document.getElementById('meal-list');
    mealList.innerHTML = ""; // Clear current meal list
    meals.forEach((meal, index) => {
        const li = document.createElement('li');
        li.className = 'collection-item';
        
        // Create meal info container
        const mealInfo = document.createElement('span');
        mealInfo.innerText = `${meal.name}: ${meal.calories} kcal, ${meal.carbs} g carbs, ${meal.protein} g protein, ${meal.fats} g fats`;
        li.appendChild(mealInfo);

        // Create delete button container
        const deleteBtnContainer = document.createElement('div');
        deleteBtnContainer.style.float = 'right'; // Float delete button to the right

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.className = 'btn red';
        deleteBtn.onclick = () => removeMeal(index); // Pass index to removeMeal

        deleteBtnContainer.appendChild(deleteBtn);
        li.appendChild(deleteBtnContainer);
        
        mealList.appendChild(li);
    });
}


// Function to remove a meal
function removeMeal(index) {
    const mealToRemove = meals[index];
    totalCalories -= mealToRemove.calories;
    totalCarbs -= mealToRemove.carbs;
    totalProtein -= mealToRemove.protein;
    totalFats -= mealToRemove.fats;

    // Remove meal from the array
    meals.splice(index, 1);

    // Update the daily summary display
    updateSummaryDisplay();
    updateMealList();
    updateProgressBar();
}

// Function to clear input fields after adding a meal
function clearInputFields() {
    document.getElementById('meal-name').value = "";
    document.getElementById('meal-calories').value = "";
    document.getElementById('meal-carbs').value = "";
    document.getElementById('meal-protein').value = "";
    document.getElementById('meal-fats').value = "";
}

// Initialize the calorie goal display on page load
updateCalorieGoalDisplay();
