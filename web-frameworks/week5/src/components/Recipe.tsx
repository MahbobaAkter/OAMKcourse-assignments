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

interface IRecipeProps {
  recipeData: IRecipe;
}

const Recipe = ({ recipeData }: IRecipeProps) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px 0",
        width: "400px",
        background: "#fafafa",
      }}
    >
      <h4>{recipeData.name}</h4>
      <p>
        Preparation: {recipeData.prepTimeMinutes} min | Cooking:{" "}
        {recipeData.cookTimeMinutes} min
      </p>
      <h5>Ingredients</h5>
      <ul>
        {recipeData.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h5>Instructions</h5>
      <ol>
        {recipeData.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
