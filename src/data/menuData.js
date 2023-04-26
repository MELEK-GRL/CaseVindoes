import {TfiWorld} from 'react-icons/tfi'
import {VscLayoutPanelJustify} from 'react-icons/vsc'
import {MdWeb} from 'react-icons/md'
import {TbPresentation} from 'react-icons/tb'
import {MdCloudUpload} from 'react-icons/md'
import {HiComputerDesktop} from 'react-icons/hi2'
import {RiComputerFill} from 'react-icons/ri'
import {BsCameraReelsFill} from 'react-icons/bs'
import {BiSupport} from 'react-icons/bi'
import { IoIosNotifications } from 'react-icons/io'
const menuData=[
    {
        id:1,
        display:'Gösterge Paneli',
        icon:<VscLayoutPanelJustify size={20}/>,
        path:'/'
    },
    {
        id:2,
        display:'Alan Adı',
        icon:<TfiWorld size={20}/>,
        path:'/alan-adlari'
    },
    {
        id:3,
        display:'Web Hosting',
        icon:<MdWeb size={20}/>,
        path:'/web-hosting-listeleme'
    },
    {
        id:4,
        display:'Bulut Sunucu',
        icon:<TbPresentation size={20}/>,
        path:'/cloud-listeleme'
    },
    {
        id:5,
        display:'Bulut Yedekleme',
        icon:<MdCloudUpload size={20}/>,
        path:'/bulut-yedekleme-liste'
    },
    {
        id:6,
        display:'Fiziksel Sunucu',
        icon:<HiComputerDesktop size={20}/>,
        path:'/fiziksel-sunucu-liste'
    },
    {
        id:7,
        display:'Barındırma',
        icon:<RiComputerFill size={20}/>,
        path:'/sunucu-barindirma-liste'
    },
    {
        id:8,
        display:'Stream',
        icon:<BsCameraReelsFill size={20}/>,
        path:'/stream-liste'
    },
    {
        id:9,
        display:'Destek Merkezi',
        icon: <BiSupport size={20}/>,
        path:'/destek-merkezi'
    },
    {
        id:10,
        display:'Bildirimler',
        icon: <IoIosNotifications size={20}/>,
        path:'/bildirimler'
    },
    
]

export default menuData
