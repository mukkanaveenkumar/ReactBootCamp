import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    const {status, statusText} = useRouteError();
    return (
        <div>
            <h1>OOPS!!!</h1>
            <h2>Something went wrong {err.data+ " " + "Status Text:"+ statusText}</h2>
        </div>
    );
}

export default Error;