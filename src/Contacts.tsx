import { Mail, Instagram, Phone, Music2, Facebook } from 'lucide-react'

const Contacts = () => {
    return (
        <div className="courses-section m-16">
            <h1 className="text-5xl font-bold">Контакти</h1>
            <div style={{ width: '100%', maxWidth: 1700, height: 450, marginTop: '100px', border: '8px solid #ffffff' }} className='mx-auto'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4889.653260570309!2d23.541785744014824!3d43.221962966305725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ab193243171c8f%3A0x84950e0195a703e!2z0KPRh9C10LHQtdC9INGG0LXQvdGC0YrRgCDQlNCQ0J3QmCDQlNCg0JDQmNCSINCV0J7QntCU!5e0!3m2!1sbg!2sbg!4v1751614648251!5m2!1sbg!2sbg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>
            <div className="flex flex-row flex-wrap gap-6 mb-8 mt-8 items-center justify-center mt-16">
                <div className="flex items-center gap-2 text-lg">
                    <Mail size={22} />
                    <a href="mailto:danidrive555@gmail.com"><span>danidrive555@gmail.com</span></a>
                </div>
                <div className="flex items-center gap-2 text-lg">
                    <Phone size={22} />
                    <a href="tel:+359887412826"><span>+359 887 412 826</span></a>
                </div>
                <div className="flex items-center gap-2 text-lg">
                    <Instagram size={22} />
                    <a href="https://www.instagram.com/dani.drive.vratsa/" target="_blank" rel="noopener noreferrer"><span>@dani.drive.vratsa</span></a>
                </div>
                <div className="flex items-center gap-2 text-lg">
                    <Music2 size={22} />
                    <a href="https://www.tiktok.com/@danidrivevratsa" target="_blank" rel="noopener noreferrer"><span>@danidrivevratsa</span></a>
                </div>
                <div className="flex items-center gap-2 text-lg">
                    <Facebook size={22} />
                    <a href="https://www.facebook.com/p/%D0%94%D0%90%D0%9D%D0%98-%D0%94%D0%A0%D0%90%D0%98%D0%92-%D0%95%D0%9E%D0%9E%D0%94-100040105578358/" target="_blank" rel="noopener noreferrer">ДАНИ ДРАИВ ЕООД</a>
                </div>

            </div>

        </div>
    )
}

export default Contacts
