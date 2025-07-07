import singerImage from '../../assets/images/bao_anh.jpg'

const SongInfo = () => {
  return (
    <div className="song-info flex items-center">
      <span className='text-blue-500 text-sm font-semibold mr-2'>1</span>
      <img src={singerImage} alt="singer's image" className="w-[35px] h-[35px] mr-2"/>
      <div className='flex flex-col'>
        <span className="text-sm font-bold text-gray-500">Song xa anh chang de dang</span>
        <span className="text-xs font-bold text-gray-500">Bao Anh</span>
      </div>
    </div>
  )
}

export default SongInfo;