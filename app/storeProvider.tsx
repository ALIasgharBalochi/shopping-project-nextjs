'use client'
import  { store } from "@/lib/sore";
import { Provider } from "react-redux";


export const ProviderStore = ({children}:{children:React.ReactNode}) => {
    return <Provider store={store}>{children}</Provider>
}