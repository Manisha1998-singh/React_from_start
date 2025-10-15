import "./App.css";
//import Button from "@mui/material/Button";
import { Box, Grid, Button } from "@mui/material";

function App() {
  const recipes = [
    {
      id: "greek-salad",
      name: "Greek Salad",
      ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
    },
    {
      id: "hawaiian-pizza",
      name: "Hawaiian Pizza",
      ingredients: [
        "pizza crust",
        "pizza sauce",
        "mozzarella",
        "ham",
        "pineapple",
      ],
    },
    {
      id: "hummus",
      name: "Hummus",
      ingredients: [
        "chickpeas",
        "olive oil",
        "garlic cloves",
        "lemon",
        "tahini",
      ],
    },
  ];

  return (
    <>
      <div className="">
        <Box p={2} bgcolor="lightgray">
          <Grid container spacing={2}>
            <Grid item xs={10}>
              {recipes.map((res) => (
                <div key={res.name}>
                  <h1>{res.name}</h1>
                  <ul>
                    {res.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default App;
