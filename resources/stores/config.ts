import create from 'zustand'
import icons from '$/stores/icons'
import type { IconType } from 'react-icons'
import type { AppProps } from '$/types/page'

type State = {
    config: AppProps
    icons: Record<string, IconType>
    update: (option: keyof AppProps, value: any) => void
    set: (config: AppProps) => void
}

export const useConfig = create<State>((setState) => ({
    config: {} as any,
    icons,

    update: (option, value) => {
        setState((state) => {
            state.config[option] = value
            console.log(state.config[option])

            return state
        })
    },

    set: (config) => {
        setState((state) => {
            state.config = config

            return state
        })
    }
}))
