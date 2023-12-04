import { create } from 'zustand';
import firestore from '@react-native-firebase/firestore';
import { foodCardParams } from '../models/commonModels';

export const useMenuStore = create((set) => ({
    menu: {
        loading: undefined,
        data: []
    },
    deals : {
        loading : false,
        data : []
    },
    getMenu: async () => {
        let latestData: any = []
        set((state: any) => ({ menu: { data: [], loading: true } }))

        const usersCollection = firestore().collection('simple-menu');
        // console.log('heheahha-->',(await usersCollection.get()).)
        usersCollection.get().then(val => {
            val.forEach(documentSnapshot => {
                const index = latestData.findIndex((val: any) => val.type == documentSnapshot.data().type)
                if (index > -1) {
                    latestData[index].data.push(documentSnapshot.data())
                } else {
                    latestData.push({ type: documentSnapshot.data().type, data: [documentSnapshot.data()] })
                }

            })
            set((state: any) => ({ menu: { data: latestData, loading: false } }))

        })
        // const response = await getUser();
    },
    getDeals : async () => {
        let deals :foodCardParams[] = []
        set((state: any) => ({ deals: { data: [], loading: true } }))
        firestore().collection('deals').get().then((val)=>{
            val.forEach(snapshot => {
                deals.push(snapshot.data() as foodCardParams)
            })
            set((state: any) => ({ deals: { data: deals, loading: false } }))
        });
    },
    removeMenu: () => set({ menu: [] }),
}))