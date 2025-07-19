import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Piece"]);

  const onAddCategory = (valor) => {
    if (categories.includes(valor)) return;

    setCategories([...categories, valor]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(valor) => onAddCategory(valor)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category}/>
      ))}
    </>
  );
};
