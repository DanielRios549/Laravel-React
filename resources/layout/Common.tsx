import { useConfig } from '@/stores/config'
import type { PageProps } from '@/types/page'

export default function Common(props: PageProps) {
    const setConfig = useConfig(state => state.set)

    const { appName, lang, user, message } = props
    setConfig({ appName, lang, user, message })

    return (
        <></>
    )
}