# Treino - SPLIT PHASE
## Treino - SPLIT PHASE - Explanation
So I can extract the first-phase code its own function, returning own data

## Treino - SPLIT PHASE - STEPS

1. extract function, second phase of code, new function ==> applyShipping
2. create a itermidiate datastructure priceData
3. move basePrice to priceData
4. remove parameter basePrice of applyShipping
5. repeat step 3+4 to discount
6. repeat step 3+4 to quantity

7. create own function calculatePriceData
8. move logic to generate priceData to calculatePriceData
9. remove old logic from priceOrder method



# Treino - Encapsulate Variable

## Treino - Encapsulate Variable - Explanation


## Treino - Encapsulate Variable - Steps
1. create getDefaultOwner + setDefaultOwner ()
2. modify setDefaultValue + someModifier to use setDefaultOwner ()
3. modify getterExample to use getDefaultOwner
4. create a default_owner.js 
5. move getDefaultOwner + setDefaultOwner + default_onwer data inside
6. make methods a module
7. modify setDefaultOwner to default_owner module
7. remove setDefaultOwner of original file
7. modify getDefaultOwner to default_owner module
7. remove getDefaultOwner+defaultOwner of original file



# Treino - Introduce Parameter Object

## Treino - Introduce Parameter Object - Explanation


## Treino - Introduce Parameter Object - Steps
1. declaring a class to combine data 
2. CHANGE FUNCTION DECLARATION - to add new object  + add null to caller
3. adjust caller to pass correct date range
4. replace usage of parameters. start maximum
5. replace usage of parameters. minimum
6. add a method for a range if value falls within the range (method: contains)
