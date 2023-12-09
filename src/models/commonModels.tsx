export type MenuCardParams = {
    id?: String,
    title : String,
    imageUrl : String,
    price : String,
    rating : number,
    description? : String,
}
export type CheckoutCardParams = {
    id?: String,
    title : String,
    imageUrl : String,
    price : String,
    quantity : number,
    description? : String,
}

export type ButtonProps = {
    text : String,
    action? : Function,
    containerStyle? : object,
    textStyle? : object,
    disabled? : boolean
}