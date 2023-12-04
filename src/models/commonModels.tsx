export type foodCardParams = {
    title : String,
    description : String,
    price : String,
    imageUrl : String,
    rating : any
}

export type MenuCardParams = {
    title : String,
    imageUrl : String,
    price : String,
    rating : number,
    sectionEnd : boolean,
    description? : String,
}