import React from 'react'
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import AdditionalInfo from '@/pages/contact/contactSection/additionalInfo';
import ContactFrom from '@/pages/contact/contactSection/ContactFrom';


interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <div>
            <div className=' py-10 bg-gray-100 ' >
                <MaxWidthControls>
                    <div className=' flex flex-col-reverse xl:flex-row justify-between m-5 xl:m-0  ' >
                        <div className=' xl:w-[312px] overflow-hidden border p-4 flex flex-row xl:flex-col justify-around xl:justify-center text-xs sm:text-base bg-white ' >
                            <AdditionalInfo></AdditionalInfo>
                        </div>
                        <div className=" w-full xl:w-[984px] border p-10 mb-5 xl:mb-0 bg-white  " >
                            <ContactFrom></ContactFrom>
                        </div>
                    </div>
                </MaxWidthControls>
            </div>
            <div>
                <iframe className=' w-full ' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29193.958226549777!2d90.38573934989522!3d23.84544023272666!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1737556831071!5m2!1sen!2sbd" width="600" height="400"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Page
