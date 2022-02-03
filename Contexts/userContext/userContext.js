import { useState, createContext } from 'react'
const SaveUserContext = createContext()
const SaveUserProvider = ({ children }) =>
{

    const [currentUser, setCurrentUser] = useState({})
  
    // const saveUser = async (user) =>
    // {
    //     try {
    //         const res = await fetch('/api/saveUser', {
    //             method: 'POST',
    //             body: JSON.stringify({ user }),
    //             headers: { 'Content-Type': 'application/json' }
    //         })
    //         const savedUser = await res.json()
    //         console.log(JSON.parse(savedUser))
            

    //     } catch (err) {
    //         console.error(err.message)
    //     }
    // }
    
    const getUser = async ({userId }) =>
    {
        try {
            const res = await fetch(`/api/user/${userId}`, user)
            const fetchedUser = await res.json()
            console.log(`This is fetchedUser ${ JSON.parse(fetchedUser) }`)
            setCurrentUser(fetchedUser)

        } catch (err) {
            console.error(err.message)
        }
    }
    return (
        <SaveUserContext.Provider  value={{currentUser, setCurrentUser, getUser }}>
            {children}
        </SaveUserContext.Provider>
    )
}

export {SaveUserContext, SaveUserProvider}