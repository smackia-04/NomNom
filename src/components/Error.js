
import { useRouteError } from "react-router";

const ErrorPath = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <>
            <h1>Oops!!</h1>
            <h2>{err.status + ":" + err.statusText}</h2>
        </>
    )
}
export default ErrorPath;