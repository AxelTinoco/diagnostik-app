import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';


export const JournalEntry = ({id,body,date,title,url}) => {

    const noteDate = moment(date);
    const dispatch = useDispatch()
    
    const handleEntryActive = () => {
         
        dispatch(activeNote(id,{body,title,url,date}))

    }


    return (
        <div 
        className="flex bg-white my-3 rounded-lg md:flex-row flex-col relative w-full"
        onClick={handleEntryActive}
        >
            {
                url && 
                (<div className="flex w-full md:w-[30%] ">
                <img src={url} alt="" className='flex rounded-l-lg object-cover' />
                 </div>)
            }
            <div className="md:w-[40%] flex p-1  w-full text-xs flex-col">
                <p className='font-bold'>{title}</p>
                <p>{body}</p>
            </div>
            <div className='flex flex-col w-[40%] md:relative absolute 
            right-0 items-center justify-center md:bg-white bg-black text-white md:text-black bg-opacity-30'>
                <p className='text-xl font-bold'>{noteDate.format('dddd')}</p>
                <p className='font-light'>{noteDate.format('Do')}</p>
            </div>

        </div>
    )
}
