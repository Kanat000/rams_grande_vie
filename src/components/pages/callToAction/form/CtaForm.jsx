import React from 'react';
import CtaInput from "./CtaInput.jsx";
import {useForm} from "react-hook-form";
import {checkPhoneNumberPrefix} from "../../../../utils/checkPhoneNumberPrefix.js";
import '../scss/ctaForm.scss'

const CtaForm = () => {
    const {register, handleSubmit,
        control, setError,clearErrors,
        formState:{errors}} = useForm({mode:'onChange', reValidateMode:'onChange'})

    const POST_DATA = (data) => {
        if (checkPhoneNumberPrefix(data.phone)) {
            clearErrors('phone')
            console.log(data)
        }
        else setError('phone', {type:'Not Match', message: 'Prefix is wrong'})
    }

    return (
        <form className={'vie-cta-form-container'}>
                <CtaInput register={register} name={'firstName'} placeholder={'Введите имя'} isError={errors.firstName} isRequired={true}/>

                <CtaInput register={register} name={'phone'} placeholder={'+7'} maskOptions={{mask: '+7 (799) 999-99-99', control: control}}
                          isError={errors.phone} isRequired={true}/>

                <div className={'cta-confirm'}>
                    <p>Нажимая Вы подтверждаете свое согласие с нашей</p>
                    <p>политикой конфиденциальности.</p>
                </div>
                <div className={'cta-action'}>
                    <button type={"button"} onClick={handleSubmit(POST_DATA)}>
                        Отправить
                    </button>
                </div>
        </form>
    );
};

export default CtaForm;