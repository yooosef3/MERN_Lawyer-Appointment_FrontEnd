"use client"

import { Provider } from "react-redux";
import store from "@/redux/store";

type ChildrenType = {
    children: React.ReactNode
}

const StoreProvider = ({children}:ChildrenType) => {
    return (
        <Provider store={store} >
            {children}
        </Provider>
    );
};

export default StoreProvider;