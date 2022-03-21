import { Player } from '@lottiefiles/react-lottie-player';

export const NothingSelected = () => {
    return (
        <div className='flex items-center justify-center w-full'>
            
<div className='w-1/2 items-center text-center'>
    <h2 className='text-3xl'>Selecciona una cita</h2>
    <br />
    <p className='text-3xl'>O pon tus sintomas!</p>
<Player
        style={{ width: '100%' ,height : '100%' }}
        autoplay
        loop
        speed='1'
        mode="normal"
        src={'https://assets5.lottiefiles.com/packages/lf20_42B8LS.json'}

    >

    </Player>
</div>
   
        </div>
    )
}
