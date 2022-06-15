import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

export function Widget(){
  {
    /* 
      const [isWidgetOpen, setIsWidgetOpen] = useState(false)
      
      Pode ser feito assim quando tem o else 
      { isWidgetOpen ? <p>Hello world</p> : null} 
      
      Mas caso seja somente uma resposta pode ser feito assim
      { isWidgetOpen && <p>Hello world</p> } 

      Além disso deve ser colocado a function dentro do onClick 

      function toogleWidgetVisibility(){
        setIsWidgetOpen(!isWidgetOpen)
      }
    */
  } 
   
  
  return (    
    <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
      
      <Popover.Panel>
        <WidgetForm/>
      </Popover.Panel>
      

      <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
        <ChatTeardropDots className='w-6 h-6'/>

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button>

      
    </Popover>
    
  )
}