
import { Player } from '@lottiefiles/react-lottie-player';
export const LoadingScreen = () => {
    return (
        <div className='h-screen w-screen bg-white absolute z-50 flex justify-center p-10'>

            <Player
                style={{ width: '100%', height: '100%' }}
                autoplay
                loop
                speed='1'
                mode="normal"
                src={'https://assets1.lottiefiles.com/private_files/lf30_lndg7fhf.json'}

            >

            </Player>
        </div>
    )
}
