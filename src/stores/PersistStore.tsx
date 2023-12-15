import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware';
import firestore from '@react-native-firebase/firestore';

import axiosApiInstance from '../services/Axios/index';
import { authParams } from '../models/authModel';


export const PersistStore = create(
  persist(
    (set, get : any) => ({
      onBoardingDone: false,
      _hasHydrated: false,
      token : null,
      config : null,
      setOnboardingStatus: (value : boolean) => set({ onBoardingDone: value}),
      fetchConfig : async () => {
        firestore().collection('configs').doc('contact-info').get().then(val => {
          set({config : val.data()})
        })},
      loginApi : async (value : string) => {
        axiosApiInstance.post("/api/auth/login",{   
          userEmail : "Moiez.ahmed@gmail.com",
          password : "12345678"
      }).then((response)=>{
        console.log('response--->',response.data)
        set({token : response.data.data.token})
      }).catch((err)=>{
        console.error(err)
      })
      },
      registerApi :  async (value : any) => {
        console.log('check--->',value)
        axiosApiInstance.post("/api/auth/register",{
          userEmail : value.userEmail,
          password : value.password
        }).then((response)=>{
        set({token : response.data.data.token})
      }).catch((err)=>{
        console.error(err)
      })
      },
      setHasHydrated: (state : any) => {
        set({
          _hasHydrated: state
        });
      }
    }),
    {
      name: 'app-storage', // unique name
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
      onRehydrateStorage: () => (state : any) => {
        state.setHasHydrated(true)
      }
    }
  )
)