# Treino - SPLIT PHASE
## Treino - SPLIT PHASE - Explanation
So I can extract the first-phase code its own function, returning own data

## Treino - SPLIT PHASE Steps

1. extract function, second phase of code, new function ==> applyShipping
2. create a itermidiate datastructure priceData
3. move basePrice to priceData
4. remove parameter basePrice of applyShipping
5. repeat step 3+4 to discount
6. repeat step 3+4 to quantity

7. create own function calculatePriceData
8. move logic to generate priceData to calculatePriceData
9. remove old logic from priceOrder method

## Treino 2 - split phase

1. extract function, second phase of code, new function ==> applyShipping
2. create a itermidiate datastructure priceData
3. move basePrice to priceData
4. remove parameter basePrice of applyShipping
5. repeat same last 2 steps to discount+ quantity

## Treino 3 - split phase (split_phase_example1_t3)

1. extract function, second phase of code, new function ==> applyShipping [OK]
2. create a itermidiate datastructure priceData [OK]
3. move basePrice to priceData [OK]
4. remove parameter basePrice of applyShipping [OK]
5. repeat step 3+4 to discount [OK]
6. repeat step 3+4 to quantity [OK]

7. create own function calculatePriceData [OK]
8. move logic to generate priceData to calculatePriceData [OK]
9. remove old logic from priceOrder method [OK]


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
7. modify getDefaultOwner to default_owner module

