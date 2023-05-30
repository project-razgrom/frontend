'use client'
import { FormEvent, useEffect, useState } from "react"

export const AuthForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [ok, setOk] = useState(false)
    const [user, setUser] = useState(null)
    useEffect(() => {
        (async() => {
            const res = await fetch('/api/login', {method: 'GET'})
            if (!res.ok){
                return;
            }
            const json = await res.json()
            setUser(json)
        })()
    }, [])
    const onSubmit = async (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        setError(null)
        setOk(false)
        const body = {
            Email: username,
            Password: password,
        }
        const res = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
            
        })
        if (!res.ok){
            return setError('бля')
        }
        setOk(true)
        setUser(await res.json())
    }
    console.log(user)

    return (
        <form onSubmit={onSubmit} onClick={e => e.stopPropagation()} className="flex flex-col max-w-sm bg-red-800 rounded-lg ">
            <p className="text-center py-5 px-4 font-bold text-2xl">Авторизация</p>
            <div className="bg-gray-900 px-4 py-5 rounded-b-lg font-bold text-xl flex flex-col gap-3">
                <p >Введите почту</p>
                <input name="email" className="h-11 text-gray-800 px-4" type="email" tabIndex={1} value={username} onChange={(e) => setUsername(e.target.value)}/>
                <p>Введите пароль</p>
                <input name="password" className="h-11 text-gray-800 px-4" type="password" tabIndex={2} value={password} onChange={(e) => setPassword(e.target.value)}/>
                { error && <div className="text-red-800 font-extrabold">бля Э{' ¯\\_(ツ)_/¯'}</div> }
                { ok && <div >с кайфом брат)</div> }
                <button >Залогиниться)</button>
            </div>
        </form>
    )
}

const LogOut = ({resetUser}: {resetUser: () => void}) => {
    const onClick = async () => {
        const fetchData = await fetch('/api/logout', {method:'POST'})
        if (!fetchData.ok) return;
        resetUser()
    }
    
    return (
        <button onClick={onClick}>Log Out</button>
    )
}

export const AuthWidget = () => {
    const [open, setOpen] = useState(false)


    const [user, setUser] = useState<any>(null)
    useEffect(() => {
        (async() => {
            const res = await fetch('/api/login', {method: 'GET'})
            if (!res.ok){
                return;
            }
            const json = await res.json()
            setUser(json)
        })()
    }, [])
    
    return (
        <>
            {
            user ? 
            <>
                <p>{user.email}</p>
                <LogOut resetUser={() => setUser(null)} />
            </> : 
            <><button onClick={() => setOpen(true)}>Log In</button>
                { open && <div className="absolute inset-0 bg-gray-800 opacity-80 backdrop-blur-xl flex flex-col justify-center items-center" onClick={() => setOpen(false)}>
                    <AuthForm />
                 </div> }
            </>
            }
        </>
    )
}