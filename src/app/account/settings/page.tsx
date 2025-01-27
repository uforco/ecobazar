import React from 'react'
import ProfileSettings from '@/pages/acount/account_settings/profileSettings/ProfileSettings';
import Billing_Addres from '@/pages/acount/account_settings/Billing_Addres/Billing_Addres';
import Change_Password from '@/pages/acount/account_settings/change_Password_section/Change_Password';

interface Props {}

function Page(props: Props) {
    const {} = props
    return (
        <div>
            <ProfileSettings></ProfileSettings>
            <Billing_Addres></Billing_Addres>
            <Change_Password></Change_Password>
        </div>
    )
}

export default Page
