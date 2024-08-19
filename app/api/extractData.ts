
// what we need>
//name, photo link, tags, 


const extractData = (data) => {
    return data.map(recipe => {
        //Deconstructing/ extracting only needed elementns
        const {
            id,
            vegetarian,
            vegan,
            glutenFree,
            dairyFree,
            title,
            readyInMinutes,
            servings,
            sourceUrl,
            image,
            cuisines,
            dishTypes,
            diets,
            occasions,
            analyzedInstructions,
            extendedIngredients // Extracting the extendedIngredients property
        } = recipe;

        // Formatting and returning the new object with only the required properties
        return {
            id,
            vegetarian,
            vegan,
            glutenFree,
            dairyFree,
            title,
            readyInMinutes,
            servings,
            sourceUrl,
            image,
            cuisines,
            dishTypes,
            diets,
            occasions,
            //extracting only needed step data
            analyzedInstructions: analyzedInstructions.map(instruction => ({
                steps: instruction.steps.map(step => ({
                    number: step.number,
                    step: step.step
                }))
            })),
            //extracting only needed ingredients
            extendedIngredients: extendedIngredients.map(ingredient => ({
                original: ingredient.original
            }))
        };
    });
}

export default extractData
