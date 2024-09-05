import React from "react"
import IngredientTable from "./IngredientTable"
import {Grid2} from "@mui/material"
import {IngredientCategoryTable} from "./IngredientCategoryTable"

export const Ingredient =() => {
    return(
        <div className="px-2">
            <Grid2 container spacing={2}>

                <Grid2 item xs={12} lg={8}>
                <IngredientTable/>
                </Grid2>
                <Grid2 item xs={12} lg={4}>
                <IngredientCategoryTable/>
                </Grid2>

            </Grid2>
            
        </div>

    )
}
export default Ingredient