export const withLogging = (Component) => {
    return function ComponentwithLogging() {
        
        useEffect(() => {
            console.log("Componente agregado a la DOM")
        }, [])
        return <Component />
    }};
