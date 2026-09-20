import { useEffect } from 'react'
import type { ComponentType } from 'react'

function withLogger<P extends object>(
  WrappedComponent: ComponentType<P>,
  componentName: string = WrappedComponent.displayName ?? WrappedComponent.name,
) {
  function ComponentWithLogger(props: P) {
    useEffect(() => {
      console.log(`[withLogger] ${componentName} mounted`)

      // The cleanup function runs when the component unmounts
      return () => {
        console.log(`[withLogger] ${componentName} unmounted`)
      }
    }, [])

    return <WrappedComponent {...props} />
  }

  ComponentWithLogger.displayName = `withLogger(${componentName})`

  return ComponentWithLogger
}

export default withLogger
