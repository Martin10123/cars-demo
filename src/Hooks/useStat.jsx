import { useState } from 'react'

const useStat = (initialState = false) => {
    const [isOpenModal, setIsOpenModal] = useState(initialState);

     const changeModalOn = () => {
        setIsOpenModal(true);
    };

    const changeModalOff = () => {
        setIsOpenModal(false);
    };

    return {
        open: isOpenModal,
        on: changeModalOn,
        off: changeModalOff
    }
}

export default useStat
