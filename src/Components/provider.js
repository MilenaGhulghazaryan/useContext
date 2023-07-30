import React, { createContext, useContext, useState } from "react";

const PostContext = createContext({})

const PostProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    return (
        <PostContext.Provider value={{ count, setCount }}>
            {children}
        </PostContext.Provider>
    )
}
const CounterResult = () => {
    return useContext(PostContext)
}
export { PostProvider, CounterResult as counterResult }

