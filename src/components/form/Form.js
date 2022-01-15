import {useState} from "react";

const Form = ({onSetFilter}) => {
    const [filter, setFilter] = useState({name: "", username: "", email: ""});

    const onFieldChange = (e) => {
        let newFilter = {...filter, [e.target.name]: e.target.value};

        setFilter(newFilter);
        onSetFilter(newFilter);
    }

    return (
        <div>
            <form>
                <label>Name: <input type="text" name={"name"} onChange={onFieldChange}/></label>
                <label>Username: <input type="text" name={"username"} onChange={onFieldChange}/></label>
                <label>Email: <input type="text" name={"email"} onChange={onFieldChange}/></label>
            </form>
        </div>
    );
};

export default Form;
