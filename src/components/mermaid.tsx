"use client"
import { useEffect, useId, useState } from 'react'

// mermaid non e' sicuro con render concorrenti: piu' diagrammi nella stessa pagina
// vanno disegnati uno alla volta
let queue: Promise<unknown> = Promise.resolve()

export const Mermaid = ({ chart }: { chart: string }) => {
    const id = `mermaid-${useId().replace(/:/g, '')}`
    const [svg, setSvg] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        let cancelled = false
        // Import dinamico: mermaid pesa parecchio e serve solo ai post che lo usano
        queue = queue.then(async () => {
            try {
                const { default: mermaid } = await import('mermaid')
                mermaid.initialize({ startOnLoad: false, theme: 'dark', securityLevel: 'strict' })
                const { svg } = await mermaid.render(id, chart)
                if (!cancelled) setSvg(svg)
            } catch (e) {
                console.error('mermaid', e)
                if (!cancelled) setError(String(e))
            }
        })
        return () => { cancelled = true }
    }, [chart, id])

    if (error) return <pre className="text-red-400">{`Mermaid error: ${error}`}</pre>

    return <div className="my-8 flex justify-center overflow-x-auto" dangerouslySetInnerHTML={{ __html: svg }} />
}
