interface IRecipeTagProps {
  tagName: string;
  onSelectTag: (tagName: string) => void;
}

const RecipeTag = ({ tagName, onSelectTag }: IRecipeTagProps) => {
  return (
    <div
      onClick={() => onSelectTag(tagName)}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "5px 0",
        cursor: "pointer",
        width: "300px",
      }}
    >
      {tagName}
    </div>
  );
};

export default RecipeTag;
