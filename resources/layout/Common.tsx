import { useConfig } from '@/stores/config'
import type { PageProps } from '@/types/page'

export default function Common({ appName, lang, user, message }: PageProps) {
    const setConfig = useConfig(state => state.set)
    setConfig({ appName, lang, user, message })

    return (
        <></>
    )
}