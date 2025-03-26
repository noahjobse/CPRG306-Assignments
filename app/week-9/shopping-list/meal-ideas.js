import { useState, useEffect } from "react";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMealIdeas = async () => {
      if (!ingredient) return;
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    };

    fetchMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-[#BDE0FE] rounded-lg shadow-md p-6 max-w-md">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
        Meal Ideas for {ingredient}
      </h2>
      <ul className="list-none space-y-2">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="bg-white p-3 rounded-md shadow-sm text-lg font-medium text-gray-800"
          >
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
