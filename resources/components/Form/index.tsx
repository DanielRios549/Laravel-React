import React, { Children, useEffect, useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import { Formik, FormikConfig } from 'formik'
import * as Yup from 'yup'
import { useConfig } from '$/stores/config'
import Button from '$/components/Button'
import Message from '$/components/Message'
import style from './style.module.scss'

type Props = {
    name?: string
    validate: any
    action: string
    type?: 'add' | 'auth'
    delete?: string
    children: React.ReactNode
    submit?: FormikConfig<any>['onSubmit']
    testid?: string
}

export default function Form(props: Props) {
    const [values, setValues] = useState<any>({})
    const { error, success, form } = useConfig().config.message || {}
    const { url } = usePage()

    // Used in pages where two or more form are displayed
    // At this point, only in login page
    const explicitForm = (url === '/login' && form) ? form === props.name : true

    // TODO: Fix initial values empty

    useEffect(() => {
        Children.forEach(props.children, (child: any) => {
            const elements: any[] = child.props.children || []

            elements.forEach((element) => {
                if (element?.props?.defaultValue) {
                    setValues((state: object) => ({
                        ...state,
                        [element.props.id]: element.props.defaultValue
                    }))
                }
            })
        })
    }, [])

    const schema = Yup.object().shape(props.validate)

    const submit: Props['submit'] = (values, { setSubmitting }) => {
        Inertia.post(props.action || '', values)
        setSubmitting(false)
    }

    const remove = () => {
        const confirmation = window.confirm('Continue? ')

        confirmation && Inertia.delete(props.delete || '')
    }

    return (
        <Formik
            initialValues={values}
            validationSchema={schema}
            onSubmit={props.submit || submit}>

            {({ handleSubmit, isSubmitting }) => (
                <form
                    data-testid={props.testid}
                    className={`${props.type === 'auth' && style.auth} ${style.form}`}
                    action={props.action}
                    method="POST"
                    onSubmit={handleSubmit}>

                    {(!isSubmitting && explicitForm && error) && <Message text={error} type="error"/>}
                    {(!isSubmitting && explicitForm && success) && <Message text={success} type="success"/>}

                    {props.children}

                    <fieldset>
                        {props.delete && <Button type="reset" action={remove}>Delete</Button>}
                        <Button type="submit" disabled={isSubmitting}>{props.name}</Button>
                    </fieldset>
                </form>
            )}
        </Formik>
    )
}
