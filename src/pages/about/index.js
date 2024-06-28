import {useContext, useEffect} from "react";
import {StorageContext} from "../../hooks/StorageHook";

const About = () => {
    const storage = useContext(StorageContext)

    useEffect(() => {
        // storage.setItem('user', 'davin')
        // storage.setItem('user', 'davin', 'localStorage')
    }, [storage]);
    return (
        <>
            About page
        </>
    )
}

export default About