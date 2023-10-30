import { create } from 'zustand';
import firestore from '@react-native-firebase/firestore';

export const useMenuStore = create((set) => ({
    menu: {
        loading: undefined,
        data: []
    },
    getMenu: async () => {
        let latestData: any = []
        set((state: any) => ({ menu: { data: [], loading: true } }))

        const usersCollection = firestore().collection('simple-menu');
        // console.log('heheahha-->',(await usersCollection.get()).)
        usersCollection.get().then(val => {
            val.forEach(documentSnapshot => {
                //   firestore().doc(`menu/${documentSnapshot.id}`).get().then(value => {
                //     console.log('inside--->>>',value.data())
                //     value.forEach(snapi => {

                //     })
                //   })
                // documentSnapshot.data()

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
    removeMenu: () => set({ menu: [] }),
}))