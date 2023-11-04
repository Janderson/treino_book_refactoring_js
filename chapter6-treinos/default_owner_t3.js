let defaultOwner = {
    firstName: "Martin",
    lastName: "Fowler"
}

function getDefaultOwner(){
    return defaultOwner;
}

function setDefaultOwner(owner){
    defaultOwner = owner;
}

module.exports = {getDefaultOwner, setDefaultOwner}