import Modal from './Modal'

export default function Table() {
  return (
    <div className='w-full flex box-border overflow-auto  h-[210px] scrollBar p-2'>
    <table className="table-auto w-full ">
    <thead>
        <tr className='text-sm  whitespace-nowrap '>
          <th>Başlık</th>
          <th>Açıklama</th>
          <th>Hizmet</th>
          <th>Tarih</th>
          <th>Yönet</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-sm'>
          <td>Harika tasarım!</td>
          <td>Kurumsal İnternet Site Yazılımı</td>
          <td>Cloud Cluster</td>
          <td>8.12.2020</td>
         <td> <span className='iconEye'><Modal/></span></td>
        </tr>
        <tr className='text-sm'>
          <td>Harika tasarım!</td>
          <td>Kurumsal İnternet Site Yazılımı</td>
          <td>Cloud Cluster</td>
          <td>8.12.2020</td>
         <td> <span className='iconEye'><Modal/></span></td>
        </tr>
        <tr className='text-sm'>
          <td>Harika tasarım!</td>
          <td>Kurumsal İnternet Site Yazılımı</td>
          <td>Cloud Cluster</td>
          <td>8.12.2020</td>
         <td> <span className='iconEye'><Modal/></span></td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}
