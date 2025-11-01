"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    if (!ingredient) return [];

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();


    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealResults = await fetchMealIdeas(ingredient);
    setMeals(mealResults);
  };


  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);
}