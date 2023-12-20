export type MenuCardParams = {
    id?: String,
    title : String,
    imageUrl : String,
    price : String,
    rating : number,
    description? : String,
    variation? : [],
    quantity? : number
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
    text? : String,
    onPress? : Function,
    containerStyle? : object,
    textStyle? : object,
    disabled? : boolean,
    loading? : boolean,
    children? : any
}