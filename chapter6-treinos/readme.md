So I can extract the first-phase code its own function, returning own data


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

7. create own function calculatePriceData
8. move logic to generate priceData to calculatePriceData
9. remove old logic from priceOrder method