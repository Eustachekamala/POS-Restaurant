import PropTypes from 'prop-types'

const Modal = ({title, onClose, isOpen, children}) => {
  if(!isOpen) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-[#1a1a1a] shadow-lg w-full max-w-lg mx-4 rounded-lg'>
        <div className='flex items-center justify-between px-6 py-4 border-b border-[#333]'>
          <h2 className='text-xl text-[#f5f5f5] font-semibold '>{title}</h2>
          <button className='text-gray-200 bg-red-700 px-2 rounded-full' onClick={onClose}>
            &times;
          </button>
        </div>
        <div className='p-6'>
          {children}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  title : PropTypes.string,
  onClose : PropTypes.func,
  isOpen : PropTypes.bool,
  children : PropTypes.array
}

export default Modal
