import { UserButton } from "@clerk/nextjs";
const Home = () => {
    return (
        <>
            Admin
            123
            <UserButton afterSignOutUrl="/" />
        </>
    );
}

export default Home;