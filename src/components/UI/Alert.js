import Modal from "./Modal"
import Slide from 'react-reveal/Slide';

export default function Alert() {
  return (
    <Slide left>
<div className='flex gap-1 w-full p-3  border rounded items-center'>
        <Modal/>
        <span className='font-semibold text-sm'>Duyurular:</span>
        <span className='text-sm truncate whitespace-nowrap'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the</span>
      
    </div>
    </Slide>
  )
}
