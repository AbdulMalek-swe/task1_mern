import { useRouter } from "next/router";

 
const UserForm = () => {
    const route = useRouter();
    const forms = route.pathname.substring(route.pathname.lastIndexOf("/")+1);
    return (
        <div>
            this is  {forms} form
        </div>
    );
};

export default UserForm;