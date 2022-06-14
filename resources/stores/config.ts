import create from 'zustand'
import type { AppProps } from '@/types/page'

type State = {
    config: Partial<AppProps>
    update: (option: keyof AppProps, value: string) => void
    set: (config: AppProps) => void
}

export const useConfig = create<State>((setState) => ({
    config: {},

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
