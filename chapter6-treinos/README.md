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



# Drill Refactoring -  Encapsulate Variable

## Drill Refactoring - Encapsulate Variable - Explanation
Dados são mais dificeis de manipular do que funções, com funções eu consigo mover chamadas enquanto chamo novas funções. Com dados eu não consigo fazer isso


## Drill Refactoring - Encapsulate Variable - Steps
1. create getDefaultOwner + setDefaultOwner [OK]
2. modify setDefaultValue + someModifier to use setDefaultOwner [OK]
3. modify getterExample to use getDefaultOwner [OK]
4. create a default_owner_tX.js [OK]
5. COPY getDefaultOwner + setDefaultOwner + default_onwer data inside [OK]
6. make methods a module [OK]
7. modify setDefaultOwner + getDefaultOwner to default_owner module [OK]
7. remove setDefaultOwner+getDefaultOwner funcition and defaultOwner data of original file [OK]


# Treino - Introduce Parameter Object

## Treino - Introduce Parameter Object - Explanation


## Treino - Introduce Parameter Object - Steps
1. declaring a class to combine data 
2. CHANGE FUNCTION DECLARATION - to add new object  + add null to caller
3. adjust caller to pass correct date range
4. replace usage of parameters. start maximum
5. replace usage of parameters. minimum
6. add a method for a range if value falls within the range (method: contains)
