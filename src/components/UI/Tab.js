import React, { useState } from 'react'
import Announcements from './Announcements'
import Acount from './Acount'
import Zoom from 'react-reveal/Zoom';

export default function Tab() {
  const [toggles, setToggles] = useState(1)
  const toggleTab = (index) => {
    setToggles(index)
  }
  return (
    <div className='flex w-full   gap-3'>
      <div className='flex flex-col gap-3  scrollBar  w-full'>
        <div className='flex px-2 rounded-tl rounded-tr w-full gap-4 border p-2  items-center overflow-x-auto  scrollBar'>
          <button onClick={() => toggleTab(1)} className={toggles === 1 ? 'boxActiveBorder' : 'boxBorderNone'}>Genel Bakış</button>
          <button onClick={() => toggleTab(2)} className={toggles === 2 ? 'boxActiveBorder' : 'boxBorderNone'}>Muhasebe</button>
          <button onClick={() => toggleTab(3)} className={toggles === 3 ? 'boxActiveBorder' : 'boxBorderNone'}>Hesabım</button>
          <button onClick={() => toggleTab(4)} className={toggles === 4 ? 'boxActiveBorder' : 'boxBorderNone'}>İşlem Geçmişi</button>
          <button onClick={() => toggleTab(5)} className={toggles === 5 ? 'boxActiveBorder' : 'boxBorderNone'}>Dökümanlar</button>
        </div>
        <div className='w-full flex   relative'>
          <div className={`boxActive  scrollBar  overflow-auto ${toggles === 1 ? 'tabItem' : 'tabItemNone'}`}>
            <div className='grid w-full grid-col-1 lg:grid-cols-2 gap-3 '>
            <Zoom left>
              <Announcements />
              </Zoom>
              <Zoom right>
              <Acount />
              </Zoom>
              <Zoom left>
              <Announcements />
              </Zoom>
            </div>
          </div>
          <div className={`boxActive   scrollBar  overflow-auto ${toggles === 2 ? 'tabItem ' : 'tabItemNone'}`}>
            <div className='grid grid-col-1 h-fit w-full  gap-3 '>
              <div className='border w-[50%] h-fit rounded flex'>
                <input placeholder='Ara' type='text' className='outline-none w-full border-white border rounded-bl rounded-tl p-2 text-gray-600' />
                <button className='searchBtn'>Ara</button>
              </div>
              <Acount />
            </div>

          </div>
          <div className={`boxActive ${toggles === 3 ? 'tabItem ' : 'tabItemNone'}`}>
            <h1 className='changeText'>Hesabım</h1>
          </div>
          <div className={`boxActive ${toggles === 4 ? 'tabItem ' : 'tabItemNone'}`}>
            <h1 className='changeText'>İşlem Geçmişi</h1>
          </div>
          <div className={`boxActive ${toggles === 5 ? 'tabItem' : 'tabItemNone'}`}>
            <h1 className='changeText'>Dökümanlar</h1>
          </div>
        </div>

      </div>
    </div>
  )
}
