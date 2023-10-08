let defaultOwner = {
    firstName: "Martin",
    lastName: "Fowler"}

export function getDefaultOwner(){
    return defaultOwner;
};
export function setDefaultOwner(owner){
    defaultOwner = owner;
}
