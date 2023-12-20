import { create } from 'zustand';
import { CheckoutCardParams, MenuCardParams } from '../models/commonModels';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const useCartStore = create(persist((set,get : any) => ({
    cart: [],
    subTotal : 0,
    addToCart: async (item : MenuCardParams) => {
        let cartState =  get().cart;
        const index = cartState.findIndex(val => val.id == item.id);
        if(index > -1){
            cartState[index] ={id : item.id,description : item.description, title : item.title,imageUrl : item.imageUrl,price : item.price, quantity : cartState[index].quantity + 1}
        }else{
            cartState.push({id : item.id,description : item.description, title : item.title,imageUrl : item.imageUrl,price : item.price, quantity : item.quantity ? item.quantity : 1})
        }
        set((state: any) => ({ cart: [...cartState], subTotal : state.subTotal + parseFloat(item.price) }))
    },
    removeFromCart : async (id : String) => {
        let cartState =  get().cart;
        const index = cartState.findIndex((val : CheckoutCardParams) => val.id == id);
        const deductionAmount = parseFloat(cartState[index].price) * cartState[index].quantity
        cartState.splice(index,1)
        set((state: any) => ({ cart: [...cartState],subTotal : state.subTotal - deductionAmount}))
    },
    clearCart: () => set({ cart: [],subTotal : 0 }),
    reduceQuantity : async (id : String) => {
        let cartState =  get().cart;
        const index = cartState.findIndex((val : CheckoutCardParams) => val.id == id);
        if(index > -1) cartState[index] = {...cartState[index],quantity : cartState[index].quantity - 1}
        else return null;
        set((state: any) => ({ cart: [...cartState], subTotal : state.subTotal - parseFloat(cartState[index].price) }))
    },
    addQuantity : async (id : String) => {
        let cartState =  get().cart;
        const index = cartState.findIndex((val : CheckoutCardParams) => val.id == id);
        if(index > -1) cartState[index] = {...cartState[index],quantity : cartState[index].quantity + 1}
        else return null;
        set((state: any) => ({ cart: [...cartState],subTotal : state.subTotal + parseFloat(cartState[index].price) }))
    },
}),
{
    name: 'app-storage', // unique name
    storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    onRehydrateStorage: () => (state : any) => {
      state.setHasHydrated(true)
    }
  }
))