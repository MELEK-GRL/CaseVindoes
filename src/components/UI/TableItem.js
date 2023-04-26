import Modal from './Modal'

export default function TableItem() {
    return (
        <div className='w-full flex h-[210px] overflow-x- box-border  scrollBar p-2'>
            <table className="table-auto w-full ">
                <thead>
                    <tr className='text-sm  whitespace-nowrap '>
                        <th>Faturalar</th>
                        <th>Fatura Tarihi</th>
                        <th>Son Ödeme</th>
                        <th>Tutar</th>
                        <th>Durum</th>
                        <th>Yönet</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-sm'>
                        <td>04.10.2022</td>
                        <td>04.10.2022</td>
                        <td>54.500,00 ₺</td>
                        <td>8.12.2020</td>
                        <td>  <span className='bg-red-300  text-red-800 tableText'>Geçikmiş</span></td>
                        <td><span className='iconEye'><Modal /></span></td>
                    </tr>
                    <tr className='text-sm'>
                        <td>04.10.2022</td>
                        <td>04.10.2022</td>
                        <td>54.500,00 ₺</td>
                        <td>8.12.2020</td>
                        <td><span className='bg-green-300 text-green-800 tableText'>Ödendi</span></td>
                        <td><span className='iconEye'><Modal /></span></td>
                    </tr>
                    <tr className='text-sm'>
                        <td>04.10.2022</td>
                        <td>04.10.2022</td>
                        <td>54.500,00 ₺</td>
                        <td>8.12.2020</td>
                        <td><span className=' bg-yellow-300 text-yellow-800 tableText'>Bekliyor</span></td>
                        <td><span className='iconEye'><Modal /></span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
