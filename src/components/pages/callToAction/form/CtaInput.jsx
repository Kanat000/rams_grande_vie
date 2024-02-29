import React from 'react';
import InputMask from "react-input-mask";

const CtaInput = (props) => {

    const {name, isRequired,
        placeholder, register, maskOptions,
        pattern, autoComplete, isError} = props

    return (
        <div className={'vie-cta-input-container'}>
            {maskOptions ?
                <InputMask {...register(name, {required: isRequired})} mask={maskOptions.mask}
                           id={`rs-form-${name}-input`}
                           placeholder={placeholder}
                           style={isError ? {borderBottomColor: 'red'} : {}} />

                : <input type="text" placeholder={placeholder} id={`rs-form-${name}-input`}
                         {...register(name, {required: isRequired, pattern: pattern})}
                         style={isError ? {borderBottomColor: 'red'} : {}}/>

            }
        </div>
    );
};

export default CtaInput;