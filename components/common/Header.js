import Navigation from "./Navigation";
import BoxedLayout from '../BoxedLayout'

const Header = () => {
    return (
        <header className="w-full shadow-md bg-white dark:bg-gray-900 dark:shadow-black-100">
            <BoxedLayout>
                <Navigation />
            </BoxedLayout>
        </header>
    )
}

export default Header;