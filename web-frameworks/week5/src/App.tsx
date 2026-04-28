import { useEffect, useState } from "react";
import RecipeTagList from "./components/RecipeTagList";
import RecipeList from "./components/RecipeList";

interface IRecipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

const App = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Load tags from API when app starts
  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then((res) => res.json())
      .then((data) => setTags(data))
      .catch((err) => console.error("Error fetching tags:", err));
  }, []);

  const handleSelectTag = (tagName: string) => {
    setSelectedTag(tagName);
    fetch(`https://dummyjson.com/recipes/tag/${tagName}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes))
      .catch((err) => console.error("Error fetching recipes:", err));
  };

  const handleGoBack = () => {
    setSelectedTag(null);
    setRecipes([]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>ACME Recipe O'Master</h1>

      {!selectedTag ? (
        <>
          <h3>Choose a tag below</h3>
          <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
        </>
      ) : (
        <>
          <h3>Recipes for {selectedTag}</h3>
          <button onClick={handleGoBack}>Back</button>
          <RecipeList recipes={recipes} />
        </>
      )}
    </div>
  );
};

export default App;
