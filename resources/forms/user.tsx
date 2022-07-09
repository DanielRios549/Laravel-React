import type { User } from '$/types/user'

export default function UserForm(props?: Partial<User>) {
    const { id, name, email } = props || {}

    return (
        <fieldset>
            <legend><h2>User Info</h2></legend>
            {id && <input type="text" name="id" value={id} readOnly hidden/>}

            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" defaultValue={name}/>

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" defaultValue={email}/>

            <label htmlFor="email">Password:</label>
            <input type="password" name="password" id="password"/>
        </fieldset>
    )
}
