let defaultOwner = {
    firstName: "Martin",
    lastName: "Fowler"
}

function setDefaultOwner(new_onwer){
    defaultOwner = new_onwer;
}

function getDefaultOwner(){
    return defaultOwner;
}

module.exports = {setDefaultOwner, getDefaultOwner}

