import Header from './common/Header';
import Footer from './common/Footer';
import BoxedLayout from './BoxedLayout'

const SiteWrapper = ({children}) => {
    return (
        <div className='h-screen flex flex-col justify-between'>
            <Header />
                <main className='mb-auto'>
                    <BoxedLayout>
                        {children}
                    </BoxedLayout>
                </main>
            <Footer />
        </div>
    )
}

export default SiteWrapper;